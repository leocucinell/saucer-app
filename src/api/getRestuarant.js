import api from "./api"

export const getRestuarant = async (id) => {
    try {
        const restuarant = await api.get(
            'restuarant/retrieve',
            {
                params: {
                    id
                }
            }
        );
        return restuarant;
    } catch(err) {
        console.log(err);
        return 'unable to retrieve restuarant';
    }
}