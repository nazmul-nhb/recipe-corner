import PropTypes from 'prop-types';

const ToCook = ({ recipe, serial, handleCurrentlyCooking }) => {
    const { recipe_id, recipe_name, preparing_time, calories } = recipe;
    return (
        <tr>
            <td className='pr-4 pb-4 text-[#282828CC] font-semibold'>{serial + 1}</td>
            <td className='pr-4 pb-4'>{recipe_name}</td>
            <td className='pr-4 pb-4'>{preparing_time} minutes</td>
            <td className='pr-4 pb-4'>{calories} calories</td>
            <td><button onClick={() => handleCurrentlyCooking(recipe, recipe_id)} className="w-28 h-9 text-[#150B2B] rounded-[50px] font-medium text-base bg-[#0BE58A] border border-[#0BE58A] hover:text-[#0BE58A] hover:border-[#0BE58A] hover:bg-transparent mb-6">Preparing</button></td>
        </tr>
    );
};

ToCook.propTypes = {
    recipe: PropTypes.object.isRequired,
    serial: PropTypes.number.isRequired,
    handleCurrentlyCooking: PropTypes.func.isRequired
}

export default ToCook;