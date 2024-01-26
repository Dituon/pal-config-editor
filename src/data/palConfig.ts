export interface PalConfig {
  Difficulty: string | null;
  DayTimeSpeedRate: number;
  NightTimeSpeedRate: number;
  ExpRate: number;
  PalCaptureRate: number;
  PalSpawnNumRate: number;
  PalDamageRateAttack: number;
  PalDamageRateDefense: number;
  PlayerDamageRateAttack: number;
  PlayerDamageRateDefense: number;
  PlayerStomachDecreaceRate: number;
  PlayerStaminaDecreaceRate: number;
  PlayerAutoHPRegeneRate: number;
  PlayerAutoHpRegeneRateInSleep: number;
  PalStomachDecreaceRate: number;
  PalStaminaDecreaceRate: number;
  PalAutoHPRegeneRate: number;
  PalAutoHpRegeneRateInSleep: number;
  BuildObjectDamageRate: number;
  BuildObjectDeteriorationDamageRate: number;
  CollectionDropRate: number;
  CollectionObjectHpRate: number;
  CollectionObjectRespawnSpeedRate: number;
  EnemyDropItemRate: number;
  DeathPenalty: string;
  bEnablePlayerToPlayerDamage: boolean;
  bEnableFriendlyFire: boolean;
  bEnableInvaderEnemy: boolean;
  bActiveUNKO: boolean;
  bEnableAimAssistPad: boolean;
  bEnableAimAssistKeyboard: boolean;
  DropItemMaxNum: number;
  DropItemMaxNum_UNKO: number;
  BaseCampMaxNum: number;
  BaseCampWorkerMaxNum: number;
  DropItemAliveMaxHours: number;
  bAutoResetGuildNoOnlinePlayers: boolean;
  AutoResetGuildTimeNoOnlinePlayers: number;
  GuildPlayerMaxNum: number;
  PalEggDefaultHatchingTime: number;
  WorkSpeedRate: number;
  bIsMultiplay: boolean;
  bIsPvP: boolean;
  bCanPickupOtherGuildDeathPenaltyDrop: boolean;
  bEnableNonLoginPenalty: boolean;
  bEnableFastTravel: boolean;
  bIsStartLocationSelectByMap: boolean;
  bExistPlayerAfterLogout: boolean;
  bEnableDefenseOtherGuildPlayer: boolean;
  CoopPlayerMaxNum: number;
  ServerPlayerMaxNum: number;
  ServerName: string;
  ServerDescription: string;
  AdminPassword: string;
  ServerPassword: string;
  PublicPort: number;
  PublicIP: string;
  RCONEnabled: boolean;
  RCONPort: number;
  Region: string;
  bUseAuth: boolean;
  BanListURL: string;
}

export const defaultPalConfig: PalConfig = {
  Difficulty: "None",
  DayTimeSpeedRate: 1,
  NightTimeSpeedRate: 1,
  ExpRate: 1,
  PalCaptureRate: 1,
  PalSpawnNumRate: 1,
  PalDamageRateAttack: 1,
  PalDamageRateDefense: 1,
  PlayerDamageRateAttack: 1,
  PlayerDamageRateDefense: 1,
  PlayerStomachDecreaceRate: 1,
  PlayerStaminaDecreaceRate: 1,
  PlayerAutoHPRegeneRate: 1,
  PlayerAutoHpRegeneRateInSleep: 1,
  PalStomachDecreaceRate: 1,
  PalStaminaDecreaceRate: 1,
  PalAutoHPRegeneRate: 1,
  PalAutoHpRegeneRateInSleep: 1,
  BuildObjectDamageRate: 1,
  BuildObjectDeteriorationDamageRate: 1,
  CollectionDropRate: 1,
  CollectionObjectHpRate: 1,
  CollectionObjectRespawnSpeedRate: 1,
  EnemyDropItemRate: 1,
  DeathPenalty: "Item",
  bEnablePlayerToPlayerDamage: false,
  bEnableFriendlyFire: false,
  bEnableInvaderEnemy: true,
  bActiveUNKO: false,
  bEnableAimAssistPad: true,
  bEnableAimAssistKeyboard: false,
  DropItemMaxNum: 3000,
  DropItemMaxNum_UNKO: 100,
  BaseCampMaxNum: 128,
  BaseCampWorkerMaxNum: 15,
  DropItemAliveMaxHours: 1,
  bAutoResetGuildNoOnlinePlayers: false,
  AutoResetGuildTimeNoOnlinePlayers: 72,
  GuildPlayerMaxNum: 20,
  PalEggDefaultHatchingTime: 2,
  WorkSpeedRate: 1,
  bIsMultiplay: false,
  bIsPvP: false,
  bCanPickupOtherGuildDeathPenaltyDrop: false,
  bEnableNonLoginPenalty: true,
  bEnableFastTravel: true,
  bIsStartLocationSelectByMap: true,
  bExistPlayerAfterLogout: false,
  bEnableDefenseOtherGuildPlayer: false,
  CoopPlayerMaxNum: 4,
  ServerPlayerMaxNum: 32,
  ServerName: "Default Palworld Server",
  ServerDescription: '',
  AdminPassword: '',
  ServerPassword: '',
  PublicPort: 8211,
  PublicIP: '',
  RCONEnabled: false,
  RCONPort: 25575,
  Region: '',
  bUseAuth: true,
  BanListURL: 'https://api.palworldgame.com/api/banlist.txt'
}

export enum InputType {
  text = "text",
  number = "number",
  checkbox = "checkbox",
  select = "select",
}

export interface ConfigItem<T> {
  title: string,
  desc: string,
  default: T,
  type: keyof typeof InputType,
  min?: number,
  max?: number,
  suffix?: string,
  step?: number,
  options?: {
    title: string,
    desc: string,
    key: string,
  }[],
  icon?: string,
}

export type PalConfigInfo = {
  [K in keyof PalConfig]: ConfigItem<PalConfig[K]>
}


