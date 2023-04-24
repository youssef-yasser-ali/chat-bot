function createMessage(text, sender) {
  const message = document.createElement("div");
  message.classList.add("message");
  message.classList.add(sender);
  message.textContent = text;

  return message;
}

function createLoadingAnimation() {
  const loading = document.createElement("div");
  loading.classList.add("loading");

  const spinner = document.createElement("div");
  spinner.classList.add("spinner");

  loading.appendChild(spinner);

  return loading;
}
export { createMessage, createLoadingAnimation };
