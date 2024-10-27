const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348148444260";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_19_37_10_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTU1LFxuICAgICAgICA3LFxuICAgICAgICA0OSxcbiAgICAgICAgNDYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgOTcsXG4gICAgICAgIDYyLFxuICAgICAgICAyMixcbiAgICAgICAgMTU3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNzgsXG4gICAgICAgIDIsXG4gICAgICAgIDkyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDUwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDY5LFxuICAgICAgICA2OCxcbiAgICAgICAgNzYsXG4gICAgICAgIDEyMixcbiAgICAgICAgNDgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjM0LFxuICAgICAgICAzNSxcbiAgICAgICAgMjMsXG4gICAgICAgIDg0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA4NCxcbiAgICAgICAgNTEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTk5LFxuICAgICAgICA0MyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTI2LFxuICAgICAgICA4NixcbiAgICAgICAgNjMsXG4gICAgICAgIDYsXG4gICAgICAgIDUxLFxuICAgICAgICAyMyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTQxLFxuICAgICAgICA1NyxcbiAgICAgICAgNDMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTM2LFxuICAgICAgICA1LFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDcyLFxuICAgICAgICA5MSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDUyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDYzLFxuICAgICAgICA5NCxcbiAgICAgICAgMTg4LFxuICAgICAgICA3NSxcbiAgICAgICAgNjgsXG4gICAgICAgIDUwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDYwLFxuICAgICAgICAyMjksXG4gICAgICAgIDExNCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDMzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDM3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDQyLFxuICAgICAgICAxODIsXG4gICAgICAgIDEwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMixcbiAgICAgICAgMTUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDYxLFxuICAgICAgICAzMyxcbiAgICAgICAgOCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNTksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjI2LFxuICAgICAgICA0NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjQxLFxuICAgICAgICA0MixcbiAgICAgICAgMTY2LFxuICAgICAgICA4OSxcbiAgICAgICAgMTMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNTksXG4gICAgICAgIDI1NSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgODksXG4gICAgICAgIDQwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDI1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDM1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDM0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgOTcsXG4gICAgICAgIDY4LFxuICAgICAgICA0OSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxODYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTMwLFxuICAgICAgICA5MyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTAsXG4gICAgICAgIDU0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDU5LFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTAxLFxuICAgICAgICAzNixcbiAgICAgICAgMTgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDExNixcbiAgICAgICAgMTUzLFxuICAgICAgICAxNDksXG4gICAgICAgIDc0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEwMixcbiAgICAgICAgNDEsXG4gICAgICAgIDExOSxcbiAgICAgICAgNixcbiAgICAgICAgMjIzLFxuICAgICAgICAyNixcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDcxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNjUsXG4gICAgICAgIDYzLFxuICAgICAgICAyNSxcbiAgICAgICAgMjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA3NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTEwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTQsXG4gICAgICAgIDY3LFxuICAgICAgICA4MyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDI1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDUwLFxuICAgICAgICAxODUsXG4gICAgICAgIDU3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDgyLFxuICAgICAgICAyMjksXG4gICAgICAgIDExNyxcbiAgICAgICAgODUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxODUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNzcsXG4gICAgICAgIDExOCxcbiAgICAgICAgNzQsXG4gICAgICAgIDM4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNDksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjM2LFxuICAgICAgICA4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDYyLFxuICAgICAgICA3MCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMyxcbiAgICAgICAgMjMyLFxuICAgICAgICA0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDM4LFxuICAgICAgICA0MyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTc4LFxuICAgICAgICA2OSxcbiAgICAgICAgNzgsXG4gICAgICAgIDIwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjE4LFxuICAgICAgICA1MixcbiAgICAgICAgMzksXG4gICAgICAgIDQ3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTIsXG4gICAgICAgIDk3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEzNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTcxLFxuICBcImFkdlNlY3JldEtleVwiOiBcImd2QjR6VjJ0dStBR1gvU0VOcWdXcUgxZEttMlVEUUxLaDIydDJDeHQvdXM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIk5PSllERW9HUVRtNWlMSVA4UVVNUEFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYzIyZjQ4MjMtNTc1Yi00ZjVhLTg5ZmUtOTI3ZWJkMDRhMmVjXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDM4LFxuICAgICAgNzIsXG4gICAgICAyNTIsXG4gICAgICAyMTksXG4gICAgICAyMjYsXG4gICAgICAxNTUsXG4gICAgICAzNCxcbiAgICAgIDEyNixcbiAgICAgIDEzOSxcbiAgICAgIDEyMyxcbiAgICAgIDQ1LFxuICAgICAgMjMyLFxuICAgICAgOTksXG4gICAgICA3MixcbiAgICAgIDIzMSxcbiAgICAgIDE0LFxuICAgICAgNTAsXG4gICAgICA3MCxcbiAgICAgIDExOSxcbiAgICAgIDE2MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTYsXG4gICAgICAxOTksXG4gICAgICAxMjUsXG4gICAgICAxMzUsXG4gICAgICAxMjcsXG4gICAgICAxNjQsXG4gICAgICA0NyxcbiAgICAgIDI1NSxcbiAgICAgIDExOCxcbiAgICAgIDYwLFxuICAgICAgMTA5LFxuICAgICAgMjA2LFxuICAgICAgMjQ3LFxuICAgICAgNjgsXG4gICAgICAyMjcsXG4gICAgICA2MixcbiAgICAgIDY4LFxuICAgICAgNTgsXG4gICAgICAzNCxcbiAgICAgIDExMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJYRFlZTjlZRlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODE0ODQ0NDI2MDo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiVGVldHkncyBsdXh1cnkgYW5kIHNjZW50c1wiLFxuICAgIFwibGlkXCI6IFwiMjM5ODQ4NTA2MDQ0NDU4OjZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSjdSazRZRkVJdXQrcmdHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJsb0FVaGk4VWxHcksrZVJWRDZjaGJmaUJkcmwrdk5xSXFON0NhVnZ3V1drPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIk5tQkxha1B0RnRDWlpsZVp1MzI2Mlh5U1RjQXA3MHNKWW1HVjVBU0FOOXVKdVNsMHN3OU9wK3IwaVdSdm1uVEZOQ3hvTnFNMldad3JSdk1TbTZKaENBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInVpdVNWbVp2TU42aDNFeU9IOXpMZ2tQUnlqS1RDQ1RrN21SSHRXaWFpLytVWnFHcnROR3hMaEhyd0lEVXBKejcvZHM2ZXp5aUY5bSt6VVdVb1loL2pBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxNDg0NDQyNjA6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTA1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzAwNTc4NzJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
