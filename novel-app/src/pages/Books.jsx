import { useEffect, useState } from "react";

export default function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("https://potterapi-fedeperin.vercel.app/en/books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div className="container">
      <h1>📚 Harry Potter Books</h1>

      {books.map((book) => (
        <div className="card" key={book.number}>
          <img src={book.cover} alt={book.title} />

          <h3>{book.title}</h3>

          <p>
            <b>Release:</b> {book.releaseDate}
          </p>

          <p>
            <b>Pages:</b> {book.pages}
          </p>

          <p>{book.description}</p>
        </div>
      ))}
    </div>
  );
}