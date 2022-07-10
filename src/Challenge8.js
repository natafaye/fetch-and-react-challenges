import React, { useEffect, useState } from 'react'

/*
 * Challenge 8: Creating a Post and Showing Error Messages
 * 
 * When it is working correctly the message at the top
 * should accurately reflect if the last request had an error 
 * (by showing the error message),
 * if the app is currently making a request (loading)
 * or if the last request was successful and is complete (idle)
 * 
 * When the Create Post button is clicked a new post
 * should be added to the posts, or the error message
 * should be displayed to let the user know why it didn't work.
 */

// TODO: Make a function that fetches all posts

// TODO: Make a function that creates a post
// and returns information about whether the request
// was successful and the error message if applicable
// Note: The fake backend has been set up to give an
// error about half the time for this kind of request
// to make it easy to test this

// A little helper function for making posts
const getRandomMessage = () => {
    const MESSAGES = ["Hey there", "I like cats", "What's up?", "Miss you!", "Encanto is the best Disney movie"];
    return MESSAGES[Math.floor(Math.random() * MESSAGES.length)];
}

export default function Challenge8() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);

    const onCreateClick = async (id) => {
        const newPostData = {
            authorUserId: 0,
            text: getRandomMessage(),
            read: false,
        }
        // TODO: Create a post and then refresh the list of posts from the backend
        // TODO: Set the loading and errorMessage pieces of state when needed
        // to accurately reflect when the things are loading or when there's an error
    }

    // TODO: Set up whatever you need to fetch the list of posts
    // after the Challenge 8 component first renders and save it in state
    // TODO: Set the loading piece of state when needed

    /**** DON'T CHANGE ANYTHING BELOW ****/

    return (
        <div>
            <h3>Posts</h3>
            { errorMessage ? <p className="text-danger">{ errorMessage }</p> : loading ? <p className="text-muted">Loading...</p> : <p>Idle</p> }
            <button onClick={onCreateClick} disabled={loading} className="btn btn-success mb-3">Create Post</button>
            <ul className="list-group">
                { posts.map(post => (
                    <li className="list-group-item" key={post.id} style={{ fontWeight: (!post.read) ? "bold" : "normal" }}>
                        { post.text }
                    </li>
                ))}
            </ul>
        </div>
    )
}
