function helloWorld() {
	return "Hello World v2"
}

function HelloWorldNPM() {
	return "Hello World NPM"
}

module.exports = HelloWorldNPM;
HelloWorldNPM.helloWorld = helloWorld;
