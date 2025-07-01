import userImg from "../../../assets/user-1.png"

export default function EditProfileUserInfo() {
    return (
        <div class="bg-white rounded-lg p-6 mb-6">
            <div class="flex items-center">
                <div class="w-16 h-16 rounded-full overflow-hidden mr-4">
                    <img src={userImg} alt="Saad Hasan" class="w-full h-full object-cover" />
                </div>
                <div>
                    <h2 class="font-semibold text-base">Saad Hasan</h2>
                    <p class="text-gray-500">@saadh393</p>
                </div>
                <button class="ml-auto bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-600 transition">
                    Change photo
                </button>
            </div>
        </div>
    )
}
