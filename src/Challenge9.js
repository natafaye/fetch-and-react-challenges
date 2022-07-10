import React, { useEffect, useState } from 'react'

/*
 * Challenge 9: Fetching a Post and Replies and Creating Replies
 * 
 * When it is working correctly you should see the post and its
 * two initial replies and when the Create Reply button is clicked
 * a new reply should show up in the list of replies.
 * 
 */

// TODO: Make a function that fetches the post with the passed in id

// TODO: Make a function that fetches the replies of the post with the passed in id
// The endpoint for replies is: "/api/posts/POST_ID_GOES_HERE/replies"

// TODO: Make a function that creates a reply for the post with the passed in id
// The endpoint for replies is: "/api/posts/POST_ID_GOES_HERE/replies"

// A little helper function for making a reply
const getRandomMessage = () => {
    const MESSAGES = ["Hey there", "I like cats", "What's up?", "I agree!", "I love this so much"];
    return MESSAGES[Math.floor(Math.random() * MESSAGES.length)];
}

// A little helper function for making a reply
const getRandomUserId = () => {
    return Math.floor(Math.random() * 4);
}

export default function Challenge9() {
    const postId = 1;
    const [post, setPost] = useState({ text: "None", read: true });
    const [replies, setReplies] = useState([]);

    const onCreateClick = async () => {
        const newReplyData = {
            replierUserId: getRandomUserId(),
            text: getRandomMessage(),
            read: false
        }
        // TODO: Create the reply and then refresh the data from the backend
    }

    // TODO: Set up whatever you need to fetch the post with the id in postId 
    // and all the replies for that post after the Challenge 9 component 
    // first renders and save both in state

    /**** DON'T CHANGE ANYTHING BELOW ****/

    return (
        <div>
            <h3>Post</h3>
            <div className="border p-2 my-2" style={{ fontWeight: (!post.read) ? "bold" : "normal" }}>
                <p>
                    { post.text }
                </p>
                <ul className="list-group">
                    { replies.map(reply => (
                        <li key={reply.id} className="list-group-item" style={{ fontWeight: (!reply.read) ? "bold" : "normal" }}>
                            {reply.text}
                        </li>
                    ))}
                </ul>
                <button onClick={onCreateClick} className="btn btn-success mt-3">Create Reply</button>
            </div>
        </div>
    )
}
