import { useEffect, useState } from "react";

export default function Characters() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://potterapi-fedeperin.vercel.app/en/characters")
      .then((res) => res.json())
      .then((data) => setCharacters(data.slice(0, 20)));
  }, []);

  return (
    <div className="container">
      <h1>🧙 Characters</h1>

      {characters.map((char) => (
        <div className="card" key={char.fullName}>
          <img src={char.image} alt={char.fullName} />

          <h3>{char.fullName}</h3>

          <p>
            <b>House:</b> {char.hogwartsHouse}
          </p>

          <p>
            <b>Actor:</b> {char.interpretedBy}
          </p>

          <p>
            <b>Birth:</b> {char.birthdate}
          </p>
        </div>
      ))}
    </div>
  );
}