exports.run = (client, message, args) => {
    var feedback = args.slice(1).join(" ");
    var author = message.author.username;
    var discrim = message.author.discriminator;
    if(!feedback) return message.reply(`Please Specify your Suggestion`);
    
    message.channel.send(`Thanks! We Have recieved your Suggestion. The team will carefully review it and DM you the results if possible`);
    client.channels.get('575913960616886282').send(`New Suggestion from **${author}#${discrim}**  The Suggestion is \`${feedback}\``);
    };
