import { useLocation } from "react-router-dom";

export default function Details() {
  const { state } = useLocation();

  if (!state) {
    return <h2>No Data Found</h2>;
  }

  return (
    <div className="container">
      <h1>{state.title}</h1>
      <p>{state.description}</p>
    </div>
  );
}