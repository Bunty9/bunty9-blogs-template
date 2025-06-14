//render blog post of a particular blog
//title, date, content(richtext),avatar, author, images carousel, youtube video player
// header: avatar, author, date
// body: title, content, images carousel, youtube video player

import Image, { StaticImageData } from "next/image";
import { ImageCarousel } from "./ImageCarousel";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/react";
const author = "Bunty9";
import avatar from "@/public/assets/images/logo.png";

interface BlogPostCardProps {
    title: string;
    date: string;
    content: string;
    images: StaticImageData[];
    youtubeVideoId?: string;
}

export default function BlogPostCard({
    title,
    date,
    content,
    images,
    youtubeVideoId,
}: BlogPostCardProps) {
    const classnames = {
        base: "w-full rounded-2xl shadow-lg p-6 max-w-7xl",
        header: "flex flex-row justify-start items-center py-1 my-0 ",
        body: "w-full max-w-none prose prose-invert dark:prose-invert text-foreground py-2 my-0 ",
        footer: "flex flex-col items-center gap-2 py-1 my-0",
    };

    return (
        <Card classNames={classnames}>
            <CardHeader>
                <Image
                    src={avatar.src}
                    alt={author}
                    width={40}
                    height={40}
                    className="rounded-full mr-4"
                />
                <div className="flex flex-col justify-start items-start gap-2">
                    <h1 className="text-xl font-bold ">{title}</h1>
                    <p className="text-xs">
                        {author} - {date}
                    </p>
                </div>
            </CardHeader>
            <CardBody>
                <div dangerouslySetInnerHTML={{ __html: content }} />
            </CardBody>
            <CardFooter>
                <ImageCarousel images={images} />

                {youtubeVideoId && (
                    <div className="w-full aspect-video">
                        <iframe
                            className="w-full h-full rounded-2xl"
                            src={`https://www.youtube.com/embed/${youtubeVideoId}`}
                            title="YouTube video player"
                            allowFullScreen
                        ></iframe>
                    </div>
                )}
            </CardFooter>
        </Card>
    );
}
