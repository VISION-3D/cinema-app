import React, { useState } from "react";

function Filter({ setFilterTitle, setFilterRating }) {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(0);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    setFilterTitle(e.target.value);
  };

  const handleRatingChange = (e) => {
    setRating(e.target.value);
    setFilterRating(Number(e.target.value));
  };

  return (
    <div style={{ marginBottom: 20 }}>
      <input type="text" placeholder="Filtrer par titre" value={title} onChange={handleTitleChange} />
      <input type="number" min="0" max="5" placeholder="Filtrer par note" value={rating} onChange={handleRatingChange} />
    </div>
  );
}

export default Filter;
