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

import click

from .. import near, tools
from . import with_client

if TYPE_CHECKING:
    from ..client import TrezorClient

PATH_HELP = "BIP-32 path to key, e.g. m/44'/397'/0'"


@click.group(name="near")
def cli():
    """Near commands."""


@cli.command()
@click.option(
    "-n",
    "--address",
    required=False,
    help=PATH_HELP,
    default=near.DEFAULT_BIP32_PATH,
)
@click.option("-d", "--show-display", is_flag=True)
@with_client
def get_address(client: "TrezorClient", address: str, show_display: bool):
    """Get near address."""
    address_n = tools.parse_path(address)
    return near.get_address(client, address_n, show_display)


@cli.command()
@click.option("-n", "--address", required=True, help=PATH_HELP)
@click.argument("message")
@with_client
def sign_raw_transaction(client: "TrezorClient", address: str, message: str):
    """Sign a hex-encoded transaction ."""
    address_n = tools.parse_path(address)
    ret = near.sign_tx(client, address_n, bytes.fromhex(message))
    output = {
        "signature": "0x%s" % ret.signature.hex(),
    }
    return output
