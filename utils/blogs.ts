import { StaticImageData } from "next/image";
import { vzBotPosts } from "./vz-bot";
import BackgroundImage from "@/assets/images/bg.jpg";

export interface BlogProps {
    id: string;
    title: string;
    description: string;
    category: string;
    date: string;
    slug: string;
    image: StaticImageData;
    posts: typeof vzBotPosts;
}

export const blogs: BlogProps[] = [
    {
        id: "vz-bot",
        title: "Advancements in AI-Driven 3D Modeling and Virtual World Creation",
        description:
            "Explore how AI is revolutionizing 3D modeling and virtual world creation, enabling users to transform written prompts into immersive experiences.",
        category: "3D Modeling",
        date: "July 5, 2023",
        slug: "vz-bot",
        image: BackgroundImage,
        posts: vzBotPosts,
    },
    {
        id: "vz-bot-2",
        title: "Advancements in AI-Driven 3D Modeling and Virtual World Creation",
        description:
            "Explore how AI is revolutionizing 3D modeling and virtual world creation, enabling users to transform written prompts into immersive experiences.",
        category: "3D Modeling",
        date: "July 5, 2023",
        slug: "vz-bot",
        image: BackgroundImage,
        posts: vzBotPosts,
    },
    {
        id: "vz-bot-3",
        title: "Advancements in AI-Driven 3D Modeling and Virtual World Creation",
        description:
            "Explore how AI is revolutionizing 3D modeling and virtual world creation, enabling users to transform written prompts into immersive experiences.",
        category: "3D Modeling",
        date: "July 5, 2023",
        slug: "vz-bot",
        image: BackgroundImage,
        posts: vzBotPosts,
    },
    {
        id: "vz-bot-4",
        title: "Advancements in AI-Driven 3D Modeling and Virtual World Creation",
        description:
            "Explore how AI is revolutionizing 3D modeling and virtual world creation, enabling users to transform written prompts into immersive experiences.",
        category: "3D Modeling",
        date: "July 5, 2023",
        slug: "vz-bot",
        image: BackgroundImage,
        posts: vzBotPosts,
    },
    {
        id: "vz-bot-5",
        title: "Advancements in AI-Driven 3D Modeling and Virtual World Creation",
        description:
            "Explore how AI is revolutionizing 3D modeling and virtual world creation, enabling users to transform written prompts into immersive experiences.",
        category: "3D Modeling",
        date: "July 5, 2023",
        slug: "vz-bot",
        image: BackgroundImage,
        posts: vzBotPosts,
    },
];
