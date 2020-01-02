const express = require("express")
const passport = require('passport');
const session = require('express-session');



const MemoryStore = require('memorystore')(session);
const Strategy = require('passport-discord').Strategy;
const url = require('url');
const helmet = require('helmet');
const { EvaluatedPermissions } = require('discord.js');

var app = express();



var fs = require("fs")
var http = require("http")

app.use(express.static("public"));
const https = require('https');
app.set("view engine", "ejs");
const Discord = require("discord.js")
const client = new Discord.Client();
//client.login(process.env.BOT_TOKEN)
client.on('ready',()=>{
console.log(`Ready! [${client.user.tag}]`)
});
app.use(express.static('public'));

app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/", (request, response) => {
  response.sendStatus(200);
});

app.listen(process.env.PORT);
setInterval(() => {
  http.get(`https://mystery-website.glitch.me/`);
}, 280000); 


const test = JSON.parse(fs.readFileSync('./test.json' , 'utf8'));

client.on('message',message=>{
if(message == 'zt') {
test[message.guild.id] = {t:'lol'}
fs.writeFile("./test.json", JSON.stringify(test), (err) => {
    if (err) console.error(err)
    })
    message.channel.send({file:'./test.json'})

}




      
})