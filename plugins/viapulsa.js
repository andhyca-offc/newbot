let handler = async (m, { conn }) => {
	conn.reply(m.chat, `╠═〘 PEMBAYARAN 〙 ═
╠═ Untuk Pembayaran Via Pulsa
╠➥ Ke nomer ini
║➥ 085822347348
║
╠═〘 Fitur 〙 ═
║
╠➥ *FITUR DOWNLOADER 500++*
║     *YouTube, Twitter,* 
║     *Tiktok, Instagram, dll.*
║    *FITUR STIKER*
╠➥ *FITUR ADMIN*
║    *KICK ORANG*
║    *JADIIN ADMIN*
╠➥ *FITUR ISLAM*
║   *QURAN*
║   *CEK JADWAL SHALAT*
╠➥ *INTERNET*
║   *BRAINLY*
║   *GOOGLE*
╠➥ *DAN 200 LEBIH*
║   *FITUR LAINNYA*
║ 
╠═ ©2022 
╠═ Scrip original by ArullOfc
╠═〘 ArullBotzMD 〙 ═`.trim(), m)
}

handler.command = /^viapulsa$/i

module.exports = handler
