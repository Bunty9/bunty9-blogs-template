export type SiteConfig = typeof siteConfig;

export const siteConfig = {
    name: "Bunty9 Blogs",
    description: "Blogging my technical experiences.",
    navItems: [
        {
            label: "Blog",
            href: "/blog",
        },
    ],
    navMenuItems: [
        {
            label: "Blogs",
            href: "/blog",
        },
        {
            label: "Logout",
            href: "/logout",
        },
    ],
    links: {
        github: "https://github.com/Bunty9",
    },
};
