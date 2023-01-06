function helloWorld() {
	return "Hello World v3"
}

function HelloWorldNPM() {
	return "Hello World NPM"
}

module.exports = HelloWorldNPM;
HelloWorldNPM.helloWorld = helloWorld;
