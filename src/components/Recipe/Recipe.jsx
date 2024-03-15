import PropTypes from 'prop-types';

const Recipe = ({ recipe }) => {

    const { recipe_id, recipe_image, recipe_name, short_description, ingredients, preparing_time, calories } = recipe;
    console.log(recipe_id, recipe_image, recipe_name, short_description, ingredients, preparing_time, calories);
    return (
        <div className='flex flex-col gap-6'>
            <img src={recipe_image} alt={recipe_name} className="w-full h-auto rounded-2xl" />
        </div>
    );
};

Recipe.propTypes = {
    recipe: PropTypes.object.isRequired,
}

export default Recipe;