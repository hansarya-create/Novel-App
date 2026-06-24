import countries from "../data/countries";
import CountryCard from "../components/CountryCard";

function Countries() {
  return (
    <div>
      <h1>Countries</h1>

      {countries.map((country) => (
        <CountryCard
          key={country.id}
          country={country}
        />
      ))}
    </div>
  );
}

export default Countries;