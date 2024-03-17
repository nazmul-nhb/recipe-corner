import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Recipe from "../Recipe/Recipe";
import ToCook from "../ToCook/ToCook";
import Cooking from "../Cooking/Cooking";
import { addToLocal, getStoredItems, removeFromLocal } from "../utilities/localStorage";


const Recipes = () => {

    const [recipes, setRecipes] = useState([]);
    const [toCook, setToCook] = useState([]);
    const [cooking, setCooking] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/nazmul-nhb/Fake-API/main/food-items/recipes.json')
            .then(response => response.json())
            .then(data => setRecipes(data))
    }, [])

    // items from local storage
    useEffect(() => {
        if (recipes.length > 0) {
            const storedItems = getStoredItems();

            const savedItems = [];
            for (const id of storedItems) {
                const recipe = recipes.find(recipe => recipe.recipe_id === id);
                if (recipe) {
                    savedItems.push(recipe);
                }
            }
            setToCook(savedItems)
        }
    }, [recipes])

    // handle Want to Cook button
    const handleWantToCook = recipe => {
        const newToCook = [...toCook, recipe];

        // prevent adding duplicates
        // const uniqueToCook = newToCook.filter((recipe, index, newToCook) => newToCook.indexOf(recipe) === index);
        // setToCook(uniqueToCook);

        const alreadyExists = toCook.find(item => item.recipe_id === recipe.recipe_id);
        // showing toast
        !alreadyExists ? (setToCook(newToCook), toast.success("Successfully Added to Cook List!"))
            : toast.warn("Already Exists in Cook List!");

        // add to local storage
        addToLocal(recipe.recipe_id);
    }

    // handle Preparing button
    const handleCurrentlyCooking = (recipe, id) => {
        const preparing = [...cooking, recipe];
        setCooking(preparing);

        // prevent adding duplicates
        // const uniquePreparing = preparing.filter((recipe, index, preparing) => preparing.indexOf(recipe) === index);
        // setCooking(uniquePreparing);
        // const alreadyExists = preparing.find(item => item.recipe_id === id)
        // !alreadyExists && setCooking(preparing);

        // remove from want to cook table
        const remainingToCook = toCook.filter(recipe => recipe.recipe_id !== id);
        setToCook(remainingToCook);

        // remove from local storage
        removeFromLocal(id)
    }

    return (
        <div className="font-lexend mx-6 lg:mx-32 lg:mt-12 mt-8">
            <div className="max-w-[1600px] w-full mx-auto">
                <div className="w-full lg:w-1/2 flex flex-col gap-1 md:gap-6 justify-center items-center mx-auto text-center">
                    <h2 className="text-2xl md:text-4xl text-[#150B2B] font-semibold">Our Recipes</h2>
                    <p className="text-[#150B2B99] p-4">We cook the best dishes in the continent. You are welcome here to enjoy our delicious dishes! Our dishes are so delicious that you will never forget the taste!</p>
                </div>
                <div className="flex flex-col lg:flex-row gap-6 mt-4 lg:mt-8">
                    <div className="w-full lg:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
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
                            <h3 className="text-center text-lg md:text-2xl font-semibold text-[#282828]">Want to Cook : {toCook.length} </h3>
                            <hr className="border border-[#28282826] w-3/4 mx-auto my-4" />
                            <table className='text-[#878787] fira-sans table-auto'>
                                <thead className='text-left text-base '>
                                    <tr className="max-[479px]:text-[88%]">
                                        <th className="font-medium pr-4 pb-6"></th>
                                        <th className="font-medium pr-4 pb-6">Name</th>
                                        <th className="font-medium pr-4 pb-6">Time</th>
                                        <th className="font-medium pr-4 pb-6">Calories</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        toCook.map((recipe, index) => <ToCook
                                            key={recipe.recipe_id}
                                            recipe={recipe}
                                            serial={index}
                                            handleCurrentlyCooking={handleCurrentlyCooking}
                                        ></ToCook>)
                                    }
                                </tbody>
                            </table>
                        </div>
                        <div className="">
                            <h3 className="text-center text-lg md:text-2xl font-semibold text-[#282828]">Currently Cooking : {cooking.length} </h3>
                            <hr className="border border-[#28282826] w-3/4 mx-auto my-4" />
                            <table className='text-[#878787] fira-sans table-auto'>
                                <thead className='text-left text-base '>
                                    <tr className="max-[479px]:text-[88%]">
                                        <th className="font-medium pr-4 pb-6"></th>
                                        <th className="font-medium pr-4 pb-6">Name</th>
                                        <th className="font-medium pr-4 pb-6">Time</th>
                                        <th className="font-medium pr-4 pb-6">Calories</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        cooking.map((recipe, index) => <Cooking
                                            key={recipe.recipe_id}
                                            recipe={recipe}
                                            serial={index}
                                        ></Cooking>)
                                    }
                                    <tr className="text-[#282828CC] font-medium max-[479px]:text-[88%]">
                                        <td className='pr-4 pb-4'></td>
                                        <td className='pr-4 pb-4'></td>
                                        <td className='pr-4 pb-4'>Total Time = {cooking.reduce((acc, item) => acc + item.preparing_time, 0)} minutes</td>
                                        <td className='pb-4'>Total Calories = {cooking.reduce((acc, item) => acc + item.calories, 0)} calories</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Recipes;