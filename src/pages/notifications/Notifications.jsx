
import userImg from "../../assets/user-1.png"
export default function Notifications() {
  return (
     <div className="notifications-container">
        
        <header className="sticky top-0 bg-white  z-10">
            <div className="flex items-center justify-between p-4">               
                <h1 className="text-lg font-semibold">Notifications</h1>
            </div>
        </header>

        
        <div className="notifications-list">
            
            <div className="px-4 py-3 border-b border-gray-100">
                <h2 className="text-base font-semibold">Today</h2>
            </div>

            
            <div className="notification-item flex items-center p-4 border-b border-gray-100">
                <div className="relative">
                    <div className="w-11 h-11 rounded-full overflow-hidden mr-3">
                        <img src={userImg} alt="User avatar" className="w-full h-full object-cover" />
                    </div>
                    
                </div>
                <div className="flex-1 mr-3">
                    <p className="text-sm">
                        <span className="font-semibold">john_doe</span> liked your photo.
                    </p>
                    <p className="text-xs text-gray-500 mt-1">2m</p>
                </div>
                <div className="w-11 h-11 rounded overflow-hidden">
                    <img src={userImg} alt="Post thumbnail" className="post-thumbnail" />
                </div>
            </div>

            
            <div className="notification-item flex items-center p-4 border-b border-gray-100">
                <div className="relative">
                    <div className="w-11 h-11 rounded-full overflow-hidden mr-3">
                        <img src={userImg} alt="User avatar" className="w-full h-full object-cover" />
                    </div>
                    
                </div>
                <div className="flex-1 mr-3">
                    <p className="text-sm">
                        <span className="font-semibold">sarah_wilson</span> commented: "Amazing shot! 🔥"
                    </p>
                    <p className="text-xs text-gray-500 mt-1">5m</p>
                </div>
                <div className="w-11 h-11 rounded overflow-hidden">
                    <img src={userImg} alt="Post thumbnail" className="post-thumbnail" />
                </div>
            </div>

            

            
            <div className="notification-item flex items-center p-4 border-b border-gray-100">
                <div className="relative mr-3">
                    <div className="w-11 h-11 rounded-full overflow-hidden">
                        <img src={userImg} alt="User avatar" className="w-full h-full object-cover" />
                    </div>
                </div>
                <div className="flex-1 mr-3">
                    <p className="text-sm">
                        <span className="font-semibold">emma_jones</span>  liked your photo.
                    </p>
                    <p className="text-xs text-gray-500 mt-1">1h</p>
                </div>
                <div className="w-11 h-11 rounded overflow-hidden">
                    <img src={userImg} alt="Post thumbnail" className="post-thumbnail" />
                </div>
            </div>

            
            <div className="px-4 py-3 border-b border-gray-100">
                <h2 className="text-base font-semibold">Yesterday</h2>
            </div>

            
            <div className="notification-item flex items-center p-4 border-b border-gray-100">
                <div className="w-11 h-11 rounded-full overflow-hidden mr-3">
                    <img src={userImg} alt="User avatar" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 mr-3">
                    <p className="text-sm">
                        <span className="font-semibold">lisa_travel</span> liked your story.
                    </p>
                    <p className="text-xs text-gray-500 mt-1">1d</p>
                </div>
                <div className="w-11 h-11 rounded overflow-hidden border-2 border-gray-300">
                    <img src={userImg} alt="Story thumbnail" className="w-full h-full object-cover" />
                </div>
            </div>

           

            
            <div className="notification-item flex items-center p-4 border-b border-gray-100">
                <div className="w-11 h-11 rounded-full overflow-hidden mr-3">
                    <img src={userImg} alt="User avatar" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 mr-3">
                    <p className="text-sm">
                        <span className="font-semibold">anna_fitness</span> replied to your comment: "Thanks for the tip!"
                    </p>
                    <p className="text-xs text-gray-500 mt-1">1d</p>
                </div>
                <div className="w-11 h-11 rounded overflow-hidden">
                    <img src={userImg} alt="Post thumbnail" className="post-thumbnail" />
                </div>
            </div>

            
            <div className="px-4 py-3 border-b border-gray-100">
                <h2 className="text-base font-semibold">This Week</h2>
            </div>

            
            <div className="notification-item flex items-center p-4 border-b border-gray-100">
                <div className="relative mr-3">
                    <div className="w-11 h-11 rounded-full overflow-hidden">
                        <img src={userImg} alt="User avatar" className="w-full h-full object-cover" />
                    </div>
                    
                </div>
                <div className="flex-1 mr-3">
                    <p className="text-sm">
                        <span className="font-semibold">tom_artist</span> and <span className="font-semibold">3 others</span> commented on your photo.
                    </p>
                    <p className="text-xs text-gray-500 mt-1">3d</p>
                </div>
                <div className="w-11 h-11 rounded overflow-hidden">
                    <img src={userImg} alt="Post thumbnail" className="post-thumbnail" />
                </div>
            </div>

           

            
            <div className="notification-item flex items-center p-4 border-b border-gray-100">
                <div className="w-11 h-11 rounded-full overflow-hidden mr-3">
                    <img src={userImg} alt="User avatar" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 mr-3">
                    <p className="text-sm">
                        <span className="font-semibold">maria_design</span> liked your comment: "Love this aesthetic!"
                    </p>
                    <p className="text-xs text-gray-500 mt-1">6d</p>
                </div>
                <div className="w-11 h-11 rounded overflow-hidden">
                    <img src={userImg} alt="Post thumbnail" className="post-thumbnail" />
                </div>
            </div>

            
            <div className="h-20"></div>
        </div>
    </div>
  )
}
