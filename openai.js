export function askQuestion(question, APIKEY) {
  const url = "https://api.openai.com/v1/engines/text-davinci-003/completions";

  const body = JSON.stringify({
    prompt: question,
    temperature: 0.9,
    max_tokens: 150,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0.6,
    stop: [" Human:", " AI:"],
  });

  const headers = new Headers({
    "Content-Type": "application/json",
    Authorization: `Bearer ${APIKEY}`,
  });

  return fetch(url, {
    method: "POST",
    headers: headers,
    body: body,
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.error) {
        throw new Error(data.error.message);
      }
      const answer = data.choices[0].text;
      return answer;
    })
    .catch((error) => {
      return "Sorry, something went wrong. Please try again later.";
    });
}
