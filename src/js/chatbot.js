function toggleChat() {
  const chatWindow = document.getElementById("chatWindow");
  chatWindow.style.display =
    chatWindow.style.display === "block" ? "none" : "block";
}

async function sendMessage() {
  const userInput = document.getElementById("userInput");
  const chatMessages = document.getElementById("chatMessages");
  const message = userInput.value.trim();

  if (!message) return;

  // Add user message
  chatMessages.innerHTML += `
    <div class="alert alert-secondary m-2">
      ${message}
    </div>
  `;

  userInput.value = "";

  try {
    const response = await fetch("https://api.deepseek.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer API"
      },
      body: JSON.stringify({
        model: "deepseek-chat",
        messages: [{ role: "user", content: message }]
      })
    });

    const data = await response.json();
    const aiResponse = data.choices[0].message.content;

    chatMessages.innerHTML += `
      <div class="alert alert-info m-2">
        ${aiResponse}
      </div>
    `;
  } catch (error) {
    console.error("Error:", error);
    chatMessages.innerHTML += `
      <div class="alert alert-danger m-2">
        Sorry, I'm having trouble connecting. Please try again later.
      </div>
    `;
  }

  chatMessages.scrollTop = chatMessages.scrollHeight;
}
