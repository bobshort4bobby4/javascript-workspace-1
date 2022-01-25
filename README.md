# Introduction
This project is the second one I've undertaken as part of the Full Stack Software Diploma course at [Codeinstitute.net](https://www.CodeInstitute.net).

It is a version of the kids memory card game, familiar to most people.  The aim is to turn the cards over in pairs and 
note the position of the various icons on the face side, if they match they are  left face-side up, if not matched they
are flipped back to blank-side up.  The game is won when all the pairs are found.
<br>

Memory games have been shown to greatly help children develop key skills. Brain functions such as focus, attention and concentration
are improved by games such as this one. Visual recognition is also improved as is both short-term and long-term memory.<br>
Adults also can greatly benefit from 'exercising' the brain, as any activity which encourages mental activity maintains and
can improve mental function.  


# User Experience/User Interface (UX/UI)

<details>
  
  <summary>User Experience/User Interface (UX/UI)</summary>
  
  ### User Stories
  
  ##### First Time Visitor Goals
  As a first time visitor I want:<br>
  - the rules and final aim of the game to be obvious.<br>
  - to be entertained and engaged with the game from the initial load.<br>
  - the game to function correctly and gameplay to be intuitive.
  - to be able to play the game on various different devices.
  
  ##### Return/frequent Visitor Goals.
  As a return/frequent visitor I want:<br>
  - to be able to gauge/score my performance.
  - to be able to challenge myself by increasing difficulty of the game.
  - to be able to play the game on various different devices.
  - to be able to mute music/sound effects if so desired.
  
  ##### Website's Owner Goals.
  As the developer I want:
  - to provide a fun game.
  - to provide a game to stimulate mental function.
  - to encourage continued use of the game.
            
  
  ### Design
  
  
  ##### Colour Scheme 
  I trialled  many different colour palettes whilst building the game and settled on a simple combination of shades of red, blue and black.
  Black is used for text colour and contrasts well with the other two primary colours.  Default Orange was used for the ink colour for the times as black
  did not shown up well against the background in the chosen font.  Lightsalmon was used for the display box in the modal screen.
  
  Red #E52521  
  
  ![Red#e52521](https://github.com/bobshort4bobby4/Flipping-Tiles-Game-PP2/blob/main/assets/media/red%23E52521.png)  
  
  Blue #049CD8  
  
  ![Blue#049cd8](https://github.com/bobshort4bobby4/Flipping-Tiles-Game-PP2/blob/main/assets/media/blue%23049CD8.png)  
  
  Black #000000  
  
  ![Black#000000](https://github.com/bobshort4bobby4/Flipping-Tiles-Game-PP2/blob/main/assets/media/black%23000000.png)  
  
  Light Salmon#FFa07A  
  
  ![Lihgt Salmon#FFA07A](https://github.com/bobshort4bobby4/Flipping-Tiles-Game-PP2/blob/main/assets/media/lightsalmon.png)  
  
  Orange #FFA500    
  
  ![Orange#FFA500](https://github.com/bobshort4bobby4/Flipping-Tiles-Game-PP2/blob/main/assets/media/orange.png)  
  
  
  
  The background image is "blue maze" which was found at [Public Domain Pictures](https://www.publicdomainpictures.net/en/view-image.php?image=307680&picture=blue-maze-background)  
  
  
  ![Background image]()
    
  
 </details> 


------

## Release History

We continually tweak and adjust this template to help give you the best experience. Here is the version history:

**September 1 2021:** Remove `PGHOSTADDR` environment variable.

**July 19 2021:** Remove `font_fix` script now that the terminal font issue is fixed.

**July 2 2021:** Remove extensions that are not available in Open VSX.

**June 30 2021:** Combined the P4 and P5 templates into one file, added the uptime script. See the FAQ at the end of this file.

**June 10 2021:** Added: `font_fix` script and alias to fix the Terminal font issue

**May 10 2021:** Added `heroku_config` script to allow Heroku API key to be stored as an environment variable.

**April 7 2021:** Upgraded the template for VS Code instead of Theia.

**October 21 2020:** Versions of the HTMLHint, Prettier, Bootstrap4 CDN and Auto Close extensions updated. The Python extension needs to stay the same version for now.

**October 08 2020:** Additional large Gitpod files (`core.mongo*` and `core.python*`) are now hidden in the Explorer, and have been added to the `.gitignore` by default.

**September 22 2020:** Gitpod occasionally creates large `core.Microsoft` files. These are now hidden in the Explorer. A `.gitignore` file has been created to make sure these files will not be committed, along with other common files.

**April 16 2020:** The template now automatically installs MySQL instead of relying on the Gitpod MySQL image. The message about a Python linter not being installed has been dealt with, and the set-up files are now hidden in the Gitpod file explorer.

**April 13 2020:** Added the _Prettier_ code beautifier extension instead of the code formatter built-in to Gitpod.

**February 2020:** The initialisation files now _do not_ auto-delete. They will remain in your project. You can safely ignore them. They just make sure that your workspace is configured correctly each time you open it. It will also prevent the Gitpod configuration popup from appearing.

**December 2019:** Added Eventyret's Bootstrap 4 extension. Type `!bscdn` in a HTML file to add the Bootstrap boilerplate. Check out the <a href="https://github.com/Eventyret/vscode-bcdn" target="_blank">README.md file at the official repo</a> for more options.

------

## FAQ about the uptime script

**Why have you added this script?**

It will help us to calculate how many running workspaces there are at any one time, which greatly helps us with cost and capacity planning. It will help us decide on the future direction of our cloud-based IDE strategy.

**How will this affect me?**

For everyday usage of Gitpod, it doesn’t have any effect at all. The script only captures the following data:

- An ID that is randomly generated each time the workspace is started.
- The current date and time
- The workspace status of “started” or “running”, which is sent every 5 minutes.

It is not possible for us or anyone else to trace the random ID back to an individual, and no personal data is being captured. It will not slow down the workspace or affect your work.

**So….?**

We want to tell you this so that we are being completely transparent about the data we collect and what we do with it.

**Can I opt out?**

Yes, you can. Since no personally identifiable information is being captured, we'd appreciate it if you let the script run; however if you are unhappy with the idea, simply run the following commands from the terminal window after creating the workspace, and this will remove the uptime script:

```
pkill uptime.sh
rm .vscode/uptime.sh
```

**Anything more?**

Yes! We'd strongly encourage you to look at the source code of the `uptime.sh` file so that you know what it's doing. As future software developers, it will be great practice to see how these shell scripts work.

---

Happy coding!
