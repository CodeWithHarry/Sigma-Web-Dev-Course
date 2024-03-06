**Lecture Notes - Video 34: CSS Float & Clear**

**Key Concepts:**

1. **Float Property:**
   - The `float` property is used to align elements (typically images) to the left or right within their containing elements.
   - It allows content to flow around the floated element.

2. **Float Example:**
   - In the provided code, the `img` element is floated to the left using `float: left;`.
   - The content of the following elements flows around the floated image.

3. **`.cards` Container:**
   - The container `.cards` has a border and is set to `display: flow-root;` to contain the floated elements.

4. **Clear Property:**
   - The `clear` property is used to control how elements should behave in relation to previously floated elements.
   - In this example, the third `.card` element has `clear: both;` applied, ensuring it appears below any floated elements.

**Code Structure:**

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Float & Clear</title>
    <style>
        .cards {
            border: 2px solid black;
            display: flow-root;
        }

        img {
            float: left;
        }

        .card {
            border: 2px solid red;
        }

        .card:nth-child(3) {
            background-color: aqua;
            clear: both;
        }
    </style>
</head>

<body>
    <div class="cards">
        <img src="image_url" alt="Description" width="230">
        <div class="card">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit...</p>
        </div>
        <div class="card">Lorem ipsum dolor sit, amet consectetur adipisicing elit...</div>
        <div class="card">Card 3</div>
    </div>
</body>

</html>
```

**Conclusion:**
- The use of the `float` property allows for the alignment of elements within a container.
- The `clear` property ensures that subsequent elements are placed below any floated elements.

**Note to Learners:**
- Experiment with different content and styles within the cards.
- Understand how the `float` property affects the layout and how the `clear` property can be used to control the layout of subsequent elements.
- Explore modern layout techniques such as Flexbox and Grid, which offer more robust and flexible options.