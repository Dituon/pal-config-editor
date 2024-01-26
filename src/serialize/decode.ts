import {PalConfig} from "@/data/palConfig";

const REGEX = /OptionSettings=\(([^)]+)\)/

export function decodeConfig(str: string): PalConfig {
  const match = str.match(REGEX)

  if (!match || !match[1]) {
    throw new Error("Invalid config")
  }

  const configItems = match[1]
  const config: Record<string, string | number | boolean> = {}

  const keyValuePairs = configItems.split(',')

  for (const pair of keyValuePairs) {
    const [k, v] = pair.split('=')
    if (v === undefined) continue
    switch (v) {
      case 'True':
        config[k.trim()] = true
        continue
      case 'False':
        config[k.trim()] = false
        continue
    }
    config[k.trim()] = isNaN(Number(v.trim())) ?
      v.trim().replace('"', '') : +v.trim()
  }

  return config as any as PalConfig
}

export default decodeConfig
