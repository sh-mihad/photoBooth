
export default function PostImagePreview() {
    return (
        <div class="w-full md:w-1/2 bg-gray-100 flex items-center justify-center relative">
            <img src="" alt="Upload preview" class="image-preview" />

            <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <button class="bg-black bg-opacity-75 text-white text-sm py-1 px-3 rounded-md">
                    Click photo to tag people
                </button>
            </div>
        </div>
    )
}
