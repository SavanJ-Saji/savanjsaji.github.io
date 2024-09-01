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
								src="./https://media.licdn.com/dms/image/v2/C560BAQFkd_MVvfJ8SA/company-logo_200_200/company-logo_200_200/0/1630669608362/investorcet_logo?e=1733356800&v=beta&t=CbSpmb__vvzUQIIlZzkW__3Wg1ieEYqqnmw2IFHxOk8"
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
								src="./https://media.licdn.com/dms/image/v2/D560BAQGIlPRwI7g4iA/company-logo_200_200/company-logo_200_200/0/1696013280902?e=1733356800&v=beta&t=2gtEuIQLoheMZRqbX2mh-U_isPfSvOt76evdN4yVeFg"
								alt="EETIF"
								className="work-image"
							/>
							<div className="work-title">EETI Foundation</div>
							<div className="work-subtitle">
								Creative Lead
							</div>
							<div className="work-duration">Sept 2023 - Sept 2024</div>
						</div>

						<div className="work">
							<img
								src="./https://media.licdn.com/dms/image/v2/C560BAQExO-V_fo3ggg/company-logo_200_200/company-logo_200_200/0/1630604969837/robo_cet_logo?e=1733356800&v=beta&t=SAm968djxgefAHsstJIUg9ZEr1Hgd8ErUR-A-VhTK3Q"
								alt="RoboCET"
								className="work-image"
							/>
							<div className="work-title">RoboCET</div>
							<div className="work-subtitle">
								Designer
							</div>
							<div className="work-duration">Aug 2023 - Sept 2024</div>
						</div>

						<div className="work">
							<img
								src="./https://media.licdn.com/dms/image/v2/D560BAQHcjljZxofThQ/company-logo_200_200/company-logo_200_200/0/1684765352294/eetic_cet_logo?e=1733356800&v=beta&t=_2UKddvfo1X832gPiatRQ-9v1uOknSKnsRI5qJV4Yds"
								alt="EETI CET"
								className="work-image"
							/>
							<div className="work-title">EETI CET</div>
							<div className="work-subtitle">
								Design Head
							</div>
							<div className="work-duration">May 2023 - Aug 2024</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
