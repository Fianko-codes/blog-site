import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const About = () => {
    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Header />

            <main className="flex-1">
                <article className="container mx-auto px-6 py-12 max-w-3xl">
                    {/* Back link */}
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 font-sans"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back to essays
                    </Link>

                    <div className="space-y-8">
                        <header>
                            <h1 className="text-4xl md:text-5xl font-serif font-medium text-foreground mb-6 leading-tight">
                                About This Blog
                            </h1>
                        </header>

                        <div className="prose prose-lg max-w-none space-y-6">
                            <p className="text-foreground font-serif text-lg leading-relaxed">
                                Welcome to <strong>Quiet Prose</strong>—a space for longform explorations of ideas worth sitting with.
                            </p>

                            <p className="text-foreground font-serif text-lg leading-relaxed">
                                In an age of infinite scroll and fractured attention, this blog is an intentional counterpoint.
                                Here, we slow down. We think deeply. We let ideas unfold at their own pace, without rushing
                                toward premature conclusions or simplified takeaways.
                            </p>

                            <p className="text-foreground font-serif text-lg leading-relaxed">
                                The essays here explore philosophy, technology, mindfulness, creativity, and the human experience.
                                They're written for readers who value depth over speed, contemplation over consumption,
                                and quality over quantity.
                            </p>

                            <h2 className="text-2xl font-serif font-medium text-foreground mt-12 mb-4">
                                Philosophy
                            </h2>

                            <p className="text-foreground font-serif text-lg leading-relaxed">
                                Writing here follows a few principles:
                            </p>

                            <ul className="list-disc list-inside space-y-2 text-foreground font-serif text-lg leading-relaxed ml-4">
                                <li><strong>Long over short</strong> — Ideas need space to develop properly</li>
                                <li><strong>Nuance over certainty</strong> — Complexity is preserved, not eliminated</li>
                                <li><strong>Thoughtfulness over timeliness</strong> — Quality matters more than speed</li>
                                <li><strong>Exploration over answers</strong> — Questions are often more valuable than conclusions</li>
                            </ul>

                            <h2 className="text-2xl font-serif font-medium text-foreground mt-12 mb-4">
                                Stay Updated
                            </h2>

                            <p className="text-foreground font-serif text-lg leading-relaxed">
                                New essays are published irregularly—when there's something worth saying, not on a schedule.
                            </p>

                            <p className="text-foreground font-serif text-lg leading-relaxed">
                                To get notified when new posts are published, you can{" "}
                                <a href="/rss.xml" className="text-primary hover:underline">
                                    subscribe via RSS
                                </a>
                                . If you use a feed reader like Feedly, Inoreader, or NetNewsWire, just add this site's RSS feed.
                            </p>

                            <h2 className="text-2xl font-serif font-medium text-foreground mt-12 mb-4">
                                About the Author
                            </h2>

                            <p className="text-foreground font-serif text-lg leading-relaxed">
                                Written by <strong>Anubhav Prasai</strong>. You can find more of my work at{" "}
                                <a
                                    href="https://anubhavprasai.com.np"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary hover:underline"
                                >
                                    anubhavprasai.com.np
                                </a>
                                .
                            </p>
                        </div>
                    </div>
                </article>
            </main>

            <Footer />
        </div>
    );
};

export default About;
