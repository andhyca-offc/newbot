let handler = async (m, { conn }) => {
let ye = `@${m.sender.split`@`[0]}`
let esce = `
Knp kak ${ye} Lagi Nyari Sc Ya? 

𝘐𝘕𝘐 𝘚𝘊𝘙𝘐𝘗𝘛𝘕𝘠𝘈 𝘝𝘐𝘈 𝘎𝘐𝘛𝘏𝘜𝘉

𝙶𝙸𝚃 𝙷𝚄𝙱 :
https://github.com/andhyca-ofc/NewBot

JOIN GC BOT:
https://chat.whatsapp.com/DTtOcmrCAkKFrVZJD6jb6M

conn.sendBut(m.chat, esce, 'Jangan Lupa Stars-Nya Dan Follow Github-Nya', 'Thanks', '.menu', m) 
}
handler.help = ['sc']
handler.tags = ['info']
handler.command = /^(sc)$/i

module.exports = handler
