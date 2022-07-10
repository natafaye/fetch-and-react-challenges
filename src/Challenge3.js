import React, { useEffect, useState } from 'react'

/*
 * Challenge 3: Fetching and Saving in State after First Render
 * 
 * When it's working correctly you should see 5 posts
 * a little after the component loads in.
 * 
 */

const fetchAllPosts = async () => {
    // TODO: Fetch all the posts
    // The endpoint for posts is: "/api/posts"
}

export default function Challenge3() {
    const [posts, setPosts] = useState([]);

    const refreshPosts = async () => {
        // TODO: Use the fetchAllPosts function and
        // save all the posts from the backend in state
    }

    // TODO: Using the useEffect hook, call the refreshPosts function
    // after the first render of the Challenge3 component

    /**** DON'T CHANGE ANYTHING BELOW ****/

    return (
        <div>
            <h3>Posts</h3>
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
