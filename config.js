const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID: process.env.SESSION_ID || "6mpDGTDJ#N4TZQpX95JhfrsCScV9j7fpw03IMjaJvaU3MCnahxm8",
  OWNER_NUM: process.env.OWNER_NUM || "94718108364",
  PREFIX: process.env.PREFIX || ".",
  ALIVE_IMG: process.env.ALIVE_IMG || "https://i.postimg.cc/CMN1L03G/IMG-20250205-WA0002-3.jpg",
  ALIVE_MSG: process.env.ALIVE_MSG || "*Yes I'm Alive Now!* 🙈\n\n\n*JOIN OUR MV GROUP ➜* https://chat.whatsapp.com/Lp91cySvXueFChmygbmdCF\n\n*JOIN CARTOON GROUP ➜ https://chat.whatsapp.com/CurZjvmwN735el7Wdomqsl*\n\n\n> 𝐌𝐚𝐝𝐞 𝐛𝐲 *𝐊𝐀𝐕𝐈𝐃𝐔 𝐑𝐀𝐒𝐀𝐍𝐆𝐀*  🎗️",
  AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "false",
  MODE: process.env.MODE || "inbox",
  AUTO_VOICE: process.env.AUTO_VOICE || "true",
  AUTO_STICKER: process.env.AUTO_STICKER || "false",
  AUTO_REPLY: process.env.AUTO_REPLY || "true",
};
//=
