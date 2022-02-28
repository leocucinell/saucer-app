import api from "./api";

export const updateUser = async (id, username, email, phoneNumber) => {
    try {
        const updatedUser = await api.put('user/update', {
            id,
            username,
            email,
            phoneNumber
        });
        return updatedUser;
    } catch(err) {
        return 'unable to update user, not unique username or email'
    }
}