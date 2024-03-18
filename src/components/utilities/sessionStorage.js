// get existing stored information/items for Currently Cooking from session storage
const getStoredCookingItems = () => {
    const cookingItemsString = sessionStorage.getItem('currentlyCooking');
    if (cookingItemsString) {
        return JSON.parse(cookingItemsString);
    }
    return [];
}

// add Currently Cooking to session storage, stage #1
const addCookingToSession = id => {
    const currentlyCooking = getStoredCookingItems();
    currentlyCooking.push(id);
    saveCookingToSession(currentlyCooking);
}

// add Currently Cooking to session storage, stage # 2: save items to session storage
const saveCookingToSession = currentlyCooking => {
    const itemsStringified = JSON.stringify(currentlyCooking);
    sessionStorage.setItem('currentlyCooking', itemsStringified);
}

export { addCookingToSession, getStoredCookingItems };