const { zokou } = require("../framework/zokou");
const moment = require("moment-timezone");
const { getBuffer } = require("../framework/dl/Function");
const { default: axios } = require('axios');

const runtime = function (seconds) { 
 seconds = Number(seconds); 
 var d = Math.floor(seconds / (3600 * 24)); 
 var h = Math.floor((seconds % (3600 * 24)) / 3600); 
 var m = Math.floor((seconds % 3600) / 60); 
 var s = Math.floor(seconds % 60); 
 var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " d, ") : ""; 
 var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " h, ") : ""; 
 var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " m, ") : ""; 
 var sDisplay = s > 0 ? s + (s == 1 ? " second" : " s") : ""; 
 return dDisplay + hDisplay + mDisplay + sDisplay; 
 } 


zokou({ nomCom: 'vcf',
    desc: 'To check runtime',
    Categorie: 'General',
    reaction: '📄', 
    fromMe: 'true', 


  },
  async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre } = commandeOptions;

                 await repondre(`*_please wait..._*`) 

   


  }
);


zokou({ nomCom: 'getall',
    desc: 'To check runtime',
    Categorie: 'General',
    reaction: '😎', 
    fromMe: 'true', 


  },
  async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre } = commandeOptions;

                 await repondre(`*_getting all members_*`) 

   


  }
);



zokou({ nomCom: 'channel',
    desc: 'To check runtime',
    Categorie: 'General',
    reaction: '🍁', 
    fromMe: 'true', 


  },
  async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre } = commandeOptions;

                 await repondre(`https://whatsapp.com/channel/0029VaiMm7d4yltT51HS1T1G`) 

   


  }
);


zokou({ nomCom: 'channel1',
    desc: 'To check runtime',
    Categorie: 'General',
    reaction: '🍁', 
    fromMe: 'true', 


  },
  async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre } = commandeOptions;

                 await repondre(`top here to join my second channel https://whatsapp.com/channel/0029VaiMm7d4yltT51HS1T1G`) 

   


  }
);


zokou({ nomCom: 'update',
    desc: 'To check runtime',
    Categorie: 'General',
    reaction: '🤷', 
    fromMe: 'true', 


  },
  async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre } = commandeOptions;

                 await repondre(`*_𝔹𝕆ℕ𝕀ℙℍ𝔸ℂ𝔼~𝕄𝔻 is running...... Love it_*`) 

   


  }
);


zokou({ nomCom: 'vision',
    desc: 'To check runtime',
    Categorie: 'General',
    reaction: '🔎', 
    fromMe: 'true', 


  },
  async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre } = commandeOptions;

                 await repondre(`*_BONIPHACE-MD_*`) 

   


  }
);


  
zokou({ nomCom: 'group',
    desc: 'To check runtime',
    Categorie: 'General',
    reaction: '🤫', 
    fromMe: 'true', 


  },
  async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre } = commandeOptions;

                 await repondre(`top a link to join lucky md group https://chat.whatsapp.com/KrseXOOYu2nKOkht0qonhY`) 

   


  }
)


zokou({ nomCom: 'scriptkidies',
    desc: 'To check runtime',
    Categorie: 'General',
    reaction: '🐅', 
    fromMe: 'true', 


  },
  async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre } = commandeOptions;

                 await repondre(`top here to Boniphace script kiddies group https://whatsapp.com/channel/0029VaiMm7d4yltT51HS1T1G`) 

   


  }
)


zokou({ nomCom: 'boniphace',
    desc: 'To check runtime',
    Categorie: 'General',
    reaction: '🤷', 
    fromMe: 'true', 


  },
  async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre } = commandeOptions;

                 await repondre(`*_YESS....I'M LISTENING TO YOU_*`) 

   


  }
);


zokou({ nomCom: 'me',
    desc: 'To check runtime',
    Categorie: 'General',
    reaction: '🤷', 
    fromMe: 'true', 


  },
  async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre } = commandeOptions;

                 await repondre(`*_255716661569,255767528416*`) 

   


  }
);


zokou({ nomCom: 'problem',
    desc: 'To check runtime',
    Categorie: 'General',
    reaction: '🤷', 
    fromMe: 'true', 


  },
  async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre } = commandeOptions;

                 await repondre(`*_for any problem you can find me for more help
                 telegram👇👇
              https://t.me/boniphaceTech
                
                Thank you for choosing BONIPHACE-MD_*`) 

   


  }
);

