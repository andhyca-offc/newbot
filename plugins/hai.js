let handler = async (m, { conn }) => {
let caption = `*๐ฎ: HALLO KAK SAYA ๐๐ง๐๐ก๐ฒ๐๐๐๐จ๐ญ๐ณ-๐๐เฝผ,SILAHKAN KLIK BUTTON DI BAWAH UNTUK MENGETAHUI FITUR BOT*`

conn.sendButton( m.chat, caption, `ยฉ๏ธ ๐โพ๏ธ๏ธ๐๏ธโผ๏ธ โข ๐ด๐๐โ๐ฆ๐๐แตแตโฟแถป`, `Menu`, `.menu`, m)

       }
       
handler.customPrefix = /^(Hallo|Hay|Bot|Haibot|Hai|Hay|menu)/i
handler.command = new RegExp
module.exports = handler
