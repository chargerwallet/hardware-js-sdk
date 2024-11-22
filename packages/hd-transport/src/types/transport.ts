import type EventEmitter from 'events';

export type ChargerWalletUsbDeviceInfo = {
  path: string;
};

export type ChargerWalletDeviceInfoWithSession = ChargerWalletUsbDeviceInfo & {
  session?: string | null;
  debugSession?: string | null;
  debug: boolean;
};

export type ChargerWalletMobileDeviceInfo = {
  id: string;
  name: string | null;
};

export type ChargerWalletDeviceInfo = ChargerWalletDeviceInfoWithSession & ChargerWalletMobileDeviceInfo;

export type AcquireInput = {
  path?: string;
  previous?: string | null;
  uuid?: string;
  forceCleanRunPromise?: boolean;
};

export type MessageFromChargerWallet = { type: string; message: Record<string, any> };

type ITransportInitFn = (
  logger?: any,
  emitter?: EventEmitter,
  plugin?: LowlevelTransportSharedPlugin
) => Promise<string>;

export type Transport = {
  enumerate(): Promise<Array<ChargerWalletDeviceInfo>>;
  listen(old?: Array<ChargerWalletDeviceInfo>): Promise<Array<ChargerWalletDeviceInfo>>;
  acquire(input: AcquireInput): Promise<string>;
  release(session: string, onclose: boolean): Promise<void>;
  configure(signedData: JSON | string): Promise<void>;
  call(session: string, name: string, data: Record<string, any>): Promise<MessageFromChargerWallet>;
  post(session: string, name: string, data: Record<string, any>): Promise<void>;
  read(session: string): Promise<MessageFromChargerWallet>;
  cancel(): Promise<void>;

  // resolves when the transport can be used; rejects when it cannot
  init: ITransportInitFn;
  stop(): void;

  configured: boolean;
  version: string;
  name: string;
  activeName?: string;

  // webusb has a different model, where you have to
  // request device connection
  requestDevice: () => Promise<void>;
  requestNeeded: boolean;

  isOutdated: boolean;
};

export type LowLevelDevice = { id: string; name: string };
export type LowlevelTransportSharedPlugin = {
  enumerate: () => Promise<LowLevelDevice[]>;
  send: (uuid: string, data: string) => Promise<void>;
  receive: () => Promise<string>;
  connect: (uuid: string) => Promise<void>;
  disconnect: (uuid: string) => Promise<void>;

  init: () => Promise<void>;
  version: string;
};
