
export const USERS = [
    {
        id: 0,
        name: "Rosa",
        isFavorite: true
    },
    {
        id: 1,
        name: "Charles",
        isFavorite: false,
    },
    {
        id: 2,
        name: "Jake",
        isFavorite: false
    },
    {
        id: 3,
        name: "Terry",
        isFavorite: false
    }
]

export const POSTS = [
    {
        id: 0,
        authorUserId: 1,
        text: "How's it going everyone?",
        read: false
    },
    {
        id: 1,
        authorUserId: 3,
        text: "Anyone know where my sunglasses are?",
        read: true
    },
    {
        id: 2,
        authorUserId: 0,
        text: "Does anyone want this candle? I don't want it.",
        read: false
    },
    {
        id: 3,
        authorUserId: 3,
        text: "Seriously, has anyone seen my sunglasses?",
        read: true
    },
    {
        id: 4,
        authorUserId: 2,
        text: "Look at how cute this cat is!",
        read: true
    },
]

export const REPLIES = [
    {
        id: 0,
        postId: 1,
        replierUserId: 0,
        text: "No",
        read: false
    },
    {
        id: 1,
        postId: 1,
        replierUserId: 2,
        text: "No man, sorry",
        read: true
    },
    {
        id: 2,
        postId: 1,
        replierUserId: 0,
        text: "Oh wait, I have them",
        read: false
    },
]