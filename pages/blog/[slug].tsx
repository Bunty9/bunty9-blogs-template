import { blogs } from "@/utils/blogs";
import BlogPostCard from "@/components/BlogPostCard";
import Image from "next/image";
const author = "Bunty9";
import avatar from "@/public/assets/images/logo.png";
import DefaultLayout from "@/layouts/default";
import PostSidebar from "@/components/PostSidebar";
import { ArticleCard } from "@/components/ArticleCard";
import { useRef } from "react";

export default function BlogPage() {
    const blog = blogs.find((blog) => blog.id === "ai-blog");

    // Create a ref map for post ids
    const postRefs = useRef<Record<string, HTMLDivElement | null>>({});

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
                            <div
                                id={post.id}
                                key={post.id}
                                ref={(el) => {
                                    postRefs.current[post.id] = el;
                                }}
                            >
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
                    <div className="hidden md:block w-72 sticky top-24 h-fit">
                        {blog && (
                            <PostSidebar blog={blog} postRefs={postRefs} />
                        )}
                    </div>
                </div>
                {/* Blog Footer */}
                <div className="flex flex-col py-4 gap-4">
                    <h1 className="text-lg font-bold">Related Posts</h1>
                    <div className="flex flex-row flex-wrap gap-4 justify-start items-center">
                        {blogs &&
                            blogs
                                .filter((b) => b.id !== blog?.id)
                                .slice(0, 2)
                                .map((b) => (
                                    <ArticleCard
                                        key={b.id}
                                        title={b.title}
                                        description={b.description}
                                        category={b.category}
                                        date={b.date}
                                        slug={b.slug}
                                        image={b.image}
                                    />
                                ))}
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
}
