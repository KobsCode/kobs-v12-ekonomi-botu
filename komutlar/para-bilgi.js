
//HAZIRLAYANLAR Clearly_ , FORCEX OgünSert
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require('quick.db');
const ms = require('ms')
exports.run = async (client, message, args) => {
let kişi = message.mentions.users.first() || message.author

let parapara = await db.fetch(`para_${kişi.id}`) || 0  
  
  message.channel.send(`${parapara}`)
};
exports.conf = {
  aliases: [],
  permLevel: 0
};
//HAZIRLAYANLAR Clearly_ , FORCEX ogün Sert
exports.help = {
  name: 'para'
};

