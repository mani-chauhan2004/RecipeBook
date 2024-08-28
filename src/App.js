import React, { useState, useEffect } from 'react';
import RecipeForm from './components/RecipeForm';
import RecipeList from './components/RecipeList';
import { NavBarHeader } from './components/header';
import { useSprings, animated } from '@react-spring/web';

function App() {
  const [recipes, setRecipes] = useState([]);

  const addRecipe = (recipe) => {
    setRecipes([...recipes, recipe]);
  };

  const deleteRecipe = (id) => {
    setRecipes(recipes.filter((recipe, index) => index !== id));
  };

  const title = "Recipe Book";
  const [springs, api] = useSprings(title.length, index => ({
    opacity: 0,
    transform: 'translate3d(0,-40px,0)'
  }));

  useEffect(() => {
    api.start(index => ({
      opacity: 1,
      transform: 'translate3d(0,0px,0)',
      delay: index * 150
    }));
  }, [api]);

  return (
    <>
      <NavBarHeader />
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center text-yellow-500 mb-4 italic flex justify-center">
          {springs.map((style, index) => (
            <animated.span key={index} style={style}>
              {title[index] }
            </animated.span>
          ))}
        </h1>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-2/3">
            <RecipeForm addRecipe={addRecipe} />
            <RecipeList recipes={recipes} deleteRecipe={deleteRecipe} />
          </div>
          <div className="md:w-1/3 flex justify-center items-center p-4">
            <img src="https://images.unsplash.com/photo-1610833805553-43556a0f821d?q=80&w=1904&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Recipe" className="max-w-full h-auto"/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
