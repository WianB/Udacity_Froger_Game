## Game:


This is a game based on the original classic frogger.
 The aim of the game is for the player to make it to the
 other side without hitting any of the enemies.


## Gameplay:

The player only uses the arrow keys to move the character. When the player has reached the other side the game will reset and the player starts again. The player randomly spawns at one of the tiles at the bottom.

## Code:

The game is coded as an web app in Javascript. Harnessing the power of rapidly redrawing a <canvas> element ensures for smooth animation and gameplay experience.


## Additions:

-The player spawns randomly on one of the bottom tiles.

-The enemies have different move speeds

-The tiles have been extended for a bigger game world.

-Optional code - Optional commented out code has been written for the enemies to
jump up and down making the movement of the bugs more lifelike. By using a sine
function on the x axis to determine different y values at different points. Unfortunately the values aren't constant as the game doesn't always render at 60 fps.

## Setup:

The website can be easily setup hosting on a server that can be local using the Python library or hosting online eg. Github pages.
If you quickly want to view the website simply click on the index.html file located in the home directory.
