let fs = require('fs')
let handler  = async (m, { conn, usedPrefix }) => {
prep = conn.prepareMessageFromContent(m.chat, { orderMessage: { 
itemCount: 999999999999, status: 1,
message: `Join Group Bot\n\nhttps://chat.whatsapp.com/F6CAAOhrORm1sPdq6cRKAS`,
orderTitle: 'B',
sellerJid: '0@s.whatsapp.net',
thumbnail: fs.readFileSync('https://telegra.ph/file/fe53b93567b4263ea0175.jpg')
}}, {contextInfo: null, quoted: m})
conn.relayWAMessage(prep)
}



handler.help = ['troli']

handler.tags = ['group']

handler.command = /^troli$/i
handler.owner = false


module.exports = handler
