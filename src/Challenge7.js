import React, { useEffect, useState } from 'react'

/*
 * Challenge 7: Updating a Post and Showing a Loading Message
 * 
 * When it's working correctly you should this:
 * 
 *   How's it going everyone?
 * 
 * a little after the component first loads in.
 * 
 * When the Toggle Read button is clicked the text should toggle
 * between bolded and not bolded to reflect unread and read.
 * 
 * When the component first loads in and when the Toggle Read button
 * has been clicked you should see a loading message and the button
 * should be disabled until everything has finished communicating
 * with the backend.
 * 
 */

// TODO: Make a function that fetches the post with the passed in id

// TODO: Make a function that updates a post with the passed in id and updated data

export default function Challenge7() {
    const postId = 0;
    const [post, setPost] = useState({ text: "None", read: true });
    const [loading, setLoading] = useState(false);

    const onToggleReadClick = async () => {
        const updatedPostData = {
            ...post,
            read: !post.read
        }
        // TODO: Update the post with the updated post data
        // TODO: Refresh the data from the backend after the post is updated
        // TODO: Set the loading piece of state to true before 
        // starting the update and false when everything is finished
    }

    // TODO: Set up whatever you need to fetch the post with the id in postId
    // after the Challenge 7 component first renders and save it in state

    // TODO: Adding to the previous task, set the loading piece of state
    // to true before you start fetching the data and false when it's finished

    /**** DON'T CHANGE ANYTHING BELOW ****/

    return (
        <div>
            <button onClick={onToggleReadClick} disabled={loading} className="btn btn-primary">Toggle Read</button>
            <div className="border p-2 my-2" style={{ fontWeight: (!post.read) ? "bold" : "normal" }}>
                { (loading) ? "Loading..." : post.text }
            </div>
        </div>
    )
}
