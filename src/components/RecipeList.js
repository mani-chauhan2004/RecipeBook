//RecipeList
import React from 'react';
import RecipeItem from './RecipeItem';

function RecipeList({ recipes, deleteRecipe }) {
  return (
    <div>
      {recipes.map((recipe, index) => (
        <RecipeItem key={index} id={index} recipe={recipe} deleteRecipe={deleteRecipe} />
      ))}
    </div>
  );
}

export default RecipeList;
