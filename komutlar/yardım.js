const Discord = require('discord.js')

exports.run = async(client, message) => {
  
    const y = new Discord.MessageEmbed()
    .setColor('RED')
    .addField(':small_red_triangle_down:','`!günlük-para : Günlük Para (24 Saatte Bir Kullanılabilir)`')
    .addField(':small_red_triangle_down:','`!hesap-aç : Banka Hesap Açar (+20 Lira Verir) `')
    .addField(':small_red_triangle_down:','`!hesabımı-sil : Banka Hesabınızı Siler`')
    .addField(':small_red_triangle_down:','`!hesap : Banka Hesabınız Hakkında Bilgi Verir`')
    .addField(':small_red_triangle_down:','`!para-gönder : Belirttiğiniz Kişiye Belirttiğiniz Miktarda Para Gönderir`')
    .addField(':small_red_triangle_down:','`!para : Bankadaki Paranızı Belirtir`')
    .addField(':small_red_triangle_down:','`!market : Markteti Gösterir`')
    .addField(':small_red_triangle_down:','`!istatistik : Botunuzun İstatistiklerini Gösterir`')
    .setFooter(`${client.user.username}`, client.user.avatarURL)
    .setThumbnail('https://cdn.discordapp.com/attachments/727202608133046415/727205052808298546/Kobs_server.png') 
    return message.channel.send(y)
};
exports.conf = {
 enabled: true,
 guildOnly: false,
  aliases: ['y'],
 permLevel: 0
};

exports.help = {
 name: 'yardım'
};