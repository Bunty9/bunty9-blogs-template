import BgImage from "@/assets/images/bg.jpg";
import { StaticImageData } from "next/image";

interface BlogPost {
    id: string;
    title: string;
    date: string;
    content: string;
    images: StaticImageData[];
    youtubeVideoId?: string;
}

export const vzBotPosts: BlogPost[] = [
    {
        id: "vz-bot-post-001",
        title: "Advancements in AI-Driven 3D Modeling and Virtual World Creation",
        date: "July 5, 2023",
        content: `
        <h2>StyleGAN-2: Refining the Architecture</h2>
        <p>In 2020, NVIDIA released StyleGAN-2, which addressed several artifacts present in the original StyleGAN, such as "blob" artifacts and water-like features. StyleGAN-2 redesigned the normalization, regularization, and progressive growing components, resulting in significantly improved image quality.</p>
        
        <p>Key improvements in StyleGAN-2 included:</p>
        <ul>
            <li>Redesigned normalization technique</li>
            <li>Path length regularization</li>
            <li>No progressive growing (replaced with a residual network design)</li>
        </ul>

        <h2>Impact and Applications</h2>
        <p>The evolution of GANs from the original architecture to StyleGAN-3 has enabled numerous applications:</p>
        <ul>
            <li>Photorealistic image generation</li>
            <li>Image-to-image translation</li>
            <li>Face editing and manipulation</li>
            <li>Virtual try-on systems</li>
            <li>Data augmentation for training other AI models</li>
        </ul>
        `,
        images: [BgImage],
        youtubeVideoId: "cDvBwePeebA",
    },
    {
        id: "vz-bot-post-002",
        title: "Advancements in AI-Driven 3D Modeling and Virtual World Creation",
        date: "July 5, 2023",
        content: `
        <h2>StyleGAN-2: Refining the Architecture</h2>
        <p>In 2020, NVIDIA released StyleGAN-2, which addressed several artifacts present in the original StyleGAN, such as "blob" artifacts and water-like features. StyleGAN-2 redesigned the normalization, regularization, and progressive growing components, resulting in significantly improved image quality.</p>
        
        <p>Key improvements in StyleGAN-2 included:</p>
        <ul>
            <li>Redesigned normalization technique</li>
            <li>Path length regularization</li>
            <li>No progressive growing (replaced with a residual network design)</li>
        </ul>

        <h2>Impact and Applications</h2>
        <p>The evolution of GANs from the original architecture to StyleGAN-3 has enabled numerous applications:</p>
        <ul>
            <li>Photorealistic image generation</li>
            <li>Image-to-image translation</li>
            <li>Face editing and manipulation</li>
            <li>Virtual try-on systems</li>
            <li>Data augmentation for training other AI models</li>
        </ul>
        `,
        images: [BgImage],
        youtubeVideoId: "cDvBwePeebA",
    },
    {
        id: "vz-bot-post-003",
        title: "Advancements in AI-Driven 3D Modeling and Virtual World Creation",
        date: "July 5, 2023",
        content: `
        <h2>StyleGAN-2: Refining the Architecture</h2>
        <p>In 2020, NVIDIA released StyleGAN-2, which addressed several artifacts present in the original StyleGAN, such as "blob" artifacts and water-like features. StyleGAN-2 redesigned the normalization, regularization, and progressive growing components, resulting in significantly improved image quality.</p>
        
        <p>Key improvements in StyleGAN-2 included:</p>
        <ul>
            <li>Redesigned normalization technique</li>
            <li>Path length regularization</li>
            <li>No progressive growing (replaced with a residual network design)</li>
        </ul>

        <h2>Impact and Applications</h2>
        <p>The evolution of GANs from the original architecture to StyleGAN-3 has enabled numerous applications:</p>
        <ul>
            <li>Photorealistic image generation</li>
            <li>Image-to-image translation</li>
            <li>Face editing and manipulation</li>
            <li>Virtual try-on systems</li>
            <li>Data augmentation for training other AI models</li>
        </ul>
        `,
        images: [BgImage],
        youtubeVideoId: "cDvBwePeebA",
    },
    {
        id: "vz-bot-post-004",
        title: "Advancements in AI-Driven 3D Modeling and Virtual World Creation",
        date: "July 5, 2023",
        content: `
        <h2>StyleGAN-2: Refining the Architecture</h2>
        <p>In 2020, NVIDIA released StyleGAN-2, which addressed several artifacts present in the original StyleGAN, such as "blob" artifacts and water-like features. StyleGAN-2 redesigned the normalization, regularization, and progressive growing components, resulting in significantly improved image quality.</p>
        
        <p>Key improvements in StyleGAN-2 included:</p>
        <ul>
            <li>Redesigned normalization technique</li>
            <li>Path length regularization</li>
            <li>No progressive growing (replaced with a residual network design)</li>
        </ul>

        <h2>Impact and Applications</h2>
        <p>The evolution of GANs from the original architecture to StyleGAN-3 has enabled numerous applications:</p>
        <ul>
            <li>Photorealistic image generation</li>
            <li>Image-to-image translation</li>
            <li>Face editing and manipulation</li>
            <li>Virtual try-on systems</li>
            <li>Data augmentation for training other AI models</li>
        </ul>
        `,
        images: [BgImage],
        youtubeVideoId: "cDvBwePeebA",
    },
];
