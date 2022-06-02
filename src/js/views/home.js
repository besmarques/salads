import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

import Base from "../component/base.jsx";
import Crunchy from "../component/crunchy.jsx";
import Soft from "../component/soft.jsx";
import Unexpected from "../component/unexpected.jsx";
import Protein from "../component/protein.jsx";
import Dressing from "../component/dressing.jsx";

export const Home = () => (
	<>
		<div className="container-fluid">
			<div className="row pt-3 pb-3 d-flex justify-content-center">
				<Base />
			</div>
			<Crunchy />
			<Soft />
			<Unexpected />
			<Protein />
			<Dressing />
		</div>
	</>
);
