let chats = [
  { name: "Chat 1", messages: [] },
  { name: "Chat 2", messages: [] },
  { name: "Chat 3", messages: [] },
];

let currentChatIndex = 0;

const replies = [
  "Sure — tell me more.",
  "Interesting. What’s the goal you’re trying to achieve?",
  "Got it. Here’s one approach you can try.",
  "That makes sense. Want me to help you improve it?",
  "Nice! What do you want to build next?",
];

const chatList = document.querySelector(".chat-list");
const chatContent = document.querySelector(".chat-content");
const inputBox = document.querySelector(".chat-input");
const sendButton = document.querySelector(".send-button");
const newChatBtn = document.querySelector(".new-chat-btn");

function getRandomReply() {
  const idx = Math.floor(Math.random() * replies.length);
  return replies[idx];
}

function renderBubble(sender, message) {
  const bubble = document.createElement("div");
  bubble.classList.add("chat-bubble", sender);
  bubble.textContent = message;
  chatContent.appendChild(bubble);

  chatContent.scrollTop = chatContent.scrollHeight;
}

function renderMessages() {
  chatContent.innerHTML = "";

  const currentChat = chats[currentChatIndex];
  currentChat.messages.forEach((m) => {
    renderBubble(m.sender, m.text);
  });
}

function renderSidebar() {
  chatList.innerHTML = "";

  chats.forEach((chat, index) => {
    const li = document.createElement("li");
    li.textContent = chat.name;

    if (index === currentChatIndex) {
      li.classList.add("active");
    }

    li.addEventListener("click", () => {
      currentChatIndex = index;
      renderSidebar();
      renderMessages();
    });

    chatList.appendChild(li);
  });
}

function addMessage(sender, text) {
  chats[currentChatIndex].messages.push({ sender, text });
  renderMessages();
}

function handleSend() {
  const userMessage = inputBox.value.trim();
  if (userMessage === "") return;

  addMessage("user", userMessage);
  inputBox.value = "";


  setTimeout(() => {
    const reply = getRandomReply();
    addMessage("assistant", reply);
  }, 500);
}

function createNewChat() {
  const newChatName = `Chat ${chats.length + 1}`;
  chats.push({ name: newChatName, messages: [] });

  currentChatIndex = chats.length - 1;
  renderSidebar();
  renderMessages();


  inputBox.focus();
}

sendButton.addEventListener("click", handleSend);

inputBox.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    handleSend();
  }
});

newChatBtn.addEventListener("click", createNewChat);

document.addEventListener("DOMContentLoaded", () => {
  renderSidebar();
  renderMessages();
});
