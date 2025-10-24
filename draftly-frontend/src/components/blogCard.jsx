import { Bookmark, Heart } from "lucide-react";
import { useNavigate } from "react-router";

const BlogCard = ({blogDetails}) => {
  const {_id,title,excerpt,author,tags,category,likesCount,readTime,profilePicture} = blogDetails;
  
  const navigate = useNavigate();

  return (
    <article className="p-4 border border-neutral-200 rounded relative hover:shadow-xl transition-shadow cursor-pointer" onClick={()=> navigate(`/blogs/${_id}`)}>
      <span className="absolute top-2 right-2 bg-purple-50 border border-purple-500 text-purple-500 px-2 py-0.5 rounded">
        {category}
      </span>
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-lg text-neutral-700 mb-4">{excerpt}</p>

      <div className="flex items-center gap-3 justify-between">
        <div className="flex items-center gap-2">
          <img className="size-8 rounded-full" src={profilePicture} />
          <h4 className="text-lg font-semibold">{author}</h4>
        </div>
        <div className="flex items-center gap-1">
          <button><Bookmark /></button>
          <button><Heart /></button><p>{likesCount}</p>
        </div>
      </div>
    </article>
  )
}

export default BlogCard;
