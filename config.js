jconst fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349018001569";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_46_07_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAyMCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDI1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjMzLFxuICAgICAgICA1LFxuICAgICAgICA1MyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNjcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE0LFxuICAgICAgICA3NCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDI5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjI2LFxuICAgICAgICA5NCxcbiAgICAgICAgNDcsXG4gICAgICAgIDg2LFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyOCxcbiAgICAgICAgMTg5LFxuICAgICAgICA4NixcbiAgICAgICAgNDEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNTYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDY3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNTMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNjAsXG4gICAgICAgIDExLFxuICAgICAgICAyMDAsXG4gICAgICAgIDc5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDQ0LFxuICAgICAgICAyOCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDczLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjUxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEzMixcbiAgICAgICAgNjMsXG4gICAgICAgIDE3LFxuICAgICAgICAyNCxcbiAgICAgICAgNzIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjExLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA3MSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMzUsXG4gICAgICAgIDM2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDg2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTkwLFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDEsXG4gICAgICAgIDczLFxuICAgICAgICAxMjgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgOTgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNTYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMixcbiAgICAgICAgMzksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMCxcbiAgICAgICAgMTY4LFxuICAgICAgICA0NSxcbiAgICAgICAgMTE4LFxuICAgICAgICA3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE0MixcbiAgICAgICAgOTQsXG4gICAgICAgIDYxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDI4LFxuICAgICAgICA5NixcbiAgICAgICAgMjEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxODEsXG4gICAgICAgIDIyLFxuICAgICAgICAxNDksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTI2LFxuICAgICAgICAxMjksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDM1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNDQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNCxcbiAgICAgICAgNjEsXG4gICAgICAgIDkxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDQ5LFxuICAgICAgICA5MCxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM1LFxuICAgICAgICA1NyxcbiAgICAgICAgMTAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjIzLFxuICAgICAgICA0NixcbiAgICAgICAgMTI4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMjksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDI0NixcbiAgICAgICAgOTgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTk4LFxuICAgICAgICA5MCxcbiAgICAgICAgNDYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjI1LFxuICAgICAgICA2NyxcbiAgICAgICAgMTczLFxuICAgICAgICAxODEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTE3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzOCxcbiAgICAgICAgMTA1LFxuICAgICAgICA4MCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNCxcbiAgICAgICAgMzksXG4gICAgICAgIDE5NixcbiAgICAgICAgMTk0LFxuICAgICAgICAyMjksXG4gICAgICAgIDk2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDkxLFxuICAgICAgICA3MixcbiAgICAgICAgMTg3LFxuICAgICAgICAxODAsXG4gICAgICAgIDMsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDY3LFxuICAgICAgICA1NCxcbiAgICAgICAgMTcyLFxuICAgICAgICA3NSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTA4LFxuICAgICAgICA3MyxcbiAgICAgICAgMTEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxLFxuICAgICAgICA5MixcbiAgICAgICAgMTMxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIxMixcbiAgICAgICAgNTQsXG4gICAgICAgIDQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDQwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDM0LFxuICAgICAgICAxODQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjA1LFxuICAgICAgICA5NSxcbiAgICAgICAgNzYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTksXG4gICAgICAgIDEyNyxcbiAgICAgICAgNDEsXG4gICAgICAgIDkyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTI2LFxuICAgICAgICA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNzcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiM2RBc1hGMjdBZ05MRm85ZCs1VHFpQXl0d1FqUUNydHlDV1RpclVUM1IwUT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiUDRoSEZjVVBRdXFRUEhvbkY0eTA1QVwiLFxuICBcInBob25lSWRcIjogXCJmYWNkZDNkZC0yNjRiLTRmOWQtYjNmMi1hYTA2OWNhNTRhZWJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTMsXG4gICAgICAyMTQsXG4gICAgICAyNDAsXG4gICAgICA5LFxuICAgICAgMTcsXG4gICAgICAxMDEsXG4gICAgICAxMzQsXG4gICAgICAyMTAsXG4gICAgICAxNjQsXG4gICAgICAxMDMsXG4gICAgICAyMzEsXG4gICAgICA3NyxcbiAgICAgIDEzNSxcbiAgICAgIDIzNyxcbiAgICAgIDE1MSxcbiAgICAgIDEwOCxcbiAgICAgIDIwLFxuICAgICAgMjQ3LFxuICAgICAgMTkxLFxuICAgICAgMjEyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDUyLFxuICAgICAgODQsXG4gICAgICAxNTEsXG4gICAgICAxNTMsXG4gICAgICA3LFxuICAgICAgMjIsXG4gICAgICAyNTIsXG4gICAgICA4LFxuICAgICAgMTY1LFxuICAgICAgNjUsXG4gICAgICA4NyxcbiAgICAgIDE3OCxcbiAgICAgIDcyLFxuICAgICAgMjI4LFxuICAgICAgMjM2LFxuICAgICAgOCxcbiAgICAgIDMsXG4gICAgICAyMTcsXG4gICAgICAxNTgsXG4gICAgICAxNjVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWVFMUDM1WFBcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwMTgwMDE1Njk6NzFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjM3MTk3NDM2NjgzNDQ6NzFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSzd3bCtJREVOSzFyTFFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIza29ZVmJpeTErK1MwdmpTOVh4Y3dSWmp1dHAwWVBiTmZsQjk0UVVoTUJNPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjNIUTUzdEF5SHJtaGJHRTIxalFleWpOUmtaVkxjU0c2REVJdjlvbzZyZXRTVFVEVk1DdTRDSTdnZXBTUVFLMG5JamlQeEk3eEZTQnhwYk1hRVh2QUFBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlZYNzJOVDhlSWpmaEJ1RVhnTVVLcW91SGRKR0FTSjBIZkRSVWFyL1FXd0VMaUREaEFqeFFnSGkyQTl0Yyt2YWdwSld3T1BRVW5XZm5GZ3JNRlI3cEJ3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwMTgwMDE1Njk6NzFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDM5MjQwNyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQURnaVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRGdpLmpzb24iOiAie1wia2V5RGF0YVwiOlwiSjd0NldmOEpXK1M3NFAyQ2Y1SVdZQ2xnWU5wNnZKak9qWldQQ0VzTHg1Zz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMDExMjE4NDc3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
