import {PalConfigInfo} from "@/data/palConfig";

export const palConfigInfoZhCn: PalConfigInfo = {
  Difficulty: {
    title: "游戏难度",
    desc: "设置游戏难度",
    default: "None",
    type: "text"
  },
  DayTimeSpeedRate: {
    title: "白天流逝速度",
    desc: "设置白天时间的流逝速度",
    default: 1,
    type: "number",
    min: 0.1,
    max: 5
  },
  NightTimeSpeedRate: {
    title: "夜晚流逝速度",
    desc: "设置夜晚时间的流逝速度",
    default: 1,
    type: "number",
    min: 0.1,
    max: 5
  },
  ExpRate: {
    title: "经验倍率",
    desc: "设置经验获取的倍率",
    default: 1,
    type: "number",
    min: 0.1,
    max: 5
  },
  PalCaptureRate: {
    title: "捕捉概率倍率",
    desc: "设置帕鲁捕捉的概率",
    default: 1,
    type: "number",
    min: 0.5,
    max: 2
  },
  PalSpawnNumRate: {
    title: "帕鲁生成数量倍率",
    desc: "设置帕鲁生成的数量倍率",
    default: 1,
    type: "number",
    min: 0.5,
    max: 2
  },
  PalDamageRateAttack: {
    title: "帕鲁攻击伤害倍率",
    desc: "设置帕鲁攻击伤害的倍率",
    default: 1,
    type: "number",
    min: 0.1,
    max: 5
  },
  PalDamageRateDefense: {
    title: "帕鲁承受伤害倍率",
    desc: "设置帕鲁承受伤害的倍率",
    default: 1,
    type: "number",
    min: 0.1,
    max: 5
  },
  PlayerDamageRateAttack: {
    title: "玩家攻击伤害倍率",
    desc: "设置玩家攻击伤害的倍率",
    default: 1,
    type: "number",
    min: 0.1,
    max: 5
  },
  PlayerDamageRateDefense: {
    title: "玩家承受伤害倍率",
    desc: "设置玩家承受伤害的倍率",
    default: 1,
    type: "number",
    min: 0.1,
    max: 5
  },
  PlayerStomachDecreaceRate: {
    title: "玩家饱食度降低倍率",
    desc: "设置玩家饱食度降低的倍率",
    default: 1,
    type: "number",
    min: 0.1,
    max: 5
  },
  PlayerStaminaDecreaceRate: {
    title: "玩家耐力倍率",
    desc: "设置玩家耐力降低的倍率",
    default: 1,
    type: "number",
    min: 0.1,
    max: 5
  },
  PlayerAutoHPRegeneRate: {
    title: "玩家生命值恢复倍率",
    desc: "设置玩家生命值自动恢复的倍率",
    default: 1,
    type: "number",
    min: 0.1,
    max: 5
  },
  PlayerAutoHpRegeneRateInSleep: {
    title: "玩家睡眠时生命值恢复倍率",
    desc: "设置玩家在睡眠中生命值自动恢复的倍率",
    default: 1,
    type: "number",
    min: 0.1,
    max: 5
  },
  PalStomachDecreaceRate: {
    title: "帕鲁饱食度降低倍率",
    desc: "设置帕鲁饱食度降低的倍率",
    default: 1,
    type: "number",
    min: 0.1,
    max: 5
  },
  PalStaminaDecreaceRate: {
    title: "帕鲁耐力降低倍率",
    desc: "设置帕鲁耐力降低的倍率",
    default: 1,
    type: "number",
    min: 0.1,
    max: 5
  },
  PalAutoHPRegeneRate: {
    title: "帕鲁生命值恢复倍率",
    desc: "设置帕鲁生命值自动恢复的倍率",
    default: 1,
    type: "number",
    min: 0.1,
    max: 5
  },
  PalAutoHpRegeneRateInSleep: {
    title: "帕鲁睡眠时生命值恢复倍率",
    desc: "设置帕鲁在睡眠中生命值自动恢复的倍率",
    default: 1,
    type: "number",
    min: 0.1,
    max: 5
  },
  BuildObjectDamageRate: {
    title: "建筑物伤害倍率",
    desc: "设置建筑物受到的伤害的倍率",
    default: 1,
    type: "number",
    min: 0.5,
    max: 3
  },
  BuildObjectDeteriorationDamageRate: {
    title: "建筑物损坏速度倍率",
    desc: "设置建筑物损坏的速度的倍率",
    default: 1,
    type: "number",
    min: 0,
    max: 10
  },
  CollectionDropRate: {
    title: "可采集物品掉落倍率",
    desc: "设置可采集物品掉落的倍率",
    default: 1,
    type: "number",
    min: 0.1,
    max: 5
  },
  CollectionObjectHpRate: {
    title: "可采集物品生命值倍率",
    desc: "设置可采集物品的生命值倍率",
    default: 1,
    type: "number",
    min: 0.5,
    max: 3
  },
  CollectionObjectRespawnSpeedRate: {
    title: "可采集物品生成速度倍率",
    desc: "设置可采集物品生成速度的倍率",
    default: 1,
    type: "number",
    min: 0.5,
    max: 3
  },
  EnemyDropItemRate: {
    title: "敌人掉落倍率",
    desc: "设置敌人掉落物品的倍率",
    default: 1,
    type: "number",
    min: 0.1,
    max: 5
  },
  DeathPenalty: {
    title: "死亡惩罚",
    desc: "设置死亡时的惩罚方式",
    default: "Item",
    type: "text"
  },
  bEnablePlayerToPlayerDamage: {
    title: "启用玩家对玩家的伤害",
    desc: "启用或禁用玩家对玩家的伤害",
    default: false,
    type: "checkbox"
  },
  bEnableFriendlyFire: {
    title: "启用友军伤害",
    desc: "启用或禁用友军之间的伤害",
    default: false,
    type: "checkbox"
  },
  bEnableInvaderEnemy: {
    title: "启用入侵者敌人",
    desc: "启用或禁用入侵者",
    default: true,
    type: "checkbox"
  },
  bActiveUNKO: {
    title: "激活UNKO",
    desc: "激活或禁用UNKO功能",
    default: false,
    type: "checkbox"
  },
  bEnableAimAssistPad: {
    title: "启用手柄瞄准辅助",
    desc: "启用或禁用手柄瞄准辅助",
    default: true,
    type: "checkbox"
  },
  bEnableAimAssistKeyboard: {
    title: "启用键鼠瞄准辅助",
    desc: "启用或禁用键鼠瞄准辅助",
    default: false,
    type: "checkbox"
  },
  DropItemMaxNum: {
    title: "掉落物品最大数量",
    desc: "设置地图上掉落物品的最大数量",
    default: 3000,
    type: "number",
    min: 0,
    max: Infinity
  },
  DropItemMaxNum_UNKO: {
    title: "UNKO掉落物品最大数量",
    desc: "设置UNKO地图上掉落物品的最大数量",
    default: 100,
    type: "number",
    min: 0,
    max: Infinity
  },
  BaseCampMaxNum: {
    title: "据点最大数量",
    desc: "设置据点的最大数量",
    default: 128,
    type: "number",
    min: 0,
    max: Infinity
  },
  BaseCampWorkerMaxNum: {
    title: "据点工作者最大数量",
    desc: "设置据点的最大工作者数量",
    default: 15,
    type: "number",
    min: 0,
    max: Infinity
  },
  DropItemAliveMaxHours: {
    title: "掉落物品存在最大时长",
    desc: "设置掉落物品在地图上存活的最大时长",
    default: 1,
    type: "number",
    min: 0,
    max: Infinity
  },
  bAutoResetGuildNoOnlinePlayers: {
    title: "自动重置无在线玩家的公会",
    desc: "启用或禁用自动重置无在线玩家的公会",
    default: false,
    type: "checkbox"
  },
  AutoResetGuildTimeNoOnlinePlayers: {
    title: "无在线玩家公会自动重置时间",
    desc: "设置无在线玩家的公会自动重置的时间",
    default: 72.000000,
    type: "number",
    min: 0,
    max: Infinity
  },
  GuildPlayerMaxNum: {
    title: "公会玩家最大数量",
    desc: "设置公会的最大玩家数量",
    default: 20,
    type: "number",
    min: 0,
    max: Infinity
  },
  PalEggDefaultHatchingTime: {
    title: "帕鲁蛋默认孵化时间",
    desc: "设置帕鲁蛋的默认孵化时间",
    default: 72.000000,
    type: "number",
    min: 0,
    max: Infinity
  },
  WorkSpeedRate: {
    title: "工作速度倍率",
    desc: "设置工作速度的倍率",
    default: 1,
    type: "number",
    min: 0.1,
    max: 5
  },
  bIsMultiplay: {
    title: "是否多人模式",
    desc: "启用或禁用多人游戏",
    default: false,
    type: "checkbox"
  },
  bIsPvP: {
    title: "是否开启PvP",
    desc: "启用或禁用玩家之间的PvP模式",
    default: false,
    type: "checkbox"
  },
  bCanPickupOtherGuildDeathPenaltyDrop: {
    title: "是否可拾取其他公会玩家掉落物",
    desc: "启用或禁用可以拾取其他公会的死亡惩罚物品",
    default: false,
    type: "checkbox"
  },
  bEnableNonLoginPenalty: {
    title: "是否启用不登录惩罚",
    desc: "启用或禁用非登录时的惩罚",
    default: true,
    type: "checkbox"
  },
  bEnableFastTravel: {
    title: "是否开启快速传送",
    desc: "启用或禁用快速传送功能",
    default: true,
    type: "checkbox"
  },
  bIsStartLocationSelectByMap: {
    title: "开始位置由地图选择",
    desc: "启用或禁用开始位置由地图选择",
    default: true,
    type: "checkbox"
  },
  bExistPlayerAfterLogout: {
    title: "登出后玩家是否仍然存在",
    desc: "启用或禁用登出后保留玩家角色",
    default: false,
    type: "checkbox"
  },
  bEnableDefenseOtherGuildPlayer: {
    title: "是否启用防御其他公会玩家功能",
    desc: "启用或禁用防御其他公会玩家",
    default: false,
    type: "checkbox"
  },
  CoopPlayerMaxNum: {
    title: "合作玩家最大数量",
    desc: "设置合作玩家的最大数量",
    default: 4,
    type: "number",
    min: 1,
    max: 8,
    step: 1,
    suffix: '人'
  },
  ServerPlayerMaxNum: {
    title: "服务器玩家最大数量",
    desc: "设置服务器的最大玩家数量",
    default: 32,
    type: "number",
    min: 1,
    max: 32,
    step: 1,
    suffix: '人'
  },
  ServerName: {
    title: "服务器名称",
    desc: "设置服务器的名称",
    default: "Default Palworld Server",
    type: "text"
  },
  ServerDescription: {
    title: "服务器简介",
    desc: "设置服务器的简介",
    default: "",
    type: "text"
  },
  AdminPassword: {
    title: "管理员密码",
    desc: "设置管理员密码",
    default: "",
    type: "text"
  },
  ServerPassword: {
    title: "服务器密码",
    desc: "设置服务器密码",
    default: "",
    type: "text"
  },
  PublicPort: {
    title: "公开端口",
    desc: "设置服务器的公开端口",
    default: 8211,
    type: "number",
    min: 1,
    max: 65535,
    step: 1,
  },
  PublicIP: {
    title: "公开IP",
    desc: "设置服务器的公开IP",
    default: "",
    type: "text"
  },
  RCONEnabled: {
    title: "启用RCON",
    desc: "启用或禁用RCON功能",
    default: false,
    type: "checkbox"
  },
  RCONPort: {
    title: "RCON端口",
    desc: "设置RCON的端口",
    default: 25575,
    type: "number",
    min: 1,
    max: 65535,
    step: 1,
  },
  Region: {
    title: "地区",
    desc: "设置服务器所在地区",
    default: "",
    type: "text"
  },
  bUseAuth: {
    title: "使用身份验证",
    desc: "启用或禁用身份验证功能",
    default: true,
    type: "checkbox"
  },
  BanListURL: {
    title: "封禁列表URL",
    desc: "设置封禁列表的URL",
    default: "https://api.palworldgame.com/api/banlist.txt",
    type: "text"
  },
}
