"use client";

import { useEffect, useState, useRef } from "react";
import { BlogProps } from "@/utils/blogs";

interface PostSidebarProps {
    blog: BlogProps;
    postRefs: React.MutableRefObject<Record<string, HTMLDivElement | null>>;
}

export default function PostSidebar({ blog, postRefs }: PostSidebarProps) {
    const [activeId, setActiveId] = useState<string | null>(null);
    const isClicking = useRef(false);

    // On scroll: determine which post is most visible in viewport
    useEffect(() => {
        function onScroll() {
            if (isClicking.current) return; // Ignore scroll during programmatic scroll

            const offsets = blog.posts.map((post) => {
                const el = postRefs.current[post.id];
                if (!el) return { id: post.id, distance: Infinity };
                const rect = el.getBoundingClientRect();
                // Use absolute distance from top of viewport (can adjust for better UX)
                const distance = Math.abs(rect.top - 100); // 100px from top
                // Only consider if at least a part is visible
                const isVisible =
                    rect.top < window.innerHeight && rect.bottom > 0;
                return {
                    id: post.id,
                    distance: isVisible ? distance : Infinity,
                };
            });

            // Find the closest post in view
            const visible = offsets.filter((o) => o.distance < Infinity);
            if (visible.length === 0) return;
            const closest = visible.reduce((prev, curr) =>
                prev.distance < curr.distance ? prev : curr
            );
            setActiveId(closest.id);
        }

        window.addEventListener("scroll", onScroll, { passive: true });
        // Initial check
        setTimeout(onScroll, 100);

        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, [blog.posts, postRefs]);

    // On click: scroll to section and highlight instantly
    const scrollTo = (id: string) => {
        const el = postRefs.current[id];
        if (el) {
            isClicking.current = true;
            setActiveId(id);
            el.scrollIntoView({ behavior: "smooth", block: "start" });
            // After scroll, re-enable scroll tracking
            setTimeout(() => {
                isClicking.current = false;
            }, 600);
        }
    };

    return (
        <div className=" pl-4 flex flex-col gap-4">
            <h2 className="text-lg font-medium mb-4">On this page</h2>
            <div className="flex flex-col gap-2 border-l pl-4">
                {blog.posts.map((post) => (
                    <button
                        key={post.id}
                        onClick={() => scrollTo(post.id)}
                        className={`text-left text-sm transition-all duration-250 ${
                            activeId === post.id
                                ? " text-foreground/90 font-medium pl-2"
                                : "text-foreground/50 hover:text-foreground/80 hover:font-semibold"
                        }`}
                    >
                        {post.title}
                    </button>
                ))}
            </div>
        </div>
    );
}
