import { Model, createServer, Response } from "miragejs";
import { POSTS, REPLIES, USERS } from "./fake-database";

export const server = createServer({
    models: {
        post: Model,
        user: Model,
        replies: Model
    },
    seeds(server) {
        server.db.loadData({
            users: USERS,
            posts: POSTS,
            replies: REPLIES
        });
    },
    routes() {
        // User routes
        this.get("/api/users",);
        this.get("/api/users/:id");
        this.post("/api/users", (schema, request) => {
            const newUser = JSON.parse(request.requestBody);
            return schema.users.create(newUser);
        });

        // Post routes
        this.get("/api/posts");
        this.get("/api/posts/:id");
        this.delete("/api/posts/:id");
        this.post("/api/posts", (schema, request) => {
            // Give an error about half the time
            if(Math.random() > 0.5) {
                return new Response(500)
            }
            const newPost = JSON.parse(request.requestBody);
            return schema.posts.create(newPost);
        });
        this.put("/api/posts/:id", (schema, request) => {
            const id = request.params.id;
            const postData = JSON.parse(request.requestBody);
            return schema.posts.find(id).update(postData);
        });

        // Reply routes
        this.get("/api/posts/:postId/replies", (schema, request) => {
            const postId = request.params.postId;
            return schema.replies.where({ postId: postId });
        });
        this.post("/api/posts/:postId/replies", (schema, request) => {
            const postId = request.params.postId;
            const newReply = JSON.parse(request.requestBody);
            newReply.postId = postId;
            return schema.replies.create(newReply);
        });
        this.get("/api/posts/:postId/replies/:id", (schema, request) => {
            const id = request.params.id;
            const postId = request.params.postId;
            const reply = schema.replies.find(id);
            return (reply.postId === postId) ? reply : null;
        });
    }
});