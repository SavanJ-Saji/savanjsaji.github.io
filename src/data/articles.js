import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import useIntersectionObserver from "../useIntersectionObserver"; 
import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import AllProjects from "../components/projects/allProjects";
import INFO from "../data/user";
import SEO from "../data/seo";

const ArticleComponent = ({ article }) => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

    return (
        <div ref={ref} className={`article ${isVisible ? 'visible' : ''}`}>
            <h2>{article.title}</h2>
            <p>{article.date}</p>
            <p>{article.description}</p>
            {article.body}
            <style>{article.style}</style>
        </div>
    );
}

const articles = [
    {
        date: "7 May 2023",
        title: "The Benefits of Cloud Computing",
        description: "Cloud computing offers a range of benefits, including cost savings and increased flexibility. Find out why more businesses are turning to the cloud.",
        keywords: ["The Benefits of Cloud Computing", "Savan", "Savan J", "Savan J Saji"],
        style: `
            .article-content {
                display: flex;
                flex-direction: column;
                align-items: center;
            }

            .randImage {
                align-self: center;
                outline: 2px solid red;
            }
        `,
        body: (
            <React.Fragment>
                <div className="article-content">
                    <div className="paragraph">Content of article 1</div>
                    <img src="https://picsum.photos/200/300" alt="random" className="randImage" />
                </div>
            </React.Fragment>
        )
    },
    {
        title: "Beyond Chatbots: Exploring the Limitless Possibilities of OpenAI's ChatGPT and GPT-4",
        author: "Savan J Saji",
        link: "https://brucewaynebatman77.wixsite.com/savan-j-saji/post/beyond-chatbots-exploring-the-limitless-possibilities-of-openai-s-chatgpt-and-gpt-4",
        body: (
            <React.Fragment>
                <h1>Beyond Chatbots: Exploring the Limitless Possibilities of OpenAI's ChatGPT and GPT-4</h1>
                <p>Read the full article <a href="https://brucewaynebatman77.wixsite.com/savan-j-saji/post/beyond-chatbots-exploring-the-limitless-possibilities-of-openai-s-chatgpt-and-gpt-4">here</a></p>
            </React.Fragment>
        ),
    },
    {
        date: "7 May 2023",
        title: "Artificial Intelligence in Healthcare",
        description: "AI is transforming the healthcare industry, from improving patient outcomes to streamlining operations. Discover the latest applications of this game-changing technology.",
        keywords: ["Artificial Intelligence in Healthcare", "Savan", "Savan J", "Savan J Saji"],
        style: ``,
        body: (
            <React.Fragment>
                <h1>Content of article 2</h1>
            </React.Fragment>
        )
    }
];

export { ArticleComponent, articles };
export default articles;
