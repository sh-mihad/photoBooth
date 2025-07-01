import { useEffect, useState } from "react";
import api from "../../api/api";
import useApi from "../../hooks/useAPi";
import useAuth from "../../hooks/useAuth";
import Modal from "../../modal/Modal";
import LoginForm from "../auth/LoginForm";
import Post from "./components/Post";

export default function HomePage() {
  const [posts, setPosts] = useState([])
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(10)
  const [isShowModal, setIsShowModal] = useState(false)
  const { authInfo } = useAuth()
  const { api: axiosAPi } = useApi()
  console.log("isShowModal", isShowModal);
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
        const response = await api.get(`/posts`)
        if (response.status === 200) {
          setPosts(response.data)
        }
      } catch (error) {
        console.log("error-", error);
      }
    }

    fetchPosts()
  }, [])

  useEffect(() => {
    async function getPosts() {
      console.log("executing....");
      if (authInfo?.user._id) {
        try {
          const response = await axiosAPi.get(`/posts/?page=${page}&limit=${limit}`);
          if (response.status === 200) {
            setPosts(response?.data)
          }
        } catch (error) {
          console.log(error);
        }
      }


    }

    getPosts()
  }, [authInfo?.user._id, page, limit, axiosAPi])

  return (
    <div className="max-w-6xl mx-auto w-full py-10  ">
      <div>
        {
          posts.map(post => <Post post={post} key={post.id} />)
        }
      </div>
      {
        isShowModal && <Modal isShowClose={false} onClose={() => setIsShowModal(false)}>
          <LoginForm />
        </Modal>
      }
    </div>
  )
}
