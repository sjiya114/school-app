

<div align="center">
	<h1>🏫 School App</h1>
	<p>
		<img src="https://img.shields.io/badge/Next.js-13-blue?logo=next.js" alt="Next.js" />
		<img src="https://img.shields.io/badge/React-18-61DAFB?logo=react" alt="React" />
		<img src="https://img.shields.io/badge/MySQL-8.0-blue?logo=mysql" alt="MySQL" />
		<img src="https://img.shields.io/badge/Node.js-20-green?logo=node.js" alt="Node.js" />
		<img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="MIT License" />
	</p>
	<p><b>A modern web application for managing and displaying information about schools.</b></p>
</div>

---


## 🚀 Tech Stack

- **Frontend:** Next.js, React, CSS Modules
- **Backend:** Node.js (API routes in Next.js)
- **Database:** MySQL
- **Other:** PostCSS, ESLint


## ✨ Features

- 🏫 **Add School**: Submit new schools with details and images.
- 📋 **Show Schools**: Browse a list of all added schools with images.
- ℹ️ **About Page**: Learn more about the application.
- 🧭 **Navigation Bar**: Easily navigate between pages.
- 🖼️ **Image Uploads**: Store and display school images.
- 🔗 **API Routes**: RESTful endpoints for adding and showing schools.


## 📁 Project Structure

```text
school-app/
├── app/
│   ├── AddSchool/
│   │   └── page.js
│   ├── ShowSchools/
│   │   └── page.js
│   ├── api/
│   │   ├── addSchool/route.js
│   │   └── showSchool/route.js
│   ├── component/
│   │   ├── About.js
│   │   └── Navbar.js
│   ├── globals.css
│   ├── layout.js
│   └── page.js
├── config/
│   └── db.js
├── public/
│   └── schoolImages/
├── package.json
├── next.config.mjs
├── jsconfig.json
├── postcss.config.mjs
├── eslint.config.mjs
└── README.md
```


## 🛠️ Getting Started

> **💡 Tip:** For the best experience, use the latest version of Node.js and a modern browser.

1. **Install dependencies:**
	```bash
	npm install
	```
2. **Run the development server:**
	```bash
	npm run dev
	```
3. **Open your browser:**
	Visit [http://localhost:3000](http://localhost:3000) to view the app.


## 📜 Scripts

- `npm run dev` — Start the development server
- `npm run build` — Build for production
- `npm start` — Start the production server


## 🧰 Technologies Used

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [Node.js](https://nodejs.org/)
- [MySQL](https://www.mysql.com/)
- [CSS Modules]


## 🗂️ Folder Descriptions

- `app/` — Main application pages and API routes
- `component/` — Reusable React components
- `config/` — Database configuration
- `public/schoolImages/` — Uploaded school images


## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.


## 📝 License

This project is licensed under the MIT License.
