let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn }) => {
    let kontol = `
╭─────[ *STORE BOT* ]─────✧
┴
│ *STORE 𝐀𝐧𝐝𝐡𝐲𝐜𝐚𝐛𝐨𝐭𝐳-𝐌𝐝ོ*
┬
╰──────────···`.trim()
  const button = {
        buttonText: '🛒STORE 𝐀𝐧𝐝𝐡𝐲𝐜𝐚𝐛𝐨𝐭𝐳-𝐌𝐝ོ 🛒',
        description: TOKO STORE 𝐀𝐧𝐝𝐡𝐲𝐜𝐚𝐛𝐨𝐭𝐳-𝐌𝐝ོ,
        sections:  [{title: "STORE 𝐀𝐧𝐝𝐡𝐲𝐜𝐚𝐛𝐨𝐭𝐳-𝐌𝐝ོ", rows: [
        {title: 'Menu utama', description: "Kembali ke Menu Utama", rowId:".?"},
        {title: 'Sewa 𝐀𝐧𝐝𝐡𝐲𝐜𝐚𝐛𝐨𝐭𝐳-𝐌𝐝ོ', description: "Sewa bot dengan memasukkan bot ke grup kamu", rowId:",
        {title: 'RULES', description: "rules 𝐀𝐧𝐝𝐡𝐲𝐜𝐚𝐛𝐨𝐭𝐳-𝐌𝐝ོ", rowId:".rules"},
       ] }],
        listType: 1
       }
    conn.sendMessage(m.chat, button, MessageType.listMessage, { quoted: m })
}

handler.tags = ['main', 'update']
handler.command = /^(iklan|sponsor)$/i
handler.help = ['rules']
module.exports = handler
