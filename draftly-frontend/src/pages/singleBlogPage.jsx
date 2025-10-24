import { useEffect, useState } from "react";
import { useParams } from "react-router";
import blogs from "../data/blogs";
import { Bookmark, Heart } from "lucide-react";

const SingleBlogPage = () => 
{
    const {blogId} = useParams();
    const [singleBlog,setSingleBlog] = useState(null);
    const [isLoading,setIsLoading] = useState(true);
    const [isError,setIsError] = useState(true);

  useEffect(()=>
  {
    const fetchBlogs =()=>
    {
      setIsLoading(true);
      setTimeout(()=>
      {
        const blogFound = blogs.find((el)=> el._id == blogId)
        setSingleBlog(blogFound);
        setIsLoading(false);
      },500)
    }
    fetchBlogs();
  },[])
    
    if(isLoading) 
    {   
        return(
        <main>
            <section className="min-h-screen">
                <div className="container mx-auto px-2"></div>
                <LoadingComponent /> 
            </section>
        </main>
        )
    }

    const { author, category, content, excerpt, featuredImage, isPublished, likes, likesCount, profilePicture, readTime, tags, title } = singleBlog;
    
    return(
        <main>
            <section className="min-h-screen">
                <div className="container mx-auto px-2">
                    <div className="py-12">
                        <h1 className="text-xl md:text-3xl lg:text-4xl font-bold mb-4">{title}</h1>
                        <div className="p-4 rounded bg-blue-50 border border-blue-400 text-blue-800 mb-4">
                        <p>{excerpt}</p>
                        </div>
                        <div className="flex items-center gap-3 justify-between mb-4">
                            <div className="flex items-center gap-2">
                                <img className="size-8 rounded-full" src={profilePicture} />
                                <h4 className="text-lg font-semibold">{author}</h4>
                            </div>
                            <div className="flex items-center gap-1">
                                <button><Bookmark /></button>
                                <button><Heart /></button><p>{likesCount}</p>
                            </div>
                        </div>
                        <div dangerouslySetInnerHTML={{__html:content}} className="blog-content-container"/>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default SingleBlogPage;

const LoadingComponent = () =>
{
  return(
    <article role="status" className="p-4 rounded animate-pulse">
      <div role="status" className="max-w-sm animate-pulse">
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
      </div>
    </article>        
  )
}
