/* ๐๐๐๐๐๐ ๐๐๐ https://github.com/BrunoSobrino */

let handler = async (m, { conn, usedPrefix, command }) => {
if (!m.quoted) throw `ุชุญููู ููุฏูู ุงูู ุตูุฑุฉ ูุชุญุฑูุฉ GIF 
ูุซุงู :  ุชุฑุณู ููุจูุช ุงูููุฏูู ุงูุฐู ุชุฑูุฏ ุชุญูููู ูุตูุฑุฉ ูุชุญุฑูุฉ ุซู ุชุดูุฑ ุงููู ูุชูุชุจ  \n *.togifaud*`
const q = m.quoted || m
let mime = (q.msg || q).mimetype ||''
if (!/(mp4)/.test(mime)) throw `ุชุญููู ููุฏูู ุงูู ุตูุฑุฉ ูุชุญุฑูุฉ GIF 
ูุซุงู :  ุชุฑุณู ููุจูุช ุงูููุฏูู ุงูุฐู ุชุฑูุฏ ุชุญูููู ูุตูุฑุฉ ูุชุญุฑูุฉ ุซู ุชุดูุฑ ุงููู ูุชูุชุจ  \n *.togifaud*`
m.reply(global.wait)
let media = await q.download()
conn.sendMessage(m.chat, { video: media, gifPlayback: true, caption:'สแดสษชแดข สแดแด By Noureddine ouafy*' }, { quoted: m })}
handler.command = ['togifaud']
export default handler

