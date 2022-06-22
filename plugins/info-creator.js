function handler(m) {
const q = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": ""
	},
	"message": {
		"contactMessage": {
			"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Elyas Gantwng;;;FN:Elyas Ganteng\nORG:Elyas Ganteng;\nTEL;type=CELL;type=VOICE;waid=6285822347348:+62 858-2234-7248\nEND:VCARD"
		}
	},
	"participant": "0@s.whatsapp.net"
}

conn.sendContact(m.chat, '6285822347348', 'ArullOfc', m)
m.reply(m.chat,'*Tuh nomor owner ku tersayang*\n*Chat jika PENTING*', q)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
