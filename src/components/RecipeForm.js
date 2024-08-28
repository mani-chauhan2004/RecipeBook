import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';

function RecipeForm({ addRecipe }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addRecipe({ title, description });
    setTitle('');
    setDescription('');
  };

  const slideInStyle = useSpring({
    from: { transform: 'translateX(-100%)', opacity: 0 },
    to: { transform: 'translateX(0%)', opacity: 1 },
    config: { tension: 200, friction: 100 },
  });

  return (
    <animated.form onSubmit={handleSubmit} style={slideInStyle} className="mb-4">
      <div className="mb-2">
        <label className="block text-sm font-bold mb-1">Title</label>
        <input
          type="text"
          value={title}
          onChange={(element) => setTitle(element.target.value)}
          className="w-96 p-2 border border-yellow-500 focus:border-red rounded italic text-yellow-500"
          required
        />
      </div>
      <div className="mb-2">
        <label className="block text-sm font-bold mb-1">Description</label>
        <textarea
          value={description}
          onChange={(element) => setDescription(element.target.value)}
          className="w-full h-64 border-yellow-500 text-yellow-500 p-2 border rounded italic"
          required
        ></textarea>
      </div>
      <button type="submit" className="bg-blue-500 bg-yellow-500 italic text-white p-2 rounded">
        Add Recipe
      </button>
    </animated.form>
  );
}

export default RecipeForm;
