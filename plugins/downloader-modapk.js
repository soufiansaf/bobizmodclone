let handler  = async (m, { conn, usedPrefix: prefix, command, text }) => {
try {
switch(command) {
case 'modapk': case 'apkmod': case 'apk':
if (!text) throw `*[â] ð¸ð½ð¶ðð´ð´ðð´ ð´ð» ð½ð¾ð¼ð±ðð´ ð³ð´ ð»ð° ð°ð¿ðº ððð´ ððð¸ð´ðð° ð±ððð²ð°ð*`        
const data2 = await fetchJson('https://api.akuari.my.id/search/searchmod2?query=' + text)
global.fetchJson = fetchJson
const data = data2.respon
if (data.length < 1) return await  conn.sendMessage(m.chat, { text: '*[â] ð½ð¾ ðµðð´ ð¿ð¾ðð¸ð±ð»ð´ ð´ð½ð²ð¾ð½ððð°ð ðð´ððð»ðð°ð³ð¾ð ð³ð´ ð»ð° ð°ð¿ðº*' }, { quoted: m } )
var srh = [];  
for (var i = 0; i < data.length; i++) {
srh.push({ title: data[i].title, description: '', rowId: prefix + 'dapk2 ' + data[i].link });}
const sections = [{title: 'Ø¥Ø®ØªØ± Ø§ÙØªØ·Ø¨ÙÙ Ø§ÙØ°Ù ØªÙØ¯ ØªØ­ÙÙÙÙ ÙØ§ Ø¹Ø²ÙØ²Ù', rows: srh}]
const listMessage = {text: `ââââ[á´á´á´á´á´á´ ÊÊ bobiz]\nâ\nâ- ð ÙØªÙØ¬Ø© Ø§ÙØ¨Ø­Ø« â  ð³ð´: ${text}\nâ\nâââââââââââââââââââ`, footer: wm, title: null, buttonText: "Ø¥Ø®ØªØ± Ø§ÙØªØ·Ø¨ÙÙ Ø§ÙØ°Ù ØªØ±ÙØ¯Ù", sections}
await conn.sendMessage(m.chat, listMessage, { quoted: m })
break
case 'dapk2': 
if (!text) throw `*[â] Ø§ÙÙØ±Ø¬Ù Ø¥Ø¯Ø®Ø§Ù Ø¥Ø³Ù Ø§ÙØªØ·Ø¨ÙÙ : ${prefix + command}* https://rexdl.com/android/minecraft-pocket-edition-apk-download1.html/`     
await conn.reply(m.chat, global.wait, m)
let data5 = await fetchJson('https://api.akuari.my.id/downloader/dlmod2?link=' + text)
if ( data5.respon.size.replace(' MB' , '') > 200) return await conn.sendMessage(m.chat, { text: '*[ â ] ÙØ°Ù Ø§ÙÙÙØ²Ø© ÙØªØ­ÙÙÙ Ø§ÙØªØ·Ø¨ÙÙØ§Øª ' }, { quoted: m } )
if ( data5.respon.size.includes('GB')) return await conn.sendMessage(m.chat, { text: '*[ â ] á´Ê á´Êá´ÊÉªá´ á´ á´s á´á´á´á´sÉªá´á´á´ á´á´sá´á´á´*' }, { quoted: m } )
const apk5 = await conn.sendMessage(m.chat, { document: { url: data5.respon.download[0].url }, mimetype: 'application/vnd.android.package-archive', fileName: data5.respon.title + '.apk', caption: null }, { quoted: m })   
break        
}
} catch {
throw `[ð»ð] ÙØ°Ø§ Ø§ÙØ§ÙØ± Ø®Ø§Øµ Ø¨ØªØ­ÙÙÙ Ø§ÙØªØ·Ø¨ÙÙØ§Øª Ø§ÙÙØ¯ÙÙØ¹Ø© Ø§Ø³ØªÙØªØ¹ Ø¨ÙÙØªÙ ÙØ¹ Ø§ÙØ§Ø³Ø·ÙØ±Ø© Ø¨ÙØ¨ÙØ² 
ÙØ«Ø§Ù : \n *.apk facebook*
`
}}    
handler.command = /^(apkmod|apk|modapk|dapk2)$/i
export default handler
async function fetchJson(url, options) {
try {
options ? options : {}
const res = await axios({ method: 'GET', url: url, headers: {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'}, ...options })
return res.data
} catch (err) {
return err
}}
