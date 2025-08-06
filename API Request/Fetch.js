// Syntax for fetch

// fetch("https://example.com/data") "URL" //is the address of the data you want.
//   .then(response => response.json()) // .json() converts it into normal JavaScript objects.
//   .then(data => console.log(data)) // You print the server’s response — maybe it says “Thanks Akash!” or gives you a confirmation.
//   .catch(error => console.error("Error:", error)); // If something goes wrong (like the server is down), this catches the error and shows it.


// // Example: Fetching a Joke

// fetch("https://official-joke-api.appspot.com/random_joke")
//   .then(response => response.json())
//   .then(joke => {
//     console.log("Setup:", joke.setup);
//     console.log("Punchline:", joke.punchline);
//   })
//   .catch(error => console.error("Failed to fetch joke:", error));

// // Bonus: Sending Data (POST Request)

//   fetch("https://example.com/submit", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json"
//   },
//   body: JSON.stringify({ name: "Akash", score: 100 })
// })
//   .then(response => response.json())
//   .then(result => console.log("Server says:", result))
//   .catch(error => console.error("Error:", error));


// // You can test POST requests using this free test API:

//   fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json"
//   },
//   body: JSON.stringify({
//     title: "Hello Akash",
//     body: "This is a test post",
//     userId: 1
//   })
// })
//   .then(response => response.json())
//   .then(data => console.log("Response:", data))
//   .catch(error => console.error("Error:", error));


// real life example

// // // // 1️⃣ Create form elements
// const form = document.createElement("form");
// form.id = "scoreForm";

// const inputName = document.createElement("input");
// inputName.type = "text";
// inputName.id = "name";
// inputName.placeholder = "Your name";

// const inputScore = document.createElement("input");
// inputScore.type = "number";
// inputScore.id = "score";
// inputScore.placeholder = "Your score";

// const button = document.createElement("button");
// button.type = "submit";
// button.textContent = "Send";

// // 2️⃣ Add elements to form
// form.appendChild(inputName);
// form.appendChild(inputScore);
// form.appendChild(button);

// // 3️⃣ Add form to the body
// document.body.appendChild(form);

// // 4️⃣ Add submit event with Fetch API
// form.addEventListener("submit", function(e) {
//   e.preventDefault();

//   const name = inputName.value;
//   const score = inputScore.value;

//   fetch("https://example.com/submit", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify({ name, score })
//   })
//     .then(response => response.json())
//     .then(result => console.log("Server replied:", result))
//     .catch(error => console.error("Error submitting data:", error));
// });
