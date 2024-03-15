import PropTypes from 'prop-types';
import { TbFlame } from "react-icons/tb";
import { MdOutlineWatchLater } from "react-icons/md";

const Recipe = ({ recipe, addToCooking }) => {

    const { recipe_id, recipe_image, recipe_name, short_description, ingredients, preparing_time, calories } = recipe;

    return (
        <div className='flex flex-col justify-between gap-4 p-6 border border-[#28282833] rounded-2xl'>
            <img src={recipe_image} alt={recipe_name} className="w-full h-auto rounded-2xl" />
            <h3 className="text-[#282828] text-xl font-semibold mt-2">{recipe_name}</h3>
            <p className='text-[#878787] fira-sans'>{short_description}</p>
            <h4 className="text-lg mt-6">Ingredients: {ingredients.length}</h4>
            <ul className="text-lg text-[#878787] fira-sans mb-6">
                {
                    ingredients.map(
                        (ingredient, idx) =>
                            <li className='list-disc list-inside pl-3 py-1' key={idx}>{ingredient}</li>
                    )
                }
            </ul>
            <div className="flex gap-5 text-[#282828CC] fira-sans">
                <p className="flex gap-2 items-center text-xl"><MdOutlineWatchLater></MdOutlineWatchLater><span className="text-base">{preparing_time} minutes</span></p>
                <p className="flex gap-2 items-center text-xl"><TbFlame></TbFlame><span className="text-base">{calories} calories</span></p>
            </div>
            <button onClick={() => addToCooking(recipe)} className="w-44 h-12 text-[#150B2B] rounded-[50px] font-semibold text-lg bg-[#0BE58A] border border-[#0BE58A] hover:text-[#0BE58A] hover:border-[#0BE58A] hover:bg-transparent">Want to Cook</button>
        </div>
    );
};

Recipe.propTypes = {
    recipe: PropTypes.object.isRequired,
    addToCooking: PropTypes.func.isRequired
}

export default Recipe;