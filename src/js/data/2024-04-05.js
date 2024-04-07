dataSetVersion = "2024-04-05"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Faction",
    key: "faction",
    tooltip: "Check this to restrict to certain factions",
    checked: false,
    sub: [
    { name: "Astral Express", key: "AE" },
     { name: "Stellaron Hunters", key: "SH" },
	  { name: "Herta Space Station", key: "HSS" },
	  { name: "Jarilo-VI", key: "J6" },
	  { name: "Xianzhou Luofu", key: "XL" },
	  { name: "Penacony", key: "PN" },
	  { name: "Interastral Peace Corporation", key: "IPC" },
	  { name: "Cosmic", key: "CS" }, 
	  { name: "Annihilation Gang", key: "AG" }
    ]
  },
  
  {
    name: "Remove Major Story NPCs",
    key: "rNPCs",
    tooltip: "Check this to restrict to only playable characters.",
	  checked: false
  },
  {
    name: "Dan Heng and Imbibitor Lunae are the same character",
    key: "dan",
    tooltip: "Check this if you consider Dan Heng and Imbititor Lunae to be the same entity and not separate.",
	  checked: true
  },
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Caelus",
    img: "caelus.png",
    opts: {
      faction: ["AE"]
    }
  },
  {
    name: "Stelle",
    img: "stelle.png",
    opts: {
      faction: ["AE"],
    }
  },
  {
    name: "Dan Heng",
    img: "danheng.png",
    opts: {
      faction: ["AE"]
    }
  },
  {
    name: "March 7th",
    img: "elysia.png",
    opts: {
      faction: ["AE"],
    }
  },
  {
    name: "Himeko",
    img: "nightglow.png",
    opts: {
      faction: ["AE"],
    }
  },
  {
    name: "Welt Yang",
    img: "shatteredstars.png",
    opts: {
      faction: ["AE"],
    }
  },
  {
    name: "Blade",
    img: "yingxing.png",
    opts: {
      faction: ["SH"],
    }
  },
  {
    name: "Kafka",
    img: "kafka.png",
    opts: {
      faction: ["SH"],
    }
  },
  {
    name: "Silver Wolf",
    img: "bronie.png",
    opts: {
      faction: ["SH"],
    }
  },
  {
    name: "Arlan",
    img: "arlan.png",
    opts: {
      faction: ["HSS"],
    }
  },
  {
    name: "Asta",
    img: "mona.png",
    opts: {
      faction: ["HSS"],
    }
  },
  {
    name: "Herta",
    img: "kurukuru.png",
    opts: {
      faction: ["HSS"],
    }
  },
  {
    name: "Ruan Mei",
    img: "ruanmei.png",
    opts: {
      faction: ["HSS"],
    }
  },
  {
    name: "Hook",
    img: "hook.png",
    opts: {
      faction: ["J6"]
    }
  },
  {
    name: "Luka",
    img: "luka.png",
    opts: {
      faction: ["J6"],
    }
  },
  {
    name: "Lynx",
    img: "lynx.png",
    opts: {
      faction: ["J6"],
    }
  },
  {
    name: "Natasha",
    img: "cioara.png",
    opts: {
      faction: ["J6"],
    }
  },
  {
    name: "Pela",
    img: "pela.png",
    opts: {
      faction: ["J6"],
    }
  },
  {
    name: "Sampo",
    img: "koski.png",
    opts: {
      faction: ["J6"],
    }
  },
  {
    name: "Serval",
    img: "serval.png",
    opts: {
      faction: ["J6"],
    }
  },
  {
    name: "Bronya",
    img: "bronyaoneechan.png",
    opts: {
      faction: ["J6"],
    }
  },
  {
    name: "Clara",
    img: "clara.png",
    opts: {
      faction: ["J6"],
    }
  },
  {
    name: "Gepard",
    img: "gepard.png",
    opts: {
      faction: ["J6"],
    }
  },
  {
    name: "Seele",
    img: "veliona.png",
    opts: {
      faction: ["J6"],
    }
  },
  {  
    name: "Guinaifen",
    img: "gui.png",
    opts: {
      faction: ["XL"],
    }
  },
  {
    name: "Hanya",
    img: "hanya.png",
    opts: {
      faction: ["XL"],
    }
  },
  {
    name: "Qingque",
    img: "qingque.png",
    opts: {
      faction: ["XL"],
    }
  },
  {
    name: "Sushang",
    img: "li.png",
    opts: {
      faction: ["XL"],
    }
  },
  {
    name: "Tingyun",
    img: "deadlol.png",
    opts: {
      faction: ["XL"]
    }
  },
  {
    name: "Xueyi",
    img: "xueyi.png",
    opts: {
      faction: ["XL"],
    }
  },
  {
    name: "Yukong",
    img: "yukong.png",
    opts: {
      faction: ["XL"],
    }
  },
  {
    name: "Bailu",
    img: "bailu.png",
    opts: {
      faction: ["XL"],
    }
  },
  {
    name: "Dan Heng • Imbibitor Lunae",
    img: "daniel.png",
    opts: {
      faction: ["XL"],
	  dan: true
    }
  },
  {
    name: "Fu Xuan",
    img: "fx.png",
    opts: {
      faction: ["XL"],
    }
  },
  {
    name: "Huo Huo",
    img: "huohuo.png",
    opts: {
      faction: ["XL"],
    }
  },
  {
    name: "Jing Yuan",
    img: "cyyu.png",
    opts: {
      faction: ["XL"],
    }
  },
  {
    name: "Jingliu",
    img: "amalee.png",
    opts: {
      faction: ["XL"],
    }
  },
  {
    name: "Luocha",
    img: "otto.png",
    opts: {
      faction: ["XL"],
    }
  },
  {
    name: "Yanqing",
    img: "mafeima.png",
    opts: {
      faction: ["XL"],
    }
  },
  {
    name: "Gallagher",
    img: "soder.png",
    opts: {
      faction: ["PN"],
    }
  },
  {
    name: "Misha",
    img: "misha.png",
    opts: {
      faction: ["PN"],
    }
  },
  {
    name: "Black Swan",
    img: "blackswan.png",
    opts: {
      faction: ["PN"],
    }
  },
  {
    name: "Sparkle",
    img: "hanabi.png",
    opts: {
      faction: ["PN"],
    }
  },
  {
    name: "Robin",
    img: "robin.png",
    opts: {
      faction: ["PN"],
    }
  },
  {
    name: "Topaz",
    img: "andNumby.png",
    opts: {
      faction: ["IPC"],
    }
  },
  {
    name: "Aventurine",
    img: "aventurine.png",
    opts: {
      faction: ["IPC"],
    }
  },
  {
    name: "Acheron",
    img: "HoT.png",
    opts: {
      faction: ["CS"],
    }
  },
  {
    name: "Boothill",
    img: "yeehaw.png",
    opts: {
      faction: ["CS"],
    }
  },
  {
    name: "Argenti",
    img: "argenti.png",
    opts: {
      faction: ["CS"]
    }
  },
  {
    name: "Dr. Ratio",
    img: "zeropoints.png",
    opts: {
      faction: ["CS"]
    }
  },
  {
    name: "Pom Pom",
    img: "pompom.png",
    opts: {
      faction: ["AE"],
      rNPCs: true
    },
  },
  {
    name: "Duke Inferno",
    img: "inferno.png",
    opts: {
      faction: ["AG"],
      rNPCs: true
    },
  },
  {
    name: "Akash",
    img: "akash.png",
    opts: {
      faction: ["AG"],
      rNPCs: true
    },
  },
  {
    name: "Dubra",
    img: "dubra.png",
    opts: {
      faction: ["AG"],
      rNPCs: true
    },
  },
  {
    name: "Caterina",
    img: "niggurath.png",
    opts: {
      faction: ["AG"],
      rNPCs: true
    },
  },
  {
    name: "Constance",
    img: "constance.png",
    opts: {
      faction: ["AG"],
      rNPCs: true
    },
  },
  {
    name: "Cocolia",
    img: "cocolia.png",
    opts: {
      faction: ["J6"],
      rNPCs: true
    },
  },
  {
    name: "Oleg",
    img: "oleg.png",
    opts: {
      faction: ["J6"],
      rNPCs: true
    },
  },
  {
    name: "Svarog",
    img: "berserker.png",
    opts: {
      faction: ["J6"],
      rNPCs: true
    },
  },
  {
    name: "Baiheng",
    img: "baiheng.png",
    opts: {
      faction: ["XL"],
      rNPCs: true
    },
  },
  {
    name: "Phantylia",
    img: "phantylia.png",
    opts: {
      faction: ["XL"],
      rNPCs: true
    },
  },
  {
    name: "Firefly",
    img: "firefly.png",
    opts: {
      faction: ["SH"],
      rNPCs: true
    },
  },
  {
    name: "Sam",
    img: "sam.png",
    opts: {
      faction: ["SH"],
      rNPCs: true
    },
  },
  {
    name: "Elio",
    img: "elio.png",
    opts: {
      faction: ["SH"],
      rNPCs: true
    },
  },
  {
    name: "Sunday",
    img: "sunday.png",
    opts: {
      faction: ["PN"],
      rNPCs: true
    },
  },
  {
    name: "Jade",
    img: "jade.png",
    opts: {
      faction: ["IPC"],
      rNPCs: true
    },
  },
  {
    name: "Owlbert",
    img: "owlbert.png",
    opts: {
      faction: ["IPC"],
      rNPCs: true
    },
  },
  {
    name: "Screwllum",
    img: "screwllum.png",
    opts: {
      faction: ["HSS"],
      rNPCs: true
    },
  },

];
