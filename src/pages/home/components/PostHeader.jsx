import { getAvatar, getTimeDuration } from "../../../utils";

export default function PostHeader({post}) {
    const {user,updatedAt} = post || {};
    return (
        <div className="flex items-center p-3">
            <a href="./profile.html"
                className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center text-white text-xs">
                <img src={getAvatar(user?.avatar)} className="w-full h-full object-cover" />
            </a>
            <div className="ml-2">
                <a href="./profile.html" className="font-semibold text-sm">{user.name}</a>
                <span className="text-gray-500 text-xs"> • {getTimeDuration(updatedAt)}</span>
            </div>

        </div>
    )
}
