import { tiktokdl } from '@bochilteam/scraper'

let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `Use example ${usedPrefix}${command} https://vt.tiktok.com/ZSRNKWuGx/?k=1`
    const { author: { nickname }, video, description } = await tiktokdl(args[0])
    const url = video.no_watermark || video.no_watermark2 || video.no_watermark_raw
    if (!url) throw 'Can\'t download video!'
    conn.sendFile(m.chat, url, 'tiktok.mp4', 
`                 ㅤ
  ████████▀▀▀████
  ████████────▀██
  ████████──█▄──█
  ███▀▀▀██──█████
  █▀──▄▄██──█████
  █──█████──█████
  █▄──▀▀▀──▄█████
  ███▄▄▄▄▄███████
      ⇆ㅤ◁ㅤ ❚❚ㅤ ▷ㅤ↻ 
*Nickname:* ${nickname}
*Description:* ${description}

_*© 𝑍𝑒𝑛𝑛𝑆𝑘𝑦-𝐵𝑜𝑡𝑧*_
`.trim(), m)
}
handler.help = ['tiktok', 'tiktok', 'tiktokdl'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tik(tok)?(tok)?(dl)?)$/i

export default handler
