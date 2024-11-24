case "svkontakid": {
   if (!isOwner) return zoxreply(`𝗞𝗵𝘂𝘀𝘂𝘀 𝗭𝗼𝘅 𝗦𝘁𝗼𝗿𝗲 !!`)
   if (isGroup) return zoxreply(" 𝗕𝘂𝗮𝘁 𝗱𝗶 𝗣𝗿𝗶𝘃𝗮𝘁𝗲")
   if (!text) return zoxreply(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix+command} idgroup\nUntuk Liat Id Group Silahkan Ketik .listgc`)
   await zoxreply("⚡ 𝗢𝘁𝘄 𝗕𝘂𝗮𝘁 𝗙𝗶𝗹𝗲 𝗞𝗼𝗻𝘁𝗮𝗸 𝗡𝘆𝗮  !!_")
   const groupMetadataa = !isGroup? await KiZex.groupMetadata(`${text}`).catch(e => {}) : ""
   const participants = !isGroup? await groupMetadataa.participants : ""
   const halls = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
   for (let mem of halls) {
      if (isContacts) return
      contacts.push(mem)
      fs.writeFileSync('./all/database/contacts.json', JSON.stringify(contacts))
   }
   try {
      const uniqueContacts = [...new Set(contacts)];
      const vcardContent = uniqueContacts.map((contact, index) => {
         const vcard = [
            "BEGIN:VCARD",
            "VERSION:3.0",
            `FN:WA[${createSerial(2)}] ${contact.split("@")[0]}`,
            `TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
            "END:VCARD",
            "", ].join("\n");
         return vcard; }).join("");
      fs.writeFileSync("./all/database/contacts.vcf", vcardContent, "utf8");
   } catch (err) {
      reply(util.format(err))
   } finally {
      await KiZex.sendMessage(from, { document: fs.readFileSync("./all/database/contacts.vcf"), fileName: "contacts.vcf", caption: "⚡ 𝗦𝘂𝗸𝘀𝗲𝘀 𝗕𝗼𝘀 𝗧𝗶𝗻𝗴𝗴𝗮𝗹 𝗦𝗮𝘃𝗲 𝗔𝗷𝗮 𝗧𝘂𝗵 😁⚡", mimetype: "text/vcard", }, { quoted: m })
      contacts.splice(0, contacts.length)
      fs.writeFileSync("./all/database/contacts.json", JSON.stringify(contacts))
   }
}
break

case "svkontakgc": {
if (!isOwner) return zoxreply(`𝗞𝗵𝘂𝘀𝘂𝘀 𝗭𝗼𝘅 𝗦𝘁𝗼𝗿𝗲`)
if (!isGroup) return zoxreply(" Khusus Grup")
if (!text) return zoxreply(`Maaf Kak Fitur ${prefix+command} Hanya Bisa Di Gunakan Di Dalam Group\nUntuk Memasukan Bot Ke Dalam Group Yang Di Ingin Kan\nSilahkan Ketik Command .join linkgroup`)
await zoxreply("_Wᴀɪᴛɪɴɢ ɪɴ ᴘʀᴏɢʀᴇss !!_")
const groupMetadata = isGroup? await KiZex.groupMetadata(from).catch(e => {}) : ""
const groupOwner = isGroup? groupMetadata.owner : ""
const participantts = isGroup? await groupMetadata.participants : ""
const halsss = await participantts.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let men of halsss) {
if (isContacts) return
contacts.push(men)
fs.writeFileSync('./all/database/contacts.json', JSON.stringify(contacts))
}
zoxreply("Sukses File Sudah Di Kirim Lewat Chat Private")
try {
const uniqueContacts = [...new Set(contacts)];
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:zhira[${createSerial(2)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n");
return vcard; }).join("");
fs.writeFileSync("./all/database/contacts.vcf", vcardContent, "utf8");
} catch (err) {
reply(util.format(err))
} finally {
await KiZex.sendMessage(sender, { document: fs.readFileSync("./data/database/contacts.vcf"), fileName: "contacts.vcf", caption: "Sukses Tinggal Save Ya Kakak", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
fs.writeFileSync("./all/database/contacts.json", JSON.stringify(contacts))
}
}
break
