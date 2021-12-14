import styled from "styled-components";

export const MainCont = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
	flex-wrap: wrap;
	width: ${(props) => props.width};
	height: ${(props) => props.height};
	max-height: 100%;
	overflow: visible;
	background: ${(props) => props.background || "#dbeccd"};
	margin-top: ${(props) => props.marginTop};
	padding-top: ${(props) => props.paddingTop};
	@media screen and (max-width: 768px) {
		width: auto;
		font-size: 10px;
	}
`;

export const TaskBox = styled.div`
	display: flex;
	justify-content: center;
	align-items: flex-start;
	flex-direction: column;

	height: 20%;
	margin: 3rem;
	padding: 3rem 2rem 2rem 2rem;
	overflow-x: hidden;
	overflow-x: visible;
	border-radius: 20px;
	background: ${(props) => props.background || "#b3d796"};

	@media screen and (max-width: 1000px) {
		width: auto;
	}
	@media screen and (max-width: 768px) {
		width: auto;
		padding: 2rem 1rem 1rem 1rem;
	}
	@media screen and (max-width: 768px) {
		width: auto;
		padding: 1rem 0.5rem 0.5rem 0.5rem;
	}
`;
export const TaskCont = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
	margin: 2rem;
	width: 40%;
	border: solid 3px black;
	border-radius: 20px;
	background: ${(props) => props.background || "#b3d796"};

	@media screen and (max-width: 768px) {
		width: auto;
	}
`;
export const CheckBox = styled.div`
	width: 10%;
	height: 20%;
	margin: 1rem;
	padding: 0.5rem;
	border-radius: 20px;
	background: ${(props) => props.background || "#dbeccd"};
	opacity: 0.8;
	@media screen and (max-width: 1100px) {
		width: auto;
		height: auto;
	}
	opacity: 0.8;
	@media screen and (max-width: 768px) {
		width: auto;
		height: auto;
	}
	@media screen and (max-width: 400px) {
		width: 20%;
		height: 10%;
	}
`;

export const TaskTitle = styled.h2`
	color: ${(props) => props.color || "#dbeccd"};
	margin: ${(props) => props.margin};
	word-break: break-word;
	letter-spacing: ${(props) => props.lSpacing};

	@media screen and (max-width: 768px) {
		width: auto;
		font-size: 15px;
	}
	@media screen and (max-width: 400px) {
		width: auto;
		font-size: 15px;
	}
`;
export const DateText = styled.h4`
	color: #ff4703;
	@media screen and (max-width: 768px) {
		width: auto;
		font-size: 9px;
	}
	@media screen and (max-width: 400px) {
		width: auto;
		font-size: 10px;
	}
`;
export const Description = styled.p`
	color: grey;
	word-break: break-all;
	white-space: normal;
	margin: 0.3rem;

	@media screen and (max-width: 768px) {
		width: auto;
		font-size: 13px;
	}
	@media screen and (max-width: 400px) {
		width: auto;
		font-size: 15px;
	}
`;

export const Icon = styled.img`
	width: 100%;
	height: 100%;
`;

export const AddTaskBox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 30vw;
	height: 10vh;
	margin: 2rem;
	background: #ff4703;
	color: #dbeccd;
`;

export const NavbarCont = styled.div`
	display: fixed;
	top: 0;
	overflow: visible;

	width: 100%;

	padding: 1rem;
	color: black;
	font-size: 15px;
`;
