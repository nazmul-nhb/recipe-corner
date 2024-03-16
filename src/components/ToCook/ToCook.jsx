import PropTypes from 'prop-types';

const ToCook = ({ recipe }) => {
    const { recipe_name, preparing_time, calories } = recipe;
    console.log(recipe);
    return (
            <tr className='p-2'>
                <td>{recipe_name}</td>
                <td>{preparing_time} minutes</td>
                <td>{calories} calories</td>
                <td><button className="w-28 h-9 text-[#150B2B] rounded-[50px] font-medium text-base bg-[#0BE58A] border border-[#0BE58A] hover:text-[#0BE58A] hover:border-[#0BE58A] hover:bg-transparent">Preparing</button></td>
            </tr>
    );
};

ToCook.propTypes = {
    recipe: PropTypes.object.isRequired
}

export default ToCook;