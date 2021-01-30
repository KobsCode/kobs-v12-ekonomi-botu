const Discord = require("discord.js");
const db = require("quick.db");

///HAZIRLAYANLAR Clearly_ , FORCEX

exports.run =  async (client, message, args) =>  { 
  ///HAZIRLAYANLAR Clearly_ , FORCEX
  
const  hesap =  await db.fetch(`hesap-${message.guild.id}`)
  const hesapdurumu = await db.fetch(`hesapdurum-${message.guild.id}`)
  const hesapisim = await db.fetch(`hesapisim_${message.guild.id}`);
  let kontrol = await db.fetch(`hesapisim_${message.author.id}`);

  
  if (kontrol) return message.channel.send('Dostum Zaten Açık Bi Hesabın Var!') 

let isim = args.slice(0).join(' ')

  if(!isim) return message.channel.send("Bir İsim Gir")

db.set(`hesap-${message.author.id}`,"Hesap Açıldı")
  db.set(`hesapisim_${message.author.id}`,isim)
  db.add(`para_${message.author.id}`, 20)
  if(!hesap) return message.channel.send("Başarılı Hesap Açtın Sana Hesap Actıgından Dolayı 20Tl Verıyorum") //sdsaassda
  
}///HAZIRLAYANLAR Clearly_ , FORCEX OgnSert
exports.conf = {
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: "hesap-aç"
};
///HAZIRLAYANLAR Clearly_ , FORCEX OgünSert