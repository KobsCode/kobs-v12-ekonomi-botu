const Discord = require('discord.js')
const db = require('quick.db');
const { randomRange, verify } = require('../util/Util.js');


exports.run = async (client, message, args) => {
////dc bak
  
  const as = message.author
  
  const bakiye = await db.fetch(`para_${message.author.id}`);
 
  let kontrol = await db.fetch(`hesapisim_${message.author.id}`);

  
  if (!kontrol) return message.channel.send('Dostum Zaten Hesabın Yok') 

 
  message.channel.send(`Hesabını Son Kez Silmeyi Onaylıyormusun?`)
    const verification = await verify(message.channel, as);
                if (!verification) {
                    this.fighting.delete(message.channel.id);
                    return message.channel.send(`Kabul Etmediğin İçin ${as} İşlem İptal Oldu!`);
                }
              db.delete(`para_${message.author.id}`)
  db.delete(`hesapdurum-${message.author.id}`)
  db.delete(`hesapisim_${message.author.id}`)
  message.channel.send(`Hesabın Silindi`)
}

exports.conf = {
    enabled: false,
    guildOnly: true,
    aliases: [],
    permLevel: 0
}

exports.help = {
    name: 'hesabımı-sil'
}