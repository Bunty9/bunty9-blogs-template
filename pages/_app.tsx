import type { AppProps } from "next/app";

import { HeroUIProvider } from "@heroui/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useRouter } from "next/router";

import { fontSans, fontMono } from "@/config/fonts";
import "@/styles/globals.css";
import FloatingPixels from "@/components/FloatingPixels";
import SoundEffect from "@/components/SoundEffect";

export default function App({ Component, pageProps }: AppProps) {
    const router = useRouter();

    return (
        <HeroUIProvider navigate={router.push}>
            <NextThemesProvider>
                <FloatingPixels />
                <SoundEffect />
                <Component {...pageProps} />
            </NextThemesProvider>
        </HeroUIProvider>
    );
}

export const fonts = {
    sans: fontSans.style.fontFamily,
    mono: fontMono.style.fontFamily,
};
