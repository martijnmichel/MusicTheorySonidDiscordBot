const { Interval } = require('@tonaljs/tonal');

const Discord = require('discord.js');

function embedInterval(name) {
    const int = Interval.get(name)
    return new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Interval ' + name)
        .setURL('https://sonid.app/interval/' + name)
        .setAuthor('Sonid', 'https://sonid.app/favicon.png', 'https://sonid.app')
        .setDescription('Some description here')
        .setThumbnail('https://i.imgur.com/wSTFkRM.png')
        .addFields(
            { name: 'Name', value: name },
            { name: 'Semitones', value: int.semitones },
        )
        .addField('Inline field title', 'Some value here', true)
        .setImage('https://i.imgur.com/wSTFkRM.png')
        .setTimestamp()
        .setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');
}

module.exports = { embedInterval }