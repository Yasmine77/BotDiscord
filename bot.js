require("dotenv").config();
const cleverbot = require("cleverbot-free");
const { Client, Intents } = require("discord.js");

// Let's import fs module to read our json files.
const fs = require("fs");
var data = require("./data");
console.log(data);
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.login(process.env.DISCORDTOKEN);

client.on("ready", () => {
  console.log("ready");
});
let conversation = [];
client.on("messageCreate", (message) => {
  if (message.author.bot) return false;

  console.log(message.content);
  console.log(client.user.id);
  let text = message.content;
  console.log(text);
  //Get a AI response and add text / res to conversation
  cleverbot(text, conversation).then((res) => {
    let formatText = text.toLowerCase();
    let video ="https://www.youtube.com/watch?v=xhE4U0KANg8&ab_channel=ITPCGlobal";

    if (formatText.includes("symptomes")) {
      conversation.push(data.answers[1].response);
      message.channel.send(data.answers[1].response);
    } else if (formatText.includes("sida")) {
      conversation.push(data.answers[0].response);
      message.channel.send(data.answers[0].response);
    } 
    else if (formatText.includes("vih") ) {
        conversation.push(data.answers[8].response);
        message.channel.send(data.answers[8].response);
    }

    else if (formatText.includes("dépistage")|
    formatText.includes("depistage") ) {
        conversation.push(data.answers[9].response);
        message.channel.send(data.answers[9].response);
      }
    
    else if (
      formatText.includes("infectée") ||
      formatText.includes("temps")
    ) {
      conversation.push(data.answers[4].response);
      message.channel.send(data.answers[4].response);
    } else if (
      formatText.includes("salut") ||
      formatText.includes("bonsoir") ||
      formatText.includes("bonjour") ||
      formatText.includes("hi") ||
      formatText.includes("hello")
    ) {
      conversation.push(data.answers[3].response);
      message.channel.send(data.answers[3].response);
    } else if (formatText.includes("transmet")||
               formatText.includes("transmission")
    ) {
      conversation.push(data.answers[5].response);
      message.channel.send(data.answers[5].response);
    } else if (
      formatText.includes("merci") ||
      formatText.includes("thank") ||
      formatText.includes("thx")
    ) {
      conversation.push(data.answers[6].response);
      message.channel.send(data.answers[6].response);
    } else if (
      formatText.includes("prévention") ||
      formatText.includes("prevention") ||
      formatText.includes("protége")||(formatText.includes("protege")
      ||(formatText.includes("protection")
      )
      
      )
    ) {
      conversation.push(data.answers[2].response);
      message.channel.send(data.answers[2].response);
    } else if (formatText.includes("traitement")) {
      conversation.push(data.answers[7].response);
      message.channel.send(data.answers[7].response);
    }
    
    else if (formatText.includes("expli")||
    formatText.includes("demons") ||
    formatText.includes("video")) {
        conversation.push(video);
        message.channel.send(video);
      }
     
    else {
      let anotherMsg =
        "Bonjour,vous pouvez verifier votre question,s'il vous plait!";
      conversation.push(anotherMsg);
      message.channel.send(anotherMsg);
    }
  });
});
