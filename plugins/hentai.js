let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply(`_*「  WAITING  」* Perintah Kak ${conn.getName(m.sender)} Sedang Di Proses_`)
  let res = `https://api.xteam.xyz/randomimage/hentai?apikey=MIMINETBOT`
  conn.sendFile(m.chat, res, 'hentai.jpg', `wangy wangy wangy`, m, false)
}
handler.help = ['hentai', 'waifu18'].map(v => v + ' ')
handler.tags = ['dewasa']

handler.command = /^(hentai|waifu18)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true

module.exports = handler

