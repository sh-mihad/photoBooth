import userImg from "../../../assets/user-1.png"

export default function ProfileUserInfo() {
    return (
        <div class="flex flex-col md:flex-row mb-10">

            <div class="flex justify-items-end md:justify-start md:w-1/3 mb-6 md:mb-0 relative">
                <div class="w-24 h-24 md:w-36 md:h-36 rounded-full overflow-hidden border border-gray-300 mx-auto">
                    <img src={userImg} alt="Profile picture" class="w-full h-full object-cover" />
                </div>
            </div>


            <div class="md:w-2/3">

                <div class="flex flex-col sm:flex-row items-center sm:items-start mb-4">
                    <h2 class="text-xl font-normal mb-4 sm:mb-0 sm:mr-4">Saad Hasan</h2>
                </div>
                <div class="flex space-x-2">
                    <a href="./edit-profile.html" class="bg-gray-100 px-4 py-1.5 rounded-md text-sm font-medium">Edit profile</a>
                </div>


                <div class="flex justify-center sm:justify-start space-x-8 mb-4 mt-2">
                    <div>
                        <span class="font-semibold">53</span> posts
                    </div>
                </div>


                <div class="text-sm">
                    <p>Pain Demands to be Felt</p>
                    <p class="text-blue-900">
                        <a href="https://saadh393.github.io" target="_blank" class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                            </svg>
                            saadh393.github.io
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}
