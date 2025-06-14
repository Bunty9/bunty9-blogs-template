import { StaticImageData } from "next/image";
import BackgroundImage from "@/assets/images/bg.jpg";
import { aiBlogPosts } from "./ai-blog";

export interface BlogProps {
    id: string;
    title: string;
    description: string;
    category: string;
    date: string;
    slug: string;
    image: StaticImageData;
    posts: typeof aiBlogPosts;
}

export const blogs: BlogProps[] = [
    {
        id: "ai-blog",
        title: "Advancements in AI-Driven 3D Modeling and Virtual World Creation",
        description:
            "Explore how AI is revolutionizing 3D modeling and virtual world creation, enabling users to transform written prompts into immersive experiences.",
        category: "3D Modeling",
        date: "July 5, 2023",
        slug: "ai-blog",
        image: BackgroundImage,
        posts: aiBlogPosts,
    },
    {
        id: "ai-blog-2",
        title: "Advancements in AI-Driven 3D Modeling and Virtual World Creation",
        description:
            "Explore how AI is revolutionizing 3D modeling and virtual world creation, enabling users to transform written prompts into immersive experiences.",
        category: "3D Modeling",
        date: "July 5, 2023",
        slug: "ai-blog",
        image: BackgroundImage,
        posts: aiBlogPosts,
    },
    {
        id: "ai-blog-3",
        title: "Advancements in AI-Driven 3D Modeling and Virtual World Creation",
        description:
            "Explore how AI is revolutionizing 3D modeling and virtual world creation, enabling users to transform written prompts into immersive experiences.",
        category: "3D Modeling",
        date: "July 5, 2023",
        slug: "ai-blog",
        image: BackgroundImage,
        posts: aiBlogPosts,
    },
    {
        id: "ai-blog-4",
        title: "Advancements in AI-Driven 3D Modeling and Virtual World Creation",
        description:
            "Explore how AI is revolutionizing 3D modeling and virtual world creation, enabling users to transform written prompts into immersive experiences.",
        category: "3D Modeling",
        date: "July 5, 2023",
        slug: "ai-blog",
        image: BackgroundImage,
        posts: aiBlogPosts,
    },
    {
        id: "ai-blog-5",
        title: "Advancements in AI-Driven 3D Modeling and Virtual World Creation",
        description:
            "Explore how AI is revolutionizing 3D modeling and virtual world creation, enabling users to transform written prompts into immersive experiences.",
        category: "3D Modeling",
        date: "July 5, 2023",
        slug: "ai-blog",
        image: BackgroundImage,
        posts: aiBlogPosts,
    },
];
