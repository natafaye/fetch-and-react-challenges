import React, { useState } from 'react'

/*
 * Challenge 2: Fetching and Saving in State
 * 
 * When it's working correctly you should see: 
 * 
 *   Terry
 *   This user is not a favorite
 * 
 * when the Fetch User with Id 3 button is clicked and:
 * 
 *   Rosa
 *   This user is a favorite
 * 
 * when the Fetch User with Id 0 button is clicked.
 * 
 */

const fetchUserById = async (id) => {
    // TODO: fetch the user with the passed in id and return the user objet
    // The endpoint for users is: "/api/users"
}

export default function Challenge2() {
    const [user, setUser] = useState(null);

    const onFetchUser3Click = async () => {
        // TODO: Call the fetchUserById function to get the user with the id 3
        // Set the user piece of state to be the fetched user
    }

    const onFetchUser0Click = async () => {
        // TODO: Call the fetchUserById function to get the user with the id 0
        // Set the user piece of state to be the fetched user
    }

    /**** DON'T CHANGE ANYTHING BELOW ****/

    return (
        <div>
            <button className="btn btn-primary mb-3 me-3" onClick={onFetchUser3Click}>Fetch User With Id 3</button>
            <button className="btn btn-primary mb-3" onClick={onFetchUser0Click}>Fetch User With Id 0</button>
            <h3> { (user) ? user.name : "No User Loaded" } </h3>
            <p> { (user) ? "This user " + (user.isFavorite ? "is" : "is not") + " a favorite" : "" } </p>
        </div>
    )
}
