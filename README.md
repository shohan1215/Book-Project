...existing code...
# Book Vibe (boi-poka-vibe)

A small React + Vite demo app for listing books, viewing details and a simple chart example.

Quick links:
- [index.html](index.html)
- [package.json](package.json)
- [vite.config.js](vite.config.js)
- [tailwind.config.js](tailwind.config.js)
- [public/booksData.json](public/booksData.json)
- [src/main.jsx](src/main.jsx) — router setup and entry
- [`Root`](src/Components/Roots/Root.jsx)
- [`Navber`](src/Components/Navber/Navber.jsx)
- [`Footer`](src/Components/Footer/Footer.jsx)
- [`Home`](src/Components/Home/Home.jsx)
- [`Banner`](src/Components/Banner/Banner.jsx)
- [`Book`](src/Components/Books/Book.jsx)
- [`Booked`](src/Components/Booked/Booked.jsx)
- [`Bookdetails`](src/Components/BookDetails/Bookdetails.jsx)
- [`ListedBooks`](src/Components/ListedBooks/ListedBooks.jsx)
- [`Rechart`](src/Components/Rechart/Rechart.jsx)
- [src/index.css](src/index.css)

Tech stack
- React (v19) + Vite
- Tailwind CSS + DaisyUI
- react-router-dom
- Recharts
- react-tabs

Getting started
1. Install dependencies:
```sh
npm install
2. Start development server:
npm run dev
3. Build & preview:
npm run build
npm run preview
4. Lint:
npm run lint
Project overview

App entry: index.html -> src/main.jsx
Layout: Root includes Navber and Footer
Home page: Home uses Banner and Book
Book listing card: Booked
Book details route: Bookdetails
Tabs example: ListedBooks
Chart example: Rechart
Data

Static book data is in public/booksData.json. Each item contains:
bookId, bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing
Routing

Defined in src/main.jsx:
/ → Home
/booked/:bookId → Bookdetails
/listedBooks → ListedBooks
/reChart → Rechart
/dashboard → [src/Components/Dashboard/Dashboard.jsx]
Notes

Images in the sample data use external URLs. For local assets use public/ or src/assets/.
Tailwind is configured in tailwind.config.js and styles are loaded from src/index.css. ...existing code...
