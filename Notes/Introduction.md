📄 REACT_VITE.MD:

What is Vite: Vite is just a fast installer tool used to create a blank React project.

Why Vite: Old tools like create-react-app were very heavy and slow. Vite is extremely fast and light.

Important Step: When you create a project with Vite, it only gives you empty folders. You must run npm install in your terminal to actually download all the backend code files before running your app.


Ques. How you created the project in your terminal:

npm create vite@latest 01basicvite

Ques. Going inside the folder:

cd 01basicvite

Ques. Downloading the actual library files:

npm install

Ques. Starting your local local server to open the web page:

npm run dev

📄 COMPONENTS.MD

What is a Component ?

 In React, you don't write huge HTML pages. You break your website into small parts called "Components" (like a Sidebar, a Card, or a Video Row).

It is just a function: A component is nothing but a normal JavaScript function that returns some HTML code.

The Golden Rule: The name of the file and the name of the function must start with a Capital Letter (like Youtube.jsx). If you use a small letter (youtube), the app will crash because the browser thinks it is a regular HTML tag.

```
// src/Youtube.jsx :- The exact component from project

function Youtube() {
    return (
        <h1>Youtube app</h1>
    )
}

export default Youtube;
```
📄 FRAGMENTS.MD 

The Rule of JSX: When a function returns HTML code in React, it can only return one single parent block. You cannot place two separate headers ```(<h1>)``` next to each other without a wrapper.

The Problem: Wrapping everything inside a ```<div>``` creates too many useless divider tags in your browser code, making it messy.

The Solution (Fragments): React lets you wrap your code inside empty brackets <> ... </>. This is called a React Fragment. It glues your elements together but disappears on the final webpage, keeping the code clean.

```JavaScript
// src/App.jsx - Combining components using fragments
import Youtube from "./Youtube"

function App() {
  return (
    <>
      <h1>Vite react app</h1>
      <Youtube /> 
    </>
  )
}

export default App;
```
📄 CORE_JS.MD:

How React connects to HTML: Your web browser cannot understand .jsx files directly. It only understands regular HTML.

The Target Root: If you open index.html in your project, there is only one empty line: ```<div id="root"></div>```.

The Bridge (main.jsx): React uses vanilla JavaScript (document.getElementById('root')) to catch that exact divider and forces your entire ```<App/>``` component code to render right inside it.

```
// src/main.jsx - The final bridge connection file

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Finding the 'root' divider and rendering our App inside it:

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)
```

🎯  Questions:

Ques: What happens if you name a component function function card() with a small 'c'?

Ans: The browser will treat it as a standard HTML5 tag (like ```<div>``` or ```<p>```). Since card is not a real HTML5 tag, the browser console will throw a warning: "The tag is unrecognized", and your component will remain blank on the screen.

Ques: Why do we write npm install manually in Vite but not in old tools?

Ans: Old tools automatically downloaded all the heavy files right at the start, which took several minutes. Vite saves time by giving you only the core configuration files instantly, leaving you to pull the packages manually whenever you are ready.

Ques: What is the main benefit of using a React Fragment <></> instead of a ```<div>```?

Ans: A ```<div>``` tag adds a real extra block node into the browser layout tree, which can ruin your CSS flexbox or grid designs. A Fragment safely wraps multiple elements during development but leaves no physical trace in the final DOM tree.