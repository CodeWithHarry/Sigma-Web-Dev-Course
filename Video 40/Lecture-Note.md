**Lecture Notes - Video 40: Layout**

**Key Concepts:**

1. **Positioning:**
   - `position: sticky;`: Makes the element stick to the top of the viewport when scrolling.
   - `position: fixed;`: Positions the element relative to the browser window, and it stays fixed even during scrolling.

2. **Layout Structure:**
   - Header, main content area, and footer are defined for a basic webpage structure.

3. **Container Styling:**
   - Background colors, margin, padding, and text alignment applied to the container.

4. **Box Styling:**
   - Two boxes (`box1` and `box2`) with specified dimensions and display as inline-block.
   - Use of background colors and margins to visually separate the boxes.

5. **Text Box Styling:**
   - Styled text box with padding, border, margin, font size, and border-radius for a visually appealing look.

6. **Orange Box Styling:**
   - Positioned with `position: fixed;` at the bottom-right corner using `bottom` and `right` properties.

**Code Structure:**

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Layout</title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }

        header {
            position: sticky;
            top: 0;
        }

        nav {
            background-color: pink;
            height: 83px;
        }

        main {
            background-color: black;
            color: white;
            padding: 34px;
        }

        .container {
            background-color: green;
            margin: 12px 34px;
            padding: 55px 23px;
            text-align: center;
        }

        .box1 {
            background-color: palevioletred;
            height: 70vh;
            width: 45%;
            display: inline-block;
            margin: 0 12px;
        }

        .box2 {
            background-color: blue;
            height: 70vh;
            width: 45%;
            display: inline-block;
            margin: 0 12px;
        }

        .text-box {
            padding: 34px;
            border: 2px solid white;
            margin: 50px 34vw;
            font-size: 2em;
            border-radius: 13px;
        }

        .orange-box {
            height: 32px;
            width: 32px;
            background: orange;
            position: fixed;
            bottom: 12px;
            right: 23px;
            border-radius: 60px;
        }

        footer {
            height: 100px;
            background-color: bisque;
        }
    </style>
</head>

<body>
    <header>
        <nav>

        </nav>
    </header>

    <main>
        <div class="container">
            <div class="box1"></div>
            <div class="box2"></div>
        </div>

        <div class="text-box">
            <p>Welcome to Sigma Web Development Express</p>
        </div>

        <div class="orange-box">

        </div>
    </main>

    <footer>

    </footer>
</body>

</html>
```

**Result:**
- The webpage exhibits a structured layout with styled containers, boxes, text boxes, and a fixed orange box for visual appeal.