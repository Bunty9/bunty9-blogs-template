import localFont from "next/font/local";

export const fontSans = localFont({
    src: [
        {
            path: "../public/fonts/inter/Inter-Regular.woff2",
            weight: "400",
            style: "normal",
        },
        {
            path: "../public/fonts/inter/Inter-Bold.woff2",
            weight: "700",
            style: "normal",
        },
    ],
    variable: "--font-sans",
    display: "swap",
});

export const fontMono = localFont({
    src: [
        {
            path: "../public/fonts/fira/FiraCode-Regular.woff2",
            weight: "400",
            style: "normal",
        },
        {
            path: "../public/fonts/fira/FiraCode-Bold.woff2",
            weight: "700",
            style: "normal",
        },
    ],
    variable: "--font-mono",
    display: "swap",
});
