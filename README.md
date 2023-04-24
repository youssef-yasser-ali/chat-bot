
# Chatbot using OpenAI

This is a chatbot project that uses the OpenAI API to generate responses to user input. The chatbot is built using HTML, CSS, and JavaScript, and is designed to be run in a web browser.

## Features

- Sends user input to the OpenAI API to generate responses
- Displays chat history in a scrollable chat box
- Handles errors if the API key is invalid

## Getting started

To run the chatbot, you will need to obtain an OpenAI API key. You can sign up for an API key on the [OpenAI website](https://openai.com/).

Once you have an API key, in `config.js` file  add the following line of code, replacing `"YOUR_API_KEY_HERE"` with your actual API key:

```js
export const APIKEY = "YOUR_API_KEY_HERE";
```

Then open the `index.html` file in a web browser to run the chatbot.

## Usage

Type a message into the input field at the bottom of the chat box, and press enter or click the send button to send the message to the chatbot. The chatbot will then generate a response based on the input using the OpenAI API, and display it in the chat box.

## Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request with your changes.
