let handler = async (m, { conn }) => {
let caption = `*📮: HALLO KAK SAYA 𝐀𝐧𝐝𝐡𝐲𝐜𝐚𝐁𝐨𝐭𝐳-𝐌𝐝ོ,SILAHKAN KLIK BUTTON DI BAWAH UNTUK MENGETAHUI FITUR BOT*`

conn.sendButton( m.chat, caption, `©️ 🅚Ⓘ︎︎🅝︎Ⓖ︎ • 𝐴𝑛𝑑ℎ𝑦𝑐𝑎ᵍᵃⁿᶻ`, `Menu`, `.menu`, m)

       }
       
handler.customPrefix = /^(Hallo|Hay|Bot|Haibot|Hai|Hay|menu)/i
handler.command = new RegExp
module.exports = handler
