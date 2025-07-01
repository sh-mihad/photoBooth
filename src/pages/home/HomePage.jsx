import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import Modal from "../../modal/Modal";
import LoginForm from "../auth/LoginForm";
import Post from "./components/Post";

export default function HomePage() {
  const [posts, setPosts] = useState([])
  const [isShowModal, setIsShowModal] = useState(false)
  const { authInfo } = useAuth()
 console.log("isShowModal",isShowModal);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= (document.body.offsetHeight - 1000) && !authInfo?.user?._id) {

        setIsShowModal(true)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      setIsShowModal(false)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [authInfo?.user?._id])

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await axios.get(`${import.meta.env.VITE_SERVER_BASE_URL}/posts`)
        if (response.status === 200) {
          setPosts(response.data)
        }
      } catch (error) {
        console.log(error);
      }
    }

    fetchPosts()
  }, [])
  return (
    <div className="max-w-6xl mx-auto w-full py-10  ">
      <div>
        {
          posts.map(post => <Post post={post} key={post.id} />)
        }
      </div>
      {
        isShowModal && <Modal isShowClose={false} onClose={()=>setIsShowModal(false)}>
         <LoginForm/>
        </Modal>
      }
    </div>
  )
}
