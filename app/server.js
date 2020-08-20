require("express")().listen(1343);//ByLokme

const db = require("quick.db"); 
const discord = require("discord.js");//ByLokme
const client = new discord.Client({ disableEveryone: true });//ByLokme
client.login("NzQzNTM3NzgwMzY5NTIyNzY4.XzWHhQ.V96KMYsAiVe2kr_aEPNOFqhu4NE");
const fetch = require("node-fetch");
const fs = require('fs')//ByLokme

setInterval(() => {
  var links = db.get("linkler");//ByLokme
  if(!links) return 
  var linkA = links.map(c => c.url)//ByLokme
  linkA.forEach(link => {
    try {
      fetch(link)
    } catch(e) { console.log("" + e) };
  })
  console.log("Başarıyla Pinglendi.")//ByLokme
}, 60000)

client.on("ready", () => {
if(!Array.isArray(db.get("linkler"))) {//ByLokme
db.set("linkler", [])
}//ByLokme
})

client.on("ready", () => {
  client.user.setActivity(`!ekle botu suncuna davet et`)//ByLokme
  console.log(`Logined`)//ByLokme
})


client.on("message", message => {
  if(message.author.bot) return;
  var spl = message.content.split(" ");//ByLokme
  if(spl[0] == "!ekle") {
  var link = spl[1]//ByLokme
  fetch(link).then(() => {//ByLokme
    if(db.get("linkler").map(z => z.url).includes(link)) return message.channel.send("**⛔ Bu bot zaten uptime ediliyor.**")//ByLokme
    
    let yardım = new Discord.RichEmbed()//ByLokme
        .setAuthor(client.user.username)
        .setColor(0x6A3DB8)
        .setDescription("**✅ Başarılı! Projeniz artık 7/24!**")//ByLokme
        .setFooter(`© ${client.user.username}`)
        .setTimestamp()
     message.channel.send(yardım).then(msg => msg.delete(60000)); //ByLokme
    db.push("linkler", { url: link, owner: message.author.id})
  }).catch(e => {
    let yardım = new Discord.RichEmbed()//ByLokme
        .setAuthor(client.user.username)
        .setColor(0x6A3DB8)
        .setDescription("⛔ **Hata! Sadece düzgün url'ler ekleyebilirsiniz.**")//ByLokme
        .setFooter(`© ${client.user.username}`)
        .setTimestamp()
   return message.channel.send(yardım).then(msg => msg.delete(60000)); //ByLokme
  })//ByLokme
  }
})


client.on("message", message => {//ByLokme
  if(message.author.bot) return;
  var spl = message.content.split(" ");//ByLokme
  if(spl[0] == "!botsay") {//ByLokme
  var link = spl[1]
 message.channel.send(`**${db.get("linkler").length} / 1000**`)//ByLokme
}})



const Discord = require('discord.js');

client.on("message", message => {
  if(message.author.bot) return;
    var spl = message.content.split(" ");//ByLokme
  if(spl[0] == "!yardım") {
let embed = new Discord.RichEmbed()//ByLokme
.setColor('#070706')
.addField(`Botu Davet Etmek için Tıkla! = ADERCODE EKLENECEK`, `Botu Sunucunuza Eklerseniz Büyük Destek Olursunuz!`)
.setDescription(`**Uptime komudunu kullandıktan sonra sisteme eklenmesi için 3-5 dk bekleyin.**

 🌙 **!yardım** : Botun yardım menüsünü açar.

 🔋 **!ekle <link>** : Eklediğiniz proje linkini 7/24 açık yapar.

 ⚡ **!botsay** : Bot'umuzla uptime olan proje sayısını gösterir.

 🔮 **!botbilgi** : Bot'un istastistik verilerini gösterir.

`)
.setAuthor(`UptimeBOT | Yardım Menüsü`, client.user.avatarURL)
.setFooter(`UptimeBOT | Botun Kodlayıcıları ='ByLokme#8575`)//ByLokme
.setImage(`https://cdn.discordapp.com/attachments/741014134576906332/741980222101913600/unknown.png`)
return message.channel.send(embed);//ByLokme
    }
  
  })
  const log = message => {//ByLokme
  console.log(`${message}`);
}
  
client.on("message", message => {//ByLokme
  if(message.author.bot) return;
  var spl = message.content.split(" ");//ByLokme
  if(spl[0] == "!botbilgi") {
  var link = spl[1]
 message.channel.send(`***çok yakında eklenecek!***`)//ByLokme
}})

//coded by ByLokme
  

  