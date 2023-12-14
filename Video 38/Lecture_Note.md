**Lecture Notes - Video 38: CSS Flexbox**

**Key Concepts:**

1. **Flex Container Properties:**
   - `display: flex;`: Establishes a flex container.
   - `flex-direction`: Specifies the direction of the main axis (`row`, `row-reverse`, `column`, `column-reverse`).
   - `justify-content`: Aligns items along the main axis (`flex-start`, `flex-end`, `center`, `space-between`, `space-around`, `space-evenly`).
   - `align-items`: Aligns items along the cross axis (`flex-start`, `flex-end`, `center`, `baseline`, `stretch`).
   - `flex-wrap`: Controls whether items should wrap onto multiple lines (`nowrap`, `wrap`, `wrap-reverse`).
   - `align-content`: Aligns content along the cross axis when there is extra space in the container (`flex-start`, `flex-end`, `center`, `space-between`, `space-around`, `stretch`).

2. **Flex Item Properties:**
   - `order`: Specifies the order in which a flex item appears within the flex container.
   - `flex-grow`: Specifies the ability for a flex item to grow.
   - `flex-shrink`: Specifies the ability for a flex item to shrink.
   - `flex-basis`: Specifies the initial size of a flex item.
   - `align-self`: Allows the default alignment to be overridden for an individual flex item.

3. **Gap Properties:**
   - `gap`: A shorthand for `row-gap` and `column-gap`.
   - `row-gap`: Specifies the size of the gap between rows.
   - `column-gap`: Specifies the size of the gap between columns.

**Code Structure:**

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Flexbox</title>
    <style>
        .container {
            border: 2px solid red;
            display: flex;
            height: 80vh;
            flex-wrap: wrap;
            flex-flow: row wrap;
            gap: 40px 10px;
            align-items: center;
        }

        .item {
            height: 92px;
            width: 92px;
            border: 2px solid black;
            background-color: blueviolet;
        }

        .order-1 {
            order: 1;
        }

        .item1 {
            align-self: flex-end;
        }
    </style>
</head>

<body>
    <main>
        <div class="container">
            <div class="item item1">1</div>
            <div class="item">2</div>
            <div class="item">3</div>
            <div class="item order-1">4</div>
            <!-- Additional empty items for layout demonstration -->
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
        </div>
    </main>
</body>

</html>
```

**Result:**
- The result is a flex container with items arranged based on various flex properties.
- Items have different orders, sizes, and alignments.
- The `align-self` property is used to customize the alignment of a specific item (`item1`).