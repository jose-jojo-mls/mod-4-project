export const singleCardFetch = async (id) => {
    try {

        const response = fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${id}`);
        if (!response.ok) {
            throw Error(`Failed to fetch card details`);
        }
        
        const info = await response.json();
        
        return {data: info.data, error: null};
    }

    catch(error) {
        return {data: null, error: error};
    }
}