module.exports = {
    name: 'stop',
    aliases: ['st'],
    description : 'stop Song',
    async execute(message, args) {
        if (!message.guild) return;

        if (message.member.voice.channel) 
        {
            const ytdl = require('ytdl-core');

            const connection = await message.member.voice.channel.leave();
         
        } 


        else 
        {
            message.reply('You need to join a voice channel first!');
        }

    }
};