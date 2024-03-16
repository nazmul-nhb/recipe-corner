import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";
import ToCook from "../ToCook/ToCook";
import Cooking from "../Cooking/Cooking";

const Recipes = () => {

    const [recipes, setRecipes] = useState([]);
    const [toCook, setToCook] = useState([]);
    const [cooking, setCooking] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/nazmul-nhb/Fake-API/main/food-items/recipes.json')
            .then(response => response.json())
            .then(data => setRecipes(data))
    }, [])

    const handleWantToCook = recipe => {
        const newToCook = [...toCook, recipe];
        const uniqueToCook = newToCook.filter((rec, index, array) => array.indexOf(rec) === index);
        setToCook(uniqueToCook);
    }

    const handleCurrentlyCooking = recipe => {
        const preparing = [...cooking, recipe];
        setCooking(preparing);
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