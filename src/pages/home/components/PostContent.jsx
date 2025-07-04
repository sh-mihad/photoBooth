import { getAvatar } from "../../../utils"

export default function PostContent({post}) {
    const {image,likesCount,likes} = post || {}
    return (
        <>
            <div className="relative">
                <a href="./post-details.html">
                    <img src={getAvatar(image)} alt="Post image"
                        className="w-full object-cover max-h-[1000px]" />
                </a>
            </div>

            <div className="flex justify-between p-3">
                <div className="flex space-x-4">
                    <button className="like-button">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-zinc-600" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                    </button>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-zinc-600" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                    </button>

                </div>
               
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-zinc-600" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                        </svg>
                    </button>
            </div>
            <div className="px-3">
                
                <div className="flex items-center">
                    <div className="h-6 flex -space-x-2">
                        {likes[0] && <img src={getAvatar(likes[0].avatar)} alt="User avatar" className="w-6 h-6 rounded-full" />}
                         {likes[1] && <img src={getAvatar(likes[1].avatar)} alt="User avatar" className="w-6 h-6 rounded-full" />}
                         {likes[2] && <img src={getAvatar(likes[2].avatar)} alt="User avatar" className="w-6 h-6 rounded-full" />}
                    </div>
                    <p className="text-sm ml-2"><span className="font-semibold">{likesCount} likes</span></p>
                </div>
            </div>
        </>
    )
}
