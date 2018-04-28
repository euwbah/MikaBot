const Discord = require("discord.js");
const bot = new Discord.Client();
const fs = require("fs");
const config = require("./config.json");

bot.on("ready", () => {
  console.log("I am ready!");
    bot.user.setActivity('Saving Yuu | mikahelp')
});

bot.on("message", (message) => {

  if (message.content.includes("yuu")){
    message.channel.send("YOU DARE SPEAK OF YUU YOU FILTHY SCUM");
  } else if (message.content.includes("pubg") || message.content.includes("PUBG")){
    message.channel.send("LUL DED GAEM");
  } else if (message.content.includes("shit") || message.content.includes("poop")){
    message.react("💩");
  } else if ((message.content.includes("love") || message.content.includes("loves")) && message.content.includes("mika")){
    message.react("❤");
  }

  //changing prefix
  if(message.content.startsWith(config.prefix + "prefix")) {
    // Gets the prefix from the command (eg. "!prefix +" it will take the "+" from it)
    let newPrefix = message.content.split(" ").slice(1, 2)[0];
    // change the configuration in memory
    config.prefix = newPrefix;
    message.channel.send("Prefix has been changed to " + newPrefix);
  
    // Now we have to save the file.
    fs.writeFile("./config.json", JSON.stringify(config), (err) => console.error);};
  

  //if its not the prefix then return
  if(!message.content.startsWith(config.prefix) || message.author.bot) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  //if it has prefix then run
  if (command === "help"){
    message.channel.send("```css\r\n#Current-Commands\r\nping - its just a dang ping\r\nplug - shameless selfplug\r\n"
    +"whome - displays who you are\r\n"+
    "#God-Commands\r\nadmincheck - check if you are god\r\n#Invite\r\ninvite - invite me to your server```");
  } else if (command === "ping") {
    message.channel.send("pong!");
  } else if (command === "plug"){
    message.channel.send("```java\r\nInstagram: @katsudonlel\r\nYoutube: 'https://www.youtube.com/channel/UCIlRkA9M2J1ZAjkJcqXW8yw/'```");
  } else if (command === "invite"){
    message.channel.send("Invite me to your server : https://discordapp.com/oauth2/authorize?client_id=417195336738537478&scope=bot&permissions=1");
  } else if (command === "whome"){
    message.channel.send("In case you forgot you are "+ message.author.username);
  }

  //only owner can run this
  if(message.author.id !== config.ownerID) return;
  if(command === "admincheck"){
    message.channel.send("yes");
  } else {
    message.channel.send("no");
  }

}); //end of bot.on


bot.login(config.token);
