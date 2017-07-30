module.exports = {
	description: 'Adds a fisheye effect to an image',
	args: '(@user | Attachment | URL)',
	category: 'Fun',
	aliases: ['bulge', 'buldge', 'thicc'],
	cooldown: 5000,
	run: async function (message, args) {
		const images = await this.utils.getImagesFromMessage(message, args);

		if (images.length === 0) return this.commandHandler.invalidArguments(message);

		const image = await this.utils.fetchFromAPI('fisheye', {
			images
		});

		message.channel.send({
			files: [{
				attachment: image,
				name: 'fisheye.png'
			}]
		});
	}
};
