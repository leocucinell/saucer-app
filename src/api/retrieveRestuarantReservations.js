import api from "./api";

export const retrieveRestuarantReservations = async (id) => {
    try{
        const restuarantReservations = await api.get(
            'reservation/restuarant_list',
            {
                params: {
                    id
                }
            }
        );
        return restuarantReservations;
    } catch(err) {
        console.log(err);
        return 'error retrieving reservations'
    }
}