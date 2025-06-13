import { Snippet, Link, Code } from "@heroui/react";
import { button as buttonStyles } from "@heroui/react";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import { ArticleCard } from "@/components/ArticleCard";
import BackgroundImage from "@/assets/images/bg.jpg";

export default function IndexPage() {
    return (
        <DefaultLayout>
            <section className="flex flex-col items-center justify-center gap-4">
                <div className="inline-block max-w-xl text-center justify-center">
                    <span className={title()}>Super&nbsp;</span>
                    <span className={title({ color: "violet" })}>
                        Technical&nbsp;
                    </span>
                    <br />
                    <span className={title()}>
                        Blogs, brought to you by my personal Software, Hardware
                        and Design Experience.
                    </span>
                    <div className={subtitle({ class: "mt-4" })}>
                        I am a Noob myself, please cite, collaborate, endorse
                        and criticize my work responsibly.
                    </div>
                </div>

                <div className="flex gap-3">
                    <Link
                        isExternal
                        className={buttonStyles({
                            variant: "bordered",
                            radius: "full",
                        })}
                        href={siteConfig.links.github}
                    >
                        <GithubIcon size={20} />
                        GitHub
                    </Link>
                </div>

                <div>
                    <ArticleCard
                        title="Advancements in AI-Driven 3D Modeling and Virtual World Creation"
                        description="Explore how AI is revolutionizing 3D modeling and virtual world creation, enabling users to transform written prompts into immersive experiences."
                        category="3D Modeling"
                        date="July 5, 2023"
                        slug="vz-bot"
                        image={BackgroundImage}
                    />
                </div>
            </section>
        </DefaultLayout>
    );
}
