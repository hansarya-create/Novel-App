import React, { useEffect, useState, useRef } from "react";
import SearchResults from "./SearchResults";

function SearchContainer1() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  // Cache object persists across renders
  const cache = useRef({});

  async function fetchUsers(searchQuery, ignore) {
    // Check cache first
    if (cache.current[searchQuery]) {
      console.log("Loaded from cache");
      setResults(cache.current[searchQuery]);
      return;
    }
    console.log("API CALL:", searchQuery);
    try {
      setLoading(true);

      const response = await fetch(
        `https://dummyjson.com/users/search?q=${searchQuery}`
      );

      const data = await response.json();

      // Save response in cache
      cache.current[searchQuery] = data.users;

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

export default SearchContainer1;