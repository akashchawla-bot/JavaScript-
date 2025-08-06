
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({ name: "Akash", score: 100 })
})
  .then(response => response.json())
  .then(result => console.log("Server says:", result))
  .catch(error => console.error("Error:", error));
