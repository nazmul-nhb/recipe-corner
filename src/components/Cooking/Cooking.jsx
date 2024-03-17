import PropTypes from 'prop-types';

const Cooking = ({ recipe, serial }) => {

    const { recipe_name, preparing_time, calories } = recipe;

    return (
        <tr className='max-[479px]:text-[88%]'>
            <td className='pr-6 pb-4 text-[#282828CC] font-semibold'>{serial + 1}</td>
            <td className='pr-6 pb-4'>{recipe_name}</td>
            <td className='pr-6 pb-4'>{preparing_time} minutes</td>
            <td className='pb-4'>{calories} calories</td>
        </tr>
    );
};

Cooking.propTypes = {
    recipe: PropTypes.object.isRequired,
    serial: PropTypes.number.isRequired
}

export default Cooking;