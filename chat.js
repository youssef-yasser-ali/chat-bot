import { createMessage, createLoadingAnimation } from "./messages.js";
import { askQuestion } from "./openai.js";

const chatBox = document.querySelector(".chat-box");
const inputBox = document.querySelector(".input-box");
const inputField = inputBox.querySelector("input");
const APIKEY = "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";

inputBox.addEventListener("submit", sendMessage);

function sendMessage(event) {
  event.preventDefault();

  if (!inputField.value.trim()) {
    return;
  }
  const message = createMessage(inputField.value, "user");
  chatBox.appendChild(message);

  // Add loading animation
  const loading = createLoadingAnimation();
  console.log(loading);
  chatBox.appendChild(loading);

  askQuestion(inputField.value, APIKEY).then((answer) => {
    // Remove loading animation
    chatBox.removeChild(loading);

    const message = createMessage(answer, "ai");
    chatBox.appendChild(message);
    chatBox.scrollTop = chatBox.scrollHeight;
  });

  inputField.value = "";
}
