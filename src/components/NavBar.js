import React from "react";
import { MainCont, NavbarCont } from "./../styled-components/reusables";

import NavBarLink from "./NavBarLink";

export default function NavBar() {
	return (
		<NavbarCont>
			<MainCont width="100%" height="20vh">
				<NavBarLink param="/" text="HOME" />
				<NavBarLink param="/complete-tasks" text="COMPLETED TASKS" />
				<NavBarLink param="/incomplete-tasks" text="INCOMPLETE TASKS" />
			</MainCont>
		</NavbarCont>
	);
}
