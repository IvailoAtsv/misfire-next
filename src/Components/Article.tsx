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
        <article className={`w-full mx-auto px-4 mb-4 md:max-h-[550px] mt-[30px] flex lg:gap-4 flex-col gap-2 justify-center items-center`}>
            <h2 className="text-3xl text-center flex gap-2 items-center relative mb-2 font-bold text-textMain">
                {title}
            </h2>
            <div className={`w-full ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} flex-col flex justify-center items-start gap-4`}>
                <img src={image} alt="Tuning" className="object-cover flex-1 w-full h-[500px] lg:w-[50%] rounded-lg" />
                <p className="text-md flex-1 text-justify hyphens-auto text-textMain opacity-85">
                    {content}
                </p>
            </div>
        </article>
    </Animation>
    );
};

export default Article