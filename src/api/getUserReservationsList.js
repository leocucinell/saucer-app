import api from "./api";

export const getUserReservations = async (uid) => {
    try{
        const userReservations = await api.get('reservation/user_list', {
            params: {
                id: uid
            }
        });
        return userReservations
    } catch(err) {
        return 'unable to retrieve reservations'
    }
}