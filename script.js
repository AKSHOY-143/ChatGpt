const chat = document.getElementById("chat");
const message = document.getElementById("message");
const sendButton = document.getElementById("send");
const response = document.getElementById("response");

sendButton.addEventListener("click", () => {
  const messageText = message.value;
  chatGPT.generate(messageText, response);
});

const chatGPT = new ChatGPT();

chatGPT.on("response", (responseText) => {
  response.innerText = responseText;
});
