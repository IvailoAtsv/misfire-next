'use client'
import Animation from "./Animation";

interface ArticleProps {
    title: string;
    content: string;
    image: string;
    reverse?: boolean;
}

const Article: React.FC<ArticleProps> = ({ title, content, image, reverse }) => {
    return (
        <Animation opacity={0.4}>
        <article className={`w-full mx-auto px-4 mb-4 lg:max-h-[550px] mt-[30px] flex-col flex lg:gap-4  gap-2 justify-center items-center`}>
            <h2 className="text-3xl text-center flex gap-2 items-center relative mb-2 font-bold text-textMain">
                {title}
            </h2>
            <div className={`w-full ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} lg:h-[600px] flex-col flex justify-center items-start gap-4`}>
                <img src={image} alt="Tuning" className="object-cover flex-1 w-full max-h-[400px] md:h-[80%] lg:w-[50%] rounded-lg" />
                <p className="text-md flex-1 text-justify hyphens-auto text-textMain opacity-85">
                    {content}
                </p>
            </div>
        </article>
    </Animation>
    );
};

export default Article