import axios from "axios";
import { useEffect, useState } from "react";
import Post from "./components/Post";

export default function HomePage() {
  const [posts,setPosts] = useState([])
  useEffect(()=>{
    async function fetchPosts() {
      try {
        const response = await axios.get(`${import.meta.env.VITE_SERVER_BASE_URL}/posts`)
        if(response.status === 200){
          setPosts(response.data)
        }
      } catch (error) {
        console.log(error);
      }
    }

    fetchPosts()
  },[])
  return (
    <div className="max-w-6xl mx-auto w-full py-10  ">       
        <div>
         {
          posts.map(post=><Post post={post} key={post.id}/>)
         }
        </div>
    </div>
  )
}
