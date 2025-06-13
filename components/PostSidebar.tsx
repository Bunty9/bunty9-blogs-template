"use client";

import { useEffect, useState } from "react";
import { BlogProps } from "@/utils/blogs";

interface PostSidebarProps {
    blog: BlogProps;
}

export default function PostSidebar({ blog }: PostSidebarProps) {
    const [activeId, setActiveId] = useState<string | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            {
                rootMargin: "-20% 0px -70% 0px",
                threshold: 0.1,
            }
        );

        blog.posts.forEach((post) => {
            const el = document.getElementById(post.id);
            if (el) observer.observe(el);
        });

        return () => {
            blog.posts.forEach((post) => {
                const el = document.getElementById(post.id);
                if (el) observer.unobserve(el);
            });
        };
    }, [blog.posts]);

    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <div className="border-l pl-4 flex flex-col gap-4">
            <h2 className="text-lg font-semibold mb-2">Posts</h2>
            {blog.posts.map((post) => (
                <button
                    key={post.id}
                    onClick={() => scrollTo(post.id)}
                    className={`text-left text-sm cursor-pointer transition-all ${
                        activeId === post.id
                            ? "text-blue-600 font-semibold"
                            : "text-gray-500 hover:text-gray-700"
                    }`}
                >
                    {post.title}
                </button>
            ))}
        </div>
    );
}
