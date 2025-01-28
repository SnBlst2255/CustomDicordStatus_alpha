// Import the library and initialize the client
const RPC = require('discord-rpc');
const client = new RPC.Client({ transport: 'ipc' });

console.log("Custom Rich Presence by SNBLST v 1.0")

// Load the configuration (config.json)
const config = require('./config.json'); 
const clientId = config.clientId;
console.log(`\n[${new Date().toLocaleTimeString()}] Configuration loaded successfully:`);
console.log(`> Client ID: ${clientId}`);

// Icon animation (first line, each array element is a frame, see config.json)
const animationFrames = config.firstLineAnimationFrames;
console.log(`> First line animation frames: ${animationFrames.length} frames loaded.`);

// Progress bar animation frames (second line, each array element is a frame, see config.json)
const animationFrames2 = config.secondLineAnimationFrames;
console.log(`> Second line animation frames: ${animationFrames2.length} frames loaded.`);

// Global variables to store time and current frame index
let index = 0; // First frame index
let index2 = 0; // Second frame index
let timeStamp; // Start time

// Function to update the status
function updateStatus(frame, frame2) {
    client.setActivity({
        details: `${frame}`, //First animation
        state: `${frame2}`, //Second animation
        largeImageKey: config.imageURL,  // URL for the large icon (see config.json)
        startTimestamp: timeStamp  // Start time of activity
    });
}

//Updating frame fucntion
function updateFrame() {
    const frame1 = animationFrames[index];  // Select the current frame for the animation
    const frame2 = animationFrames2[index2]; // Select the current frame for the animation
    updateStatus(frame1, frame2);  // Updating status

    index = (index + 1) % animationFrames.length; // Switch to the next frame of the first animation
    index2 = (index2 + 1) % animationFrames2.length; // Switch to the next frame of the second animation
}

//Interval setting function
function animateStatus() {
    timeStamp = Date.now(); // Getting current time for time stamp
    console.log(`[${new Date().toLocaleTimeString()}] Updating status every ${config.interval} ms `);
    updateFrame();
    setInterval(() => {
        updateFrame();
    }, config.interval);  //Setting interval(see config.json)
}

//When the Discord RPC client is ready
client.on('ready', () => {
    console.log(`[${new Date().toLocaleTimeString()}] Discord RPC connected!`);
    animateStatus();
});

// Log in to Discord using clientId
console.log(`\n[${new Date().toLocaleTimeString()}] Logging in to Discord RPC...`);
client.login({ clientId }).catch((error) => { 
    console.error(`[${new Date().toLocaleTimeString()}] Error during login:`);
    console.error(`> ${error.message}`);
});