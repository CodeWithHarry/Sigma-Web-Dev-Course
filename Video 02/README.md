# Video 2: Your First HTML Website

### Configuring VS Code for our first website

- Open a folder in VS Code:
  - You can do this by right-clicking while holding Shift and selecting "Open with Code."

  ![Open with Code](https://github.com/oyepriyansh/Sigma-Web-Dev-Course/assets/83062406/b1a13deb-afa9-4398-a49e-df6957091562)

### Some useful VS Code Extrensions
 Extensions are used to enhance the functionality of VS Code
  
You can install the following extensions, which helps you in this course.
- [Live Preview](https://marketplace.visualstudio.com/items?itemName=ms-vscode.live-server) 
- [vs-code icons](https://marketplace.visualstudio.com/items?itemName=vscode-icons-team.vscode-icons)
- [JellyFish Theme](https://marketplace.visualstudio.com/items?itemName=PawelBorkar.jellyfish)

### Creating files
- Click on the "Create File" button at the top right of VS Code.

![Create File Button](https://github.com/oyepriyansh/Sigma-Web-Dev-Course/assets/83062406/0c52da94-401b-4f4e-90fa-aa3ae4100207)
  - Create index.html(HTML file)
  - Create style.css(CSS file)
  - Create script.js(Javascript file)

### Creating your first website
- In the HTML editor, type `!`, and an Emmet popup will provide you with an HTML boilerplate code.

![HTML Boilerplate](https://github.com/oyepriyansh/Sigma-Web-Dev-Course/assets/83062406/98c0b100-74d8-42fc-baf9-e11921715e1e)
![Emmet Popup](https://github.com/oyepriyansh/Sigma-Web-Dev-Course/assets/83062406/627ef318-259b-413d-809c-930d99bc7897)

- now inside the body tag write something. for example `Hey, this is my first website.`

- your code will look like this:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    Hey, this is my first website.
</body>
</html>
```
- save the file using Ctrl + S

- Congratulations on creating your first website, but how to see this?

- as you,ve installed the "Live Preview" extension, so there is a button appear in right top of vs code, click on it

![livepreview](https://github.com/oyepriyansh/Sigma-Web-Dev-Course/assets/83062406/6b8835bd-1e8b-4b8b-a341-548342a7c907)

- After clicking there will be a preview appears of your website in the right side of vscode.

![image](https://github.com/oyepriyansh/Sigma-Web-Dev-Course/assets/83062406/77bf2bd4-497e-411e-8520-72e5377ddb37)

- to open in browser you can click on those three horizontal lines.
  
![openinbrowser](https://github.com/oyepriyansh/Sigma-Web-Dev-Course/assets/83062406/3a3418b3-f4e8-48a2-a24a-ee096aad4bd4)


### Linking CSS
- CSS is a stylesheet file linked to html using the following code.
```html
<link rel="stylesheet" href="style.css">
```
whereas `style.css` is the stylesheet file name.

### Linking Javascript
- Javascript is linked to html using the following code.
```html
<script src="script.js"></script>
```
whereas `script.js` is a Javascript file

> [!NOTE]  
> You can learn CSS & Javascript later in the course, this is just for basic knowledgebase.

## [Checkout Video 3 Source code and notes](https://github.com/oyepriyansh/Sigma-Web-Dev-Course/tree/main/Video%2003)