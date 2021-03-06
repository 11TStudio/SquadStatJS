require('dotenv').config();
const SETTINGS = process.env;

module.exports = {
    name: "uptime",
    aliases: ["u"],
    cooldown: 60,
    description: "Shows bots ping and uptime",
    showOnHelp: SETTINGS.showOnHelpUptimeCommand,
    execute(message) {
        let seconds = Math.floor(message.client.uptime / 1000);
        let minutes = Math.floor(seconds / 60);
        let hours = Math.floor(minutes / 60);
        let days = Math.floor(hours / 24);

        seconds %= 60;
        minutes %= 60;
        hours %= 24;

        return message
            .reply(`Ping: \`${Date.now() - message.createdTimestamp}ms.\` x  Uptime: \`${days} day(s),${hours} hours, ${minutes} minutes, ${seconds} seconds\``)
            .catch(console.error);
    }
};