import styled from "styled-components";

export const Form = styled.form`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	margin: 3rem;
	border: solid #f8652e 3px;
	background: #f8652e;
	border-radius: 30px;
	width: 30vw;
	padding: 1rem;
	color: #dbeccd;
	@media screen and (max-width: 768px) {
		width: auto;
		font-size: 10px;
	}
`;
export const Label = styled.label`
	width: 70%;
`;

export const Input = styled.input`
	width: 70%;
	height: 7vh;
	margin: 2rem;
	padding: 1rem;
	border: solid #f8652e 3px;
	border-radius: 30px;
	background: #dbeccd;
`;

export const SubmitInput = styled.input`
	width: 30%;
	height: 7vh;
	margin: 2rem;
	border: solid #dbeccd 3px;
	border-radius: 30px;
	background: #f8652e;
	color: #dbeccd;
`;
