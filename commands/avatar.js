module.exports = {
	name: 'avatar',
	description : `Afficher l'avatar.`,
	execute(message) {
		if(!message.mentions.users.size){
			return message.channel.send(`${message.author.displayAvatarURL({format: 'png'})}`)
		}
		const avatarList = message.mentions.users.map(user => {
			return `${user.displayAvatarURL({format: 'png'})}`;
		});
		message.channel.send(avatarList);
	}
};