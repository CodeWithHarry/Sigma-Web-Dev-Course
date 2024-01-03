**Lecture Notes - Video 31: CSS Media Query**

**Overview:**
- This video focuses on CSS media queries, a powerful tool for responsive web design.
- Media queries enable styles to adapt based on the characteristics of the device or viewport.

**Key Points:**

1. **Introduction to Media Queries:**
   - Media queries are used to apply styles based on certain conditions, such as device characteristics or viewport size.

2. **Basic Syntax:**
   - `@media` is the rule that defines a media query.
   - Example: `@media screen and (orientation: portrait) { ... }`

3. **Viewport Size Media Query:**
   - Example: `@media only screen and (max-width: 455px) { ... }`
   - This query targets screens with a maximum width of 455 pixels.
   - Adjusts background color and layout for smaller screens.

4. **Orientation Media Query:**
   - Example: `@media screen and (orientation: portrait) { ... }`
   - Targets screens in portrait orientation and applies specific styling.

5. **Responsive Layouts:**
   - Flexbox is used in this example to create a responsive layout for a set of boxes.
   - Media queries help adjust the layout based on screen characteristics.

**Code Breakdown:**

- `body`: Initial background color is set to red.

- `@media screen and (orientation: portrait)`: Media query for portrait orientation.
  - Changes the body border to purple.

- `@media only screen and (max-width: 455px)`: Media query for small screens.
  - Changes the body background color to blue.
  - Adjusts the layout of `.boxes` to a column using flex-direction.

- `.boxes`: Flex container for the box elements.

- `.box`: Styling for individual boxes, including size, background color, padding, and margin.

**Conclusion:**
- Media queries enhance the responsiveness of websites, allowing styles to adapt to different devices and screen sizes.
- They play a crucial role in creating a seamless user experience across various platforms.
- Combining media queries with flexible layout techniques like Flexbox enables the creation of versatile and adaptive designs.

**Note to Learners:**
- Experiment with different media query conditions.
- Explore additional properties that can be adjusted within media queries.
- Consider the user experience on various devices and how media queries can optimize it.