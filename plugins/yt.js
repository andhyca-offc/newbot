let handler  = async (m, { conn, usedPrefix: _p }) => {
let pp = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=Group'
let botol = global.botwm
let str = `
╭═══════════════════════
║╭──❉ 〔 ⳹YOUTUBE⳹ 〕 ❉────── 
║│➸ *_YOUTUBE OWNER_*
║│➸  *https://youtube.com/channel/UC1ikkqsPvtWuE_QonsET1yg*
╰─────────❉
▌│█║▌║▌║║▌║▌║█│▌
ArullBotzMD ⸙ by.ArullOfc
`.trim()
conn.sendButton(m.chat, str, `${botol}`, `⋮☰ Menu`, `.menu`, m)
}
handler.help = ['yutube']
handler.tags = ['info']
handler.command = /^ytzi$/i

module.exports = handler
