let handler = async(m, { conn, text, usedPrefix }) => {
let [number, pesan] = text.split `|`

    if (!number) return conn.reply(m.chat, 'Maaf Format Anda Salah\n\nContoh:\n.menfess 62××××|hallo sayang', m)
    if (!pesan) return conn.reply(m.chat, 'Maaf Format Anda Salah\n\nContoh:\n.menfess 62××××|hallo sayang', m)
    if (text > 500) return conn.reply(m.chat, 'Panjang bener jir pesan lu, kurangin lah!', m)
    
    let user = global.db.data.users[m.sender]

     let korban = `${number}`
    var nomor = m.sender
    let spam1 = `Hi Saya Bot Ada Yang Kirim Pesan Untukmu
Seseorang Temanmu
(Pengirim Rahasia)
⬡──⬡─────────⬡──⬡
📫Pengirim : Someone

💌 Pesan : ${pesan}
⬡──⬡─────────⬡──⬡
Maaf Anda Belum Bisa Membalas ke Pengirim 😁

------------------------------------------

▮PENGIRIM RAHASIA 」 
Anda Ingin Mengirimkan Pesan ke pacar/sahabat/teman/doi/
mantan?, tapi Tidak ingin tau siapa Pengirimnya?
Kamu bisa menggunakan Bot ini
Contoh Penggunaan: .menfess nomor|pesan untuknya
Contoh: .menfess 628xxxxxxxxxx|Mau jadi pcrku ga?`

    conn.reply(korban + '@s.whatsapp.net', spam1, m)

    let logs = `Sukses Mengirim Pesan
👥 Dari : wa.me/${nomor.split("@s.whatsapp.net")[0]}
⬡──⬡─────────⬡──⬡
💌 Isi Pesan : ${pesan}
⬡──⬡─────────⬡──⬡`

    conn.reply(m.chat, logs, m)
}
handler.help = ['menfess nomor|pesan']
handler.tags = ['nocategory']

handler.command = /^(menfess|confess|menfes|confes)$/i

handler.limit = true
handler.private = true
export default handler
