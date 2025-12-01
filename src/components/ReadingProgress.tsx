import { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";

const ReadingProgress = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const updateProgress = () => {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight - windowHeight;
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const scrollProgress = (scrollTop / documentHeight) * 100;
            setProgress(Math.min(Math.max(scrollProgress, 0), 100));
        };

        window.addEventListener('scroll', updateProgress);
        updateProgress(); // Initial calculation

        return () => window.removeEventListener('scroll', updateProgress);
    }, []);

    return (
        <div className="fixed top-0 left-0 right-0 z-50">
            <Progress value={progress} className="h-1 rounded-none" />
        </div>
    );
};

export default ReadingProgress;
