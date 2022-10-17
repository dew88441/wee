const { Command } = require(`reconlx`);
const ee = require(`../../settings/embed.json`);
const config = require(`../../settings/config.json`);
const { MessageEmbed, version } = require(`discord.js`);
const emoji = require(`../../settings/emoji.json`);
const { duration } = require(`../../handlers/functions`);
let cpuStat = require("cpu-stat");
let os = require("os");
var os2 = require('os-utils');
const osu = require('node-os-utils')
require('loadavg-windows')
const A1 = (os.platform())
const A2 = (os.totalmem()) / 1024 / 1024 / 1024
const A3 = (os.arch())
const A4 = (os.cpus().map((i) => `${i.model}`)[0])
const A5 = (os.cpus().map((i) => `${i.speed}`)[0]) / 1024
const A6 = (os.platform())
const A7 = (os.uptime())

const cpu = osu.cpu
const usage = (cpu.loadavgTime() / 2) * 10

console.log(usage)

os2.cpuUsage(function(v){
    console.log( 'CPU Usage (%): ' + v );
});
                  
module.exports = new Command({
  // options
  name: `botinfo`,
  description: `ข้อมูล`,
  userPermissions: [`SEND_MESSAGES`],
  botPermissions: [`SEND_MESSAGES`],
  category: `Information`,
  cooldown: 10,
  // command start
  run: async ({ client, interaction, args, prefix }) => {
    // Code
    
                  
    interaction.followUp({
      embeds: [
        new MessageEmbed()
          .setColor(ee.color)
          .setImage(`
          https://64.media.tumblr.com/acbddd598f3d7b2f31c030a03ce65327/c0bf62d52f6add7d-e9/s640x960/0f0e6e0c2d185689d4bfe2c2a610a75d345a6db1.gifv
`)
          .setAuthor({
            name: client.user.username,
            iconURL: client.user.displayAvatarURL({ dynamic: true }),
          })
          .setDescription(
            `Server By Luna Hosting \n\n`
          )
          .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
          .addFields([
            {
              name: `🤖 Name`,
              value: `>>> \`${client.user.username}\``,
              inline: true,
            },
            {
              name: `🏓 Ping`,
              value: `>>> \`${client.ws.ping}ms\``,
              inline: true,
            },
            {
              name: `🎛️ Servers`,
              value: `>>> \`${client.guilds.cache.size} Servers\``,
              inline: true,
            },
            {
              name: `👨‍👧‍👧 Users`,
              value: `>>> \`${client.users.cache.size} Users\``,
              inline: true,
            },
            {
              name: `📂 Channels`,
              value: `>>> \`${client.channels.cache.size} Channels\``,
              inline: true,
            },
            {
              name: `🔗 Node.js Version`,
              value: `>>> \`${process.version}\``,
              inline: true,
            },
            {
              name: `🔗 Discord.js Version`,
              value: `>>> \`${version}\``,
              inline: true,
            },
            {
              name: `💾 CPU Use`,
              value: `>>> \`${usage}% | 100% => 1Core\``,
              inline: false,
            },
            {
              name: `💾 Ram Use`,
              value: `>>> \`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}/ ${(os.totalmem() / 1024 / 1024).toFixed(2)}MB\``,
              inline: false,
            },
            {
              name: `💾 Server Info`,
              value: `>>> \`\`\`OS type : ${A1}\nPlatform : ${A6}\nRam : ${A2} gb\nArch : ${A3}\n\nServer Uptime : ${A7}\nCPU\n${A4}\nSpeed : ${A5}gh\`\`\``,
              inline: false,
            },
            {
              name: `${emoji.setup} Bot Commands`,
              value: `>>> \`\`\` Commands ${client.commands.size} , SubCommands ${client.subcmd.size}\`\`\``,
            },
            {
              name: `${emoji.time} Bot Uptime`,
              value: `>>> \`\`\`${duration(client.uptime)
                .map((i) => `${i}`)
                .join(` , `)}\`\`\``,
            },
          ])
          .setFooter({ text: ee.footertext, iconURL: ee.footericon }),
      ],
    });
  },
});