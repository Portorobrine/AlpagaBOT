module.exports = {
	name: 'server',
	description : 'Information sur le serveur.',
	execute(message) {
		message.channel.send(`Nom du serveur : ${message.guild.name}\nNombre utilisateur : ${message.guild.memberCount}`);
	}
};