import {PalConfigInfo} from "@/data/palConfig";

export const palConfigInfoEnUs: PalConfigInfo = {
  Difficulty: {
    title: "Game Difficulty",
    desc: "Set the difficulty level of the game",
    default: "None",
    type: "select",
    options: [
      {
        title: "Easy",
        desc: "No difficulty settings",
        key: "None"
      },
      {
        title: "Hard",
        desc: "Challenging mode",
        key: "Difficulty"
      }
    ],
    icon: "mdi-robot-angry"
  },
  DayTimeSpeedRate: {
    title: "Daytime Speed Rate",
    desc: "Set the speed at which daytime elapses",
    default: 1,
    type: "number",
    min: 0.1,
    max: 5,
    icon: "mdi-sun-clock"
  },
  NightTimeSpeedRate: {
    title: "Nighttime Speed Rate",
    desc: "Set the speed at which nighttime elapses",
    default: 1,
    type: "number",
    min: 0.1,
    max: 5,
    icon: "mdi-cloud-clock"
  },
  ExpRate: {
    title: "Experience Rate",
    desc: "Set the multiplier for experience gain",
    default: 1,
    type: "number",
    min: 0.1,
    max: 5,
    icon: "mdi-poker-chip"
  },
  PalCaptureRate: {
    title: "Capture Probability Rate",
    desc: "Set the probability multiplier for Pal capture",
    default: 1,
    type: "number",
    min: 0.5,
    max: 2,
    icon: "mdi-pokeball"
  },
  PalSpawnNumRate: {
    title: "Pal Spawn Quantity Rate",
    desc: "Set the quantity multiplier for Pal spawns",
    default: 1,
    type: "number",
    min: 0.5,
    max: 2,
    icon: "mdi-cat"
  },
  PalDamageRateAttack: {
    title: "Pal Attack Damage Rate",
    desc: "Set the multiplier for Pal attack damage",
    default: 1,
    type: "number",
    min: 0.1,
    max: 5,
    icon: "mdi-sword"
  },
  PalDamageRateDefense: {
    title: "Pal Damage Defense Rate",
    desc: "Set the multiplier for Pal damage defense",
    default: 1,
    type: "number",
    min: 0.1,
    max: 5,
    icon: "mdi-shield-sword"
  },
  PlayerDamageRateAttack: {
    title: "Player Attack Damage Rate",
    desc: "Set the multiplier for player attack damage",
    default: 1,
    type: "number",
    min: 0.1,
    max: 5,
    icon: 'mdi-sword'
  },
  PlayerDamageRateDefense: {
    title: "Player Damage Defense Rate",
    desc: "Set the multiplier for player damage defense",
    default: 1,
    type: "number",
    min: 0.1,
    max: 5,
    icon: 'mdi-shield-sword',
  },
  PlayerStomachDecreaceRate: {
    title: "Player Hunger Decrease Rate",
    desc: "Set the multiplier for player hunger decrease",
    default: 1,
    type: "number",
    min: 0.1,
    max: 5,
    icon: 'mdi-food-drumstick',
  },
  PlayerStaminaDecreaceRate: {
    title: "Player Stamina Decrease Rate",
    desc: "Set the multiplier for player stamina decrease",
    default: 1,
    type: "number",
    min: 0.1,
    max: 5,
    icon: 'mdi-one-up',
  },
  PlayerAutoHPRegeneRate: {
    title: "Player Auto HP Regeneration Rate",
    desc: "Set the multiplier for player automatic HP regeneration",
    default: 1,
    type: "number",
    min: 0.1,
    max: 5,
    icon: 'mdi-heart-half-full',
  },
  PlayerAutoHpRegeneRateInSleep: {
    title: "Player Sleep HP Regeneration Rate",
    desc: "Set the multiplier for player HP regeneration during sleep",
    default: 1,
    type: "number",
    min: 0.1,
    max: 5,
    icon: 'mdi-bed'
  },
  PalStomachDecreaceRate: {
    title: "Pal Hunger Decrease Rate",
    desc: "Set the multiplier for Pal hunger decrease",
    default: 1,
    type: "number",
    min: 0.1,
    max: 5,
    icon: 'mdi-food-drumstick',
  },
  PalStaminaDecreaceRate: {
    title: "Pal Stamina Decrease Rate",
    desc: "Set the multiplier for Pal stamina decrease",
    default: 1,
    type: "number",
    min: 0.1,
    max: 5,
    icon: 'mdi-one-up',
  },
  PalAutoHPRegeneRate: {
    title: "Pal Auto HP Regeneration Rate",
    desc: "Set the multiplier for Pal automatic HP regeneration",
    default: 1,
    type: "number",
    min: 0.1,
    max: 5,
    icon: 'mdi-heart-half-full',
  },
  PalAutoHpRegeneRateInSleep: {
    title: "Pal Sleep HP Regeneration Rate",
    desc: "Set the multiplier for Pal HP regeneration during sleep",
    default: 1,
    type: "number",
    min: 0.1,
    max: 5,
    icon: 'mdi-bed-empty',
  },
  BuildObjectDamageRate: {
    title: "Building Damage Rate",
    desc: "Set the multiplier for damage to buildings",
    default: 1,
    type: "number",
    min: 0.5,
    max: 3,
    icon: 'mdi-home-minus',
  },
  BuildObjectDeteriorationDamageRate: {
    title: "Building Deterioration Speed Rate",
    desc: "Set the multiplier for building deterioration speed (0 means buildings won't deteriorate automatically)",
    default: 1,
    type: "number",
    min: 0,
    max: 10,
    icon: 'mdi-home-clock',
  },
  CollectionDropRate: {
    title: "Collectible Item Drop Rate",
    desc: "Set the multiplier for collectible item drop rate",
    default: 1,
    type: "number",
    min: 0.1,
    max: 5,
    icon: 'mdi-pickaxe',
  },
  CollectionObjectHpRate: {
    title: "Collectible Item Health Rate",
    desc: "Set the multiplier for collectible item health",
    default: 1,
    type: "number",
    min: 0.5,
    max: 3,
    icon: 'mdi-heart-half-full',
  },
  CollectionObjectRespawnSpeedRate: {
    title: "Collectible Item Respawn Speed Rate",
    desc: "Set the multiplier for collectible item respawn speed",
    default: 1,
    type: "number",
    min: 0.5,
    max: 3,
    icon: 'mdi-map-clock',
  },
  EnemyDropItemRate: {
    title: "Enemy Drop Item Rate",
    desc: "Set the multiplier for enemy drop item rate",
    default: 1,
    type: "number",
    min: 0.1,
    max: 3,
    icon: 'mdi-treasure-chest',
  },
  DeathPenalty: {
    title: "Death Penalty",
    desc: "Set the penalty for death",
    default: "Item",
    type: "select",
    options: [
      {
        title: "No Penalty",
        desc: "Do not drop any items",
        key: "None",
      },
      {
        title: "Item Only",
        desc: "Drop items only",
        key: "Item",
      },
      {
        title: "Item and Equipment",
        desc: "Simultaneously drop items and equipment",
        key: "ItemAndEquipment",
      },
      {
        title: "All",
        desc: "Start from scratch",
        key: "All",
      },
    ],
    icon: 'mdi-skull',
  },
  bEnablePlayerToPlayerDamage: {
    title: "Enable PVP Damage",
    desc: "Enable or disable player-to-player damage",
    default: false,
    type: "checkbox",
    icon: 'mdi-sword-cross',
  },
  bEnableFriendlyFire: {
    title: "Friendly Fire",
    desc: "Enable or disable friendly fire (take damage near campfires, etc.)",
    default: false,
    type: "checkbox",
    icon: 'mdi-fire-alert',
  },
  bEnableInvaderEnemy: {
    title: "Enable Invader Events",
    desc: "Enable or disable invader events (wild creatures invading the base, etc.)",
    default: true,
    type: "checkbox",
    icon: 'mdi-axe-battle',
  },
  bActiveUNKO: {
    title: "Enable Pal Feces",
    desc: "Pal will poop",
    default: false,
    type: "checkbox",
    icon: 'mdi-emoticon-poop',
  },
  bEnableAimAssistPad: {
    title: "Enable Gamepad Aim Assist",
    desc: "Enable or disable gamepad aim assist",
    default: true,
    type: "checkbox",
    icon: 'mdi-gamepad-variant',
  },
  bEnableAimAssistKeyboard: {
    title: "Enable Keyboard Aim Assist",
    desc: "Enable or disable keyboard aim assist",
    default: false,
    type: "checkbox",
    icon: 'mdi-mouse',
  },
  DropItemMaxNum: {
    title: "Max Number of Dropped Items",
    desc: "Set the maximum number of dropped items on the map",
    default: 3000,
    type: "number",
    min: 0,
    max: 5000,
    step: 1,
    suffix: ' items',
    icon: 'mdi-sack',
  },
  DropItemMaxNum_UNKO: {
    title: "Max Number of Pal Feces",
    desc: "Set the maximum number of dropped Pal feces on the map",
    default: 100,
    type: "number",
    min: 0,
    max: 5000,
    step: 1,
    suffix: ' piles',
    icon: 'mdi-emoticon-poop',
  },
  BaseCampMaxNum: {
    title: "Max Number of Base Camps",
    desc: "Set the maximum number of base camps",
    default: 128,
    type: "number",
    min: 0,
    max: 256,
    step: 1,
    suffix: ' camps',
    icon: 'mdi-home-map-marker',
  },
  BaseCampWorkerMaxNum: {
    title: "Max Number of Workers at Base Camp",
    desc: "Set the maximum number of Pal workers at base camps",
    default: 15,
    type: "number",
    min: 0,
    max: 20,
    step: 1,
    suffix: ' workers',
    icon: 'mdi-cat',
  },
  DropItemAliveMaxHours: {
    title: "Max Lifespan of Dropped Items",
    desc: "Set the maximum lifespan of dropped items on the map",
    default: 1,
    type: "number",
    min: 0,
    suffix: ' hours',
    icon: 'mdi-delete-clock',
  },
  bAutoResetGuildNoOnlinePlayers: {
    title: "Auto Reset Guild without Online Players",
      desc: "Enable or disable auto reset of guilds without online players",
  default: false,
      type: "checkbox",
      icon: 'mdi-home-off',
  },
  AutoResetGuildTimeNoOnlinePlayers: {
    title: "Auto Reset Time for Guilds without Online Players",
      desc: "Set the time for auto reset of guilds without online players",
  default: 72,
      type: "number",
      suffix: " hours",
      min: 0,
      icon: 'mdi-home-clock'
  },
  GuildPlayerMaxNum: {
    title: "Guild Maximum Player Count",
      desc: "Set the maximum number of players in a guild",
  default: 20,
      type: "number",
      suffix: " people",
      min: 0,
      icon: 'mdi-account-details',
  },
  PalEggDefaultHatchingTime: {
    title: "Default Hatching Time for Pal Eggs",
      desc: "Set the default hatching time for Pal eggs",
  default: 72,
      type: "number",
      suffix: " hours",
      min: 0,
      max: 72,
      icon: 'mdi-egg-easter',
  },
  WorkSpeedRate: {
    title: "Work Speed Rate",
      desc: "Set the work speed multiplier (affecting production speed of items on conveyor belts)",
  default: 1,
      type: "number",
      min: 0.1,
      max: 5,
      icon: 'mdi-wrench-clock',
  },
  bIsMultiplay: {
    title: "Multiplayer Mode",
      desc: "Enable or disable multiplayer mode",
  default: false,
      type: "checkbox",
      icon: 'mdi-account-group',
  },
  bIsPvP: {
    title: "Allow PvP",
      desc: "Enable or disable player versus player (PvP) mode",
  default: false,
      type: "checkbox",
      icon: 'mdi-sword-cross',
  },
  bCanPickupOtherGuildDeathPenaltyDrop: {
    title: "Pickup Drops from Other Guild Players",
      desc: "Enable or disable the ability to pick up death penalty items from other guild players",
  default: false,
      type: "checkbox",
      icon: 'mdi-sack',
  },
  bEnableNonLoginPenalty: {
    title: "Non-Login Penalty",
      desc: "Enable or disable penalty for not logging in",
  default: true,
      type: "checkbox",
      icon: 'mdi-account-cancel',
  },
  bEnableFastTravel: {
    title: "Fast Travel",
      desc: "Enable or disable fast travel feature",
  default: true,
      type: "checkbox",
      icon: 'mdi-map-marker-path',
  },
  bIsStartLocationSelectByMap: {
    title: "Select Initial Spawn Point",
      desc: "Enable or disable selecting the starting location through the map",
  default: true,
      type: "checkbox",
      icon: 'mdi-map-marker-up',
  },
  bExistPlayerAfterLogout: {
    title: "Keep Player Data After Logout",
      desc: "Enable or disable keeping player data after logging out",
  default: false,
      type: "checkbox",
      icon: 'mdi-account-sync',
  },
  bEnableDefenseOtherGuildPlayer: {
    title: "Enable Defense Against Other Guild Players",
      desc: "Enable or disable the ability to defend against other guild players",
  default: false,
      type: "checkbox",
      icon: 'mdi-shield-crown',
  },
  CoopPlayerMaxNum: {
    title: "Max Number of Players with Invite Code",
      desc: "Maximum number of players with an invite code (server-specific)",
  default: 4,
      type: "number",
      min: 1,
      max: 8,
      step: 1,
      suffix: ' people',
      icon: 'mdi-account-group',
  },
  ServerPlayerMaxNum: {
    title: "Server Maximum Player Count",
      desc: "Set the maximum number of players on the server",
  default: 32,
      type: "number",
      min: 1,
      max: 32,
      step: 1,
      suffix: ' people',
      icon: 'mdi-account-group',
  },
  ServerName: {
    title: "Server Name",
      desc: "Set the name of the server",
  default: "Default Palworld Server",
      type: "text",
      icon: 'mdi-server-network'
  },
  ServerDescription: {
    title: "Server Description",
      desc: "Set the description of the server",
  default: "",
      type: "text",
      icon: 'mdi-information',
  },
  AdminPassword: {
    title: "Admin Password",
      desc: "Set the administrator password",
  default: "",
      type: "text",
      icon: 'mdi-account-lock',
  },
  ServerPassword: {
    title: "Server Password",
      desc: "Set the server password",
  default: "",
      type: "text",
      icon: 'mdi-lock',
  },
  PublicPort: {
    title: "Public Port",
      desc: "Set the public port for the server",
  default: 8211,
      type: "number",
      min: 1,
      max: 65535,
      step: 1,
      icon: 'mdi-serial-port'
  },
  PublicIP: {
    title: "Public IP",
      desc: "Set the public IP address of the server",
  default: "",
      type: "text",
      icon: 'mdi-ip-network',
  },
  RCONEnabled: {
    title: "Enable RCON",
      desc: "Enable or disable RCON functionality",
  default: false,
      type: "checkbox",
      icon: 'mdi-remote',
  },
  RCONPort: {
    title: "RCON Port",
      desc: "Set the RCON port",
  default: 25575,
      type: "number",
      min: 1,
      max: 65535,
      step: 1,
      icon: 'mdi-serial-port'
  },
  Region: {
    title: "Region",
      desc: "Set the region where the server is located",
  default: "",
      type: "text",
      icon: 'mdi-earth',
  },
  bUseAuth: {
    title: "Use Authentication",
      desc: "Enable or disable authentication",
  default: true,
      type: "checkbox",
      icon: 'mdi-shield-account',
  },
  BanListURL: {
    title: "Ban List URL",
      desc: "Set the URL for the ban list",
  default: "https://api.palworldgame.com/api/banlist.txt",
      type: "text",
      icon: 'mdi-view-list',
  }
}

export default palConfigInfoEnUs
