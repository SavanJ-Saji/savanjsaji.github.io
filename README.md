# Reactfolio V1.2 👩🏽‍🚀

Reactfolio is a modern and customizable personal portfolio web template built using the popular React library. This platform offers a streamlined way for professionals to present their portfolio and highlight their skills and accomplishments engagingly and professionally. With its responsive design and clean code, Reactfolio can be easily tailored to suit individual needs and preferences, making it an ideal choice for anyone looking to create a stunning online portfolio.

<center>
<img src="https://github.com/user-attachments/assets/ceb1da22-fa4e-4a7f-b82d-da3b08a31e07" alt="Reactfolio" />
</center>

Live demo here: <a href="savanjsaji.me" target="_blank">savanjsaji.me</a>
<br/>
Readme here: <a href="https://savan.me" target="_blank">savan.dev/portfolio/reactfolio/</a>

-   [Features](#-features)
-   [Getting started](#-getting-started)
-   [Installation and Setup Instructions](#-installation-and-setup-instructions)
-   [Folder structure](#-folder-structure)
-   [Configurations](#-configurations)
-   [Google Analytics](#-google-analytics)
-   [Building the React App](#-building-the-react-app)
-   [FAQ](#-faq)
-   [Contribution](#-contribution)

## 📙 Features

-   📖 Multi-Page Layout
    -   Home
    -   About
    -   Projects
    -   Articles
    -   Contact
-   📱 Fully Responsive
-   🛠 Easy configurations

## 📚 Getting started

Clone down this repository. You will need `NodeJS` and `git` installed globally on your machine.

## 🛠 Installation and Setup Instructions

1. Installation: `npm install`

2. Run the project: `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.

## 📁 Folder structure

-   `/public`: publicly accessible content (ex: images, media).
-   `/src`: all the components used in this project.
    -   `/src/components/`: each reusable component of each page.
    -   `/src/data`: configurations of the web app.
    -   `/src/pages`: pages that are included in the web app.

## ⚙️ Configurations

Since this is a public and open-source project, you can make any changes to it. If you are a ReactJS developer you can do it easily. But if you are a beginner, I have extracted the configurable data into a single directory, so you can edit the files in that directory to configure the entire web application.

Directory: `/src/data/`

-   `user.js`

    From this, you can change the content of each page of the web application.

-   `articles.js`

    From this, you can add your articles to the web application.

    Instructions:

    -   Add a new article

        1. Create a new function starting with `article_`. For example, you can add a new function named `article_3`.

        2. Then add the data accordingly.

            - Add the `<React.Fragment>` tag and its closing tags in the body.
            - In React there is no keyword `class`, so you should use `className` to define html classes.

            ``` js
            function article_3() {
            	return {
            		date: "7 May 2023",
            		title: "The Benefits of Cloud Computing",
            		description: "Why businesses are turning to the cloud.",
            		style: `
            				.random-image {
            					align-self: center;
            					outline: 2px solid red;
            				}
            				`,
            		body: (
            			<React.Fragment>
            				<div className="article-content">
            					<div className="paragraph">
            						Content of Article 1
            					</div>
            					<img
            						src="https://picsum.photos/200/300"
            						alt="random"
            						className="random-image"
            					/>
            				</div>
            			</React.Fragment>
            		),
            	};
            }
            ```

        3. In the last lines you will see an array to which you need to add your new `articles` function.

            ```js
            const myArticles = [article_1, article_2, article_3];
            ```

-   `seo.js`

    The SEO.js file is a module that contains an array of objects, with each object representing metadata for a specific page of a React website. The purpose of this file is to centralize and manage the SEO (Search Engine Optimization) information for different pages.

    Each object in the SEO array has the following properties:

    `page`: Represents the page name or identifier. It helps in mapping the SEO data to the appropriate page.

    `title`: Specifies the title of the page. This title is typically displayed in the browser's title bar and is an important element for search engines.

    `description`: Provides a concise and informative description of the page content. This description is often displayed in search engine results and can greatly influence click-through rates.
    keywords: Contains an array of keywords relevant to the page's content. Keywords can help search engines understand the topics covered on the page and can impact its visibility in search results.
    By storing the SEO information in the SEO.js file, you can easily manage and update the metadata for different pages of your React website. This approach allows you to keep the SEO data separate from the components and reuse it across the application, ensuring consistent and optimized metadata for each page.

    Example:

    ``` js
    const SEO = [
    	{
    		page: "home",
    		description:
    			"I am a backend developer with expertise in Node.js. I have experience in building scalable, secure and reliable web applications using various frameworks and technologies.",
    		keywords: ["Tharindu", "Tharindu N", "Tharindu Nayanajith"],
    	},
    ];
    ```

-   `styles.css`

    From this, you can change the font colours and font families of the web application.

    ```css
    : root {
    	/* ------- colors ------- */
    	--primary-color: #27272a;
    	--secondary-color: #65656d;
    	--tertiary-color: #acacb4;
    	--quaternary-color: #e4e4e7;
    	--link-color: #14b8a6;
    	/* ---------------------- */

    	/* ------- fonts ------- */
    	--primary-font: "Heebo", sans-serif;
    	--secondary-font: "Roboto", sans-serif;
    	/* --------------------- */
    }
    ```

## 📈 Google Analytics

Add your Google Analytics 4 MEASUREMENT ID to `/src/data/tracking.js`.

How to find the Google Analytics 4 MEASUREMENT ID?

[https://support.google.com/analytics/answer/9539598?hl=en](https://support.google.com/analytics/answer/9539598?hl=en)

## 🚀 Building the React App

To build the React app, you can use the `npm run build` command. This will create a production-ready build of your app in the `build/` directory.

Here are the steps to follow:

1. Open a terminal window and navigate to the root directory of your React app.
2. Run the `npm run build` command to create a production build of your app. This will generate a static bundle of your app in the `build/` directory.
3. Copy the contents of the `build/` directory to your server's public directory. You can do this using an FTP client or by running a command like `scp` to transfer the files to your server. Make sure to replace `example.com` and `/var/www/html` with your server's domain name and public directory, respectively:

    ```bash
    scp -r build/* user@example.com:/var/www/html
    ```

4. Your portfolio app should now be accessible from your server's domain name. You can verify this by opening a web browser and navigating to http://example.com (replace example.com with your server's domain name).

That's it! Your React portfolio app should now be up and running on your server. Note that you may need to configure your server's web server (e.g., Apache or Nginx) to serve the index.html file in the build/ directory as the default page for your domain.

## 🤔 FAQ

**Q1. Subpages can only be accessed through links on the homepage or navigation bar, but those pages are not accessible through direct links.**

If you are using Apache as your web server, you can insert this into your .htaccess file:

```c
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule. /index.html [L]
</IfModule>
```
