require('dotenv').config()

import { Client, Message, Channel } from "discord.js";
const bot: Client = new Client();
bot.login(process.env.DISCORD_TOKEN);
const regeExPlayGroovy = new RegExp(/-play|-p/);
const regeExPlayToasty = new RegExp(/;play/);
const regeExPokemonToasty = new RegExp(/;pokemon/);
const delay = (ms: number) => new Promise(res => setTimeout(res, ms));
bot.on("ready", () => {
// console.log("UU AA! Bananas!!!");
  bot.user.setActivity("YEET! Work in Progress", { type: "CUSTOM_STATUS" });

});
bot.on("message", async (message: Message) => {
  if (message.channel.type == "dm") {
    try {
      message.channel.send(
        // `¿Usted es tonto no? \n ¿¿¿No tenés amigos??? \n Andá cagá wacho.`
        `No aceptamos mensajes por acá, gracias...`
      );
    } catch (error) {
  // console.warn("Gg = \n" + error);
    }
  }
  let testGroovy = regeExPlayGroovy.test(message.content);
  let testToastSong = regeExPlayToasty.test(message.content);
  let testToastPokemon = regeExPokemonToasty.test(message.content);
  if (
    message.author.bot &&
    message.author.username != "Groovy" &&
    message.author.username != "Toasty"
  ) {
    return;
  }
  if (
    message.author.bot &&
    (message.author.username == "Groovy" ||
      message.author.username == "Toasty") &&
    !testGroovy &&
    !testToastSong &&
    message.channel.id == "535279674440417290"
  ) {
// console.log("Return on Music Channel");
    return;
  }
  if (
    message.author.bot &&
    (message.author.username == "Groovy" ||
      message.author.username == "Toasty") &&
    !testToastPokemon &&
    message.channel.id == "539148807049445397"
  ) {
    // console.log("Return on Pokemon Channel");
    return;
  }
  if (
    message.author.bot &&
    (message.author.username == "Groovy" ||
      message.author.username == "Toasty") &&
    !testGroovy &&
    !testToastSong &&
    message.channel.id != "535279674440417290" 
  ) {
     await delay(2000);
     message.delete();
    return;
  }
  if (
    message.channel.id == "378729201236443138" && message.content == "-stop"
  ) {
     await delay(1500);
     message.delete();
    return;
  }

  try {
  if ( (testGroovy || testToastSong) == true) {
    // console.log(testGroovy + " " + testToastSong);
      if (message.channel.id != "535279674440417290" ) {
        // console.log("Test Song True");
        
        message.delete();
        const member = message.member.user;
        await delay(1500);
        message.channel.lastMessage.delete();
        await delay(1500);
        message.channel.send(
          `${
            member.username
          }, si quieres escuchar música, ve al canal de texto ${bot.channels.get(
            "535279674440417290"
          )} e introduce ahí tus peticiones.`
        );
        await delay(3500);
        message.channel.lastMessage.delete();
    
      
  }
  return;
}}catch (error) {
  // console.warn("Gg = \n" + error);
}
try {
  if (testToastPokemon) {    
      if (message.channel.id != "539148807049445397") {
        message.delete();
        const member = message.member.user;
        await delay(1500);
        message.channel.lastMessage.delete();
        await delay(1500);
        message.channel.send(
          `${
            member.username
          }, si quieres obtener un Pokémon, ve al canal de texto ${bot.channels.get(
            "539148807049445397"
          )} y captúralos en ese espacio.`
        );
        await delay(8000);
        message.channel.lastMessage.delete();
        await delay(1500);
        return;
      }
      return;
  }} catch (error) {
    // console.warn("Gg = \n" + error);
  }
  try {
        if (message.channel.id != "693606873244500068" && message.content == "<@&536021611887722507>" && !message.author.bot) {
          message.delete();
          return;
        }
        return;
    }catch (error) {
    // console.warn("Gg = \n" + error);
    }
});
