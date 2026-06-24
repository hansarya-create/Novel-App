//Dumb Component

import React from "react";

function SearchResults({ results, loading }) {

  if (loading) {
    return <div>Loading Skeleton...</div>;
  }

  if (results.length === 0) {
    return <h3>No Results Found</h3>;
  }

  return (
    <ul>
      {results.map((item) => (
        <li key={item.id}>
          {item.firstName}
        </li>
      ))}
    </ul>
  );
}

export default SearchResults;