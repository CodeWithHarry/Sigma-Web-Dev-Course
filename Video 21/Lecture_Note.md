
# Lecture Notes - CSS Specificity (Video Lecture 21)

**index.html:**
- **DOCTYPE Declaration:** The document begins with a standard HTML5 declaration.
- **HTML Structure:** The HTML structure includes `<html>`, `<head>`, and `<body>` tags.
- **Character Encoding:** A `meta` tag specifies the character encoding as UTF-8.
- **Title:** The `<title>` tag defines the title of the page as "Document."

**CSS Specificity:**
- In this lecture, CSS specificity is explained and demonstrated through various CSS selectors.

**Specificity Examples:**
1. **h1 Selector (Specificity: 1):**
   - `h1` selector is used to target `<h1>` elements.
   - It sets the text color to aqua.

2. **Class Selector .cpurple (Specificity: 10):**
   - `.cpurple` selector targets elements with the class "cpurple."
   - It sets the text color to purple.

3. **h1.yellow Selector (Specificity: 1 + 10 = 11):**
   - `h1.yellow` targets `<h1>` elements with the class "yellow."
   - It sets the text color to yellow.

4. **Attribute Selector [data-x=a] (Specificity: 10):**
   - `[data-x=a]` targets elements with the attribute `data-x` equal to "a."
   - It sets the text color to maroon.

5. **Class Selector .cred (Specificity: 10):**
   - `.cred` selector targets elements with the class "cred."
   - It sets the text color to red.

6. **Combined Selector a.harryclass.rohan-class[href]:hover (Specificity: 1 + 10 + 10 + 10 + 10 = 41):**
   - `a.harryclass.rohan-class[href]:hover` targets `<a>` elements with classes "harryclass" and "rohan-class" that have an `href` attribute and are in a hover state.
   - It sets the text color to blueviolet when these specific conditions are met.

**HTML Content:**
- A `<div>` contains an `<h1>` element with multiple classes and a `data-x` attribute. The specific classes and attribute used in the example are:
  - `class="yellow cred cpurple"`
  - `data-x="a"`

**Key Concepts:**
- CSS specificity is a measure of how specific a CSS selector is in determining which styles apply to an element.
- Specificity values are assigned based on the type of selector used (element, class, attribute, etc.).
- When multiple selectors target the same element, the one with the highest specificity takes precedence.
- Understanding specificity is important for resolving styling conflicts and creating predictable styles in web development.

This video lecture provides a clear explanation of CSS specificity and demonstrates how it affects the application of styles to HTML elements. If you need further clarification on this topic refer to visit to https://www.codewithharry.com/tutorial/css-specificity/