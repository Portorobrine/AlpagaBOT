const fs = require('fs');

const discord = require('discord.js');

const { prefix, token} = require('./config.json');

const client = new discord.Client();
client.commands = new discord.Collection();

client.once('ready',()=> {
	console.log('Ready!');
});

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles){
	const command = require(`./commands/${file}`)
	client.commands.set(command.name, command); 
}

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();
	if (!client.commands.has(command)) return;

	try {
		client.commands.get(command).execute(message, args);
	}catch (error){
		console.error(error);
		message.reply("Oups t pas très doués.");
	}
})



client.login(token);