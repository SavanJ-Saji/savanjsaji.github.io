import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/projects.css";
import useIntersectionObserver from "../useIntersectionObserver"; // Import the custom hook

const Projects = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const currentSEO = SEO.find((item) => item.page === "projects");

    // Check if currentSEO is defined
    if (!currentSEO) {
        return <div>SEO data not found</div>;
    }

    // Use the custom hook
    useIntersectionObserver({ threshold: 0.1 });

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Projects | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="projects" />
				<div className="content-wrapper">
					<div className="projects-logo-container">
						<div className="projects-logo">
							<Logo width={46} />
						</div>
					</div>
					<div className="projects-container">
						<div className="title projects-title">
							Things I've made trying to leave a mark on the universe
						</div>

						<div className="subtitle projects-subtitle">
							I'm passionate about open-source projects and have a history of contributing to various initiatives. Many of my past projects are publicly available for anyone to explore, contribute to, or even improve. I welcome collaboration and am always eager to receive feedback and new ideas.
						</div>

						<div className="projects-list">
							<AllProjects />
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Projects;
