import React from "react";

// Filtre par titre et note
function Filter({ setTitleFilter, setRatingFilter }) {
  return (
    <form>
      <input
        type="text"
        placeholder="Rechercher par titre..."
        onChange={(e) => setTitleFilter(e.target.value)}
      />
      <input
        type="number"
        placeholder="Note minimum"
        min="0"
        max="5"
        onChange={(e) => setRatingFilter(Number(e.target.value))}
      />
    </form>
  );
}

export default Filter;
