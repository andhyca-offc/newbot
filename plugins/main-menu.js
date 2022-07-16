/**
* SCRIPT BOT ORI by hyzer official
* CREATOR BY ArullOfc
* MAU BANYAK LAGI FITUR NYA 
* RECODE SENDIRI BANH JANGAN MAU ENAK AJA
* NOTE MASIH ADA BUG STIKER DAN LAIN 
**/

//━━━━━━━━[ DEFAULT SETTINGS ]━━━━━━━━//
let { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let levelling = require('../lib/levelling')
let fs = require('fs')
const util = require('util')
const os = require('os')
let path = require('path')
let { createHash} = require('crypto')
let fetch = require('node-fetch')
let { perfomance } = require('perf_hooks')
let moment = require('moment-timezone')

//━━━━━━━━[ DEFAULT MENU ]━━━━━━━━//
const defaultMenu = {
  before:`
  ┅━━━━━═┅═❏ *DASHBOARD* ❏═┅═━━━━━┅
❏═┅═━–〈 *U S E R*
┊• *Name:* %name
┊• *Tag:* @${m.sender.split`@`[0]}
┊• *Status:* ${m.sender.split`@`[0] == nomorown ? 'Developer' : (usrs.premiumTime >= 1 ? 'Premium User' : 'Free User')}
┊• *Limit:* %limit Limit
┊• *Money:* %money
┊• *Role:* %role
┊• *Level:* %level
┊• *Xp:* %exp / %maxexp
┊• *Total Xp:* %totalexp Xp
┗––––––––––✦

❏═┅═━–〈 *T O D A Y*
┊• *${ucapan()} ${name}*
┊• *Today:* %week %weton*
┊• *Date:* %date
┊• *Date Islamic:* %dateIslamic
┊• *Time:* %time
┗––––––––––✦

❏═┅═━–〈 *I N F O*
┊• *Bot Name:* ${namebot}
┊• *Mode:* ${global.opts['self'] ? 'Self' : 'public'}
┊• *Plaftrom:* linux
┊• *Type:* Node.Js
┊• *Baileys:* Multi Device
┊• *Prefix:* [ ${_p}? ]
┊• *Uptime:* ${uptime}
┊• *Database:* %rtotalreg dari %totalreg
┊• *Memory Used:* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
┗––––––––––✦
%readmore`.trimStart(), 
  header: '❏––––––『 %category 』––––––\n┃',
  body: '┊✦ %cmd %islimit %isPremium',
  footer: '┃\n┗━═┅═━––––––๑\n\n', 
  footerText: '⫹⫺ 𝗧𝗶𝗺𝗲 𝗦𝗲𝗿𝘃𝗲𝗿 : ${wib}\n⫹⫺ 𝗗𝗮𝘁𝗲 𝗦𝗲𝗿𝘃𝗲𝗿  : ${week} ${date}',
  after: `
❏═┅═━–〈 *I N F O  C M D*
┊ *Ⓟ︎* = Premium
┊ *Ⓛ︎︎* = Limit
┗––––––––––✦aaaa`,
}

//━━━━━━━━[ CATEGORY ]━━━━━━━━//
let handler = async (m, { conn, usedPrefix: _p, args, command }) => {
  let tags
  let teks = `${args[0]}`.toLowerCase()
  let arrayMenu = ['all', 'absen', 'rpg', 'anime', 'downloader', 'game', 'fun', 'xp', 'github', 'group', 'image', 'quotes', 'admin', 'info', 'internet', 'islam', 'kerang', 'maker', 'owner', 'suara', 'premium', 'quotes', 'info', 'stalk', 'shortlink', 'sticker', 'tools', 'text', 'nsfw', 'asupan', 'random', 'textpro', 'photooxy']
  if (!arrayMenu.includes(teks)) teks = '404'
  if (teks == 'all') tags = {
  'main': 'UTAMA',
  'advanced': 'ADVANCED',
  'absen': 'ABSEN',
  'anime': 'ANIME',
  'sticker': 'STICKER & CONVERT',
  'downloader': 'DOWNLOADER',
  'xp': 'EXP & LIMIT',
  'fun': 'FUN',
  'game': 'GAME',
  'github': 'GITHUB',
  'group': 'GROUP',
  'image': 'IMAGE',
  'info': 'INFO',
  'internet': 'INTERNET',
  'islam' : 'ISLAMI',
  'kerang': 'KERANG',
  'maker': 'MAKER',
  'owner': 'OWNER',
  'Pengubah Suara': 'PENGUBAH SUARA',
  'premium': 'PREMIUM',
  'quotes' : 'QUOTES',
  'rpg': 'RPG',
  'stalk': 'STALK',
  'shortlink': 'SHORT LINK',
  'tools': 'TOOLS',
  'vote': 'VOTING',
  'nsfw': 'NSFW', 
  'asupan': 'ASUPAN', 
  'random': 'RANDOM', 
  'textpro': 'TEXT PRO', 
  'photooxy': 'PHOTO OXY', 
  }
  if (teks == 'absen') tags = {
    'absen': 'ABSEN',
    'vote': 'VOTING',
  }
  if (teks == 'anime') tags = {
  'anime': 'MANIME',
  }
  if (teks == 'sticker') tags = {
  'sticker': 'STICKER &CONVERT',
  }
  if (teks == 'downloader') tags = {
  'downloader': 'DOWNLOADER',
  }
  if (teks == 'xp') tags = {
  'xp': 'EXP & LIMIT',
  }
  if (teks == 'fun') tags = {
  'fun': 'MENU FUN',
  }
  if (teks == 'game') tags = {
  'game': 'GAME',
  }
  if (teks == 'github') tags = {
  'github': 'GITHUB',
  }
  if (teks == 'group') tags = {
  'group': 'GROUP',
  }
  if (teks == 'image') tags = {
  'image': 'IMAGE',
  }
  if (teks == 'info') tags = {
  'info': 'INFO',
  }
  if (teks == 'internet') tags = {
  'internet': 'INTERNET',
  }
  if (teks == 'islam') tags = {
  'islam' : 'ISLAMI',
  }
  if (teks == 'kerang') tags = {
  'kerang': 'KERANG',
  }
  if (teks == 'maker') tags = {
  'maker': 'MAKER',
  }
  if (teks == 'owner') tags = {
    'owner': 'Owner',
    'host': 'Host',
    'advanced': 'Advanced'
  }
  if (teks == 'suara') tags = {
  'Pengubah Suara': 'PENGUBAH SUARA',
  }
  if (teks == 'text') tags = {
  'text': 'MAKER TEXT',
  }
  if (teks == 'premium') tags = {
  'premium': 'PREMIUM',
  }
  if (teks == 'quotes') tags = {
  'quotes' : 'QUOTES',
  }
  if (teks == 'rpg') tags = {
  'rpg': 'RPG',
  }
  if (teks == 'stalk') tags = {
  'stalk': 'STALK',
  }
  if (teks == 'shortlink') tags = {
  'shortlink': 'SHORT LINK',
  }
  if (teks == 'tools') tags = {
  'tools': 'TOOLS',
  }
  if (teks == 'nsfw') tags = {
  'nsfw': 'NSFW', 
  }
  if (teks == 'asupan') tags = {
  'asupan': 'ASUPAN', 
  }
  if (teks == 'random') tags = {
  'random': 'RANDOM', 
  }
  if (teks == 'textpro') tags = {
  'textpro': 'TEXT PRO', 
  }
  if (teks == 'photooxy') tags = {
  'photooxy': 'PHOTO OXY', 
  }

//━━━━━━━━[ DATABASE USER ]━━━━━━━━//
  try {
    let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => '{}'))
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender 
    let name = conn.getName(m.sender)
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let premium = global.db.data.users[m.sender].premium
    let user = global.db.data.users[who]
    let { exp, limit, level, money, role } = global.db.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let tag = `wa.me/${m.sender.split('@')[0]}`
 m, { contextInfo: { mentionedJid: conn.parseMention(tag) }}

//━━━━━━━━[ TIMER ]━━━━━━━━//
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    let wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let waktuwib = moment.tz('Asia/Jakarta').format('HH:mm:ss')

//━━━━━━━━[ SETTING HELP ]━━━━━━━━//
let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
    return {
      help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
      tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
      prefix: 'customPrefix' in plugin,
      limit: plugin.limit,
      premium: plugin.premium,
      enabled: !plugin.disabled,
    }
  })

//━━━━━━━━[ FAKE REPLY ]━━━━━━━━//
const fkontak = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": "Halo"
	},
	"message": {
		"contactMessage": {
			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
		}
	},
	"participant": "0@s.whatsapp.net"
}
const ftroli = {
    key : {
    remoteJid: 'status@broadcast',
    participant : '0@s.whatsapp.net'
    },
    message: {
    orderMessage: {
    itemCount : 2022,
    status: 1,
    surface : 1,
    message: `Hai Kak ${name}!`, 
    orderTitle: `▮Menu ▸`,
    thumbnail: await (await fetch(fla + 'Menu')).buffer(), //Gambarnye
    sellerJid: '0@s.whatsapp.net' 
    }
    }
    }
const fdoc = {
   key : {
   remoteJid: 'status@broadcast',
   participant : '0@s.whatsapp.net'
   },
   message: {
   documentMessage: {
   title: wm, 
   }
   }
   }

//━━━━━━━━[ BAGIAN MENU ]━━━━━━━━//
if (teks == '404') {
let menuu = `*────━⃝┅ *D A S H B O A R D* ┅⃝━────

「 *I N F O  C M D* 」
*Ⓟ* = Premium
*Ⓛ* = Limit

         「 *Ʋser Ɩnfσrmαtισn* 」
🌸• *ɴᴀᴍᴇ:* ${usrs.registered ? usrs.name : conn.getName(m.sender)}
🌸• *ᴛᴀɢs:* @${m.sender.split`@`[0]}
🌸• *sᴛᴀᴛᴜs:* ${m.sender.split`@`[0] == nomorown ? 'Developer' : (usrs.premiumTime >= 1 ? 'Premium User' : 'Free User')}
🌸• *ᴘʀᴇᴍɪᴜᴍ:* ${global.prem ? 'Yes' : 'No'}
🌸• *ʟᴇᴠᴇʟ:* ${level} {$exp}
🌸• *ʀᴏʟᴇ:* ${role}




         「 *Bσt Ɩnfσrmαtισn* 」
🎐• *ᴜᴘᴛɪᴍᴇ:* ${uptime}
🎐• *ᴛɪᴍᴇ:* ${wib}
🎐• *ᴜsᴇʀs:* ${Object.keys(global.db.data.users).length} User
🎐• *ʟɪᴍɪᴛ:* ${usrs.limit}
🎐• *ᴍᴏᴅᴇ:* ${global.opts['self'] ? 'Self' : 'public'}
🎐• *ᴄʜᴀᴛ ʙᴀɴ:* ${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length} Chat Terbanned
🎐• *ᴜsᴇʀ ʙᴀɴ:* ${Object.entries(global.db.data.users).filter(user => user[1].banned).length} Pengguna Terbanned
🎐• *ᴍᴏᴅᴇ:* ${global.opts['self'] ? 'Self' : 'public'}          
     
     
    
                「 𝐀𝐧𝐝𝐡𝐲𝐜𝐚𝐁𝐨𝐭𝐳-𝐌𝐝ོ あ⁩ 」    

⫹⫺ 𝗧𝗶𝗺𝗲 𝗦𝗲𝗿𝘃𝗲𝗿 : ${wib}
⫹⫺ 𝗗𝗮𝘁𝗲 𝗦𝗲𝗿𝘃𝗲𝗿  : ${week} ${date}
`
const template = generateWAMessageFromContent(m.key.remoteJid, proto.Message.fromObject({
        listMessage: {
            title: `*${ucapan()} ${name}*`,
            description: menuu,
            buttonText: 'CLICK HERE ⎙',
            listType: 1,
            footerText: "📮 *Note:* Jika menemukan bug, eror atau kesulitam dalam penggunaan bot, silahkan laporkan/tanyakan kepada Owner.",
            mtype: 'listMessage',
            sections: [
              {
      
                "rows": [{
                  "title": "『🚦』 ✦ RULLES BOT",
                  "description": "𝐀𝐧𝐝𝐡𝐲𝐜𝐚𝐁𝐨𝐭𝐳-𝐌𝐝ོ",
                  "rowId": '.rulles'
                  }
                  ],
                  "title": "––––––『 RULLES 』––––––"
                  }, {
                  "rows": [{
                  "title": `『⚡』 ✦ SPEED BOT`,
                  "description": "Menampilkan Kecepatan Respon Bot",
                  "rowId": '.ping'
                }, {
                  "title": "『💌』 ✦ OWNER BOT",
                  "description": "Menampilkan List owner Bot",
                  "rowId": `.owner`
                }, {
                  "title": "『📔』 ✦ SCRIPT BOT",
                  "description": "Source Code 𝐀𝐧𝐝𝐡𝐲𝐜𝐚𝐁𝐨𝐭𝐳-𝐌𝐝ོ",
                  "rowId": `.sc`
                }, {  
                  ],
                  "title": "––––––『 MAIN 』––––––"
                  }, {
                  "rows": [{
                  "title": `『🔖』 ✦ SEWA BOT`,
                  "description": "Menampilkan Menu All",
                  "rowId": `.sewabot`
                }, {
                  "title": "『🌟』 ✦ BUY PREMIUM",
                  "description": "Menampilkan Menu All",
                  "rowId": `.premium`
                }, {
                  "title": "『💹』 ✦ DONASI",
                  "description": "Menampilkan Menu All",
                  "rowId": `.donasi`
                }, {    
                  ],    
                  "title": "––––––『 SUPPORT 』––––––"
                  }, {
                  "rows": [{
                  "title": `『💬』 ✦  All´,
                  "description": "Menampilkan Semua Command Bot",
                  "rowId": '.? all'
                }, {
                  "title": "『🗒️』 ✦ Absen",
                  "description": "Absen Sesuatu DiBOT",
                  "rowId": `${_p}? absen`
                }, {
                  "title": "『⛩️️』 ✦ Anime",
                  "description": "Kamu Anime Lovers Ya Kak?",
                  "rowId": `${_p}? anime`
                }, {
                  "title": "『🎨』 ✦ Sticker",
                  "description": "Buat Sticker Di BOT",
                  "rowId": `${_p}? sticker`
                }, {
                  "title": "『📩』 ✦ Downloaders",
                  "description": "Download Sesuatu Di BOT",
                  "rowId": `${_p}? downloader`
                }, {
                  "title": "『✨』 ✦ Exp & Limit",
                  "description": "Ayo Tingkatkan Pangkatmu!",
                  "rowId": `${_p}? xp`
                }, {
                  "title": "『🧩』 ✦ Fun",
                  "description": "Gabut? Gunakan Fitur Ini",
                  "rowId": `${_p}? fun`
                }, {
                  "title": "『🎮』 ✦ Game",
                  "description": "Gamenya Seru Seru Lho >-<",
                  "rowId": `${_p}? game`
                }, {
                  "title": "『📌』 ✦ Github",
                  "description": "Menggunakan Fitur Github DiBOT",
                  "rowId": `${_p}? github`
                }, {
                  "title": "『🏢』 ✦ Group",
                  "description": "Only Groups",
                  "rowId": `${_p}? group`
                }, {
                  "title": "『🖼️』 ✦ Image",
                  "description": "Menampilkan Menu Image",
                  "rowId": `${_p}? image`
                }, {
                  "title": "『🌏️』 ✦ Internet",
                  "description": "Cari Sesuatu DiBOT",
                  "rowId": `${_p}? internet`
                }, {
                  "title": "『🕌』 ✦ Islamic",
                  "description": "Ibadah Lebih Baik Yuk Kak",
                  "rowId": `${_p}? islam`
                }, {
                  "title": "『🐚』 ✦ Kerang",
                  "description": "Tanya Pada Ketua Club",
                  "rowId": `${_p}? kerang`
                }, {
                  "title": "『🖌️』 ✦ Macker",
                  "description": "Buat Logo Dengan BOT",
                  "rowId": `${_p}? maker`
                }, {
                  "title": "『👨‍💻️』 ✦ Owner",
                  "description": "Only Owner",
                  "rowId": `${_p}? owner`
                }, {
                  "title": "『‍🎧』 ✦ Audio",
                  "description": "Tambahkan Filter Di Audiomu",
                  "rowId": `${_p}? suara`
                }, {
                  "title": "『🌟』 ✦ Premium",
                  "description": "Only Premium User",
                  "rowId": `${_p}? premium`
                }, {
                  "title": "『📑』 ✦ Quotes",
                  "description": "Random Inspirasi",
                  "rowId": `${_p}? quotes`
                }, {
                  "title": "『🌱』 ✦ Rpg",
                  "description": "Game Epic Rpg!",
                  "rowId": `${_p}? rpg`
                }, {
                  "title": "『🔍』 ✦ Stalker",
                  "description": "Menampilkan Fitur Stalker",
                  "rowId": `${_p}? stalk`
                }, {
                  "title": "『📚』 ✦ Short Link",
                  "description": "Menampilkan Menu Short Link",
                  "rowId": `${_p}? shortlink`
                }, {
                  "title": "『🛠️』 ✦ Tools",
                  "description": "Mungkin Tools Ini Dapat Membantu?",
                  "rowId": `${_p}? tools`
                }, {
                  "title": "『✒️』 ✦ Text Macker",
                  "description": "Menampilkan Fitur Maker Text",
                  "rowId": `${_p}? text`
                }, {
                  "title": "『🔞』 ✦ Nsfw",
                  "description": "Apakah Kamu Menyukai Ini?",
                  "rowId": `${_p}? nsfw`
                }, {
                  "title": "『🎲』 ✦ Random",
                  "description": "Random Fitur BOT",
                  "rowId": `${_p}? random`
                }, {
                  "title": "『📝』 ✦ Text Pro",
                  "description": "Ayo Hias Text Mu Di BOT",
                  "rowId": `${_p}? textpro`
                }, {
                  "title": "『🧑🏻‍🎨』 ✦ Photo Oxy",
                  "description": "Digunakan Yah Photo Oxy-Nya",
                  "rowId": `${_p}? textpro`
                },{
                  "title": "『ℹ️』 ✦ Info",
                  "description": "Info Info Tentang BOT",
                  "rowId": `${_p}? info`
                  }],
                "title": "––––––『 MENU 』––––––"
                }
            ], "contextInfo": {
              "stanzaId": m.key.id,
              "participant": m.sender,
              "quotedMessage": m.message
            }
    }}), { userJid: m.participant || m.key.remoteJid, quoted: fkontak });
    return await conn.relayMessage(
        m.key.remoteJid,
        template.message,
        { messageId: template.key.id }
    )
    }
    let groups = {}
    for (let tag in tags) {
      groups[tag] = []
      for (let plugin of help)
        if (plugin.tags && plugin.tags.includes(tag))
          if (plugin.help) groups[tag].push(plugin)
    }
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Dipersembahkan oleh https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
        before,
        ...Object.keys(tags).map(tag => {
          return header.replace(/%category/g, tags[tag]) + '\n' + [
            ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
              return menu.help.map(help => {
                return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                  .replace(/%islimit/g, menu.limit ? '(Ⓛ)' : '')
                  .replace(/%isPremium/g, menu.premium ? '(Ⓟ)' : '')
                  .trim()
              }).join('\n')
            }),
            footer
          ].join('\n')
        }),
        after
      ].join('\n')
      text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      me: conn.user.name,
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      name,
      ucapan: ucapan(),
      level, limit, money, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
      readmore: readMore
    }
    
//━━━━━━━━[ SETTINGS MENU ]━━━━━━━━//
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    let message = await prepareWAMessageMedia({ image: await (await require('node-fetch')(fotonya2)).buffer()}, { upload: conn.waUploadToServer }) 
      const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
      templateMessage: {
          hydratedTemplate: {
            imageMessage: message.imageMessage, 
            hydratedContentText: text, 
            hydratedFooterText: wm2, 
            hydratedButtons: [{
            urlButton: {
               displayText: '🎀 Instagram Owner',
               url: webm
             }

           },
             {
             urlButton: {
               displayText: '💌 Group Official', 
               url: gc
             }

           },
               {
             quickReplyButton: {
               displayText: '🌹 Owner',
               id: '.owner',
             }

           },
               {
             quickReplyButton: {
               displayText: '🐾 Speed',
               id: '.ping',
             }

           },
           {
             quickReplyButton: {
               displayText: '📮 Donasi',
               id: '.donasi',
             }
           }]
         }
       }
     }), { userJid: m.sender, quoted: m });
     //conn.reply(m.chat, text.trim(), m)
    return await conn.relayMessage(
         m.chat,
         template.message,
         { messageId: template.key.id }
     )
} catch (e) {
    conn.reply(m.chat, '*ᴄᴏᴍᴍᴀɴᴅs* • ᴍᴇɴᴜ ᴀᴛᴀᴜ ғɪᴛᴜʀ ɪɴɪ sᴇᴅᴀɴɢ ᴇʀᴏʀ', m)
    throw e
  }
}
handler.help = ['Krizyn']
handler.tags = ['main']
handler.command = /^(alive|panel|krizyn|menu|help|\?)$/i
handler.register = true
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = false
handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 3
module.exports = handler

//━━━━━━━━[  JANGAN DI UBAH  ]━━━━━━━━//
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  res = "Selamat Beristirahat 🛌"
  if (time >= 5) {
    res = "Selamat pagi🌅 kak"
  }
  if (time > 10) {
    res = "Selamat siang🏜️ kak"
  }
  if (time >= 15) {
    res = "Selamat sore🌄 kak"
  }
  if (time >= 18) {
    res = "Selamat malam🌌 kak"
  }
  return res
}
