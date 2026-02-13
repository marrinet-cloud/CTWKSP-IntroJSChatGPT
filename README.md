# 💬 ChatGPT-Style Interactive UI


A multi-session chat interface built using **HTML, CSS, and Vanilla JavaScript**.


This project recreates the core structure of a ChatGPT-style interface, including:
- Sidebar with multiple chat sessions
- Dynamic message rendering
- New chat creation
- Simulated assistant replies
- Fixed input bar
- Enter key support


---


## 🚀 Features


- 📂 Multiple chat sessions
- ➕ Create new chats dynamically
- 💬 Separate message history per chat
- 🔁 Dynamic rendering (state → UI)
- ⌨️ Send messages with Enter key
- 🤖 Simulated AI responses
- 📱 Responsive layout


---


## 🧠 Concepts Practiced


This project demonstrates:


- State management using arrays and objects
- DOM manipulation with `document.createElement`
- Event handling (click, keydown)
- Conditional rendering
- Dynamic UI updates
- Flexbox layout
- Clean separation of concerns


---


## 📁 Project Structure



├── index.html
├── styles.css
└── script.js



---


## 🏗 How It Works


### 1️⃣ State Management


Chats are stored in JavaScript as objects:


```js
{
  name: "Chat 1",
  messages: []
}

Each chat has its own message history.

2️⃣ Rendering Pattern

Whenever state changes:

Clear the UI

Loop through state

Create elements

Append to DOM

This manual rendering pattern is similar to how frameworks like React work internally.

3️⃣ Events

Clicking Send adds a message

Pressing Enter sends a message

Clicking a chat switches sessions

Clicking New Chat creates and selects a new session

📦 How to Run

Download or clone the repository

Open index.html in your browser

Start chatting

No dependencies required.

🔮 Future Improvements

Save chat history using localStorage

Connect to a real AI API

Add delete/rename chat feature

Add typing indicator animation

Convert to React or another framework

📚 What I Learned

This project strengthened my understanding of:

State-driven UI design

Frontend architecture without frameworks

Event-driven programming

Scalable UI patterns

It also demonstrated how modern chat interfaces manage separate sessions and message histories dynamically.
