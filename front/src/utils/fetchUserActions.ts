import { IAddFriendForm } from "@/interfaces/interfaceUser";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const fetchAddUser = async (data: IAddFriendForm) => {
    const {userId, friendId, token} = data
    const response = await fetch(`${apiUrl}/users/add-friend`, {
        method: "POST",
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            userId: userId, 
            friendId: friendId
        })
    })

    if (!response.ok) {
        throw new Error(`Error adding friend: ${response.statusText}`);
    }
    const userData = await response.json();
    return userData;
} 

export const fetchDeleteFriend = async (data: IAddFriendForm) => {
    const {userId, friendId, token} = data
    const response = await fetch(`${apiUrl}/users/add-friend/${userId}?friendId=${friendId}`, {
        method: "DELETE",
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        }
    })

    if (!response.ok) {
        throw new Error(`Error adding friend: ${response.statusText}`);
    }
    const userData = await response.json();
    return userData;
} 