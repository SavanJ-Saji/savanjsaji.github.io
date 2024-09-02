import React from "react";
import Article from '../components/articles/article';

const Articles = () => {
  return (
	<div className="homepage-articles">
	  {Array.isArray(myArticles) && myArticles.map((article, index) => (
		<div className="homepage-article" key={index}>
		  <Article
			date={article.date}
			title={article.title}
			description={article.description}
			link={`/article/${index + 1}`}
		  />
		</div>
	  ))}
	</div>
  );
};

function article_1() {
  return {
	date: "7 May 2023",
	title: "The Benefits of Cloud Computing",
	description:
	  "Cloud computing offers a range of benefits, including cost savings and increased flexibility. Find out why more businesses are turning to the cloud.",
	keywords: [
	  "The Benefits of Cloud Computing",
	  "Savan",
	  "Savan J",
	  "Savan J Saji",
	],
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
		  <img
			src="https://picsum.photos/200/300"
			alt="random"
			className="randImage"
		  />
		</div>
	  </React.Fragment>
	),
  };
}

function article_2() {
  return {
	title: "Beyond Chatbots: Exploring the Limitless Possibilities of OpenAI's ChatGPT and GPT-4",
	author: "Savan J Saji",
	link: "https://brucewaynebatman77.wixsite.com/savan-j-saji/post/beyond-chatbots-exploring-the-limitless-possibilities-of-openai-s-chatgpt-and-gpt-4",
	body: (
	  <React.Fragment>
		<h1>Beyond Chatbots: Exploring the Limitless Possibilities of OpenAI's ChatGPT and GPT-4</h1>
		<p>Read the full article <a href="https://brucewaynebatman77.wixsite.com/savan-j-saji/post/beyond-chatbots-exploring-the-limitless-possibilities-of-openai-s-chatgpt-and-gpt-4">here</a>.</p>
	  </React.Fragment>
	),
  };
}

function article_3() {
  return {
	date: "7 May 2023",
	title: "Artificial Intelligence in Healthcare",
	description:
	  "AI is transforming the healthcare industry, from improving patient outcomes to streamlining operations. Discover the latest applications of this game-changing technology.",
	style: ``,
	keywords: [
	  "Artificial Intelligence in Healthcare",
	  "Savan",
	  "Savan J",
	  "Savan J Saji",
	],
	body: (
	  <React.Fragment>
		<h1>Content of article 2</h1>
	  </React.Fragment>
	),
  };
}

const myArticles = [article_1(), article_2(), article_3()];

export { Articles };
export default myArticles;
