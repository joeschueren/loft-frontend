import "./update.css";
import {useState, useEffect} from "react";

const Update: React.FC = () => {

    async function checkAuth(){
        try{
            const res = await fetch("http://localhost:5000/check-auth", {
                method: "GET",
                credentials: "include"
            })
  
            if(res.status !== 200){
                window.location.href = "/Login"
            }
  
        } catch(error) {
  
        }
      }
  
      useEffect(() => {
          checkAuth();
      }, [])

    interface Post {
        title: String,
        text: string,
        date: String,
        _id: String
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

            let preview = posts[i].text.replace(/<[^>]*>/g, '').substring(0,75);

            for(let i = preview.length-1; i > 1; i--){
                if(preview[i] === " "){
                    if(/[,.?;:!-_~`]/.test(preview[i - 1])){
                        i--;
                    }

                    preview = preview.substring(0, i)+"...";
                    i = -1;
                }
            }

            let component = (
                <div className="post-anchor">
                    <div className="post-container">
                        <p className="title">{posts[i].title}</p>
                        <p>{preview}</p>
                        <p className="date">{posts[i].date}</p>
                        <a className="update-button" href={"/Update/"+encodeURIComponent(posts[i].title.toString())}>Update</a>
                    </div>
                </div>
            )
            postComponents.push(component);
        }
        

        return(<div className="blog-container">
            <div className="blog-row">
                {postComponents}
            </div>
        </div>)
    }
    else return(<div>
        <h1>Loading</h1>
    </div>);
}

export default Update;