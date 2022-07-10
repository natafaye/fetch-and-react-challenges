import React, { useEffect, useState } from 'react'

/*
 * Challenge 5: Creating
 * 
 * When it's working correctly you should see 4 users a little after 
 * the component first loads in, and you should be able to 
 * create a user that shows up in the list of users
 * (but if you refresh the page all the data will reset)
 * 
 */

const fetchAllUsers = async () => {
    // TODO: Fetch all the users
    // The endpoint for users is: "/api/users"
}

const createUser = async (newUserData) => {
    // TODO: Create a user on the backend
    // The endpoint for users is: "/api/users"
}

// A little helper function for creating a user
const getRandomName = () => {
    const NAMES = ["Simone", "Maria", "Damien", "Jose", "Abigail"];
    return NAMES[Math.floor(Math.random() * NAMES.length)];
}

export default function Challenge5() {
    const [users, setUsers] = useState([]);

    const onCreateClick = async () => {
        const newUserData = {
            name: getRandomName(),
            isFavorite: false
        }
        // TODO: Use the createUser function to create the user on the backend
        // TODO: Refresh the list of users from the server
    }

    // TODO: Set up whatever you need to fetch all the users
    // after the Challenge 5 component first renders
    // and save the array of users in the users piece of state
    // You can use Challenge 3 as a guide

    /**** DON'T CHANGE ANYTHING BELOW ****/

    return (
        <div>
            <button onClick={onCreateClick} className="btn btn-success mb-3">Create User</button>
            <ul className="list-group">
                { users.map(user => (
                    <li className="list-group-item" key={user.id}>
                        { user.name }
                    </li>
                ))}
            </ul>
        </div>
    )
}
