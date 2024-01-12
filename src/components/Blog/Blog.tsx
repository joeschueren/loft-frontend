import { useState, useEffect, Dispatch } from "react";
import Post from "./Post/Post";
import "./blog.css";

const Blog: React.FC = () => {

    interface Post {
        title: String,
        text: string,
        date: String,
    }
    
    const [posts, setPosts]: [Post[], any] = useState([]);

    useEffect(() => {
        async function getPosts(){
            try{
                const res = await fetch("http://localhost:5000/get-posts");

                const posts = await res.json();

                setPosts(posts);

            } catch (error) {

            }
        }

        getPosts();
    }, []);


    if(posts.length > 0){

        const postComponents = [];

        for(let i = 0; i < posts.length; i++){
            let component = <Post title={posts[i].title} body={posts[i].text} date={posts[i].date}/>
            postComponents.push(component);
        }
        

        return(<div className="blog-container">
            <div className="blog-row">
                <span className="blog-title">Messy With a Purpose</span>
                {postComponents}
            </div>
        </div>)
    }
    else return(<div>

    </div>);
}

export default Blog;