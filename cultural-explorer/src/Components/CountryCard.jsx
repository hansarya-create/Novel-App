import { Link } from "react-router-dom";

function CountryCard({ country }) {
  return (
    <div className="card">
      <h2>{country.name}</h2>

      <p>{country.capital}</p>

      <Link to={`/country/${country.id}`}>
        View Details
      </Link>
    </div>
  );
}

export default CountryCard;