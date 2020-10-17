//Required Modules: discord.js, child_process
const exec = require('child_process')
const config = require('./config.json');
const Discord = require('discord.js');
const MessageEmbed = require('discord.js');
const client = new Discord.Client();
const token = config.token
const prefix = config.prefix
const ownerID = config.ownerID

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
}); //1

client.on('message', msg => {
	if (msg.content.startsWith === `${prefix}yarrharr`) {
    msg.reply('you must not pirate you literal dipshit');
	console.log(`${msg.author} used .yarrharr.`)

	}

	else if (msg.content.startsWith(`${prefix}kurisu`)) {
		msg.channel.send("Kurisu, UwUham's first discord bot!")
		msg.channel.send("https://github.com/UwUham/Kurisu")
	}
	else if (msg.content.startsWith(`${prefix}setup`)) {
		if (msg.content.startsWith(`${prefix}setup git`)) {
				exec("~/kurisu_update.sh", (error, stdout, stderr) => {
				if (error) {
					console.log(`error: ${error.message}`);
					return;
				}
				if (stderr) {
					console.log(`stderr: ${stderr}`);
					return;
				}
				console.log(`stdout: ${stdout}`);
				});
			}
		else if (msg.content.startsWith(`${prefix}setup restart`)) {
			exec("sudo systemctl restart kurisu", (error, stdout, stderr) => {
				if (error) {
					console.log(`error: ${error.message}`);
					return;
				}
				if (stderr) {
					console.log(`stderr: ${stderr}`);
					return;
				}
				console.log(`stdout: ${stdout}`);
				});
		}
					
	}

	else if (msg.content.startsWith(`${prefix}invite`)) {
		if (msg.content.endsWith('uwuham')) {
		msg.channel.send('https://discord.gg/QtPRnRM')
	}
		else if (msg.content.endsWith('gnome')) {
		msg.channel.send('https://discord.gg/zWPWwQC')
	}
		else if (msg.content.endsWith('lazr')) {
		msg.channel.send('https://discord.gg/7ECUWDp')
	}
		else if (msg.content.endsWith('homebrew')) {
		msg.channel.send('https://discord.gg/C29hYvh')
	}
		else if (msg.content.endsWith('vault')) {
		msg.channel.send('https://discord.gg/WwJyHuQ')
	}
		else if (msg.content.endsWith('help')) {
		msg.channel.send('Valid servers are: uwuham, gnome, lazr, homebrew, vault.\n' +
		'Syntax: .invite <server>')
	}
		else {
		msg.channel.send('Server not found. Valid servers are: uwuham, gnome, lazr, homebrew, vault.')
	}
	console.log(`${msg.author} used .invite.`)
  }

	else if (msg.content.startsWith(`${prefix}headpat`)) {
    msg.channel.send('https://imgur.com/gallery/WyMHuyL');
	console.log(`${msg.author} used .headpat.`)
  }

	else if (msg.content.startsWith(`${prefix}help`)) {
		msg.channel.send('```.yarrharr - Displays some common sense\n' +
		'.kurisu - sends a link to Kurisu\'s Github. May not be up to date.\n' +
		'.warm - warms target user.\n' +
		'.cool - cools target user.\n' +
		'.bean - swing the beanhammer at somebody.\n' +
		'.headpat - give somebody a headpat uwu\n' +
		'.gay - ha gay\n' +
		'.invite - type .invite help for information.\n' +
		'.announce - Staff only. Causes Kurisu to speak.\n' +
		'.yeet - Staff only. Bans target member.\n' +
		'.boot - Staff only. Kicks target member.\n' + 
		'.tinysearch - Search TinyDB for a 3DS app. Do .tinysearch 1 for more info.\n' +
		'.ping - What do you think it does?\n' +
		'.bow - Honestly, just try it and see.```')
		console.log(`${msg.author} used .help (general).`)
	}
	else if (msg.content.startsWith(`${prefix}bean`)) {
	const guild = msg.guild;
	const bean = guild.emojis.cache.first();
    const user = msg.mentions.users.first();
    if (user) {
      const member = msg.guild.member(user);
      if (member) {
        member
            msg.channel.send(`<@${user.id}> has been beaned. ${bean}`);
			console.log(`${msg.author} beaned ${member}.`)
			}
		}
	}

	else if (msg.content.startsWith(`${prefix}gay`)) {
	msg.channel.send(':rainbow:')
	console.log(`${msg.author} used .gay.`)
	}

	else if (msg.content.startsWith(`${prefix}warm`)) {
	const min = 10;
	const max = 100;
	const result = (Math.random() * (max - min + 1) + min);
	const farenheit = (result * 9/5) + 32;
	const kelvin = result + 273.15;
    const user = msg.mentions.users.first();
    if (user) {
      const member = msg.guild.member(user);
      if (member) {
        member
            msg.channel.send(`<@${user.id}> has been warmed. User is now ${result} degrees Celcius.(${farenheit} degrees F, ${kelvin} degrees K.)`);
			console.log(`${msg.author} warmed ${member} to ${result} degrees C`)
			}
		}
	}

	else if (msg.content.startsWith(`${prefix}cool`)) {
	const min = -100;
	const max = 10;
	const result = (Math.random() * (max - min + 1) + min);
	const farenheit = (result * 9/5) + 32;
	const kelvin = result + 273.15;
    const user = msg.mentions.users.first();
    if (user) {
      const member = msg.guild.member(user);
      if (member) {
        member
            msg.channel.send(`<@${user.id}> has been cooled. User is now ${result} degrees Celcius.(${farenheit} degrees F, ${kelvin} degrees K.)`);
			console.log(`${msg.author} cooled ${member} to ${result} degrees C`)
			}
		}
	}
	else if (msg.content.startsWith(`${prefix}announce`)) {
		const user = msg.author;
		if (user) {
			const member = msg.member;
			if (member) {
				if (member.roles.cache.some(role => role.name === 'Staff')) {
				var len = msg.content.length;
				msg.channel.send(msg.content.substr(10, len))
				msg.delete()
				console.log(`${msg.author}: ${msg.content.substr(10, len)}`)
				}
			}
		}
	}
	else if (msg.content.startsWith(`${prefix}boot`)) {
		const author = msg.author;
		if (author) {
			const authmem = msg.member;
			if (authmem) {
				if (authmem.roles.cache.some(role => role.name === 'Staff')) {
					const user = msg.mentions.users.first();
					if (user) {
		 				const member = msg.guild.member(user);
		  				if (member) {
							member
			  					.kick(msg.content.substr(3, (msg.content.length)))
			  					.then(() => {
								msg.channel.send(`Successfully kicked ${user.tag}`);
			  			})
			  			.catch(err => {
						msg.channel.send('I was unable to kick the member');
						console.error(err);
			  			});
		  				} else {
			msg.channel.send("That user isn't in this guild!");
		  }
		} else {
		  msg.channel.send("Uhh, who did you want me to kick again?");
					}
				}
			}
		}
	}
	else if (msg.content.startsWith(`${prefix}yeet`)) {
		const author = msg.author;
		if (author) {
			const authmem = msg.member;
			if (authmem) {
				if (authmem.roles.cache.some(role => role.name === 'Staff')) {
					const user = msg.mentions.users.first();
					if (user) {
						 const member = msg.guild.member(user);
		 				 if (member) {
							member
			  				.ban({
							reason: msg.content.substr(3, (msg.content.length)),
			  				})
			 				.then(() => {
							msg.channel.send(`Successfully banned ${user.tag}`);
			  				})
			  				.catch(err => {
							msg.channel.send('I was unable to ban the member');
							console.error(err);
			  			});
		  } else {
			msg.channel.send("That user isn't in this guild!");
		  }
		} else {
		  msg.channel.send("Who should I ban? Coolkit again?");
		}}}}}
	else if (msg.content.startsWith(`${prefix}tinysearch`)) {
			msg.channel.send('sorry lol but they took tinydb down like a week after i did this and im not redoing it lmao')
		}
	
	else if (msg.content.startsWith(`${prefix}bow`)) {
		if (msg.author.id === ownerID) {
			msg.channel.send(`Oh! <@${ownerID}>! Thank you for taking your time to create and host me! ~bows~`)
		}
		else {
			msg.channel.send('Who do you think you are? Why would I bow for you?')
		}
	}
	else if (msg.content.startsWith(`${prefix}ping`)) {
		var ping = Date.now() - msg.createdTimestamp + " ms";
		msg.channel.send(":ping_pong: Pong! `" + `${Date.now() - msg.createdTimestamp}` + " ms`");
	  }
});

client.login(token);