import React, { useEffect, useState } from 'react'

/*
 * Challenge 6: Fetching a Post and the Associated User
 * 
 * When it's working correctly you should this:
 * 
 *   Terry: Anyone know where my sunglasses are?
 * 
 * a little after the component first loads in.
 * 
 */

// TODO: Make a function that fetches the post with the passed in id

// TODO: Make a function that fetches the user with the passed in id

export default function Challenge6() {
    const postId = 1;
    const [post, setPost] = useState({ text: "None", read: true });
    const [userName, setUserName] = useState("None");

    // TODO: Set up whatever you need to fetch the post with the id in postId
    // after the Challenge 6 component first renders and save it in state

    // TODO: Adding to the previous task, also fetch the user that was
    // the author of the fetched post and save that user's username in state

    /**** DON'T CHANGE ANYTHING BELOW ****/

    return (
        <div>
            <h3>Post</h3>
            <div className="border p-2 my-2" style={{ fontWeight: (!post.read) ? "bold" : "normal" }}>
                <span className="text-primary">{ userName }:</span> { post.text }
            </div>
        </div>
    )
}
