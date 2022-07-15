/*
 * Hyzer Baik :) 
 * Wkwkk Ini Cuman Buat Pelengkap Doang
 * Bukan Bagian Dari Fitur Deck
 * Sumimasen >,<
*/

//----------[ FAKE TOKO ]--------//
const ftoko = {
key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "0@s.whatsapp.net" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": fs.readFileSync('./media/siang.jpg') //Gambarnye
					},
					"title": "「 𝐀𝐧𝐝𝐡𝐲𝐜𝐚𝐛𝐨𝐭𝐳-𝐌𝐝ོ | © ᴹᴿ᭄ 𝔸𝕟𝕕𝕙𝕪𝕔𝕒𝔾𝕒𝕟𝕫ོ ×፝֟͜× 」", //Kasih namalu 
					"description": "⫹⫺ WhatsApp 𝗕𝗢𝗧", 
					"currencyCode": "USD",
					"priceAmount1000": "2000",
					"retailerId": "Ghost",
					"productImageCount": 1
				},
				    "businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}
//----------[ FAKE TROLI ]--------//
const ftroli = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 1,
                            status: 1,
                            surface : 1,
                            message: '𝐀𝐧𝐝𝐡𝐲𝐜𝐚𝐁𝐨𝐭𝐳-𝐌𝐝ོ', //Kasih namalu
                            orderTitle: '⫹⫺ WhatsApp 𝗕𝗢𝗧',
                            thumbnail: fs.readFileSync('./media/siang.jpg'), //Gambarnye
                            sellerJid: '0@s.whatsapp.net'
          
                          }
                        }
                      }
//----------[ FAKE LOKASI ]--------//
const flokasi = {
	key : {
           participant : '0@s.whatsapp.net'
                        },
       message: {
                    locationMessage: {
                    name: 'Korea Selatan',
                    jpegThumbnail: fs.readFileSync('./media/siang.jpg')
                          }
                        }
                      }
                      
const floc = {
	 key:
	 { fromMe: false,
	 participant: `0@s.whatsapp.net`, ...(m.chat ? 
	 { remoteJid: "status@broadcast" } : {}) },
	 message: { "locationMessage": { "title":"jakarta","h": `aloo`, 'jpegThumbnail': fs.readFileSync('./media/siang.jpg')}}
	}
	
const fliveLoc = {
	 key:
	 { fromMe: false,
	 participant: `0@s.whatsapp.net`, ...(m.chat  ? 
	 { remoteJid: "status@broadcast" } : {}) },
	 message: { "liveLocationMessage": { "caption":"ANTIBOT","h": `aloo`, 'jpegThumbnail': fs.readFileSync('./media/siang.jpg')}}
	}
	const fliveLoc2 = {
	 key:
	 { fromMe: false,
	 participant: `0@s.whatsapp.net`, ...(m.chat ? 
	 { remoteJid: "status@broadcast" } : {}) },
	 message: { "liveLocationMessage": { "title": "ANTIBOT","h": `aloo`, 'jpegThumbnail': fs.readFileSync('./media/siang.jpg')}}
	}
//FAKEREPLY KONTAK
 const fcon = {
	 key:
	 { fromMe: false,
	 participant: `0@s.whatsapp.net`, ...(m.chat ? 
	 { remoteJid: "status@broadcast" } : {}) },
	 message: { "contactMessage": { "title":"sri","h": `haloo`, 'jpegThumbnail': fs.readFileSync('./media/siang.jpg')}}
	}
	
	const fcona = {
	 key:
	 { fromMe: false,
	 participant: `0@s.whatsapp.net`, ...(m.chat ? 
	 { remoteJid: "status@broadcast" } : {}) },
	 message: { "contactsArrayMessage": { "title":"antibot","h": `aloo`, 'jpegThumbnail': fs.readFileSync('./media/siang.jpg')}}
	}
	const bugcon = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) }, message: { "contactMessage": { "vcard": ""}}}
	
//----------[ FAKE DOC ]--------//
const fdocs = {
	key : {
           participant : '0@s.whatsapp.net'
                        },
       message: {
                    documentMessage: {
                    title: '「 𝐀𝐧𝐝𝐡𝐲𝐜𝐚𝐛𝐨𝐭𝐳-𝐌𝐝ོ | © ᴹᴿ᭄ 𝔸𝕟𝕕𝕙𝕪𝕔𝕒𝔾𝕒𝕟𝕫ོ ×፝֟͜× 」', 
                    jpegThumbnail: fs.readFileSync('./media/siang.jpg')
                          }
                        }
                      }
//----------[ FAKE VIDEO ]--------//
const fvideo = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(m.chat ? 
	 { remoteJid: "0-1625305606@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title":"「 𝐀𝐧𝐝𝐡𝐲𝐜𝐚𝐛𝐨𝐭𝐳-𝐌𝐝ོ | © ᴹᴿ᭄ 𝔸𝕟𝕕𝕙𝕪𝕔𝕒𝔾𝕒𝕟𝕫ོ ×፝֟͜× 」",
                 "h": `Hmm`,
                 'seconds': '9999999999999', 
                 'caption': '⫹⫺ WhatsApp 𝗕𝗢𝗧',
                 'jpegThumbnail': fs.readFileSync('./media/siang.jpg')
                        }
                       }
	                  }
//----------[ FAKE GC ]--------//
const fgclink = {
	"key": {
		"fromMe": false,
		"participant": "0@s.whatsapp.net",
		"remoteJid": "0@s.whatsapp.net"
	},
	"message": {
		"groupInviteMessage": {
			"groupJid": "0-1625305606@g.us",
			"inviteCode": "https://chat.whatsapp.com/DTtOcmrCAkKFrVZJD6jb6M",
			"groupName": "Andhyca || User 「BOT」 𝕆𝔽ℂ", 
            "caption": "𝐉𝐨𝐢𝐧 𝐆𝐫𝐮𝐩 𝐁𝐨𝐭𝐳 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥", 
            'jpegThumbnail': fs.readFileSync('./media/siang.jpg')
		}
	}
}
//----------[ FAKE GIF  ]--------//
const fgif = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(m.chat ? 
	 { remoteJid: "0-1625305606@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title":"「 𝐀𝐧𝐝𝐡𝐲𝐜𝐚𝐛𝐨𝐭𝐳-𝐌𝐝ོ | © ᴹᴿ᭄ 𝔸𝕟𝕕𝕙𝕪𝕔𝕒𝔾𝕒𝕟𝕫ོ ×፝֟͜× 」",
                 "h": `Hmm`,
                 'seconds': '999999999999999', 
                 'gifPlayback': 'true', 
                 'caption': '⫹⫺ WhatsApp 𝗕𝗢𝗧',
                 'jpegThumbnail': fs.readFileSync('./media/siang.jpg')
                        }
                       }
	                  } 
//----------[ FAKE TEXT  ]--------//
const ftextt = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(m.chat ? 
	 { remoteJid: "0-1625305606@g.us" } : {}) 
                },
	 message: { 
		"extendedTextMessage": {
                 "text":"⫹⫺ WhatsApp 𝗕𝗢𝗧",
                 "title": `「 𝐀𝐧𝐝𝐡𝐲𝐜𝐚𝐛𝐨𝐭𝐳-𝐌𝐝ོ | © ᴹᴿ᭄ 𝔸𝕟𝕕𝕙𝕪𝕔𝕒𝔾𝕒𝕟𝕫ོ ×፝֟͜× 」`,
                 'jpegThumbnail': fs.readFileSync('./media/siang.jpg')
                        }
	                  } 
                     }
//----------[ FAKE VN  ]--------//
const fvn = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(m.chat ? 
	 { remoteJid: "0-1625305606@g.us" } : {}) 
                },
	 message: { 
		"audioMessage": {
                 "mimetype":"audio/ogg; codecs=opus",
                 "seconds": "${second}",
                 "ptt": "true"
                        }
	                  } 
                     }
