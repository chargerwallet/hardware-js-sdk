import { spawn } from 'child_process';
import electron from 'electron';
import path from 'path';

import type { ChildProcess } from 'child_process';

export type Status = {
  service: boolean;
  process: boolean;
};

export type Options = {
  startupThrottleTime?: number;
  stopWaitTimes?: number;
  autoRestart?: number;
};

const defaultOptions: Options = {
  startupThrottleTime: 0,
  stopWaitTimes: 10,
  autoRestart: 2,
} as const;

export default abstract class BaseProcess {
  process: ChildProcess | null;

  resource: string;

  processName: string;

  options: Options;

  launchThrottle: ReturnType<typeof setTimeout> | null;

  supportedSystems = ['mac-x64', 'win-x64', 'linux-arm64', 'linux-x64'];

  stopped = false;

  constructor(resource: string, processName: string, options: Options = defaultOptions) {
    this.process = null;
    this.launchThrottle = null;
    this.resource = resource;
    this.processName = processName;
    this.options = {
      ...defaultOptions,
      ...options,
    };

    const { system } = this.getPlatformInfo();
    if (!this.isSystemSupported(system)) {
      console.error('Unsupported system:', system);
    }
  }

  abstract getStatus(): Promise<{ service: boolean; process: boolean }>;

  async start(params: string[] = [], isDev = false) {
    const { system, ext } = this.getPlatformInfo();
    if (this.launchThrottle) {
      console.debug('Throttling launch, cancel process');
      return;
    }

    const status = await this.getStatus();

    if (status.service) {
      console.debug('Service already running');
      return;
    }

    if (status.process) {
      console.debug('Process already running, service not');
      return;
    }

    if (this.options.startupThrottleTime && this.options.startupThrottleTime > 0) {
      console.debug('Throttling startup');

      this.launchThrottle = setTimeout(() => {
        console.debug('Cleaning up launch throttle');
        this.launchThrottle = null;
      }, this.options.startupThrottleTime * 1000);
    }

    this.stopped = false;

    const appPath = electron.app.getAppPath();
    let processDir;
    if (isDev) {
      processDir = path.resolve(appPath, '../', 'public', 'bin', this.resource, system);
    } else {
      processDir = path.resolve(appPath, '../', 'bin', this.resource);
    }

    const processPath = path.join(processDir, `${this.processName}${ext}`);
    const processEnv = { ...process.env };
    // library search path for macOS
    processEnv.DYLD_LIBRARY_PATH = processEnv.DYLD_LIBRARY_PATH
      ? `${processEnv.DYLD_LIBRARY_PATH}:${processDir}`
      : `${processDir}`;
    // library search path for Linux
    processEnv.LD_LIBRARY_PATH = processEnv.LD_LIBRARY_PATH
      ? `${processEnv.LD_LIBRARY_PATH}:${processDir}`
      : `${processDir}`;

    console.info([
      'Starting process:',
      `- Path: ${processPath}`,
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      `- Params: ${params}`,
      `- CWD: ${processDir}`,
    ]);
    this.process = spawn(processPath, params, {
      cwd: processDir,
      env: processEnv,
      stdio: ['ignore', 'ignore', 'ignore'],
    });
    this.process.on('error', err => this.onError(err));
    this.process.on('exit', code => this.onExit(code));
  }

  /**
   * Stops the process
   */
  stop() {
    return new Promise<void>(resolve => {
      this.stopped = true;

      if (!this.process) {
        console.warn('process already stopped');
        resolve();
        return;
      }

      console.debug('Stopping process');
      this.process.kill();

      let timeout = 0;
      const interval = setInterval(() => {
        if (!this.process || this.process.killed) {
          console.info('Process killed successfully');
          clearInterval(interval);
          this.process = null;
          resolve();
          return;
        }

        if (this.options.stopWaitTimes && timeout < this.options.stopWaitTimes) {
          console.info('Process Still alive, checking again...');
          timeout += 1;
        } else {
          console.info('Process Still alive, going for the SIGKILL');
          this.process.kill('SIGKILL');
        }
      }, 1000);
    });
  }

  async restart() {
    console.info('Restarting');
    await this.stop();
    await this.start();
  }

  onError(err: Error) {
    console.error('Process exit error: ', err.message);
  }

  onExit(code: number | null) {
    console.info(
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      `Exited, code: ${code ?? 'unknown'} (Stopped: ${this.stopped})`
    );
    this.process = null;

    if (this.options.autoRestart && this.options.autoRestart > 0 && !this.stopped) {
      console.debug('restarting...');
      let restartDelay = this.options.autoRestart;

      // Add throttle delay to prevent the process from never restarting if the throttle is hit
      if (this.launchThrottle && this.options.startupThrottleTime) {
        restartDelay += this.options.startupThrottleTime;
      }

      setTimeout(() => this.start(), restartDelay * 1000);
    }
  }

  isSystemSupported(system: string) {
    return this.supportedSystems.includes(system);
  }

  getPlatformInfo() {
    const { arch } = process;
    const platform = this.getPlatform();
    const ext = platform === 'win' ? '.exe' : '';
    const system = `${platform}-${arch}`;
    console.debug('arch: ', arch);
    return { system, platform, arch, ext };
  }

  getPlatform() {
    switch (process.platform) {
      case 'darwin':
        return 'mac';
      case 'win32':
        return 'win';
      default:
        return process.platform;
    }
  }
}
