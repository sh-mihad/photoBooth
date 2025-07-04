import PostBody from "./PostBody";
import PostImagePreview from "./PostImagePreview";

export default function CreateEditPost() {
    return (
        <>
            <header class="h-14 border-b border-gray-300 flex items-center justify-between px-4">
                <button class="p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                </button>
                <h1 class="text-base font-semibold">Create new post</h1>
                <button class="text-blue-500 font-semibold">Post</button>
            </header>

            <div class="upload-container flex flex-col md:flex-row">
                <PostImagePreview/>
                <PostBody/>
            </div>

        </>
    )
}
