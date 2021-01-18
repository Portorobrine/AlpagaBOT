module.exports = {
    name: 'rick',
    aliases: ['r'],
    description : 'Play Song',
    async execute(message, args) {
        if (!message.guild) return;

        if (message.member.voice.channel) 
        {
            const ytdl = require('ytdl-core');

            const connection = await message.member.voice.channel.join();
            const dispatcher = connection.play(ytdl('https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstleyVEVO'), {
             volume: 1,           });


            dispatcher.on('start', () => {
                message.client.user.setActivity('Youtube', {type: 'Listening'} )
                message.reply('YOU GOT RICK ROLLED');
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