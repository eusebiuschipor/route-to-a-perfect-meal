import {useParams} from "react-router";
import {useContext, useEffect, useState} from "react";
import getRecipeById from "../data";
import "../App.css";
import { Context } from '../context/Context';
import Char from '../components/Char/Char';

const Recipe = () => {
    const { recipeId } = useParams();
    const [recipe, setRecipe] = useState("")
    const [ingredients, setIngredients] = useState([])
    const [image, setImage] = useState("")
    const [instructions, setInstructions] = useState("")
    const context = useContext(Context);

    useEffect(() => {
        const recipe = getRecipeById(recipeId)
        setRecipe(recipe.title)
        setImage(recipe.image)
        setIngredients(recipe.ingredients)
        setInstructions(recipe.instructions)
    }, [recipeId])

    return (
        <div>
            <div className="container">
                <h2>Current user from {context.applicationName} is: 
                  {
                    context.user.username.split('').map((letter, index) => (
                      <Char key={index} character={letter} />
                    ))
                  }
                </h2>

                <h1 
                  style={{
                    color: context.theme.color,
                    fontSize: context.theme.fontSize,
                    textAlign:"center"
                  }}
                >
                  {recipe}
                </h1>

                <img src={image} alt=""></img>

                {ingredients.map((ingredient, index) =>
                  <div key={index}>
                    <strong>{ingredient.quantity} {ingredient.name}</strong>
                  </div>
                )}
                <div>
                    {instructions}
                </div>
            </div>
        </div>
  );
}

export default Recipe;
