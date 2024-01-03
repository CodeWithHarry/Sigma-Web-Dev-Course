**Lecture Notes - Video 49: CSS `object-fit` and `object-position` Properties**

In this video, Harry introduces two CSS properties, `object-fit` and `object-position`, that are used for controlling the display of images or replaced elements within their containers.

### Key Points:

1. **`object-fit` Property:**
   - Determines how an image should be resized to fit its container.
   - Values include:
     - `fill`: Resize the image to cover the entire container, maintaining the aspect ratio.
     - `contain`: Resize the image to fit within the container while preserving its aspect ratio. Empty spaces may appear.
     - `cover`: Resize the image to cover the entire container, possibly cropping parts of the image.
     - `none`: Do not resize the image. It will maintain its original size, possibly overflowing the container.

2. **`object-position` Property:**
   - Specifies the alignment of the image within its container.
   - Values can be in pixels, percentages, or keyword values like `top`, `bottom`, `left`, `right`, `center`.
   - Defines the position where a point in the image should align with a point in the container.

### Code Explanation:

- `.container`: Represents a container with specified dimensions and a background image.
  - `background-image`: Sets the URL of the background image.
  - `background-repeat`: Prevents the background image from repeating.
  - `background-position`: Centers the background image.
  - `background-clip`: Specifies the painting area for the background.

- `img`: Represents an image within the container.
  - `width` and `height`: Set the dimensions of the image.
  - `object-fit`: Defines how the image should fit into its container (`contain` in this case).
  - `object-position`: Sets the position of the image within its container.

### Example Usage:

- The provided example uses a container with a background image and an image element within it. The `object-fit` and `object-position` properties control how the image is displayed within the container.

### Notes:

- Experiment with different values for `object-fit` to observe how the image behaves.
- Adjust `object-position` to change the alignment of the image within the container.
- These properties are useful for creating responsive and visually appealing layouts with images.

This summary provides an overview of the `object-fit` and `object-position` properties. For a more in-depth explanation and practical examples, refer to the video tutorial by Harry.