import PostCaption from './PostCaption'
import PostContent from './PostContent'
import PostFooter from './PostFooter'
import PostHeader from './PostHeader'

export default function Post({post}) {
    return (
        <article className="border-b pb-4 mb-4 max-w-[560px] mx-auto border border-gray-300 rounded-md">
            <PostHeader post={post} />
            <PostContent post={post} />
            <PostCaption post={post} />
            <PostFooter post={post} />
        </article>
    )
}
