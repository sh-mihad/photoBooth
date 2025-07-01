import axios from "axios";
import { useState } from "react";

export default function useAxiosAuth (){
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(null)

     async function createPost (urlPath,formData,cb){
        setLoading(true)
        setError(null)
        try {
              const response = await axios.post(`${import.meta.env.VITE_SERVER_BASE_URL}${urlPath}`,formData)
              if(response.status === 200 || response.status === 201){
                setLoading(false)
                cb(response.data)
              }
        } catch (error) {
            setError(error)
        }finally{
            setLoading(false)
        }
    }

    return {loading,error,createPost}
}