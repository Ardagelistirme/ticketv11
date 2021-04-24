const Discord = require('discord.js');
const data = require('quick.db')

exports.run = async (client, message, args) => { //can #0118
const prefix = await data.fetch(`prefix.${message.guild.id}`) || client.ayarlar.prefix;
  
let ölçüm = await message.channel.send(`Ping.`).then(a => {
setTimeout(async () => {
a.edit(`Ping..`)
setTimeout(async () => {
a.edit(`Ping...`)
setTimeout(async () => {
a.edit(`Pong! Bot pingi: ${client.ping}`)
}, 1500)  
}, 1500)  
}, 1500)  

})

  
};
exports.conf = { //can #0118
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = { //can #0118
  name: 'ping'
};