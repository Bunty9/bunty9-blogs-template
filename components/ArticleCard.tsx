import { Card, CardBody, CardFooter, CardHeader } from "@heroui/react";
import { BrainCircuit, Clock } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface ArticleCardProps {
    title: string;
    description: string;
    category: string;
    date: string;
    slug: string;
    image: StaticImageData;
}

export function ArticleCard({
    title,
    description,
    category,
    date,
    slug,
    image,
}: ArticleCardProps) {
    // const router = useRouter();
    return (
        <Link
            href={`/blog/${slug}/`}
            className="block hover:shadow-lg transition-shadow"
        >
            <Card className="bg-gray-900 border-gray-800 overflow-hidden hover:border-purple-500/50 transition-colors max-w-lg">
                <div className="relative h-48">
                    <Image
                        src={image || "/placeholder.svg"}
                        alt={title}
                        fill
                        className="object-cover"
                    />
                </div>
                <CardHeader className="flex flex-col justify-start items-start p-4">
                    <div className={`text-fuchsia-600 flex gap-2 text-sm mb-2`}>
                        <BrainCircuit className="h-4 w-4" />
                        <span>{category}</span>
                    </div>
                    <h2 className="text-xl">{title}</h2>
                </CardHeader>
                <CardBody>
                    <p className="text-gray-400">{description}</p>
                </CardBody>
                <CardFooter className="flex justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{date}</span>
                    </div>
                    <p className="text-fuchsia-500 hover:text-fuchsia-400">
                        Read more →
                    </p>
                </CardFooter>
            </Card>
        </Link>
    );
}
