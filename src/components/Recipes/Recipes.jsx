import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";

const Recipes = () => {

    const [recipes, setRecipes] = useState([]);
    const [toCook, setToCook] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/nazmul-nhb/Fake-API/main/food-items/recipes.json')
            .then(response => response.json())
            .then(data => setRecipes(data))
    }, [])

    const addToCooking = recipe => {
        const newToCook = [...toCook, recipe];
        const uniqueToCook = newToCook.filter((recipe, idx, newToCook) => newToCook.indexOf(recipe) === idx);
        setToCook(uniqueToCook);
        console.log(toCook);
    }


    return (
        <div className="font-lexend mx-6 lg:mx-32 lg:mt-12 mt-8">
            <div className="max-w-[1600px] w-full mx-auto">
                <div className="w-1/2 flex flex-col gap-6 justify-center items-center mx-auto text-center">
                    <h2 className="text-4xl text-[#150B2B] font-semibold">Our Recipes</h2>
                    <p className="text-[#150B2B99] ">We cook the best dishes in the continent. You are welcome here to enjoy our delicious dishes! Our dishes are so delicious that you will never forget the taste!</p>
                </div>
                <div className="flex flex-col lg:flex-row">
                    <div className="w-full lg:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {
                            recipes.map(recipe => <Recipe
                                key={recipe.recipe_id}
                                recipe={recipe}
                                addToCooking={addToCooking}
                            ></Recipe>)
                        }
                    </div>
                    <div className="w-full lg:w-1/3">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recipes;