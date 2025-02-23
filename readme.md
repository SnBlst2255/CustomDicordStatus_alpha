# Custom Rich Presence for Discord

**Custom Rich Presence by SNBLST v0.0.1** is a tool for setting up custom animations and statuses in Discord.

## Features

- **Custom Animations:** Display animated text for both the first and second lines of your status.
- **Customizable Interval:** Update interval for animations can be set via configuration.
- **Large Icon Support:** Show a custom large image alongside your status.

## Requirements

- Node.js (Latest version recommended)
- Discord installed and logged in

## Installation

1. Clone the repository or download the files.
2. Ensure you have a valid config.json file in the same directory as the script. (See Configuration section below for details.)

## Configuration

The tool uses config.json for customizable settings. Below is a sample configuration file with explanations:

```json
{
    "clientId": "YOUR_CLIENT_ID",
    "firstLineAnimationFrames": [
        "Downloading server data 🌍",
        "Downloading server data 🌎",
        "Downloading server data 🌏",
        "Downloading server data 🌎"
    ],
    "secondLineAnimationFrames": [
        "[-----------------------]",
        "[#----------------------]",
        "[##---------------------]",
        "[###--------------------]",
        "[####-------------------]",
        "[#####------------------]",
        "[######-----------------]",
        "[#######----------------]",
        "[########---------------]",
        "[#########--------------]",
        "[##########-------------]",
        "[###########------------]",
        "[############-----------]",
        "[#############----------]",
        "[##############---------]",
        "[###############--------]",
        "[################-------]",
        "[#################------]",
        "[##################-----]",
        "[###################----]",
        "[####################---]",
        "[#####################--]",
        "[######################-]",
        "[#######################]"
    ],
    "interval": "15000",
    "imageURL": "https://example.com/image.png"
}
```

### Key Fields

- `clientId`: Your application's client ID from Discord Developer Portal. Create an application there and copy the client ID.
- `firstLineAnimationFrames`: Array of strings for the first line animation. 
- `secondLineAnimationFrames`: Array of strings for the second line animation.
- `interval`: Time in milliseconds between status updates.
- `imageURL`: URL of the large image to display.

> [!WARNING]
> Do not set the interval to less than 10000ms, otherwise other users will see your status incorrectly.

Each element of the array is a separate frame.

## Usage

1. Run the `start.bat`
2. The terminal will output:
    - Confirmation of configuration loading.
    - Animation details (frame count for each line).
    - Information about connecting to Discord
3. The custom status should now be visible in your Discord profile.

> [!CAUTION]
> This application is still under development and is nothing more than an experiment.
