import React, { useState } from 'react';

const AddMovie = ({ addMovie }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [posterURL, setPosterURL] = useState('');
  const [rating, setRating] = useState(0);

  const handleAddMovie = () => {
    const newMovie = { title, description, posterURL, rating: Number(rating) };
    addMovie(newMovie);
    setTitle('');
    setDescription('');
    setPosterURL('');
    setRating(0);
  };

  return (
    <div className="add-movie">
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <input type="text" placeholder="Poster URL" value={posterURL} onChange={(e) => setPosterURL(e.target.value)} />
      <input type="number" placeholder="Rating" min="0" max="5" value={rating} onChange={(e) => setRating(e.target.value)} />
      <button onClick={handleAddMovie}>Add Movie</button>
    </div>
  );
};

export default AddMovie;

  