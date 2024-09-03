import React from "react";
import PropTypes from 'prop-types'; // Import PropTypes for prop validation
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import "./style/article.css";

const Article = ({ date, title, description, link }) => {
	return (
		<div className="article">
			<div className="article-left-side">
				<div className="article-date">{date}</div>
			</div>

			<Link to={link}>
				<div className="article-right-side">
					<div className="article-title">{title}</div>
					<div className="article-description">{description}</div>
					<div className="article-link">
						Read Article{" "}
						<FontAwesomeIcon
							style={{ fontSize: "10px" }}
							icon={faChevronRight}
						/>
					</div>
				</div>
			</Link>
		</div>
	);
};

Article.propTypes = {
	date: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	link: PropTypes.string.isRequired,
};

export default Article;
