import { Link } from "@heroui/react";
import { Head } from "./head";
import { Navbar } from "@/components/navbar";
import FloatingPixels from "@/components/FloatingPixels";
import SoundEffect from "@/components/SoundEffect";

export default function DefaultLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col h-screen">
            <Head />
            <Navbar />

            <main className="mx-auto w-full px-2 lg:px-4 flex-grow pt-8">
                {children}
            </main>
            <footer className="w-full flex items-center justify-center py-3">
                <Link
                    isExternal
                    className="flex items-center gap-1 text-current"
                    href="https://www.github.com/Bunty9"
                    title="Bunty9 github"
                >
                    <span className="text-xs text-default-600">
                        Made with ❤️ by
                    </span>
                    <p className="text-xs text-primary">Bunty9</p>
                </Link>
            </footer>
        </div>
    );
}
