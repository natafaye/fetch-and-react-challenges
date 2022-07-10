import React, { useEffect, useState } from 'react'

/*
 * Challenge 4: Deleting
 * 
 * When it's working correctly you should be able to delete
 * a post and that post should no longer show up in the list of posts
 * on either the Challenge 3 page or the Challenge 4 page
 * (but if you refresh the page all the data will reset)
 * 
 */

const fetchAllPosts = async () => {
    // TODO: Fetch all the posts
    // (You can copy this over from Challenge 3)
}

const deletePost = async (idToDelete) => {
    // TODO: Delete the post on the backend that has the passed in id
}

export default function Challenge4() {
    const [posts, setPosts] = useState([]);

    const refreshPosts = async () => {
        // TODO: Use the fetchAllPosts function and
        // save all the posts from the backend in state
        // (You can copy this over from Challenge 3)
    }

    const onDeleteClick = async (id) => {
        // Call deletePost to delete the post on the backend
        // Use the refreshPosts function to pull the posts from the backend again
        // Note: If the delete appears not to work sometimes you may have a race condition :)
    }
    
    // TODO: Using the useEffect hook, call the refreshPosts function
    // after the first render of the Challenge4 component
    // (You can copy this over from Challenge 3)

    /**** DON'T CHANGE ANYTHING BELOW ****/

    return (
        <div>
            <h3>Posts</h3>
            <ul className="list-group">
                { posts.map(post => (
                    <li className="list-group-item" key={post.id} style={{ fontWeight: (!post.read) ? "bold" : "normal" }}>
                        <button onClick={() => onDeleteClick(post.id)} className="btn btn-danger me-2">Delete</button>
                        { post.text }
                    </li>
                ))}
            </ul>
        </div>
    )
}
