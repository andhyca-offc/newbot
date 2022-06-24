const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let fs = require('fs')
let handler = async (m) => {
let krizyn = `
╭─────{ *R͓̽U͓̽L͓̽E͓̽S͓̽* }─────
│•Dιʅαɾαɳɠ Hιɳα Oɯɳҽɾ
│•Dιʅαɾαɳɠ Sραɱ
│•Dιʅαɾαɳɠ Tҽʅρ / Vƈ
│•Jαɳɠαɳ ƈυʅιƙ Ⴆσƚ ɠɯ αɳʝιɳɠ
│•Bσƚ Tιԃαƙ Mҽɳҽɾιɱα Sαʋҽ Kσɳƚαƙ
┬
╰──────────···
╭─────{ *H͓̽U͓̽K͓̽U͓̽M͓̽* }─────
│•KυႦʅσƈƙ Lυ αɳʝιɳɠ
╰──────────···
	`.trim()
  let message = await prepareWAMessageMedia({ image: await (await require('node-fetch')(fotonya2)).buffer()}, { upload: conn.waUploadToServer }) 
    const template = generateWAMessageFromContent(m.key.remoteJid, proto.Message.fromObject({
        templateMessage: {
            hydratedTemplate: {
                hydratedContentText: krizyn,
                imageMessage: message.imageMessage, 
           hydratedFooterText: '🤖 PILIH MENU BIBAWAH',
           hydratedButtons: [{
             urlButton: {
               displayText: '🤖GroupBot🤖',
               url: 'https://chat.whatsapp.com/Hs5rHr27xu49VRLgdliMfR'
             }

           },
                {
               urlButton: {
               displayText: 'YOUTUBE ME',
               url: 'https://youtu.be/tH-0Uq_s_H4'
             }

           },
               {
             quickReplyButton: {
               displayText: 'JANGAN DIPENCET',
               id: '',
             }
             
           },
               {
             quickReplyButton: {
               displayText: 'MENU',
               id: '.menu',
             }
             
             },
               {
             quickReplyButton: {
               displayText: 'RUNTIME',
               id: '.runtime',
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
}

handler.tags = ['main', 'update']
handler.command = /^(rules|rule|snk)$/i
handler.help = ['rules']
module.exports = handler
