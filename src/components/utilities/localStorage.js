// get existing stored information/items for Want to Cook from local storage
const getStoredItems = () => {
    const storedItemsString = localStorage.getItem('toCook');
    if (storedItemsString) {
        return JSON.parse(storedItemsString);
    }
    return [];
}

// add Want to Cook to local storage, stage #1
const addToLocal = id => {
    const toCook = getStoredItems();
    toCook.push(id);
    // prevent duplicate items from being added to local storage
    const uniqueToCook = toCook.filter((id, index, toCook) => toCook.indexOf(id) === index);
    saveItemsToLocal(uniqueToCook);
}

// add Want to Cook to local storage, stage # 2: save items to local storage
const saveItemsToLocal = toCook => {
    const itemsStringified = JSON.stringify(toCook);
    localStorage.setItem('toCook', itemsStringified);
}

// remove Want to Cook from local storage when clicking on Preparing button
const removeFromLocal = id => {
    // first get saved items from local storage
    const toCook = getStoredItems();
    // check which one to remove and which one to keep
    const remaining = toCook.filter(idx => idx !== id);
    // call function to save the remaining items to local storage
    saveItemsToLocal(remaining);
}


export { addToLocal, getStoredItems, removeFromLocal };