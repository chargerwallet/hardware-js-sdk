# This file is part of the ChargerWallet project, https://chargerwallet.com/
#
# Copyright (C) 2021 ChargerWallet Team <core@chargerwallet.com>
#
# This library is free software: you can redistribute it and/or modify
# it under the terms of the GNU Lesser General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.
#
# This library is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU Lesser General Public License for more details.
#
# You should have received a copy of the GNU Lesser General Public License
# along with this library.  If not, see <http://www.gnu.org/licenses/>.


from typing import TYPE_CHECKING

from . import messages
from .tools import expect

if TYPE_CHECKING:
    from .client import TrezorClient
    from .tools import Address
    from .protobuf import MessageType


@expect(messages.AptosAddress, field="address", ret_type=str)
def get_address(
    client: "TrezorClient", address_n: "Address", show_display: bool = False
) -> "MessageType":
    return client.call(
        messages.AptosGetAddress(address_n=address_n, show_display=show_display)
    )


@expect(messages.AptosSignedTx)
def sign_tx(client: "TrezorClient", address_n: "Address", rawtx: bytes):
    return client.call(messages.AptosSignTx(address_n=address_n, raw_tx=rawtx))
