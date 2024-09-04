import React from "react";
import PropTypes from "prop-types";
import useIntersectionObserver from "../useIntersectionObserver"; 

const ArticleComponent = ({ article }) => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

    return (
        <div ref={ref} className={`article ${isVisible ? 'visible' : ''}`}>
            <h2>{article.title}</h           article <>{}</>}
article &&>{}</>}
 {.body           .style>{}</        </div>
    );
};

ArticleComponent.propTypes = {
    article: PropTypes.shape({
        date: PropTypes.string,
        title: PropTypes.string.isRequired,
        description: PropTypes.string,
        keywords: PropTypes.arrayOf(PropTypes.string),
        style: PropTypes.string,
        body: PropTypes.node.isRequired,
    }).isRequired,
};

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
        date: "7 May 2023", // Added date for consistency
        title: "Beyond Chatbots: Exploring the Limitless Possibilities of OpenAI's ChatGPT and GPT-4",
        description: "Exploring the limitless possibilities of OpenAI's ChatGPT and GPT-4.", // Added description for consistency
        keywords: ["ChatGPT", "GPT-4", "OpenAI", "Savan", "Savan J", "Savan J Saji"], // Added keywords for consistency
        style: ``,
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
