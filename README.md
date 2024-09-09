# Vagaro Dev Interview Repo

1. Fork this repo.
2. npm install
3. npm run dev



## Coding Challenge: Render and Manipulate Boxes 

![](https://res.cloudinary.com/vagaro/image/upload/v1725903489/misc/wireframe-example_hfoqvh.png)

*Restrictions:

While use of outside sources such as google and stack overflow is encouraged, we request that you do not use ChatGPT or similar chat bots for this challenge.*

Objective: Develop a react application that consumes data from an API and renders boxes on the screen based on the data's properties. These boxes should be interactive, allowing users to select and change their colors using a fixed menu/toolbar. 

### API: 

The API at [https://reactinterviewwebapp-grazc9gvejc7g2au.eastus-01.azurewebsites.net/](https://reactinterviewwebapp-grazc9gvejc7g2au.eastus-01.azurewebsites.net/) provides a JSON array of objects where each object represents a box with the following randomized properties: 

- id: A unique identifier for each box. 
- size: The dimensions of the box (width and height). 
- color: The initial color of the box (red, blue, green or purple). 
- x: The X-coordinate for where the box should be placed on the screen (0 – 500). 
- y: The Y-coordinate for where the box should be placed on the screen (0 – 500). 

### Requirements: 

1. **Render Boxes**: 
	- Use the API response to render the boxes on the screen according to their position, size, and color.

2. **Box Selection**:
    - Users should be able to click on a box to select it.
    - Holding the shift key should allow users to select multiple boxes.

3. **Change Box Color**:
    - A menu should be presented with an option for Red, Blue, Green, and Purple.
    - The user should be able to change the color of the selected box by selecting a new color from the menu.

4. **Interaction**:
	- The color change should be applied in real-time, reflecting immediately on the selected box.

