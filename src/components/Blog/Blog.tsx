import { useState, useEffect } from "react";
import Post from "./Post/Post";
import "./blog.css";

const Blog: React.FC = () => {

    interface Post {
        title: string,
        text: string,
        date: string,
    }
    
    const [posts, setPosts]: [Post[], any] = useState([]);

    const url = (process.env.NODE_ENV === "production" ?
        "https://equal-pinto-brochure.glitch.me" :
        "http://localhost:5000");

    useEffect(() => {
        async function getPosts(){
            try{
                const res = await fetch(url+"/get-posts");

                const posts = await res.json();

                setPosts(posts);

            } catch (error) {

            }
        }

        getPosts();
    });


    if(posts.length > 0){

    

        posts.sort((a: Post, b: Post) => {
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);
          
            if (dateA > dateB) {
              return -1;
            } else if (dateA < dateB) {
              return 1;
            } else {
              return 0;
            }
          });

        const postComponents = [];

        for(let i = 0; i < posts.length; i++){
            let component = <Post title={posts[i].title} body={posts[i].text} date={posts[i].date}/>
            postComponents.push(component);
        }
        

        return(<div className="blog-container">
            <div className="blog-landing">
                <div className="blog-landing-text">
                    <span className="blog-title">Messy With a Purpose</span>
                    <span className="blog-by">a blog by</span>
                    <span className="blog-name">Connie Kovach</span>
                </div>
                <div className="blog-landing-img">
                    <img className="blog-logo" src="blog-logo.jpg" alt="Messy With a Purpose"></img>
                </div>
            </div>
            <div className="blog-row">
                {postComponents}
            </div>
        </div>)
    }
    else return(<div>

    </div>);
}

export default Blog;