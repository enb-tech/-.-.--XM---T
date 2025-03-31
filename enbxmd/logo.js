const { zokou } = require("../framework/zokou");
var mumaker = require("mumaker");

const logoCommands = [
  {
    nomCom: "hacker",
    categorie: "Logo",
    reaction: "👨🏿‍💻",
    makerUrl: "https://en.ephoto360.com/create-anonymous-hacker-avatars-cyan-neon-677.html"
  },
  {
    nomCom: "dragonball",
    categorie: "Logo",
    reaction: "🐉",
    makerUrl: "https://en.ephoto360.com/create-dragon-ball-style-text-effects-online-809.html"
  },
  {
    nomCom: "naruto",
    categorie: "Logo",
    reaction: "⛩",
    makerUrl: "https://en.ephoto360.com/naruto-shippuden-logo-style-text-effect-online-808.html"
  },
  {
    nomCom: "boom",
    categorie: "Logo",
    reaction: "💥",
    makerUrl: "https://en.ephoto360.com/boom-text-comic-style-text-effect-675.html"
  },
  {
    nomCom: "water",
    categorie: "Logo",
    reaction: "💦",
    makerUrl: "https://en.ephoto360.com/create-water-effect-text-online-295.html"
  },
  {
    nomCom: "underwater",
    categorie: "Logo",
    reaction: "💦",
    makerUrl: "https://en.ephoto360.com/3d-underwater-text-effect-online-682.html"
  },
  {
    nomCom: "4d",
    categorie: "Logo",
    reaction: "👁️‍🗨️",
    makerUrl: "https://en.ephoto360.com/create-glowing-text-effects-online-706.html"
  },
  {
    nomCom: "boken",
    categorie: "Logo",
    reaction: "🔺",
    makerUrl: "https://en.ephoto360.com/bokeh-text-effect-86.html"
  },
  {
nomCom: "starnight",
    categorie: "Logo",
    reaction: "🌃",
    makerUrl: "https://en.ephoto360.com/stars-night-online-84.html"
  },
  {
nomCom: "gold",
    categorie: "Logo",
    reaction: "🎨",
    makerUrl: "https://en.ephoto360.com/modern-gold-purple-175.html"
  },
  {
    nomCom: "xmd",
    categorie: "Logo",
    reaction: "🛰",
    makerUrl: "https://en.ephoto360.com/light-text-effect-futuristic-technology-style-648.html"
  },
  {
nomCom: "3d",
    categorie: "Logo",
    reaction: "🎟",
    makerUrl: "https://en.ephoto360.com/create-3d-gradient-text-effect-online-600.html"
  },
  {
    nomCom: "luxury",
    categorie: "Logo",
    reaction: "🌄",
    makerUrl: "https://en.ephoto360.com/create-a-luxury-gold-text-effect-online-594.html"
  },
  {
    nomCom: "american",
    categorie: "Logo",
    reaction: "🇱🇷",
    makerUrl: "https://en.ephoto360.com/free-online-american-flag-3d-text-effect-generator-725.html"
  },
  {
nomCom: "matrix",
    categorie: "Logo",
    reaction: "🔳",
    makerUrl: "https://en.ephoto360.com/matrix-text-effect-154.html"
  },
  {
nomCom: "enb1",
    categorie: "Logo",
    reaction: "⚗️",
    makerUrl: "https://en.ephoto360.com/1917-style-text-effect-523.html"
  },
  {
    nomCom: "embroider",
    categorie: "Logo",
    reaction: "📍",
    makerUrl: "https://en.ephoto360.com/embroider-159.html"
  },
  {
nomCom: "thunder",
    categorie: "Logo",
    reaction: "🔷",
    makerUrl: "https://en.ephoto360.com/thunder-text-effect-online-97.html"
  },
  {
    nomCom: "foggyglass",
    categorie: "Logo",
    reaction: "🟥",
    makerUrl: "https://en.ephoto360.com/handwritten-text-on-foggy-glass-online-680.html"
  },
  {
    nomCom: "silver",
    categorie: "Logo",
    reaction: "㊙",
    makerUrl: "https://en.ephoto360.com/create-glossy-silver-3d-text-effect-online-802.html"
  },
  {
    nomCom: "wetglass",
    categorie: "Logo",
    reaction: "🪟",
    makerUrl: "https://en.ephoto360.com/write-text-on-wet-glass-online-589.html"
  }
];

// Process each logo command
logoCommands.forEach(({ nomCom, categorie, reaction, makerUrl }) => {
  zokou({ nomCom, categorie, reaction }, async (dest, zk, commandeOptions) => {
    const { arg, repondre, ms, prefixe } = commandeOptions;

    if (!arg || arg == "") {
      repondre(`Exemple of using commande:\n ${prefixe}${nomCom} enb-xmd`);
      return;
    }

    try {
      repondre("Processing...");
      const img = await mumaker.textpro(makerUrl, arg.join(" "));
      await zk.sendMessage(dest, { image: { url: img.image }, caption: `
⁠⁠⁠⁠
╭──────────━⊷
║ ENB-XMD-BOT
╰──────────━⊷
╭──────────━⊷
  ғᴏʟʟᴏᴡ ᴏᴜʀ ᴄʜᴀɴɴᴇʟ ғᴏʀ ʙᴏᴛ ᴜᴘᴅᴀᴛᴇs
 
  ᴛᴀᴘ ᴏɴ ᴛʜᴇ ʟɪɴᴋ: https://whatsapp.com/channel/0029VbAUgMN8PgsNmEEyBs1t
╰──────────━⊷

> ENB-XMD-BOT` }, { quoted: ms });
    } catch (e) {
      repondre(`🥵🥵 ${e}`);
    }
  });
});
      
