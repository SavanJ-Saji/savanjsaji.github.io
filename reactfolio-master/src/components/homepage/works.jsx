import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="https://media.licdn.com/dms/image/v2/C560BAQFkd_MVvfJ8SA/company-logo_100_100/company-logo_100_100/0/1630669608362/investorcet_logo?e=1732752000&v=beta&t=R0mrjCtLyeYfw2XkRVHiYMxdOVJVIetDmSVWrJFdFfc"
								alt="Investor CET"
								className="work-image"
							/>
							<div className="work-title">Investor CET</div>
							<div className="work-subtitle">
								Chief Technical Officer
							</div>
							<div className="work-duration">Feb 2024 - Present</div>
						</div>
					    <div className="work">
                            <img
                                src="https://media.licdn.com/dms/image/v2/D560BAQGIlPRwI7g4iA/company-logo_200_200/company-logo_200_200/0/1696013280902?e=1732752000&v=beta&t=_XjhiSY0658A5ODNfphk-xre78vWTP05eJoQ7EWEDDM"
                                alt="EETI Foundation"
                                className="work-image"
                            />
                            <div className="work-title">EETI Foundation</div>
                            <div className="work-subtitle">
							Creative Lead
                            </div>
							<div className="work-duration">Sept 2023 - Aug 2024</div>
                        </div>

						<div className="work">
							<img
								src="https://media.licdn.com/dms/image/v2/C560BAQExO-V_fo3ggg/company-logo_200_200/company-logo_200_200/0/1630604969837/robo_cet_logo?e=1732752000&v=beta&t=dopoUS-cd87dx0pbLpLufTmbZ7zCCJWMXjXIdyviY2I"
								alt="RoboCET"
								className="work-image"
							/>
							<div className="work-title">RoboCET</div>
							<div className="work-subtitle">
								Designer
							</div>
							<div className="work-duration">Aug 2023 - Aug 2024</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
