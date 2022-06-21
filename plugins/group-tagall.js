let handler = async(m, { conn, text, participants }) => {
  let teks = `   ⊙─〔 ıll T͓̽A͓̽G͓̽A͓̽L͓̽L͓̽ ͓̽M͓̽E͓̽M͓̽  llı 〕─⊙
\n *${text ? text : 'Nothing'}*\n\n`
		      	for (let mem of participants) {
		            teks += ` ㇱ @${mem.id.split('@')[0]}\n`
				}
                teks += `\n↻𝐀𝐫𝐮𝐥𝐥𝐎𝐟𝐜`
                conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <pesan>']
handler.tags = ['group']
handler.command = /^(tagall|tagal|tall|t)$/i

handler.group = true
handler.admin = true
handler.botadmin = true
module.exports = handler
