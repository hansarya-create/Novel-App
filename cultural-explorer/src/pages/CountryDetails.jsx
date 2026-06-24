import { useParams } from "react-router-dom";
import countries from "../data/countries";

function CountryDetails() {
  const { id } = useParams();

  const country = countries.find(
    (c) => c.id === parseInt(id)
  );

  return (
    <div>
      <h1>{country.name}</h1>

      <p>Capital: {country.capital}</p>

      <p>Language: {country.language}</p>

      <p>Food: {country.food}</p>

      <p>Festival: {country.festival}</p>

      <p>Culture: {country.culture}</p>
    </div>
  );
}

export default CountryDetails;