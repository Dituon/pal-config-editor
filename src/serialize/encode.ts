import {PalConfig} from "@/data/palConfig";

const INI_HEADER = `; This configuration file is a sample of the default server settings.
; Changes to this file will NOT be reflected on the server.
; To change the server settings, modify Pal/Saved/Config/WindowsServer/PalWorldSettings.ini.
[/Script/Pal.PalGameWorldSettings]
`

export function encodeConfig(config: PalConfig): string {
  const content = Object.entries(config).map(c => {
    const [k, v] = c
    switch (k) {
      case 'Difficulty':
      case 'DeathPenalty':
        return `${k}=${v}`
    }

    if (typeof v === 'number') {
      return `${k}=${formatNumber(v)}`
    }

    if (typeof v === 'string') {
      return `${k}="${v}"`
    }

    if (typeof v === 'boolean') {
      return `${k}=${v ? 'True' : 'False'}`
    }

    throw new Error('unknown type')
  }).join(',')
  return `${INI_HEADER}OptionSettings=(${content})`
}

export default encodeConfig

function formatNumber(num: number): string {
  return Number.isInteger(num) ? num.toString() : num.toFixed(6)
}
