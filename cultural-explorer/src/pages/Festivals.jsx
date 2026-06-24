import countries from "../data/countries";

function Festivals() {
  return (
    <div>
      <h1>World Festivals</h1>

      {countries.map((country) => (
        <div key={country.id}>
          <h3>{country.name}</h3>
          <p>{country.festival}</p>
        </div>
      ))}
    </div>
  );
}

export default Festivals;