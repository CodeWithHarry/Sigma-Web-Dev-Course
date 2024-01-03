**Lecture Notes - Video 50: CSS Filters**

In this video, the instructor introduces the CSS `filter` property, which allows you to apply various visual effects to elements, such as images. The focus is on three specific filter functions: `brightness()`, `blur()`, and `grayscale()`.

### Key Points:

1. **`filter` Property:**
   - Applies graphical effects like blur, brightness adjustment, grayscale, etc.
   - Takes one or more filter functions as values.
   - Common filter functions include `blur()`, `brightness()`, `contrast()`, `grayscale()`, `hue-rotate()`, `invert()`, `saturate()`, and `sepia()`.

2. **`brightness()` Filter Function:**
   - Adjusts the brightness of an element.
   - Values greater than 100% increase brightness, while values less than 100% decrease it.
   - Example: `brightness(122%)` increases brightness by 22%.

3. **`grayscale()` Filter Function:**
   - Converts an element to grayscale.
   - Takes a percentage value representing the intensity of the grayscale effect.
   - Example: `grayscale(20%)` applies a slight grayscale effect.

### Code Explanation:

- `.img1`: Applies the `brightness(122%)` filter to increase the brightness of the first image.
- `.img2`: No specific filter is applied, so it retains its original appearance.
- `.img3`: Applies the `grayscale(20%)` filter to introduce a slight grayscale effect to the third image.

### Example Usage:

- The provided example demonstrates how to use the `filter` property to adjust the brightness and apply a grayscale effect to images.

### Notes:

- Experiment with different filter functions and values to achieve desired visual effects.
- Combine multiple filter functions for more complex effects.
- Filters can be applied not only to images but also to other HTML elements.

This summary provides an overview of the `filter` property with a focus on the `brightness()` and `grayscale()` filter functions. For more details and variations, refer to the video tutorial by the instructor.