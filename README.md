# Etch A Sketch
The old toy. I'm pretty sure everyone who was a kid in the past 60 years has played with one of these. 

## Background
This was a project for a Web Development course I took, and my first experience with JavaScript and gave me exposure to manipulating the DOM. The assignment was to create a "browser version of something between a sketchpad and an Etch-A-Sketch."

#### Requirements
- Create a webpage with a 16x16 grid of square divs using JavaScript
- Set up a “hover” effect so that the grid divs change color when your mouse passes over them, leaving a (pixelated) trail through your grid like a pen would.
- Add a button which will clear the current grid and send the user a popup asking for how many squares per side to make the new grid. Once entered the new grid should be generated in the same total space as before (e.g. 960px wide) and now you’ve got a new sketch pad.

## My Solution

#### Generating the grid
Generating the grid is accomplished with the resizeGrid function. The function takes two arguments for height and width of the board with default values of 16 for both. These represent the number of divs that make of the dimensions of the "screen." The actual size of the container does not change. This function does the following:
1. Removes all the divs from the old board using a while-loop and the removeChild method
2. Sets the size of the grid based off of the function arguments
3. Users a for-loop to create divs based off of the size, adding a classname and event listener to each

#### Hover effect
Coloring the cells when the mouse enters is accomplished with a mouse enter event listener that sets the background for the div black.

#### Clear button
I used forEach loop to set the background color back to the original for each of the cells. A fun twist I added here was a "shake" effect as a throwback to the original. I accomplished this with a combination of some CSS and the animation end event listener.

#### Fun extras
- A button to color the 'pixels' a random color when the mouse enters and another to change to color back to black
- CSS styling to emulate the original

## Technologies Used
- HTML
- CSS
- JavaScript
