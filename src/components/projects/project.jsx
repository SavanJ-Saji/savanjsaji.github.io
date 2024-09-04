import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import "./styles/project.css";

const Project = ({ logo, title, description, linkText, link }) => (
	<React.Fragment>
		<div className="project">
			<Link to={link}>
				<div className="project-container">
					<div className="project-logo">
						<img src={logo} alt={`${title} logo`} />
					</div>
					<div className="project-title">{title}</div>
					<div className="project-description">{description}</div>
					<div className="project-link">
						<div className="project-link-icon">
							<FontAwesomeIcon icon={faLink} />
						</div>
						<div className="project-link-text">{linkText}</div>
					</div>
				</div>
			</Link>
		</div>
	</React.Fragment>
);

Project.propTypes = {
	logo: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	linkText: PropTypes.string.isRequired,
	link: PropTypes.string.isRequired,
};

export default Project;
