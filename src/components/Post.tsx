interface Props {
  title: string
  description: string
  date: string
  minutesRead: string
  path: string
}

import { formatDate } from '../utils'

const Post = ({ post }: any) => {
  const { title, description, pubDate, minutesRead } = post as Props
  return (
    <div className="post border-gray-400 border-b mb-12">
      <h2 className="text-3xl font-bold">
        <a href={`/${post.slug}`} className="text-copy-primary">
          {title}
        </a>
      </h2>

      <div className="text-copy-secondary mb-4">
        <time datetime={new Date(pubDate).toISOString()}>
          <time>{formatDate(pubDate)}</time>

          <span> &middot; </span>
          <span>{minutesRead}</span>
        </time>
      </div>

      <div className="text-lg mb-4">{description}</div>

      <div className="mb-8">
        <a href={`/${post.slug}`} className="font-bold uppercase">
          Read More
        </a>
      </div>
    </div>
  )
}

export default Post
