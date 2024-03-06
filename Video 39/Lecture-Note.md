**Lecture Notes - Video 39: CSS Grid**

**Grid1.html:**

**Key Concepts:**

1. **Grid Container Properties:**
   - `display: grid;`: Establishes a grid container.
   - `grid-template-columns`: Defines the number and size of columns in the grid.
   - `grid-template-rows`: Defines the number and size of rows in the grid.
   - `grid-template-areas`: Assigns names to grid areas, allowing items to be placed in specific areas.

2. **Grid Item Properties:**
   - `grid-row` or `grid-column`: Specifies the placement of an item in terms of grid lines.
   - `grid-area`: Assigns an item to a named area defined by `grid-template-areas`.
   - `justify-items`: Aligns items along the row axis (`start`, `end`, `center`, `stretch`).
   - `align-items`: Aligns items along the column axis (`start`, `end`, `center`, `stretch`).

**Code Structure:**

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Grid</title>
    <style>
        .container {
            width: 80vw;
            height: 100vh;
            border: 2px solid black;
            display: grid;
            grid-template-columns: repeat(4, 80px);
            grid-template-rows: repeat(2, 80px);
            row-gap: 10px;
            column-gap: 44px;
            justify-items: center;
            align-items: center;
        }

        .item {
            border: 2px solid red;
            height: 55px;
            width: 55px;
        }

        .item-4 {
            grid-row: 1/2;
            grid-column: 1/2;
        }

        .item-1 {
            grid-row-start: 1;
            grid-row-end: 2;
            grid-column: 1/2;
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="item item-1">1</div>
        <div class="item">2</div>
        <div class="item">3</div>
        <div class="item item-4">4</div>
        <div class="item">5</div>
    </div>
</body>

</html>
```

**Grid2.html:**

**Key Concepts:**

1. **Grid Area Naming:**
   - `grid-template-areas`: Defines named grid areas in the layout.

**Code Structure:**

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Grid</title>
    <style>
        .container {
            border: 2px solid black;
            display: grid;
            grid-template-areas: "nav nav nav"
                                "side article article"
                                "footer footer footer";
        }

        .item {
            border: 2px solid red;
            height: 55px;
        }

        .item-1 {
            grid-area: nav;
            background-color: aqua;
        }

        .item-2 {
            grid-area: side;
            background-color: beige;
        }

        .item-3 {
            grid-area: article;
            background-color: azure;
        }

        .item-4 {
            grid-area: footer;
        }

        .item-5 {
            grid-area: nav;
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="item item-1">1</div>
        <div class="item item-2">2</div>
        <div class="item item-3">3</div>
        <div class="item item-4">4</div>
        <div class="item item-5">5</div>
    </div>
</body>

</html>
```

**Result:**
- Grid1.html showcases a grid with defined columns, rows, and gap properties.
- Grid2.html demonstrates the use of named grid areas for a more complex layout.