/**
 * The move steps from coregeth.com/downloads, mirrored so this site gives a reader the same commands.
 *
 * Source: https://coregeth.com/downloads/#upgrade as built from `ethereumclassic/core-geth-website` at
 * commit 653d13a, read 2026-11-06. Every title, note and block below is the page's own text, in its
 * order: the move tabs, and the build-from-source tabs inside the Source tab. Do not edit them here:
 * change them on coregeth.com first, then mirror the page again. This file is generated.
 *
 * Notes keep the page's markup: backticks for code and `[label](href)` for a link. A link the page
 * writes relative to itself is made absolute on coregeth.com. One phrase points within that page, and
 * would point at the wrong page here, so it is the only wording changed: "at the top of this page"
 * reads "on coregeth.com".
 */

/** One step, as the page prints it: a note to read first, a block to run, a note on what it leaves. */
export interface MoveStep {
  readonly title: string
  readonly before?: string
  readonly code?: string
  readonly after?: string
}

/** One platform's tab. The Source tab holds a set of tabs of its own, one per platform. */
export interface MovePanel {
  readonly id: 'linux' | 'macos' | 'windows' | 'containers' | 'source'
  readonly label: string
  readonly heading: string
  /** What the panel says before its first step. */
  readonly intro?: readonly string[]
  readonly steps: readonly MoveStep[]
  readonly guide?: { readonly label: string; readonly href: string }
  readonly panels?: readonly MovePanel[]
}

export const MOVE_SOURCE = {
  page: "https://coregeth.com/downloads/#upgrade",
  commit: "653d13a",
  fetched: "2026-11-06",
} as const

export const MOVE_PANELS: readonly MovePanel[] = [
  {
    id: "linux",
    label: "Linux",
    heading: "Linux",
    steps: [
      {
        title: "Optional: if you have not run v1.13 yet, sync one new node first",
        before: "Best practice before you move a `v1.12` node: set up one new node on the `v1.13` line, on a machine of its own beside the nodes you run, with the [install steps](https://coregeth.com/downloads/#install) on coregeth.com, and point no RPC clients or miners at it. It can sync from the network, or start from a copy of a stopped `v1.12` node's data directory without its `geth/nodekey`. Once `eth.syncing` returns `false` and `net.peerCount` is above zero ([How to tell it is done](https://docs.coregeth.com/getting-started/run-classic-node/#how-to-tell-it-is-done)), move each `v1.12` node with the steps below.",
      },
      {
        title: "Install curl and unzip",
        before: "The node can keep running for this step. On Debian or Ubuntu:",
        code: "sudo apt-get update && sudo apt-get install -y curl unzip",
        after: "On Fedora or RHEL, run `sudo dnf install -y --refresh curl unzip && sudo dnf upgrade -y curl unzip` instead, and on Arch, `sudo pacman -Syu --needed curl unzip`. Each line also updates curl and unzip if they are already installed.",
      },
      {
        title: "Download the release and check it",
        code: "curl -LO https://github.com/ethereumclassic/core-geth/releases/download/v1.13.0/core-geth-linux-v1.13.0.zip\ncurl -LO https://github.com/ethereumclassic/core-geth/releases/download/v1.13.0/core-geth-linux-v1.13.0.zip.sha256\nsha256sum -c core-geth-linux-v1.13.0.zip.sha256",
        after: "The node can keep running for this step. `sha256sum -c` must print `OK`: if it prints `FAILED`, delete the file and download it again rather than running it. [Verify what you downloaded](https://coregeth.com/downloads/#verify) also checks where the file came from. On an Arm machine, put the name for your processor where the file name says `linux`, here and in \"Install the release\": `arm64` if `uname -m` prints `aarch64` or `arm64`, `arm7` for `armv7l`, `arm6` for `armv6l`, and `arm5` for `armv5tel`.",
      },
      {
        title: "Record the node's block number and ID",
        code: "geth attach --exec 'eth.blockNumber' ~/.ethereum/classic/geth.ipc\ngeth attach --exec 'admin.nodeInfo.enode' ~/.ethereum/classic/geth.ipc",
        after: "Keep what this prints: \"Confirm the move\" compares the new ID and block number with it. These commands use the default data directory. For Mordor, use `~/.ethereum/mordor`; if you pass `--datadir`, use yours. On the unit in the [Linux run guide](https://docs.coregeth.com/getting-started/run/linux/), the `geth` user owns `/var/lib/core-geth`, so attach as `sudo -u geth -H geth --classic attach --exec 'admin.nodeInfo.enode' /var/lib/core-geth/geth.ipc` instead, here and in every later attach line.",
      },
      {
        title: "Stop the node cleanly",
        before: "Press Ctrl-C once in the node's terminal and wait, or stop the systemd unit you wrote, for example `sudo systemctl stop core-geth`. Wait until the log prints `Blockchain stopped` and the process exits. If it exits without that line, the stop was not clean: the node recovers at its next start, and its block number can start lower than the one you recorded. Under systemd, `journalctl -u core-geth` shows that log.",
      },
      {
        title: "Install the release",
        code: "unzip -o core-geth-linux-v1.13.0.zip &&\n  { test -e /usr/local/bin/geth-v1.12 || sudo mv /usr/local/bin/geth /usr/local/bin/geth-v1.12; } &&\n  sudo install -m 0755 geth /usr/local/bin/geth &&\n  geth version",
        after: "Go on only if `geth version` reports a `v1.13` release. `geth-v1.12` is the old binary, kept so you can roll back. These commands install over `/usr/local/bin/geth`. If your unit or start command runs a `geth` at another path, use that path wherever they say `/usr/local/bin/geth`.",
      },
      {
        title: "Rename the old P2P node key",
        code: "mv -n ~/.ethereum/classic/geth/nodekey ~/.ethereum/classic/geth/nodekey.old-rotated-$(date +%F)",
        after: "The next start writes a fresh key. If you start the node with `--nodekey` or `--nodekeyhex`, or set `GETH_NODEKEY` or `GETH_NODEKEYHEX`, take that out too: it overrides the file. If the rename prints an error, check the data directory: `geth/nodekey` must not be there when the node starts. On the unit in the Linux run guide, run `sudo -u geth mv -n /var/lib/core-geth/geth/nodekey /var/lib/core-geth/geth/nodekey.old-rotated-$(date +%F)` instead.",
      },
      {
        title: "If this node lists static peers, update the list",
        before: "They are under `[Node.P2P]` in the file you pass with `--config`. Edit it while the node is down:",
        code: "[Node.P2P]\nStaticNodes = [\"enode://<node ID>@<IP>:30303\"]",
        after: "A peer that has already moved has a new ID, so use that. Separate entries with commas. `TrustedNodes` takes the same entries. With no file yet, save these two lines and add `--config` and the file's path to the start command. The client ignores `static-nodes.json`, so move its entries here.",
      },
      {
        title: "Check the flags and settings you start the node with",
        before: "While the node is down, decide MESS, which makes a node resist deep chain reorganizations. An upgrade can change whether a node runs MESS, so set it yourself: `--mess` turns it on and `--mess=false` turns it off. [Which setting fits which operator](https://docs.coregeth.com/operate/mess/#which-setting-fits-which-operator) sets out the choice. An exchange setting its confirmation policy can use the [MESS confirmation calculator](https://docs.coregeth.com/guides/mess-calculator/) to see what that policy asks of an attacker. Give every node you run the same setting. Take out any `--discovery.dns` or `--bootnodes` flag you added on `v1.12`: the `v1.13` line reads its own lists and bootnodes, and with `--discovery.dns` it reads no snap lists. If the node starts with `--config`, delete the file's `BootstrapNodes`, `EthDiscoveryURLs` and `SnapDiscoveryURLs` lines unless you set them yourself: a file `dumpconfig` wrote on `v1.12` has all three, and the node keeps what they name in place of what the `v1.13` line ships. Then go through the [RPC exposure checklist](https://docs.coregeth.com/tutorials/v1.13.0-migration/#re-check-rpc-exposure) for the flags, any `GETH_` environment variables, and the file's `[Node]` settings: `HTTPHost`, `HTTPModules`, `HTTPCors`, `WSHost`, `WSModules` and `WSOrigins`.",
      },
      {
        title: "Start the node",
        code: "sudo systemctl daemon-reload && sudo systemctl start core-geth",
        after: "`core-geth` stands for the systemd unit you wrote, and the reload picks up any flag you changed in that unit. From a terminal, run `geth --classic` instead, with the flags you just checked, `--mess` or `--mess=false` among them, and any other flag you start the node with, then run the next steps in a second terminal.",
      },
      {
        title: "Confirm the move",
        code: "geth attach --exec 'admin.nodeInfo.name' ~/.ethereum/classic/geth.ipc\ngeth attach --exec 'admin.nodeInfo.enode' ~/.ethereum/classic/geth.ipc\ngeth attach --exec 'net.peerCount' ~/.ethereum/classic/geth.ipc\ngeth attach --exec 'eth.blockNumber' ~/.ethereum/classic/geth.ipc",
        after: "If an attach line cannot connect, wait a minute and run it again. The first line must name a `v1.13` release. The enode ID must differ from the one you recorded. If it is the same, the node is still on the old key: stop it and redo the rename step. The peer count climbs within minutes. If it is still zero after five minutes, see [Why does the node have no peers?](https://docs.coregeth.com/operate/troubleshooting/#why-does-the-node-have-no-peers) The block number starts near the one you recorded, or lower after an unclean stop, and climbs to the network's head: compare it with a block explorer or another node you run. If it stops climbing short of the head, investigate rather than resync.",
      },
      {
        title: "If other nodes list this node, give them the new ID",
        before: "They can no longer connect to this node, and neither side logs it at the default verbosity. On each one, on `v1.12` or `v1.13`, run these lines with the old ID you recorded, the new ID from the step above, and the address and port the entry already has.",
        code: "geth attach --exec \"admin.removePeer('enode://<old ID>@<IP>:30303')\" ~/.ethereum/classic/geth.ipc\ngeth attach --exec \"admin.addPeer('enode://<new ID>@<IP>:30303')\" ~/.ethereum/classic/geth.ipc\ngeth attach --exec \"admin.peers.map(function(p){return p.enode})\" ~/.ethereum/classic/geth.ipc",
        after: "The first two lines each print `true` and take effect with no restart. The third lists the new ID once the nodes connect. The change lasts only until that node restarts, so put the new ID in that node's own config file too. Send the new ID to anyone else who lists this node. For an entry in `TrustedNodes`, use `admin.removeTrustedPeer` and `admin.addTrustedPeer` in place of the first two lines, or as well as them if the entry is in `StaticNodes` too. Neither opens a connection. [Static and trusted peers](https://docs.coregeth.com/guides/bootnodes-and-discovery/#static-and-trusted-peers) explains the two lists.",
      },
    ],
    guide: {
      label: "Linux users guide",
      href: "https://docs.coregeth.com/tutorials/migration/linux/",
    },
  },
  {
    id: "macos",
    label: "macOS",
    heading: "macOS",
    steps: [
      {
        title: "Optional: if you have not run v1.13 yet, sync one new node first",
        before: "Best practice before you move a `v1.12` node: set up one new node on the `v1.13` line, on a machine of its own beside the nodes you run, with the [install steps](https://coregeth.com/downloads/#install) on coregeth.com, and point no RPC clients or miners at it. It can sync from the network, or start from a copy of a stopped `v1.12` node's data directory without its `geth/nodekey`. Once `eth.syncing` returns `false` and `net.peerCount` is above zero ([How to tell it is done](https://docs.coregeth.com/getting-started/run-classic-node/#how-to-tell-it-is-done)), move each `v1.12` node with the steps below.",
      },
      {
        title: "Download the release and check it",
        code: "curl -LO https://github.com/ethereumclassic/core-geth/releases/download/v1.13.0/core-geth-osx-arm64-v1.13.0.zip\ncurl -LO https://github.com/ethereumclassic/core-geth/releases/download/v1.13.0/core-geth-osx-arm64-v1.13.0.zip.sha256\nshasum -a 256 -c core-geth-osx-arm64-v1.13.0.zip.sha256",
        after: "The node can keep running for this step. `shasum -a 256 -c` must print `OK`: if it prints `FAILED`, delete the file and download it again rather than running it. [Verify what you downloaded](https://coregeth.com/downloads/#verify) also checks where the file came from. On an Intel Mac, put `osx` where the file name says `osx-arm64`, here and in \"Install the release\".",
      },
      {
        title: "Record the node's block number and ID",
        code: "geth attach --exec 'eth.blockNumber' ~/Library/Ethereum/classic/geth.ipc\ngeth attach --exec 'admin.nodeInfo.enode' ~/Library/Ethereum/classic/geth.ipc",
        after: "Keep what this prints: \"Confirm the move\" compares the new ID and block number with it. These commands use the default data directory. For Mordor, use `~/Library/Ethereum/mordor`; if you pass `--datadir`, use yours.",
      },
      {
        title: "Stop the node cleanly",
        before: "Press Ctrl-C once in the node's terminal and wait, or unload the launchd job. [Stop it cleanly](https://docs.coregeth.com/getting-started/run/macos/#7-stop-it-cleanly) has the command for the run guide's agent. Wait until the log prints `Blockchain stopped` and the process exits. If it exits without that line, the stop was not clean: the node recovers at its next start, and its block number can start lower than the one you recorded.",
      },
      {
        title: "Install the release",
        code: "unzip -o core-geth-osx-arm64-v1.13.0.zip &&\n  { test -e /usr/local/bin/geth-v1.12 || sudo mv /usr/local/bin/geth /usr/local/bin/geth-v1.12; } &&\n  sudo install -m 0755 geth /usr/local/bin/geth &&\n  geth version",
        after: "Go on only if `geth version` reports a `v1.13` release. `geth-v1.12` is the old binary, kept so you can roll back. These commands install over `/usr/local/bin/geth`. If your unit or start command runs a `geth` at another path, use that path wherever they say `/usr/local/bin/geth`.",
      },
      {
        title: "Rename the old P2P node key",
        code: "mv -n ~/Library/Ethereum/classic/geth/nodekey ~/Library/Ethereum/classic/geth/nodekey.old-rotated-$(date +%F)",
        after: "The next start writes a fresh key. If you start the node with `--nodekey` or `--nodekeyhex`, or set `GETH_NODEKEY` or `GETH_NODEKEYHEX`, take that out too: it overrides the file. If the rename prints an error, check the data directory: `geth/nodekey` must not be there when the node starts.",
      },
      {
        title: "If this node lists static peers, update the list",
        before: "They are under `[Node.P2P]` in the file you pass with `--config`. Edit it while the node is down:",
        code: "[Node.P2P]\nStaticNodes = [\"enode://<node ID>@<IP>:30303\"]",
        after: "A peer that has already moved has a new ID, so use that. Separate entries with commas. `TrustedNodes` takes the same entries. With no file yet, save these two lines and add `--config` and the file's path to the start command. The client ignores `static-nodes.json`, so move its entries here.",
      },
      {
        title: "Check the flags and settings you start the node with",
        before: "While the node is down, decide MESS, which makes a node resist deep chain reorganizations. An upgrade can change whether a node runs MESS, so set it yourself: `--mess` turns it on and `--mess=false` turns it off. [Which setting fits which operator](https://docs.coregeth.com/operate/mess/#which-setting-fits-which-operator) sets out the choice. An exchange setting its confirmation policy can use the [MESS confirmation calculator](https://docs.coregeth.com/guides/mess-calculator/) to see what that policy asks of an attacker. Give every node you run the same setting. Take out any `--discovery.dns` or `--bootnodes` flag you added on `v1.12`: the `v1.13` line reads its own lists and bootnodes, and with `--discovery.dns` it reads no snap lists. If the node starts with `--config`, delete the file's `BootstrapNodes`, `EthDiscoveryURLs` and `SnapDiscoveryURLs` lines unless you set them yourself: a file `dumpconfig` wrote on `v1.12` has all three, and the node keeps what they name in place of what the `v1.13` line ships. Then go through the [RPC exposure checklist](https://docs.coregeth.com/tutorials/v1.13.0-migration/#re-check-rpc-exposure) for the flags, any `GETH_` environment variables, and the file's `[Node]` settings: `HTTPHost`, `HTTPModules`, `HTTPCors`, `WSHost`, `WSModules` and `WSOrigins`.",
      },
      {
        title: "Start the node",
        before: "In a terminal. Add the flags you just checked to this line, `--mess` or `--mess=false` among them, and any other flag you start the node with: a node on `--datadir` started without it starts an empty chain in the default directory. If the node runs under the run guide's launchd agent, start the agent instead, as [Keep it running](https://docs.coregeth.com/getting-started/run/macos/#6-keep-it-running-a-launchd-agent) shows:",
        code: "geth --classic",
        after: "The node runs in this terminal until you stop it, so run the next steps in a second terminal. For Mordor, use `--mordor` in place of `--classic`.",
      },
      {
        title: "Confirm the move",
        code: "geth attach --exec 'admin.nodeInfo.name' ~/Library/Ethereum/classic/geth.ipc\ngeth attach --exec 'admin.nodeInfo.enode' ~/Library/Ethereum/classic/geth.ipc\ngeth attach --exec 'net.peerCount' ~/Library/Ethereum/classic/geth.ipc\ngeth attach --exec 'eth.blockNumber' ~/Library/Ethereum/classic/geth.ipc",
        after: "If an attach line cannot connect, wait a minute and run it again. The first line must name a `v1.13` release. The enode ID must differ from the one you recorded. If it is the same, the node is still on the old key: stop it and redo the rename step. The peer count climbs within minutes. If it is still zero after five minutes, see [Why does the node have no peers?](https://docs.coregeth.com/operate/troubleshooting/#why-does-the-node-have-no-peers) The block number starts near the one you recorded, or lower after an unclean stop, and climbs to the network's head: compare it with a block explorer or another node you run. If it stops climbing short of the head, investigate rather than resync.",
      },
      {
        title: "If other nodes list this node, give them the new ID",
        before: "They can no longer connect to this node, and neither side logs it at the default verbosity. On each one, on `v1.12` or `v1.13`, run these lines with the old ID you recorded, the new ID from the step above, and the address and port the entry already has.",
        code: "geth attach --exec \"admin.removePeer('enode://<old ID>@<IP>:30303')\" ~/Library/Ethereum/classic/geth.ipc\ngeth attach --exec \"admin.addPeer('enode://<new ID>@<IP>:30303')\" ~/Library/Ethereum/classic/geth.ipc\ngeth attach --exec \"admin.peers.map(function(p){return p.enode})\" ~/Library/Ethereum/classic/geth.ipc",
        after: "The first two lines each print `true` and take effect with no restart. The third lists the new ID once the nodes connect. The change lasts only until that node restarts, so put the new ID in that node's own config file too. Send the new ID to anyone else who lists this node. For an entry in `TrustedNodes`, use `admin.removeTrustedPeer` and `admin.addTrustedPeer` in place of the first two lines, or as well as them if the entry is in `StaticNodes` too. Neither opens a connection. [Static and trusted peers](https://docs.coregeth.com/guides/bootnodes-and-discovery/#static-and-trusted-peers) explains the two lists.",
      },
    ],
    guide: {
      label: "macOS users guide",
      href: "https://docs.coregeth.com/tutorials/migration/macos/",
    },
  },
  {
    id: "windows",
    label: "Windows",
    heading: "Windows",
    steps: [
      {
        title: "Optional: if you have not run v1.13 yet, sync one new node first",
        before: "Best practice before you move a `v1.12` node: set up one new node on the `v1.13` line, on a machine of its own beside the nodes you run, with the [install steps](https://coregeth.com/downloads/#install) on coregeth.com, and point no RPC clients or miners at it. It can sync from the network, or start from a copy of a stopped `v1.12` node's data directory without its `geth/nodekey`. Once `eth.syncing` returns `false` and `net.peerCount` is above zero ([How to tell it is done](https://docs.coregeth.com/getting-started/run-classic-node/#how-to-tell-it-is-done)), move each `v1.12` node with the steps below.",
      },
      {
        title: "Download the release and check it",
        code: "# In PowerShell, in the folder that holds your current geth.exe\nInvoke-WebRequest \"https://github.com/ethereumclassic/core-geth/releases/download/v1.13.0/core-geth-win64-v1.13.0.zip\" -OutFile \"core-geth-win64-v1.13.0.zip\"\nInvoke-WebRequest \"https://github.com/ethereumclassic/core-geth/releases/download/v1.13.0/core-geth-win64-v1.13.0.zip.sha256\" -OutFile \"core-geth-win64-v1.13.0.zip.sha256\"\n\n# Compare these two lines\n(Get-FileHash \"core-geth-win64-v1.13.0.zip\" -Algorithm SHA256).Hash\nGet-Content \"core-geth-win64-v1.13.0.zip.sha256\"",
        after: "The node can keep running for this step. Compare those two lines yourself: the letters must match and the case need not, since `Get-FileHash` prints uppercase and the `.sha256` file holds lowercase followed by the file name. If they differ, delete the file and download it again rather than running it. [Verify what you downloaded](https://coregeth.com/downloads/#verify) also checks where the file came from.",
      },
      {
        title: "Record the node's block number and ID",
        code: ".\\geth.exe attach --exec 'eth.blockNumber' \\\\.\\pipe\\geth.ipc\n.\\geth.exe attach --exec 'admin.nodeInfo.enode' \\\\.\\pipe\\geth.ipc",
        after: "Keep what this prints: \"Confirm the move\" compares the new ID and block number with it.",
      },
      {
        title: "Stop the node cleanly",
        before: "Press Ctrl+C once in the node's console window and wait. A window opened from the Startup folder then asks `Terminate batch job (Y/N)?`; type `Y`. Under a service wrapper, stop it with that tool. Wait until the log prints `Blockchain stopped` and the process exits. If it exits without that line, the stop was not clean: the node recovers at its next start, and its block number can start lower than the one you recorded.",
      },
      {
        title: "Install the release",
        code: "Rename-Item .\\geth.exe geth-v1.12.exe\nExpand-Archive \"core-geth-win64-v1.13.0.zip\" -DestinationPath . -Force\n.\\geth.exe version",
        after: "Go on only if `.\\geth.exe version` reports a `v1.13` release. `geth-v1.12.exe` is the old binary, kept so you can roll back.",
      },
      {
        title: "Rename the old P2P node key",
        code: "$key = \"$env:LOCALAPPDATA\\Ethereum\\classic\\geth\\nodekey\"\nRename-Item $key \"nodekey.old-rotated-$(Get-Date -Format yyyy-MM-dd)\"",
        after: "The next start writes a fresh key. If you start the node with `--nodekey` or `--nodekeyhex`, or set `GETH_NODEKEY` or `GETH_NODEKEYHEX`, take that out too: it overrides the file. If the rename prints an error, check the data directory: `geth/nodekey` must not be there when the node starts. The commands use the default data directory, but the node uses `%USERPROFILE%\\AppData\\Roaming\\Ethereum\\classic` instead if an older `AppData\\Roaming\\Ethereum` folder exists and is not empty. For Mordor, use `mordor` in place of `classic`; if you pass `--datadir`, use yours.",
      },
      {
        title: "If this node lists static peers, update the list",
        before: "They are under `[Node.P2P]` in the file you pass with `--config`. Edit it while the node is down:",
        code: "[Node.P2P]\nStaticNodes = [\"enode://<node ID>@<IP>:30303\"]",
        after: "A peer that has already moved has a new ID, so use that. Separate entries with commas. `TrustedNodes` takes the same entries. With no file yet, save these two lines and add `--config` and the file's path to the start command. The client ignores `static-nodes.json`, so move its entries here. Save the file as UTF-8 with no byte order mark, after this edit and any other. A byte order mark, or UTF-16, stops the start with `invalid TOML syntax`.",
      },
      {
        title: "Check the flags and settings you start the node with",
        before: "While the node is down, decide MESS, which makes a node resist deep chain reorganizations. An upgrade can change whether a node runs MESS, so set it yourself: `--mess` turns it on and `--mess=false` turns it off. [Which setting fits which operator](https://docs.coregeth.com/operate/mess/#which-setting-fits-which-operator) sets out the choice. An exchange setting its confirmation policy can use the [MESS confirmation calculator](https://docs.coregeth.com/guides/mess-calculator/) to see what that policy asks of an attacker. Give every node you run the same setting. Take out any `--discovery.dns` or `--bootnodes` flag you added on `v1.12`: the `v1.13` line reads its own lists and bootnodes, and with `--discovery.dns` it reads no snap lists. If the node starts with `--config`, delete the file's `BootstrapNodes`, `EthDiscoveryURLs` and `SnapDiscoveryURLs` lines unless you set them yourself: a file `dumpconfig` wrote on `v1.12` has all three, and the node keeps what they name in place of what the `v1.13` line ships. Then go through the [RPC exposure checklist](https://docs.coregeth.com/tutorials/v1.13.0-migration/#re-check-rpc-exposure) for the flags, any `GETH_` environment variables, and the file's `[Node]` settings: `HTTPHost`, `HTTPModules`, `HTTPCors`, `WSHost`, `WSModules` and `WSOrigins`.",
      },
      {
        title: "Start the node",
        before: "In PowerShell, in the folder that holds the node's `geth.exe`. Add the flags you just checked to this line, `--mess` or `--mess=false` among them, and any other flag you start the node with: a node on `--datadir` started without it starts an empty chain in the default directory. If the node starts from the Startup folder, as the run guide's [Keep it running](https://docs.coregeth.com/getting-started/run/windows/#6-keep-it-running-start-it-when-you-sign-in) sets up, run that command file instead:",
        code: ".\\geth.exe --classic",
        after: "The node runs in this window until you stop it, so run the next steps in a second PowerShell window, in the same folder. For Mordor, use `--mordor` in place of `--classic`.",
      },
      {
        title: "Confirm the move",
        code: ".\\geth.exe attach --exec 'admin.nodeInfo.name' \\\\.\\pipe\\geth.ipc\n.\\geth.exe attach --exec 'admin.nodeInfo.enode' \\\\.\\pipe\\geth.ipc\n.\\geth.exe attach --exec 'net.peerCount' \\\\.\\pipe\\geth.ipc\n.\\geth.exe attach --exec 'eth.blockNumber' \\\\.\\pipe\\geth.ipc",
        after: "If an attach line cannot connect, wait a minute and run it again. The first line must name a `v1.13` release. The enode ID must differ from the one you recorded. If it is the same, the node is still on the old key: stop it and redo the rename step. The peer count climbs within minutes. If it is still zero after five minutes, see [Why does the node have no peers?](https://docs.coregeth.com/operate/troubleshooting/#why-does-the-node-have-no-peers) The block number starts near the one you recorded, or lower after an unclean stop, and climbs to the network's head: compare it with a block explorer or another node you run. If it stops climbing short of the head, investigate rather than resync.",
      },
      {
        title: "If other nodes list this node, give them the new ID",
        before: "They can no longer connect to this node, and neither side logs it at the default verbosity. On each one, on `v1.12` or `v1.13`, run these lines with the old ID you recorded, the new ID from the step above, and the address and port the entry already has.",
        code: ".\\geth.exe attach --exec \"admin.removePeer('enode://<old ID>@<IP>:30303')\" \\\\.\\pipe\\geth.ipc\n.\\geth.exe attach --exec \"admin.addPeer('enode://<new ID>@<IP>:30303')\" \\\\.\\pipe\\geth.ipc\n.\\geth.exe attach --exec \"admin.peers.map(function(p){return p.enode})\" \\\\.\\pipe\\geth.ipc",
        after: "The first two lines each print `true` and take effect with no restart. The third lists the new ID once the nodes connect. The change lasts only until that node restarts, so put the new ID in that node's own config file too. Send the new ID to anyone else who lists this node. For an entry in `TrustedNodes`, use `admin.removeTrustedPeer` and `admin.addTrustedPeer` in place of the first two lines, or as well as them if the entry is in `StaticNodes` too. Neither opens a connection. [Static and trusted peers](https://docs.coregeth.com/guides/bootnodes-and-discovery/#static-and-trusted-peers) explains the two lists.",
      },
    ],
    guide: {
      label: "Windows users guide",
      href: "https://docs.coregeth.com/tutorials/migration/windows/",
    },
  },
  {
    id: "containers",
    label: "Containers",
    heading: "Containers",
    steps: [
      {
        title: "Optional: if you have not run v1.13 yet, sync one new node first",
        before: "Best practice before you move a `v1.12` node: set up one new node on the `v1.13` line, on a machine of its own beside the nodes you run, with the [install steps](https://coregeth.com/downloads/#install) on coregeth.com, and point no RPC clients or miners at it. It can sync from the network, or start from a copy of a stopped `v1.12` node's data directory without its `geth/nodekey`. Once `eth.syncing` returns `false` and `net.peerCount` is above zero ([How to tell it is done](https://docs.coregeth.com/getting-started/run-classic-node/#how-to-tell-it-is-done)), move each `v1.12` node with the steps below.",
      },
      {
        title: "Check Docker and the GitHub CLI",
        before: "These steps need Docker to pull and run the image, and the GitHub CLI to check where the image came from:",
        code: "docker version --format '{{.Server.Version}}'\ngh --version\ngh auth status",
        after: "The node can keep running for this step. The first line must print the Docker engine's version. An error in its place means Docker is not installed or not running: [Get Docker](https://docs.docker.com/get-started/get-docker/) says how to install it. `gh --version` must print 2.49.0 or later, the release that added `gh attestation`. `gh auth status` must say you are logged in to github.com. If it does not, run `gh auth login`. Install or update the GitHub CLI from [cli.github.com](https://cli.github.com/). On Debian and Ubuntu, take GitHub's own package: theirs are older than 2.49.0.",
      },
      {
        title: "Pull the release",
        code: "docker pull ghcr.io/ethereumclassic/core-geth:latest\ngh attestation verify oci://ghcr.io/ethereumclassic/core-geth:latest --repo ethereumclassic/core-geth",
        after: "The node can keep running for this step. `gh attestation verify` must print `Verification succeeded` and name `.github/workflows/docker-publish.yml`. If it does not, do not run the image. [Verify what you downloaded](https://coregeth.com/downloads/#verify) checks an image file from the release. A loaded image file carries its release tag and no `latest` tag, so put that tag in place of `latest` in the steps below, or Docker pulls from the registry instead.",
      },
      {
        title: "Record the node's block number, ID and restart policy",
        code: "docker exec core-geth geth attach --exec 'eth.blockNumber' /root/.ethereum/classic/geth.ipc\ndocker exec core-geth geth attach --exec 'admin.nodeInfo.enode' /root/.ethereum/classic/geth.ipc\ndocker inspect core-geth --format '{{.HostConfig.RestartPolicy.Name}}'",
        after: "Keep what this prints: \"Confirm the move\" compares the new ID and block number with it. The last line prints the container's restart policy, which the rollback puts back. These commands use a container named `core-geth` with its data at `/root`, so put your own name in its place. For Mordor, use `.ethereum/mordor` in the paths.",
      },
      {
        title: "Check where the container keeps its data",
        code: "docker inspect core-geth --format '{{range .Mounts}}{{.Destination}} {{end}}'",
        after: "This prints `/root`, or `/root/.ethereum`, when the data is in a host directory or a named volume, which the steps below carry to the new container. If it prints neither, the data is inside the container itself: after the stop, take the copy step below in place of the rename, or the new container starts with no chain and resyncs.",
      },
      {
        title: "Stop the node cleanly",
        code: "docker stop -t 300 core-geth\ndocker logs --tail 50 core-geth 2>&1 | grep 'Blockchain stopped'",
        after: "The second command prints `Blockchain stopped` after a clean stop. If it prints nothing, the node did not stop cleanly: it recovers at its next start, moving its head back and importing those blocks again ([After an unclean stop](https://docs.coregeth.com/operate/maintenance/#after-an-unclean-stop)), so its block number can start lower than the one you recorded. Use `-t 300`: a plain `docker stop` kills the node if it has not stopped within 10 seconds.",
      },
      {
        title: "Rename the old P2P node key",
        before: "If the check printed `/root` or `/root/.ethereum`:",
        code: "docker run --rm --volumes-from core-geth --entrypoint sh ghcr.io/ethereumclassic/core-geth:latest \\\n  -c \"mv -n /root/.ethereum/classic/geth/nodekey /root/.ethereum/classic/geth/nodekey.old-rotated-$(date +%F)\"",
        after: "The next start writes a fresh key. If you start the node with `--nodekey` or `--nodekeyhex`, or set `GETH_NODEKEY` or `GETH_NODEKEYHEX`, take that out too: it overrides the file. If the rename prints an error, check the data directory: `geth/nodekey` must not be there when the node starts.",
      },
      {
        title: "If the data is inside the container, copy it out and rename the key there",
        before: "If the check printed neither, run this in place of the rename above. It copies the data out of the stopped container and renames the key in the copy, which needs as much free space as the chain takes:",
        code: "mkdir -p $HOME/core-geth-data &&\n  docker cp core-geth:/root/. $HOME/core-geth-data/ &&\n  docker run --rm -v $HOME/core-geth-data:/root --entrypoint sh ghcr.io/ethereumclassic/core-geth:latest \\\n    -c \"mv -n /root/.ethereum/classic/geth/nodekey /root/.ethereum/classic/geth/nodekey.old-rotated-$(date +%F)\"",
        after: "The next start writes a fresh key. If you start the node with `--nodekey` or `--nodekeyhex`, or set `GETH_NODEKEY` or `GETH_NODEKEYHEX`, take that out too: it overrides the file. If the rename prints an error, check the data directory: `geth/nodekey` must not be there when the node starts. The chain comes with the copy, so the node does not resync.",
      },
      {
        title: "If this node lists static peers, update the list",
        before: "They are under `[Node.P2P]` in the file you pass with `--config`. Edit it while the node is down:",
        code: "[Node.P2P]\nStaticNodes = [\"enode://<node ID>@<IP>:30303\"]",
        after: "A peer that has already moved has a new ID, so use that. Separate entries with commas. `TrustedNodes` takes the same entries. With no file yet, save these two lines and add `--config` and the file's path to the start command. The client ignores `static-nodes.json`, so move its entries here. To give the new container the file, add `-v <path>/config.toml:/config.toml:ro` to the `docker run` under \"Replace the container\", and `--config /config.toml` after the image name.",
      },
      {
        title: "Check the flags and settings you start the node with",
        before: "While the node is down, decide MESS, which makes a node resist deep chain reorganizations. An upgrade can change whether a node runs MESS, so set it yourself: `--mess` turns it on and `--mess=false` turns it off. [Which setting fits which operator](https://docs.coregeth.com/operate/mess/#which-setting-fits-which-operator) sets out the choice. An exchange setting its confirmation policy can use the [MESS confirmation calculator](https://docs.coregeth.com/guides/mess-calculator/) to see what that policy asks of an attacker. Give every node you run the same setting. Take out any `--discovery.dns` or `--bootnodes` flag you added on `v1.12`: the `v1.13` line reads its own lists and bootnodes, and with `--discovery.dns` it reads no snap lists. If the node starts with `--config`, delete the file's `BootstrapNodes`, `EthDiscoveryURLs` and `SnapDiscoveryURLs` lines unless you set them yourself: a file `dumpconfig` wrote on `v1.12` has all three, and the node keeps what they name in place of what the `v1.13` line ships. Then go through the [RPC exposure checklist](https://docs.coregeth.com/tutorials/v1.13.0-migration/#re-check-rpc-exposure) for the flags, any `GETH_` environment variables, and the file's `[Node]` settings: `HTTPHost`, `HTTPModules`, `HTTPCors`, `WSHost`, `WSModules` and `WSOrigins`.",
      },
      {
        title: "Replace the container",
        before: "Before you run this block, put the old container's flags in its last line and its `GETH_` variables in as `-e` options: `docker inspect core-geth-v1.12 --format '{{json .Args}} {{json .Config.Env}}'` prints both. Keep its two P2P port mappings. The RPC check applies to the published RPC port, which stays on `127.0.0.1` even if the old container published it everywhere; `--http.addr 0.0.0.0` inside the container reaches only that port. If the old container ran with `--network host`, run this one that way too, without the `-p` options and with `--http.addr 127.0.0.1`. If you copied the data out, put `-v $HOME/core-geth-data:/root` in place of `--volumes-from core-geth-v1.12`.",
        code: "docker rename core-geth core-geth-v1.12\ndocker update --restart no core-geth-v1.12\ndocker run -d --name core-geth \\\n  --restart unless-stopped --stop-timeout 300 \\\n  --volumes-from core-geth-v1.12 \\\n  -p 30303:30303 -p 30303:30303/udp -p 127.0.0.1:8545:8545 \\\n  ghcr.io/ethereumclassic/core-geth:latest \\\n  --classic --http --http.addr 0.0.0.0 --http.port 8545",
        after: "For Mordor, use `--mordor` in place of `--classic`. The old container stays, stopped, and is what you roll back to.",
      },
      {
        title: "Confirm the move",
        code: "docker exec core-geth geth version\ndocker exec core-geth geth attach --exec 'admin.nodeInfo.enode' /root/.ethereum/classic/geth.ipc\ndocker exec core-geth geth attach --exec 'net.peerCount' /root/.ethereum/classic/geth.ipc\ndocker exec core-geth geth attach --exec 'eth.blockNumber' /root/.ethereum/classic/geth.ipc",
        after: "If an attach line cannot connect, wait a minute and run it again. The first line must name a `v1.13` release. The enode ID must differ from the one you recorded. If it is the same, the node is still on the old key: stop it and redo the rename step. The peer count climbs within minutes. If it is still zero after five minutes, see [Why does the node have no peers?](https://docs.coregeth.com/operate/troubleshooting/#why-does-the-node-have-no-peers) The block number starts near the one you recorded, or lower after an unclean stop, and climbs to the network's head: compare it with a block explorer or another node you run. If it stops climbing short of the head, investigate rather than resync.",
      },
      {
        title: "If other nodes list this node, give them the new ID",
        before: "They can no longer connect to this node, and neither side logs it at the default verbosity. On each one, on `v1.12` or `v1.13`, run these lines with the old ID you recorded, the new ID from the step above, and the address and port the entry already has. Put that node's container name in place of `core-geth`, which here is the node you just moved. On a node outside a container, run `geth attach` with that node's IPC path, as this section's other tabs show.",
        code: "docker exec core-geth geth attach --exec \"admin.removePeer('enode://<old ID>@<IP>:30303')\" /root/.ethereum/classic/geth.ipc\ndocker exec core-geth geth attach --exec \"admin.addPeer('enode://<new ID>@<IP>:30303')\" /root/.ethereum/classic/geth.ipc\ndocker exec core-geth geth attach --exec \"admin.peers.map(function(p){return p.enode})\" /root/.ethereum/classic/geth.ipc",
        after: "The first two lines each print `true` and take effect with no restart. The third lists the new ID once the nodes connect. The change lasts only until that node restarts, so put the new ID in that node's own config file too. Send the new ID to anyone else who lists this node. For an entry in `TrustedNodes`, use `admin.removeTrustedPeer` and `admin.addTrustedPeer` in place of the first two lines, or as well as them if the entry is in `StaticNodes` too. Neither opens a connection. [Static and trusted peers](https://docs.coregeth.com/guides/bootnodes-and-discovery/#static-and-trusted-peers) explains the two lists.",
      },
      {
        title: "If you need to roll back",
        before: "If you copied the data out, do not run this block, because the old container's own copy of the data still holds the old key. Stop and remove the new container as its first two lines do, then run the image the old one used, `docker inspect core-geth-v1.12 --format '{{.Config.Image}}'`, on the copy, with `-v $HOME/core-geth-data:/root`, the old container's ports and flags, and no `--mess`.",
        code: "docker stop -t 300 core-geth &&\n  docker rm core-geth &&\n  docker rename core-geth-v1.12 core-geth &&\n  docker update --restart unless-stopped core-geth &&\n  docker start core-geth",
        after: "Put the restart policy you recorded in place of `unless-stopped`. Keep the new key: rolling back does not make the old key safe.",
      },
    ],
    guide: {
      label: "Docker users guide",
      href: "https://docs.coregeth.com/tutorials/migration/docker/",
    },
  },
  {
    id: "source",
    label: "Source",
    heading: "Source",
    intro: [
      "Each tab starts from a machine with none of the build tools: it installs them, builds the `main` branch, and moves the node on that platform.",
    ],
    steps: [],
    panels: [
      {
        id: "linux",
        label: "Linux",
        heading: "Build from source and move the node on Linux",
        steps: [
          {
            title: "Optional: if you have not run v1.13 yet, sync one new node first",
            before: "Best practice before you move a `v1.12` node: set up one new node on the `v1.13` line, on a machine of its own beside the nodes you run, with the [install steps](https://coregeth.com/downloads/#install) on coregeth.com, and point no RPC clients or miners at it. It can sync from the network, or start from a copy of a stopped `v1.12` node's data directory without its `geth/nodekey`. Once `eth.syncing` returns `false` and `net.peerCount` is above zero ([How to tell it is done](https://docs.coregeth.com/getting-started/run-classic-node/#how-to-tell-it-is-done)), move each `v1.12` node with the steps below.",
          },
          {
            title: "Install Git, a C compiler and make",
            before: "The node can keep running while you install the tools and build. On Debian or Ubuntu:",
            code: "sudo apt-get update && sudo apt-get install -y build-essential git curl",
            after: "On Fedora or RHEL, run `sudo dnf install -y --refresh gcc make git && sudo dnf upgrade -y gcc make git` instead, and on Arch, `sudo pacman -Syu --needed base-devel git`, which brings the rest of the system current with them, as Arch requires. Each line also updates a tool that is already installed. `build-essential` and `base-devel` carry the C compiler and `make`, and the next step downloads with `curl`.",
          },
          {
            title: "Install Go 1.26.8",
            before: "`main` pins Go 1.26.8 in its `build/checksums.txt`, the Go its release builds use. This installs Go 1.26.8 from the Go project's downloads at go.dev, and checks the download against the SHA-256 the same file pins:",
            code: "curl -LO https://go.dev/dl/go1.26.8.linux-amd64.tar.gz\necho \"d0f743b33e8d8945e6b1f432edd15785c70507121d6e2a723b21285eddf8b57b  go1.26.8.linux-amd64.tar.gz\" | sha256sum -c &&\n  sudo rm -rf /usr/local/go &&\n  sudo tar -C /usr/local -xzf go1.26.8.linux-amd64.tar.gz &&\n  sudo ln -sf /usr/local/go/bin/go /usr/local/bin/go &&\n  hash -r &&\n  go version",
            after: "`sha256sum -c` must print `OK`: if it prints `FAILED`, delete the file and download it again rather than installing it. The block replaces any Go in `/usr/local/go`, and `go version` must then print `go1.26.8`. On a 64-bit Arm machine, where `uname -m` prints `aarch64`, put `go1.26.8.linux-arm64.tar.gz` in place of the file name and `211ffced9dcb9633a55eac6364816ec0ddd951389a740e88fa8b3337971bdda0` in place of the SHA-256. On 32-bit Arm, use `go1.26.8.linux-armv6l.tar.gz` and `eab440beabf395870752021fa74cedf04f97b61e43ebbe005ecbb98b94e55697`.",
          },
          {
            title: "Check the tools",
            code: "git --version\ngo version\ngcc --version\nmake --version",
            after: "Each line must print a version, and `go version` must print `go1.26.8`. A line that prints an error names a tool the steps above did not install. If `go version` prints another release, a Go earlier on `PATH` than `/usr/local/bin` runs in its place: uninstall that Go.",
          },
          {
            title: "Build the main branch",
            code: "git clone --branch main --single-branch https://github.com/ethereumclassic/core-geth.git &&\n  cd core-geth &&\n  make geth &&\n  ./build/bin/geth version",
            after: "Go on only if the first line `geth version` prints names version 1.13 or later; a build of `main` ends it with `-unstable`, and two builds a day apart can be different code. Keep the `Git Commit` line: \"Confirm the move\" checks the running node against it. If a `core-geth` folder is already there, run `git pull` in it and build there, or remove it first. The Source tab under [Install](https://coregeth.com/downloads/#install) says why these steps build `main`.",
          },
          {
            title: "Record the node's block number and ID",
            code: "geth attach --exec 'eth.blockNumber' ~/.ethereum/classic/geth.ipc\ngeth attach --exec 'admin.nodeInfo.enode' ~/.ethereum/classic/geth.ipc",
            after: "Keep what this prints: \"Confirm the move\" compares the new ID and block number with it. These commands use the default data directory. For Mordor, use `~/.ethereum/mordor`; if you pass `--datadir`, use yours. On the unit in the [Linux run guide](https://docs.coregeth.com/getting-started/run/linux/), the `geth` user owns `/var/lib/core-geth`, so attach as `sudo -u geth -H geth --classic attach --exec 'admin.nodeInfo.enode' /var/lib/core-geth/geth.ipc` instead, here and in every later attach line.",
          },
          {
            title: "Stop the node cleanly",
            before: "Press Ctrl-C once in the node's terminal and wait, or stop the systemd unit you wrote, for example `sudo systemctl stop core-geth`. Wait until the log prints `Blockchain stopped` and the process exits. If it exits without that line, the stop was not clean: the node recovers at its next start, and its block number can start lower than the one you recorded. Under systemd, `journalctl -u core-geth` shows that log.",
          },
          {
            title: "Install the build",
            code: "ls build/bin/geth &&\n  { test -e /usr/local/bin/geth-v1.12 || sudo mv /usr/local/bin/geth /usr/local/bin/geth-v1.12; } &&\n  sudo install -m 0755 build/bin/geth /usr/local/bin/geth &&\n  geth version",
            after: "Run this in the folder the build step left you in: the first line stops the block anywhere else. Go on only if `geth version` prints the same first line and `Git Commit` line it printed after the build. `geth-v1.12` is the old binary, kept so you can roll back. These commands install over `/usr/local/bin/geth`. If your unit or start command runs a `geth` at another path, use that path wherever they say `/usr/local/bin/geth`.",
          },
          {
            title: "Rename the old P2P node key",
            code: "mv -n ~/.ethereum/classic/geth/nodekey ~/.ethereum/classic/geth/nodekey.old-rotated-$(date +%F)",
            after: "The next start writes a fresh key. If you start the node with `--nodekey` or `--nodekeyhex`, or set `GETH_NODEKEY` or `GETH_NODEKEYHEX`, take that out too: it overrides the file. If the rename prints an error, check the data directory: `geth/nodekey` must not be there when the node starts. On the unit in the Linux run guide, run `sudo -u geth mv -n /var/lib/core-geth/geth/nodekey /var/lib/core-geth/geth/nodekey.old-rotated-$(date +%F)` instead.",
          },
          {
            title: "If this node lists static peers, update the list",
            before: "They are under `[Node.P2P]` in the file you pass with `--config`. Edit it while the node is down:",
            code: "[Node.P2P]\nStaticNodes = [\"enode://<node ID>@<IP>:30303\"]",
            after: "A peer that has already moved has a new ID, so use that. Separate entries with commas. `TrustedNodes` takes the same entries. With no file yet, save these two lines and add `--config` and the file's path to the start command. The client ignores `static-nodes.json`, so move its entries here.",
          },
          {
            title: "Check the flags and settings you start the node with",
            before: "While the node is down, decide MESS, which makes a node resist deep chain reorganizations. An upgrade can change whether a node runs MESS, so set it yourself: `--mess` turns it on and `--mess=false` turns it off. [Which setting fits which operator](https://docs.coregeth.com/operate/mess/#which-setting-fits-which-operator) sets out the choice. An exchange setting its confirmation policy can use the [MESS confirmation calculator](https://docs.coregeth.com/guides/mess-calculator/) to see what that policy asks of an attacker. Give every node you run the same setting. Take out any `--discovery.dns` or `--bootnodes` flag you added on `v1.12`: the `v1.13` line reads its own lists and bootnodes, and with `--discovery.dns` it reads no snap lists. If the node starts with `--config`, delete the file's `BootstrapNodes`, `EthDiscoveryURLs` and `SnapDiscoveryURLs` lines unless you set them yourself: a file `dumpconfig` wrote on `v1.12` has all three, and the node keeps what they name in place of what the `v1.13` line ships. Then go through the [RPC exposure checklist](https://docs.coregeth.com/tutorials/v1.13.0-migration/#re-check-rpc-exposure) for the flags, any `GETH_` environment variables, and the file's `[Node]` settings: `HTTPHost`, `HTTPModules`, `HTTPCors`, `WSHost`, `WSModules` and `WSOrigins`.",
          },
          {
            title: "Start the node",
            code: "sudo systemctl daemon-reload && sudo systemctl start core-geth",
            after: "`core-geth` stands for the systemd unit you wrote, and the reload picks up any flag you changed in that unit. From a terminal, run `geth --classic` instead, with the flags you just checked, `--mess` or `--mess=false` among them, and any other flag you start the node with, then run the next steps in a second terminal.",
          },
          {
            title: "Confirm the move",
            code: "geth attach --exec 'admin.nodeInfo.name' ~/.ethereum/classic/geth.ipc\ngeth attach --exec 'admin.nodeInfo.enode' ~/.ethereum/classic/geth.ipc\ngeth attach --exec 'net.peerCount' ~/.ethereum/classic/geth.ipc\ngeth attach --exec 'eth.blockNumber' ~/.ethereum/classic/geth.ipc",
            after: "If an attach line cannot connect, wait a minute and run it again. The first line must name the version the build printed, followed by the first eight characters of its `Git Commit`. The enode ID must differ from the one you recorded. If it is the same, the node is still on the old key: stop it and redo the rename step. The peer count climbs within minutes. If it is still zero after five minutes, see [Why does the node have no peers?](https://docs.coregeth.com/operate/troubleshooting/#why-does-the-node-have-no-peers) The block number starts near the one you recorded, or lower after an unclean stop, and climbs to the network's head: compare it with a block explorer or another node you run. If it stops climbing short of the head, investigate rather than resync.",
          },
          {
            title: "If other nodes list this node, give them the new ID",
            before: "They can no longer connect to this node, and neither side logs it at the default verbosity. On each one, on `v1.12` or `v1.13`, run these lines with the old ID you recorded, the new ID from the step above, and the address and port the entry already has.",
            code: "geth attach --exec \"admin.removePeer('enode://<old ID>@<IP>:30303')\" ~/.ethereum/classic/geth.ipc\ngeth attach --exec \"admin.addPeer('enode://<new ID>@<IP>:30303')\" ~/.ethereum/classic/geth.ipc\ngeth attach --exec \"admin.peers.map(function(p){return p.enode})\" ~/.ethereum/classic/geth.ipc",
            after: "The first two lines each print `true` and take effect with no restart. The third lists the new ID once the nodes connect. The change lasts only until that node restarts, so put the new ID in that node's own config file too. Send the new ID to anyone else who lists this node. For an entry in `TrustedNodes`, use `admin.removeTrustedPeer` and `admin.addTrustedPeer` in place of the first two lines, or as well as them if the entry is in `StaticNodes` too. Neither opens a connection. [Static and trusted peers](https://docs.coregeth.com/guides/bootnodes-and-discovery/#static-and-trusted-peers) explains the two lists.",
          },
        ],
        guide: {
          label: "Linux users guide",
          href: "https://docs.coregeth.com/tutorials/migration/linux/",
        },
      },
      {
        id: "macos",
        label: "macOS",
        heading: "Build from source and move the node on macOS",
        steps: [
          {
            title: "Optional: if you have not run v1.13 yet, sync one new node first",
            before: "Best practice before you move a `v1.12` node: set up one new node on the `v1.13` line, on a machine of its own beside the nodes you run, with the [install steps](https://coregeth.com/downloads/#install) on coregeth.com, and point no RPC clients or miners at it. It can sync from the network, or start from a copy of a stopped `v1.12` node's data directory without its `geth/nodekey`. Once `eth.syncing` returns `false` and `net.peerCount` is above zero ([How to tell it is done](https://docs.coregeth.com/getting-started/run-classic-node/#how-to-tell-it-is-done)), move each `v1.12` node with the steps below.",
          },
          {
            title: "Install the Xcode Command Line Tools",
            before: "The node can keep running while you install the tools and build.",
            code: "xcode-select --install",
            after: "A window asks whether to install the tools: choose Install, and wait until it says the software was installed. The tools carry Git, the C compiler and `make`. If they are already installed, the command says so: install any update for them that Software Update lists in System Settings, then go on to the next step.",
          },
          {
            title: "On an Apple Silicon Mac, install Go 1.26.8",
            before: "`main` pins Go 1.26.8 in its `build/checksums.txt`, the Go its release builds use. This installs Go 1.26.8 from the Go project's downloads at go.dev, and checks the download against the SHA-256 the same file pins. `uname -m` prints `arm64` on Apple Silicon and `x86_64` on Intel:",
            code: "curl -LO https://go.dev/dl/go1.26.8.darwin-arm64.tar.gz\necho \"a012b25b571bd0138a03dcd25375ceba866fe5ca822f426d2c66a4de56fd3f4b  go1.26.8.darwin-arm64.tar.gz\" | shasum -a 256 -c &&\n  sudo rm -rf /usr/local/go &&\n  sudo tar -C /usr/local -xzf go1.26.8.darwin-arm64.tar.gz &&\n  sudo mkdir -p /usr/local/bin &&\n  sudo ln -sf /usr/local/go/bin/go /usr/local/bin/go &&\n  hash -r &&\n  go version",
            after: "`shasum -a 256 -c` must print `OK`: if it prints `FAILED`, delete the file and download it again rather than installing it. The block replaces any Go in `/usr/local/go`, and `go version` must then print `go1.26.8`.",
          },
          {
            title: "On an Intel Mac, install Go 1.26.8",
            before: "The same release, built for Intel:",
            code: "curl -LO https://go.dev/dl/go1.26.8.darwin-amd64.tar.gz\necho \"186be014105aa6542b767d2c6ed5cca10a0214bdff809ef1724022a8c7894150  go1.26.8.darwin-amd64.tar.gz\" | shasum -a 256 -c &&\n  sudo rm -rf /usr/local/go &&\n  sudo tar -C /usr/local -xzf go1.26.8.darwin-amd64.tar.gz &&\n  sudo mkdir -p /usr/local/bin &&\n  sudo ln -sf /usr/local/go/bin/go /usr/local/bin/go &&\n  hash -r &&\n  go version",
            after: "`shasum -a 256 -c` must print `OK`: if it prints `FAILED`, delete the file and download it again rather than installing it. The block replaces any Go in `/usr/local/go`, and `go version` must then print `go1.26.8`.",
          },
          {
            title: "Check the tools",
            code: "git --version\ngo version\ngcc --version\nmake --version",
            after: "Each line must print a version, and `go version` must print `go1.26.8`. `gcc --version` prints Apple clang, the C compiler on macOS. A line that prints an error names a tool the steps above did not install. If `go version` prints another release, a Go earlier on `PATH`, such as one from Homebrew, runs in its place: uninstall that Go.",
          },
          {
            title: "Build the main branch",
            code: "git clone --branch main --single-branch https://github.com/ethereumclassic/core-geth.git &&\n  cd core-geth &&\n  make geth &&\n  ./build/bin/geth version",
            after: "Go on only if the first line `geth version` prints names version 1.13 or later; a build of `main` ends it with `-unstable`, and two builds a day apart can be different code. Keep the `Git Commit` line: \"Confirm the move\" checks the running node against it. If a `core-geth` folder is already there, run `git pull` in it and build there, or remove it first. The Source tab under [Install](https://coregeth.com/downloads/#install) says why these steps build `main`.",
          },
          {
            title: "Record the node's block number and ID",
            code: "geth attach --exec 'eth.blockNumber' ~/Library/Ethereum/classic/geth.ipc\ngeth attach --exec 'admin.nodeInfo.enode' ~/Library/Ethereum/classic/geth.ipc",
            after: "Keep what this prints: \"Confirm the move\" compares the new ID and block number with it. These commands use the default data directory. For Mordor, use `~/Library/Ethereum/mordor`; if you pass `--datadir`, use yours.",
          },
          {
            title: "Stop the node cleanly",
            before: "Press Ctrl-C once in the node's terminal and wait, or unload the launchd job. [Stop it cleanly](https://docs.coregeth.com/getting-started/run/macos/#7-stop-it-cleanly) has the command for the run guide's agent. Wait until the log prints `Blockchain stopped` and the process exits. If it exits without that line, the stop was not clean: the node recovers at its next start, and its block number can start lower than the one you recorded.",
          },
          {
            title: "Install the build",
            code: "ls build/bin/geth &&\n  { test -e /usr/local/bin/geth-v1.12 || sudo mv /usr/local/bin/geth /usr/local/bin/geth-v1.12; } &&\n  sudo install -m 0755 build/bin/geth /usr/local/bin/geth &&\n  geth version",
            after: "Run this in the folder the build step left you in: the first line stops the block anywhere else. Go on only if `geth version` prints the same first line and `Git Commit` line it printed after the build. `geth-v1.12` is the old binary, kept so you can roll back. These commands install over `/usr/local/bin/geth`. If your unit or start command runs a `geth` at another path, use that path wherever they say `/usr/local/bin/geth`.",
          },
          {
            title: "Rename the old P2P node key",
            code: "mv -n ~/Library/Ethereum/classic/geth/nodekey ~/Library/Ethereum/classic/geth/nodekey.old-rotated-$(date +%F)",
            after: "The next start writes a fresh key. If you start the node with `--nodekey` or `--nodekeyhex`, or set `GETH_NODEKEY` or `GETH_NODEKEYHEX`, take that out too: it overrides the file. If the rename prints an error, check the data directory: `geth/nodekey` must not be there when the node starts.",
          },
          {
            title: "If this node lists static peers, update the list",
            before: "They are under `[Node.P2P]` in the file you pass with `--config`. Edit it while the node is down:",
            code: "[Node.P2P]\nStaticNodes = [\"enode://<node ID>@<IP>:30303\"]",
            after: "A peer that has already moved has a new ID, so use that. Separate entries with commas. `TrustedNodes` takes the same entries. With no file yet, save these two lines and add `--config` and the file's path to the start command. The client ignores `static-nodes.json`, so move its entries here.",
          },
          {
            title: "Check the flags and settings you start the node with",
            before: "While the node is down, decide MESS, which makes a node resist deep chain reorganizations. An upgrade can change whether a node runs MESS, so set it yourself: `--mess` turns it on and `--mess=false` turns it off. [Which setting fits which operator](https://docs.coregeth.com/operate/mess/#which-setting-fits-which-operator) sets out the choice. An exchange setting its confirmation policy can use the [MESS confirmation calculator](https://docs.coregeth.com/guides/mess-calculator/) to see what that policy asks of an attacker. Give every node you run the same setting. Take out any `--discovery.dns` or `--bootnodes` flag you added on `v1.12`: the `v1.13` line reads its own lists and bootnodes, and with `--discovery.dns` it reads no snap lists. If the node starts with `--config`, delete the file's `BootstrapNodes`, `EthDiscoveryURLs` and `SnapDiscoveryURLs` lines unless you set them yourself: a file `dumpconfig` wrote on `v1.12` has all three, and the node keeps what they name in place of what the `v1.13` line ships. Then go through the [RPC exposure checklist](https://docs.coregeth.com/tutorials/v1.13.0-migration/#re-check-rpc-exposure) for the flags, any `GETH_` environment variables, and the file's `[Node]` settings: `HTTPHost`, `HTTPModules`, `HTTPCors`, `WSHost`, `WSModules` and `WSOrigins`.",
          },
          {
            title: "Start the node",
            before: "In a terminal. Add the flags you just checked to this line, `--mess` or `--mess=false` among them, and any other flag you start the node with: a node on `--datadir` started without it starts an empty chain in the default directory. If the node runs under the run guide's launchd agent, start the agent instead, as [Keep it running](https://docs.coregeth.com/getting-started/run/macos/#6-keep-it-running-a-launchd-agent) shows:",
            code: "geth --classic",
            after: "The node runs in this terminal until you stop it, so run the next steps in a second terminal. For Mordor, use `--mordor` in place of `--classic`.",
          },
          {
            title: "Confirm the move",
            code: "geth attach --exec 'admin.nodeInfo.name' ~/Library/Ethereum/classic/geth.ipc\ngeth attach --exec 'admin.nodeInfo.enode' ~/Library/Ethereum/classic/geth.ipc\ngeth attach --exec 'net.peerCount' ~/Library/Ethereum/classic/geth.ipc\ngeth attach --exec 'eth.blockNumber' ~/Library/Ethereum/classic/geth.ipc",
            after: "If an attach line cannot connect, wait a minute and run it again. The first line must name the version the build printed, followed by the first eight characters of its `Git Commit`. The enode ID must differ from the one you recorded. If it is the same, the node is still on the old key: stop it and redo the rename step. The peer count climbs within minutes. If it is still zero after five minutes, see [Why does the node have no peers?](https://docs.coregeth.com/operate/troubleshooting/#why-does-the-node-have-no-peers) The block number starts near the one you recorded, or lower after an unclean stop, and climbs to the network's head: compare it with a block explorer or another node you run. If it stops climbing short of the head, investigate rather than resync.",
          },
          {
            title: "If other nodes list this node, give them the new ID",
            before: "They can no longer connect to this node, and neither side logs it at the default verbosity. On each one, on `v1.12` or `v1.13`, run these lines with the old ID you recorded, the new ID from the step above, and the address and port the entry already has.",
            code: "geth attach --exec \"admin.removePeer('enode://<old ID>@<IP>:30303')\" ~/Library/Ethereum/classic/geth.ipc\ngeth attach --exec \"admin.addPeer('enode://<new ID>@<IP>:30303')\" ~/Library/Ethereum/classic/geth.ipc\ngeth attach --exec \"admin.peers.map(function(p){return p.enode})\" ~/Library/Ethereum/classic/geth.ipc",
            after: "The first two lines each print `true` and take effect with no restart. The third lists the new ID once the nodes connect. The change lasts only until that node restarts, so put the new ID in that node's own config file too. Send the new ID to anyone else who lists this node. For an entry in `TrustedNodes`, use `admin.removeTrustedPeer` and `admin.addTrustedPeer` in place of the first two lines, or as well as them if the entry is in `StaticNodes` too. Neither opens a connection. [Static and trusted peers](https://docs.coregeth.com/guides/bootnodes-and-discovery/#static-and-trusted-peers) explains the two lists.",
          },
        ],
        guide: {
          label: "macOS users guide",
          href: "https://docs.coregeth.com/tutorials/migration/macos/",
        },
      },
      {
        id: "windows",
        label: "Windows",
        heading: "Build from source and move the node on Windows",
        steps: [
          {
            title: "Optional: if you have not run v1.13 yet, sync one new node first",
            before: "Best practice before you move a `v1.12` node: set up one new node on the `v1.13` line, on a machine of its own beside the nodes you run, with the [install steps](https://coregeth.com/downloads/#install) on coregeth.com, and point no RPC clients or miners at it. It can sync from the network, or start from a copy of a stopped `v1.12` node's data directory without its `geth/nodekey`. Once `eth.syncing` returns `false` and `net.peerCount` is above zero ([How to tell it is done](https://docs.coregeth.com/getting-started/run-classic-node/#how-to-tell-it-is-done)), move each `v1.12` node with the steps below.",
          },
          {
            title: "Check for Chocolatey",
            before: "The node can keep running while you install the tools and build. In a PowerShell window opened with Run as administrator, which the Chocolatey steps need:",
            code: "choco --version",
            after: "If PowerShell says the term is not recognized, Chocolatey is not installed: take the next step. If the version starts with 1, skip the next step and take the one after it. If it starts with 2, go to \"Update Chocolatey, then install Git and a C compiler\".",
          },
          {
            title: "If Chocolatey is not installed, install it",
            before: "WinGet, which comes with Windows 11, installs Chocolatey from its publisher:",
            code: "winget install --id Chocolatey.Chocolatey -e --source winget --accept-source-agreements --accept-package-agreements",
            after: "Approve the prompt the installer shows. Then open a new PowerShell window with Run as administrator for the next steps: a window opened before the install does not find Chocolatey.",
          },
          {
            title: "If Chocolatey is version 1, move it to 1.4.0 first",
            code: "choco upgrade chocolatey --version 1.4.0 --allow-downgrade -y",
            after: "Chocolatey's [guide to version 2](https://docs.chocolatey.org/en-us/guides/upgrading-to-chocolatey-v2-v6/) moves a version 1 to 1.4.0 before the upgrade to version 2, which the next step makes. Skip this step on version 2: it would downgrade Chocolatey.",
          },
          {
            title: "Update Chocolatey, then install Git and a C compiler",
            code: "choco upgrade chocolatey -y\nchoco upgrade mingw git -y\nchoco --version",
            after: "`choco upgrade` installs what is missing and moves what is installed to its current release, so an older Chocolatey, Git or MinGW-w64 is updated rather than kept. The last line must print a version starting with 2. If the first line asks for a restart to install .NET Framework 4.8, which Chocolatey 2 needs, restart and run this block again. `mingw` is MinGW-w64, the C compiler cgo needs on Windows. The next two steps can run in this window.",
          },
          {
            title: "Download Go 1.26.8 and check it",
            before: "`main` pins Go 1.26.8 in its `build/checksums.txt`, the Go its release builds use. This downloads the Go 1.26.8 installer from the Go project's downloads at go.dev, and checks the download against the SHA-256 go.dev publishes for the installer. An administrator window opens in `C:\\Windows\\System32`, so the first line moves to your home folder:",
            code: "cd $HOME\nInvoke-WebRequest \"https://go.dev/dl/go1.26.8.windows-amd64.msi\" -OutFile \"go1.26.8.windows-amd64.msi\"\n(Get-FileHash \"go1.26.8.windows-amd64.msi\" -Algorithm SHA256).Hash -eq \"0581e37d54c8f2876c447204737d4aaa3f65f983005c65a1d5186b5f18ae3eca\"",
            after: "The last line must print `True`. If it prints `False`, delete the file and download it again rather than running it.",
          },
          {
            title: "If the check printed True, run the Go installer",
            code: "msiexec /i \"$HOME\\go1.26.8.windows-amd64.msi\" /passive | Out-Null",
            after: "The installer shows a progress bar and takes its defaults, which put Go in `C:\\Program Files\\Go` and on `PATH`. The line returns once it has finished.",
          },
          {
            title: "Check the tools",
            before: "In the same window:",
            code: "$env:Path = [Environment]::GetEnvironmentVariable(\"Path\", \"Machine\") + \";\" + [Environment]::GetEnvironmentVariable(\"Path\", \"User\")\ngit --version\ngo version\ngcc --version",
            after: "The first line reloads `PATH` from Windows' settings, so this window finds what the steps above installed. Each line after it must print a version, and `go version` must print `go1.26.8`. A line saying the term is not recognized names a tool the steps above did not install.",
          },
          {
            title: "Build the main branch",
            code: "cd $HOME\ngit clone --branch main --single-branch https://github.com/ethereumclassic/core-geth.git\ncd core-geth\ngo run build/ci.go install ./cmd/geth\n.\\build\\bin\\geth.exe version",
            after: "Go on only if the first line `geth version` prints names version 1.13 or later; a build of `main` ends it with `-unstable`, and two builds a day apart can be different code. Keep the `Git Commit` line: \"Confirm the move\" checks the running node against it. Run these one line at a time. If `git clone` reports that `core-geth` already exists, run `git pull` in that folder before the build line. The Source tab under [Install](https://coregeth.com/downloads/#install) says why these steps build `main`.",
          },
          {
            title: "Record the node's block number and ID",
            before: "In PowerShell, in the folder that holds the node's `geth.exe`, such as `C:\\core-geth`:",
            code: ".\\geth.exe attach --exec 'eth.blockNumber' \\\\.\\pipe\\geth.ipc\n.\\geth.exe attach --exec 'admin.nodeInfo.enode' \\\\.\\pipe\\geth.ipc",
            after: "Keep what this prints: \"Confirm the move\" compares the new ID and block number with it.",
          },
          {
            title: "Stop the node cleanly",
            before: "Press Ctrl+C once in the node's console window and wait. A window opened from the Startup folder then asks `Terminate batch job (Y/N)?`; type `Y`. Under a service wrapper, stop it with that tool. Wait until the log prints `Blockchain stopped` and the process exits. If it exits without that line, the stop was not clean: the node recovers at its next start, and its block number can start lower than the one you recorded.",
          },
          {
            title: "Install the build",
            before: "In the same folder:",
            code: "Rename-Item .\\geth.exe geth-v1.12.exe\nCopy-Item \"$HOME\\core-geth\\build\\bin\\geth.exe\" .\\geth.exe\n.\\geth.exe version",
            after: "Go on only if `.\\geth.exe version` prints the same first line and `Git Commit` line the build printed. `geth-v1.12.exe` is the old binary, kept so you can roll back. The second line copies the build from `core-geth` in your home folder, where the build step cloned it.",
          },
          {
            title: "Rename the old P2P node key",
            code: "$key = \"$env:LOCALAPPDATA\\Ethereum\\classic\\geth\\nodekey\"\nRename-Item $key \"nodekey.old-rotated-$(Get-Date -Format yyyy-MM-dd)\"",
            after: "The next start writes a fresh key. If you start the node with `--nodekey` or `--nodekeyhex`, or set `GETH_NODEKEY` or `GETH_NODEKEYHEX`, take that out too: it overrides the file. If the rename prints an error, check the data directory: `geth/nodekey` must not be there when the node starts. The commands use the default data directory, but the node uses `%USERPROFILE%\\AppData\\Roaming\\Ethereum\\classic` instead if an older `AppData\\Roaming\\Ethereum` folder exists and is not empty. For Mordor, use `mordor` in place of `classic`; if you pass `--datadir`, use yours.",
          },
          {
            title: "If this node lists static peers, update the list",
            before: "They are under `[Node.P2P]` in the file you pass with `--config`. Edit it while the node is down:",
            code: "[Node.P2P]\nStaticNodes = [\"enode://<node ID>@<IP>:30303\"]",
            after: "A peer that has already moved has a new ID, so use that. Separate entries with commas. `TrustedNodes` takes the same entries. With no file yet, save these two lines and add `--config` and the file's path to the start command. The client ignores `static-nodes.json`, so move its entries here. Save the file as UTF-8 with no byte order mark, after this edit and any other. A byte order mark, or UTF-16, stops the start with `invalid TOML syntax`.",
          },
          {
            title: "Check the flags and settings you start the node with",
            before: "While the node is down, decide MESS, which makes a node resist deep chain reorganizations. An upgrade can change whether a node runs MESS, so set it yourself: `--mess` turns it on and `--mess=false` turns it off. [Which setting fits which operator](https://docs.coregeth.com/operate/mess/#which-setting-fits-which-operator) sets out the choice. An exchange setting its confirmation policy can use the [MESS confirmation calculator](https://docs.coregeth.com/guides/mess-calculator/) to see what that policy asks of an attacker. Give every node you run the same setting. Take out any `--discovery.dns` or `--bootnodes` flag you added on `v1.12`: the `v1.13` line reads its own lists and bootnodes, and with `--discovery.dns` it reads no snap lists. If the node starts with `--config`, delete the file's `BootstrapNodes`, `EthDiscoveryURLs` and `SnapDiscoveryURLs` lines unless you set them yourself: a file `dumpconfig` wrote on `v1.12` has all three, and the node keeps what they name in place of what the `v1.13` line ships. Then go through the [RPC exposure checklist](https://docs.coregeth.com/tutorials/v1.13.0-migration/#re-check-rpc-exposure) for the flags, any `GETH_` environment variables, and the file's `[Node]` settings: `HTTPHost`, `HTTPModules`, `HTTPCors`, `WSHost`, `WSModules` and `WSOrigins`.",
          },
          {
            title: "Start the node",
            before: "In PowerShell, in the folder that holds the node's `geth.exe`. Add the flags you just checked to this line, `--mess` or `--mess=false` among them, and any other flag you start the node with: a node on `--datadir` started without it starts an empty chain in the default directory. If the node starts from the Startup folder, as the run guide's [Keep it running](https://docs.coregeth.com/getting-started/run/windows/#6-keep-it-running-start-it-when-you-sign-in) sets up, run that command file instead:",
            code: ".\\geth.exe --classic",
            after: "The node runs in this window until you stop it, so run the next steps in a second PowerShell window, in the same folder. For Mordor, use `--mordor` in place of `--classic`.",
          },
          {
            title: "Confirm the move",
            code: ".\\geth.exe attach --exec 'admin.nodeInfo.name' \\\\.\\pipe\\geth.ipc\n.\\geth.exe attach --exec 'admin.nodeInfo.enode' \\\\.\\pipe\\geth.ipc\n.\\geth.exe attach --exec 'net.peerCount' \\\\.\\pipe\\geth.ipc\n.\\geth.exe attach --exec 'eth.blockNumber' \\\\.\\pipe\\geth.ipc",
            after: "If an attach line cannot connect, wait a minute and run it again. The first line must name the version the build printed, followed by the first eight characters of its `Git Commit`. The enode ID must differ from the one you recorded. If it is the same, the node is still on the old key: stop it and redo the rename step. The peer count climbs within minutes. If it is still zero after five minutes, see [Why does the node have no peers?](https://docs.coregeth.com/operate/troubleshooting/#why-does-the-node-have-no-peers) The block number starts near the one you recorded, or lower after an unclean stop, and climbs to the network's head: compare it with a block explorer or another node you run. If it stops climbing short of the head, investigate rather than resync.",
          },
          {
            title: "If other nodes list this node, give them the new ID",
            before: "They can no longer connect to this node, and neither side logs it at the default verbosity. On each one, on `v1.12` or `v1.13`, run these lines with the old ID you recorded, the new ID from the step above, and the address and port the entry already has.",
            code: ".\\geth.exe attach --exec \"admin.removePeer('enode://<old ID>@<IP>:30303')\" \\\\.\\pipe\\geth.ipc\n.\\geth.exe attach --exec \"admin.addPeer('enode://<new ID>@<IP>:30303')\" \\\\.\\pipe\\geth.ipc\n.\\geth.exe attach --exec \"admin.peers.map(function(p){return p.enode})\" \\\\.\\pipe\\geth.ipc",
            after: "The first two lines each print `true` and take effect with no restart. The third lists the new ID once the nodes connect. The change lasts only until that node restarts, so put the new ID in that node's own config file too. Send the new ID to anyone else who lists this node. For an entry in `TrustedNodes`, use `admin.removeTrustedPeer` and `admin.addTrustedPeer` in place of the first two lines, or as well as them if the entry is in `StaticNodes` too. Neither opens a connection. [Static and trusted peers](https://docs.coregeth.com/guides/bootnodes-and-discovery/#static-and-trusted-peers) explains the two lists.",
          },
        ],
        guide: {
          label: "Windows users guide",
          href: "https://docs.coregeth.com/tutorials/migration/windows/",
        },
      },
    ],
  },
]
