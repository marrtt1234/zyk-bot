const Discord = require('discord.js');
const client = new Discord.Client();
const help = require("./help.json");
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setGame('!help')
});
client.on('message', msg => {
  var id = Math.floor(Math.random() * 90000) + 10000;
  const args = msg.content.trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  if (msg.content === '!ping') {
    msg.channel.send('Pong!');
  }
  else if (msg.content === '!help') {
    msg.channel.send(help.help);
  }
  else if (command === '!supporters') {
      const embed = {
  "title": "ZykBot Webpage (Not ready)",
  "description": "Here's a list of all our awesome supporters!",
  "url": "https://discordapp.com",
  "color": 5323495,
  "author": {
    "name": "ZykBot Supporters",
    "url": "https://discord.gg/d774syH",
    "icon_url": "https://cdn.discordapp.com/embed/avatars/5.png"
  },
  "fields": [
    {
      "name": "[Owner] Zytekaron#0572",
      "value": "https://discord.gg/d774syH"
    },
    {
      "name": "[Code] Bandwidth#2054",
      "value": "https://discord.gg/zHuUzMp"
    },
    {
      "name": "[Code] Narwhal#9453",
      "value": "https://discord.gg/wSNEGrQ"
    },
    {
      "name": "[Advertising] killerjoe88#2335",
      "value": "https://discord.gg/RUaAJGa"
    }
  ]
};
msg.channel.send({ embed });
  }
  else if (command === "!purge"){
      if(msg.member.hasPermission("MANAGE_MESSAGES")){
          const amountString = args[0];
          var amount;
          if(amountString == null){
              amount = 0;
          }else{
              amount = parseInt(amountString);
          }
          amount = amount + 2;
          if(isNaN(amount) || amount < 1){
              msg.channel.send("Please enter a valid number.")
          }else{
              msg.channel.bulkDelete(amount);
          }
      }
   }
  else if (command === "!ticket") {
    if (args.length === 0){
      msg.channel.send("Please enter some information about your ticket. Is there a problem with the bot, or do you have a suggestion?")
    }else{
      msg.author.send(`Your ticket: ${args.join(' ')}\nTicket ID: ${id}`)
      client.users.get("272659147974115328").send(`Author: ${msg.author}\nTicket: ${args.join(' ')}\nTicket ID: ${id}`)
    }
  }
  else if (command === "!invite") {
    msg.channel.send("Invite ZykBot at `http://bit.ly/invitezykbot`")
  }
  else if (command === "!forcecrash") {
    if (msg.author.username === 'Zytekaron') {
      if (msg.author.discriminator === '0572') {
      msg.channel.send("ZykBot is being Force Crashed.")  
      console.log(`Bot crashed by ${msg.author}`)
      msg.send.chat(crash)
  }  }else{
      msg.channel.send("Only a bot admin can execute !forcecrash.")
    }
  }
});

client.login(help.token);
