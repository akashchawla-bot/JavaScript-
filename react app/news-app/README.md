📰 NewsHatch

NewsHatch is a responsive React-based news web app that fetches real-time headlines using the NewsData.io API. It features smooth pagination, clean UI cards, and dynamic content loading — designed to deliver a fast and intuitive news browsing experience.

🚀 Live Preview
Coming soon...
You can deploy it using Netlify, Vercel, or GitHub Pages.

📸 Screenshots
Add screenshots here once deployed or during development.

✨ Features
- 🔄 Real-time news from the US using NewsData.io
- 🧭 Cursor-based pagination with Next/Previous navigation
- 🎨 Responsive card layout with cropped images and clean typography
- 🧠 Fallback handling for empty results and API errors
- ⚡ Smooth scroll transitions between pages
- 🧹 Modular components for scalability and reuse

🛠️ Tech Stack
| Technology   | Purpose                          |
|--------------|----------------------------------|
| React.js     | Frontend framework               |
| Bootstrap    | Styling and layout               |
| NewsData.io  | News API                         |
| JavaScript   | Logic and interactivity          |
| CSS          | Custom styling for image fit     |

📦 Installation
```bash
git clone https://github.com/your-username/news-hatch.git
cd news-hatch
npm install
npm start
```

🔑 API Setup
- Sign up at NewsData.io
- Get your API key
- Replace the placeholder in News.js:

```javascript
const url = `https://newsdata.io/api/1/news?apikey=YOUR_API_KEY&country=us`;
```
🧠 Developer Notes
- The app uses cursor-based pagination, so instead of page numbers, it relies on nextPage tokens returned by the API.
- Previous page navigation is handled by storing a history of tokens in state.
- Image cropping is handled using object-fit: cover to maintain layout consistency.

📁 Folder Structure
```
src/
├── components/
│   ├── News.js
│   ├── NewItem.js
│   └── Spinner.js
├── App.js
├── index.js
└── App.css
```

🙋‍♂️ About the Developer
Built by Akash Chawla, a third-year BCA student passionate about frontend development, UI design, and building production-ready apps.
This project is part of his journey toward becoming a full-stack MERN developer.

📌 Future Improvements
- 🔍 Add search and category filters
- 🌐 Support multiple countries and languages
- 📱 Convert to infinite scroll for smoother UX
- 🧪 Add unit tests and error boundaries

📄 License
This project is open-source and available under the MIT License.