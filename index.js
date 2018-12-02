const Discord = require("discord.js");

const TOKEN = "NTE3MjQ4ODc2MTQzNzA2MTEy.DuQwpg.aJHtYWk4dt2wvXYjLD2SXc4SZNc"
const PREFIX = ">"

function generateHex() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

var fortunes = [
    "Yes",
    "No",
    "Maybe",
    "lol"
];

var bot = new Discord.Client();

var servers = {};

bot.on("ready", function() {
    console.log("Bot is Ready");
});

bot.on("guildMemberAdd", function(member) {
    member.guild.channels.find("name", "welcome").sendMessage(member.toString() + "Join to server !!");

    member.addRole(member.guild.roles.find("name", "Member"));

    member.guild.createRole({
        name: member.user.username,
        color: generateHex(),
        premissions: []
    }).then(function(role) {
        member.addRole(role);
    });
});
bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(PREFIX)) return

    var args = message.content.substring(PREFIX.length).split("  ");

    switch (args[0].toLowerCase()) {
        case "ping":
            message.channel.sendMessage("Pong!");
            break;
        case "info":
            message.channel.sendMessage("Hello, I'm Bot i have owner is Barrel and you want to use command please type }help, Thanks ! ");
            break;
        case "8ball":
            if (args[1]) message.channel.sendMessage(fortunes[Math.floor(Math.random() * fortunes.length)]);
            else message.channel.sendMessage("Can't read");
            break;
        case "help":
            var embed = new Discord.RichEmbed()
                .addField("Command Barrel", "command : `@mention the Bot`", true)
                .addField("Command RandelBot", "command : `!!Help`", true)
                .addField("Command Bot.js", "command : `None`", true)
                .addField("My Server", "You can invite your friend join to my server : https://discord.gg/3kY8zj2", true)
                .addField("Bot link invite", "Barrel : https://discordapp.com/api/oauth2/authorize?client_id=477467368575205377&permissions=8&scope=bot | RandelBot : https://discordapp.com/api/oauth2/authorize?client_id=482903034502840320&permissions=8&scope=bot | Sun Talk Bot : https://discordapp.com/oauth2/authorize?client_id=516189938446762004&scope=bot&permissions=2146958591", true)
                .setColor(0x00FFFF)
            message.channel.sendEmbed(embed);
            break;
        case "help_support":
            message.channel.sendMessage(message.author.toString() + "**Hello if you want to see command all Bot Please join server https://discord.gg/3kY8zj2 **")
            break;
        default:
            message.channel.sendMessage("you want to see command?")
            break;
        case "run_node.js":
            message.channel.sendMessage("You can check video now > https://youtu.be/SnYGvYNZxE4 ");
            break;
        case "command":
            var embed = new Discord.RichEmbed()
                .addField("Command ZiglibX", ">`info`< >`help`< >`ping`< >`run_node.js`< >`help_support`< >`prefix`<", true)
                .setColor(0x00FFFF)
            message.channel.sendEmbed(embed);
            break;
        case "prefix":
            var embed = new Discord.RichEmbed()
                .addField("Prefix RandelBot", "!! or @mention", true)
                .addField("Prefix BarrelBot", "} . bot", true)
                .addField("Prefix Sun Talk Bot", "}{", true)
                .setColor(0x00FFFF)
            message.channel.sendEmbed(embed);
            break;
        case "information_run":
            message.channel.sendMessage("Hello, this is bot run by node index and create bot by : Visual Studio but...it is bot Discord.js(JavaScript)");
            message.channel.sendMessage("Requirement list");
            message.channel.sendMessage("Visual Studio: ** https://code.visualstudio.com/ **");
            message.channel.sendMessage("Discord.js: ** https://discord.js.org/#/ **");
            message.channel.sendMessage("NPM Install: `npm install discord.js`");
            message.channel.sendMessage("Node.js: ** https://nodejs.org/en/ **");
            break;
        case "howverify":
            var embed = new Discord.RichEmbed()
                .addField("How to Verify", "please follow setp, have one step", true)
                .addField("Step 1", "if you want to verify please type command Now : `!agree`", true)
                .addField("Step 2", "Finish, Thank you!", true)
                .setColor(0x00FFFF)
            message.channel.sendEmbed(embed);
            break;
        case "website":
            message.channel.sendMessage("__***This is website of channel, you can visit the website !***__");
            var embed = new Discord.RichEmbed()
                .addField("HOME", "[CLICK TO HOME](https://birdxyz.wixsite.com/drtweb)", true)
                .addField("TEAM", "[CLICK TO TEAM](https://birdxyz.wixsite.com/drtweb/team)", true)
                .addField("SERVER", "[CLICK TO SERVER](https://birdxyz.wixsite.com/drtweb/server-partner)", true)
                .addField("FORUM", "[CLICK TO FORUM](https://birdxyz.wixsite.com/drtweb/forum) - Please login to post on forum ", true)
                .addField("CONTATC", "[CLICK TO CONTACT](https://birdxyz.wixsite.com/drtweb/contact)", true)
                .addField("VIDEO", "[CLICK TO VIDEO]()", true)
                .addField("STORE", "[CLICK TO STORE]()", true)
                .addField("SOCIALMEDIA", "[CLICK TO SOCIALMEDIA]()", true)
                .setColor(0x00FFFF)
                .setThumbnail(message.author.avatarURL)
            message.channel.sendEmbed(embed);
            break;
        case "removerole":
            message.member.removeRole(message.member.guild.roles.find("name", "Member"));
            break;
        case "deleterole":
            message.member.guild.roles.find("name", "Member").delete();
            break;
    }
});

bot.login(TOKEN);
