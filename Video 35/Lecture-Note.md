**Lecture Notes - Video 35: More on CSS Selectors**

**Key Concepts:**

1. **`:first-child` Selector:**
   - The `:first-child` pseudo-class selects the first child element of its parent.
   - Example: `.box:first-child { background-color: red; }`

2. **`:first-line` Selector:**
   - The `:first-line` pseudo-element selects the first line of a block-level element.
   - Example: `.box::first-line { color: yellow; }`

3. **Universal Selector (`*`):**
   - The universal selector selects all elements.
   - Example: `.boxes * { color: blue; border: 2px solid black; }`

4. **Multiple Selector:**
   - Select multiple elements or types of elements in a single rule.
   - Example: `p, a, .box, [data-color="primary"] { padding-top: 45px; }`

5. **`:nth-child()` Selector:**
   - Selects elements based on their position in a parent element.
   - Example: `.box:nth-child(odd) { background-color: blue; }`

6. **`:nth-last-child()` Selector:**
   - Similar to `:nth-child()`, but counts elements from the end.
   - Example: `.box:nth-last-child(2) { background-color: red; }`

7. **`::before` and `::after` Pseudo-elements:**
   - Create content before and after an element's actual content.
   - Example:
     ```css
     .boxes::before {
         content: "Harry is good";
         color: blue;
     }
     .boxes::after {
         content: "Sigma course is also good";
         color: red;
     }
     ```

8. **`::selection` Pseudo-element:**
   - Styles the portion of a document that has been highlighted by the user.
   - Example: `::selection { background-color: black; color: aqua; }`

9. **`::first-letter` Pseudo-element:**
   - Selects the first letter of the first line of a block-level element.
   - Example: `.box::first-letter { color: peru; font-size: 45px; }`

10. **`::placeholder` Pseudo-element:**
    - Styles the placeholder text in an input element.
    - Example: `input::placeholder { color: rgb(84, 84, 88); }`

**Code Structure:**

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>More on CSS Selectors</title>
    <style>
        /* CSS Selectors Demonstrations */
    </style>
</head>

<body>
    <div class="boxes">
        <div data-color="primary" class="box">I am first box</div>
        <div class="box">Hey I am a box</div>
        <div class="box">Hey I am a box</div>
        <input type="text" placeholder="Type your name here">
    </div>
</body>

</html>
```

**Conclusion:**
- CSS selectors offer powerful ways to target and style specific elements.
- Pseudo-classes and pseudo-elements provide additional flexibility in styling various parts of the content.
- Experiment with different selectors to understand their behavior and use cases.

**Note to Learners:**
- Explore and experiment with various CSS selectors to gain a deeper understanding.
- Pay attention to the different pseudo-classes and pseudo-elements demonstrated in the video.
- Try combining multiple selectors to create complex styling rules.