import React, { useEffect, useState } from "react";
import SearchResults from "./SearchResults";

function SearchContainer() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch function outside useEffect
  async function fetchUsers(searchQuery, ignore) {
    try {
      setLoading(true);

      const response = await fetch(
         `https://dummyjson.com/users/search?q=${searchQuery}`
      );

      const data = await response.json();

      if (!ignore.cancelled) {
        setResults(data.users);
      }
    } catch (error) {
      console.log(error);
    } finally {
      if (!ignore.cancelled) {
        setLoading(false);
      }
    }
  }

  useEffect(() => {
    if (!query) {
      setResults([]);
      return;
    }

    // Object used to avoid stale state update
    let ignore = { cancelled: false };

    fetchUsers(query, ignore);

    return () => {
      ignore.cancelled = true;
    };
  }, [query]);

  return (
    <div>
      <h2>User Search</h2>

      <input
        type="text"
        placeholder="Search user"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <SearchResults
        results={results}
        loading={loading}
      />
    </div>
  );
}

export default SearchContainer;
 