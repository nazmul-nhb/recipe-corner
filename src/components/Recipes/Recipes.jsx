import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";
import ToCook from "../ToCook/ToCook";
import Cooking from "../Cooking/Cooking";

const Recipes = () => {

    const [recipes, setRecipes] = useState([]);
    const [toCook, setToCook] = useState([]);
    const [cooking, setCooking] = useState([]);
    const [time, setTime] = useState(0);
    const [calories, setCalories] = useState(0);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/nazmul-nhb/Fake-API/main/food-items/recipes.json')
            .then(response => response.json())
            .then(data => setRecipes(data))
    }, [])

    const handleWantToCook = recipe => {
        const newToCook = [...toCook, recipe];
        // prevent adding duplicates
        const uniqueToCook = newToCook.filter((recipe, index, newToCook) => newToCook.indexOf(recipe) === index);
        setToCook(uniqueToCook);
    }

    const handleCurrentlyCooking = (recipe, id) => {
        const preparing = [...cooking, recipe];
        // prevent adding duplicates
        const uniquePreparing = preparing.filter((recipe, index, preparing) => preparing.indexOf(recipe) === index);
        setCooking(uniquePreparing);

        // remove from want to cook table
        const remainingToCook = toCook.filter(recipe => recipe.recipe_id !== id);
        setToCook(remainingToCook);

        // append total time and calories
        setTime(time + recipe.preparing_time);
        setCalories(calories + recipe.calories);
    }

    return (
        <div className="font-lexend mx-6 lg:mx-32 lg:mt-12 mt-8">
            <div className="max-w-[1600px] w-full mx-auto">
                <div className="w-1/2 flex flex-col gap-6 justify-center items-center mx-auto text-center">
                    <h2 className="text-4xl text-[#150B2B] font-semibold">Our Recipes</h2>
                    <p className="text-[#150B2B99]">We cook the best dishes in the continent. You are welcome here to enjoy our delicious dishes! Our dishes are so delicious that you will never forget the taste!</p>
                </div>
                <div className="flex flex-col lg:flex-row gap-6">
                    <div className="w-full lg:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {
                            recipes.map(recipe => <Recipe
                                key={recipe.recipe_id}
                                recipe={recipe}
                                handleWantToCook={handleWantToCook}
                            ></Recipe>)
                        }
                    </div>
                    <div className="w-full lg:w-2/5 flex flex-col gap-8 px-6 py-8 border border-[#28282833] rounded-2xl">
                        <div className="">
                            <h3 className="text-center text-2xl font-semibold text-[#282828]">Want to Cook: {toCook.length} </h3>
                            <hr className="border border-[#28282826] w-3/4 mx-auto my-4" />
                            <div className="toast toast-top toast-end">
                                <div className="alert alert-info">
                                    <span>New mail arrived.</span>
                                </div>
                            </div>
                            <table className='text-[#878787] fira-sans table-auto'>
                                <thead className='text-left text-base '>
                                    <tr className="">
                                        <th className="font-medium pr-4 pb-6"></th>
                                        <th className="font-medium pr-4 pb-6">Name</th>
                                        <th className="font-medium pr-4 pb-6">Time</th>
                                        <th className="font-medium pr-4 pb-6">Calories</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        toCook.map(recipe => <ToCook
                                            key={recipe.recipe_id}
                                            recipe={recipe}
                                            serial={toCook.indexOf(recipe)}
                                            handleCurrentlyCooking={handleCurrentlyCooking}
                                        ></ToCook>)
                                    }
                                </tbody>
                            </table>
                        </div>
                        <div className="">
                            <h3 className="text-center text-2xl font-semibold text-[#282828]">Currently Cooking: {cooking.length} </h3>
                            <hr className="border border-[#28282826] w-3/4 mx-auto my-4" />
                            <table className='text-[#878787] fira-sans table-auto'>
                                <thead className='text-left text-base '>
                                    <tr className="">
                                        <th className="font-medium pr-4 pb-6"></th>
                                        <th className="font-medium pr-4 pb-6">Name</th>
                                        <th className="font-medium pr-4 pb-6">Time</th>
                                        <th className="font-medium pr-4 pb-6">Calories</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        cooking.map(recipe => <Cooking
                                            key={recipe.recipe_id}
                                            recipe={recipe}
                                            serial={cooking.indexOf(recipe)}
                                        ></Cooking>)
                                    }
                                    <tr className="font-medium">
                                        <td className='pr-6 pb-4'></td>
                                        <td className='pr-6 pb-4'></td>
                                        <td className='pr-6 pb-4'>Total Time = {time} minutes</td>
                                        <td className='pb-4'>Total Calories = {calories} calories</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recipes;