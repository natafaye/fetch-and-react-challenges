import React from 'react'

/*
 * Challenge 1: Fetching and Alerting
 * 
 * When it's working correctly you should see: 
 * 
 *   Fetched: How's it going everyone?"
 * 
 * in an alert when the button is clicked.
 * 
 */

const fetchPost = async (id) => {
    // TODO: fetch the post with the passed in id
    // The endpoint for posts is: '/api/posts'

    // Hint: You'll need to make a request,
    // parse the data from the response,
    // and access the post from the data
}

/**** DON'T CHANGE ANYTHING BELOW ****/

export default function Challenge1() {

    const onFetchPostClick = async () => {
        const fetchedPost = await fetchPost(0);
        alert("Fetched: " + fetchedPost.text)
    }

    return (
        <div>
            <button className="btn btn-primary" onClick={onFetchPostClick}>
                Fetch Post With Id 0
            </button>
        </div>
    )
}
