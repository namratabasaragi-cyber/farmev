function toggleChat() {
    const chat = document.getElementById("chatbox");
    chat.style.display = chat.style.display === "flex" ? "none" : "flex";
}

function sendMessage() {
    const input = document.getElementById("userInput");
    const message = input.value.trim();
    if (!message) return;

    const chatBody = document.getElementById("chatBody");

    
    const userDiv = document.createElement("div");
    userDiv.className = "user-msg";
    userDiv.innerText = message;
    chatBody.appendChild(userDiv);

    input.value = "";

    
    setTimeout(() => {
        const botDiv = document.createElement("div");
        botDiv.className = "bot-msg";
        botDiv.innerText = getAIResponse(message);
        chatBody.appendChild(botDiv);

        chatBody.scrollTop = chatBody.scrollHeight;
    }, 600);
}

function getAIResponse(msg) {
    msg = msg.toLowerCase();

    if (msg.includes("sell")) return "You can sell crops from the Sell Crops page 🌾";
    if (msg.includes("price")) return "Prices depend on demand and quality. You can adjust them anytime.";
    if (msg.includes("fertilizer")) return "We provide both organic and chemical fertilizers 🌱";
    if (msg.includes("transport")) return "You can rent trucks, vans, autos, and scooters 🚚";
    if (msg.includes("delivery")) return "You can register as a delivery partner from the Delivery page.";
    if (msg.includes("register")) return "Click Get Started to register on FarmWeave.";
    if (msg.includes("language")) return "You can change language using the top dropdown 🌐";

    return "I’m here to help with crops, fertilizers, transport, and registration 😊";
}
const counters = document.querySelectorAll(".count");

const runCounter = (counter) => {
    const target = +counter.getAttribute("data-target");
    let current = 0;
    const increment = target / 50;

    const update = () => {
        current += increment;
        if (current < target) {
            counter.innerText = Math.floor(current);
            requestAnimationFrame(update);
        } else {
            counter.innerText = target + "+";
        }
    };
    update();
};

window.addEventListener("scroll", () => {
    counters.forEach(counter => {
        const pos = counter.getBoundingClientRect().top;
        if (pos < window.innerHeight - 100 && !counter.started) {
            counter.started = true;
            runCounter(counter);
        }
    });
});

