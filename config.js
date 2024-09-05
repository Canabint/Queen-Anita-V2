//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "calebdavid194@gmail.com";
global.location = "Port Harcourt, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "2349074717388";
global.owner = process.env.OWNER_NUMBER || "2349074717388";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "true";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUxTUkszUFBvbUNyejJiMnJWQ2VrUU8veHh2ZUpkek9Wek05a2xXNnNrQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYWlubEZ3ZzVCc3dvL01WRTEyU084MHRETWw1UUtPVC8yQkNEVWd6aXhuTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrS1BMY1NYTUpJcGwrQlhZdG9IL2tyQnU5ckxPdHZwV3FvQzBldlRhUlU4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHWitjTFM4UitBWHdwYzdQajQvcThPRmN3c1Z6R2VsTlVxMi9FWFVuZ0FnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVEa29hZXNPWVBaYkNzZ3NFVXRwM2MxWnNEaFI5c05DQTFBSjQ4TFpxVXM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InQycEpSVjNnZXBHTGtxdlVjRTd1T3ltL3hxMDdsSzdmUUs3eldpQk9rWDA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUkwUGZuWTFUTjVpK0sreGtYdG1ITjZjMFhDRkVzVVFkaGYyQmFzMlhraz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkVYcDJibWV3b1FhTURIUGU5eHRXYUs3a1RzRE1hZ0NxdFcxdkZRZHZSST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1Lb3VsNlZCMnByZ0dsZkxBOFpGRzloZXhnQmtpbkNlZGFOZjNtU2JyUmpSUmRoamdXUGV1VkQyTGdIVWJWWVIyT2JJbURTQ09CVm5CaHp4dmdtZGpRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTAsImFkdlNlY3JldEtleSI6IlU2c3IxWTFsR0NnV2paUDNlUFNBZXJEM050dUZDZE5oRmthVXZQL2NERFE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMiwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMyLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjVTNV9Ud0RYUkV5cjdtY3Z3cmNrVVEiLCJwaG9uZUlkIjoiNTdmMmJkNzgtYTBlZS00NDY2LWI3M2ItNWM3ZWMyMmYxM2Q4IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhuMXZobjVZankxK2JLWFlvcWVrcjBKcFliQT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQ0NXMGVzV3B2dXFFT3BZQU9DVmhocUlaUkk9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiUFhFTUE1WUIiLCJtZSI6eyJpZCI6IjIzNDkwNzQ3MTczODg6MjdAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09iOHY0WUVFSTJ1NkxZR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjlpaFZqRkJpNzlHUnM1N1MybVk3TFFteHpVbThjMERPUGFEQW9xQmRnR009IiwiYWNjb3VudFNpZ25hdHVyZSI6InYzaDZuNndxUDhRMlpvaDNhTmM3SW1INGZGWnExTzZNRkRDSjFqUXpIeW0rSU5Qa0lNbUlLYVBaV3ZaTkVYY2N6T05PcmxTZVNSWG1PL1Izd2RBbGhnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJQOHBKak1IMytwcTZqYVoyT1JtOE9hanhaUnZLU0w1dk96MWdiZ1c1Z2FLK0x3NFZyRzNtM1RjbGZSV0JKYUhKU2FUUUFjWHZJRTNDbDhhYjlCYWVnQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDkwNzQ3MTczODg6MjdAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZllvVll4UVl1L1JrYk9lMHRwbU95MEpzYzFKdkhOQXpqMmd3S0tnWFlCaiJ9fV0sInBsYXRmb3JtIjoiaXBob25lIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI1NTY4Nzk2fQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`DRACULA's PRINCESS-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "DRACULA's PRINCESS",
  ownername: process.env.OWNER_NAME || "DRACULA",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
