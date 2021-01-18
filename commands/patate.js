module.exports = {
	name: 'patate',
	description : 'patate',
	async execute(message, args) {
		if (!message.guild) return;

		if (message.member.voice.channel) 
		{
			const ytdl = require('ytdl-core');

     		const connection = await message.member.voice.channel.join();
     		const dispatcher = connection.play(ytdl('https://www.youtube.com/watch?v=75ksN7JSnYY'), {
 			 volume: 0.5,			});


     		dispatcher.on('start', () => {
     			message.client.user.setActivity('Youtube', {type: 'Listening'} )
     		})

     			dispatcher.on('finish', () => {
     			dispatcher.destroy();
     			message.member.voice.channel.leave();
     		})
   		} 


   		else 
   		{
     		message.reply('Patate is the new Hello World');
    	}

	}
};