let handler = async (m, { conn }) => {
let ye = `@${m.sender.split`@`[0]}`
let esce = `
Knp kak ${ye} Lagi Nyari Sc Ya? 

πππ ππππππππ π πππ ππππππ

πΆπΈπ π·ππ± :
https://github.com/andhyca-ofc/NewBot

JOIN GC BOT:
https://chat.whatsapp.com/DTtOcmrCAkKFrVZJD6jb6M

conn.sendBut(m.chat, esce, 'Jangan Lupa Stars-Nya Dan Follow Github-Nya', 'Thanks', '.menu', m) 
}
handler.help = ['sc']
handler.tags = ['info']
handler.command = /^(sc)$/i

module.exports = handler
