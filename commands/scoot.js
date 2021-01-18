module.exports = {
    name: 'scoot',
    aliases: ['sc'],
    description : 'Play Song',
    async execute(message, args) {
        if (!message.guild) return;

        if (message.member.voice.channel) 
        {
            const ytdl = require('ytdl-core');

            const connection = await message.member.voice.channel.join();
            const dispatcher = connection.play(ytdl('https://www.youtube.com/watch?v=b6K31hVuCx4'), {
             volume: 100,           });


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
            message.reply('You need to join a voice channel first!');
        }

    }
};