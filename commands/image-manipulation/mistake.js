module.exports = {
	description: 'For really big mistakes',
	args: '(@user | Attachment | URL)',
	category: 'Fun',
	cooldown: 5000,
	run: async function (message, args) {
		const images = await this.utils.getImagesFromMessage(message, args);

		if (images.length === 0) return this.commandHandler.invalidArguments(message);

		const image = await this.utils.fetchFromAPI('mistake', {
			images
		});

		message.channel.send({
			files: [{
				attachment: image,
				name: 'mistake.png'
			}]
		});
	}
};
