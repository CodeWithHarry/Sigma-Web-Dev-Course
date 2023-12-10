**Lecture Notes - Video 36: Solution for CSS MultiColor Website Exercise**

**Key Concepts:**

1. **CSS Custom Properties (`:root` and `var()`):**
   - The `:root` pseudo-class is used to define global CSS variables.
   - `var()` is used to reference the values of these variables.
   - Example:
     ```css
     :root {
         --primary-color: #061872cc;
         --text-color: white;
         --secondary-color: #6ea5fccc;
     }

     body {
         background-color: var(--secondary-color);
     }
     ```

2. **Navigation Styling:**
   - Styling the navigation bar with a background color and padding.
   - Inline styling for list items (`li`) in the navigation bar.
   - Styling anchor (`a`) elements within list items.
   - Example:
     ```css
     nav {
         background-color: var(--primary-color);
         padding: 12px 0;
     }

     ul li {
         list-style: none;
         display: inline;
         padding: 23px;
         font-weight: bolder;
     }

     ul li a {
         color: var(--text-color);
         text-decoration: none;
     }
     ```

3. **Font Family:**
   - Applying the 'Poppins' font family to the entire document.
   - Example: `font-family: 'Poppins', sans-serif;`

**Code Structure:**

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS MultiColor Website</title>
    <style>
        /* Importing Poppins font from Google Fonts */
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');
    </style>
    <style>
        /* CSS Variables and Styling */
        :root {
            --primary-color: #061872cc;
            --text-color: white;
            --secondary-color: #6ea5fccc;
        }

        body {
            background-color: var(--secondary-color);
            margin: 0; /* Remove default body margin */
        }

        * {
            margin: 0;
            padding: 0;
            font-family: 'Poppins', sans-serif;
        }

        nav {
            background-color: var(--primary-color);
            padding: 12px 0;
        }

        ul li {
            list-style: none;
            display: inline;
            padding: 23px;
            font-weight: bolder;
        }

        ul li a {
            color: var(--text-color);
            text-decoration: none;
        }
    </style>
</head>

<body>
    <!-- Header Section with Navigation -->
    <header>
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Services</a></li>
                <li><a href="/">Contact Us</a></li>
            </ul>
        </nav>
    </header>
</body>

</html>
```

**Conclusion:**
- CSS custom properties provide a convenient way to define and reuse values across styles.
- The `:root` pseudo-class is commonly used to set global variables.
- Custom styling enhances the appearance of navigation elements.

**Note to Learners:**
- Experiment with different color combinations and values for the global variables.
- Customize the navigation styling further based on your design preferences.
- Understand the impact of CSS variables on the overall theme of the website.