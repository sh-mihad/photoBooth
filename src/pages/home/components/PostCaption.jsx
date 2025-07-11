
export default function PostCaption({post}) {
    const {caption} = post || {}
    return (
        <div className="px-3 mt-2">
            <p className="text-sm">
                <span className="caption-text">{caption}</span>
                <span className="caption-text"> #AD</span>
                <span className="text-gray-500">... </span>
                <button className="text-gray-500 text-sm">more</button>
            </p>
        </div>
    )
}
