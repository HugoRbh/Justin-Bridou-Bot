const Discord = require('discord.js');
const client = new Discord.Client({
    intents: [
    Discord.Intents.FLAGS.GUILDS,
    Discord.Intents.FLAGS.GUILD_MESSAGES
]
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("messageCreate", message => {

  if (message.author.bot) return;

  if (message.content === "!help"){
    message.reply("**Liste des commandes :**\n!cc 123 => Donne le temps de craft pour 123 recettes")
  }

  if (message.content.startsWith('!cc')) {
      var nb_crafts = message.content.substring(4)
      var remaining_time = 1*nb_crafts;
      var h = Math.floor(remaining_time / 3600);
      var m = Math.floor((remaining_time % 3600) / 60);
      var s = Math.floor((remaining_time % 3600) % 60);
      var hDisplay = h > 0 ? h + (h == 1 ? " heure " : " heures ") : "";
      var mDisplay = m > 0 ? m + (m == 1 ? " minute " : " minutes ") : "";
      var sDisplay = s > 0 ? s + (s == 1 ? " seconde" : " secondes") : "";
      var resultat = hDisplay + mDisplay + sDisplay;
      
      if(isNaN(nb_crafts)){
        message.reply("Merci d'entrer seulement un nombre.");
       }else{
        message.reply(`Pour crafter ${nb_crafts} objets, il faudra ${resultat}.`);
       }
  }
});

client.login(preocess.env.TOKEN);