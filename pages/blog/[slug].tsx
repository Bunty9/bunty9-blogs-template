import { blogs } from "@/utils/blogs";
import BlogPostCard from "@/components/BlogPostCard";
import Image from "next/image";
const author = "Bunty9";
import avatar from "@/public/assets/images/logo.png";
import DefaultLayout from "@/layouts/default";
import PostSidebar from "@/components/PostSidebar";

export default function BlogPage() {
    const blog = blogs.find((blog) => blog.id === "vz-bot");

    return (
        <DefaultLayout>
            <div className="w-full max-w-7xl mx-auto px-4 flex flex-col">
                {/* Blog Header */}
                <div className="flex flex-row items-start justify-start my-6">
                    <Image
                        src={avatar.src}
                        alt={author}
                        width={40}
                        height={40}
                        className="rounded-full mr-4"
                    />
                    <div>
                        <h1 className="text-lg">{author}</h1>
                        <h1 className="text-3xl font-bold">{blog?.title}</h1>
                        <p className="text-gray-500">{blog?.description}</p>
                        <p className="text-sm text-gray-400">
                            Category: {blog?.category} | Date: {blog?.date}
                        </p>
                    </div>
                </div>

                {/* Main Content & Sidebar */}
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-1 flex flex-col gap-6">
                        {blog?.posts.map((post) => (
                            <div id={post.id} key={post.id}>
                                <BlogPostCard
                                    title={post.title}
                                    date={post.date}
                                    content={post.content}
                                    images={post.images}
                                    youtubeVideoId={post.youtubeVideoId}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Sidebar */}
                    <div className="hidden md:block w-64 sticky top-24 h-fit">
                        {blog && <PostSidebar blog={blog} />}
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
}
