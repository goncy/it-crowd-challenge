import styled, {keyframes} from "styled-components";

const scaleOut = keyframes`
  0% {
    -webkit-transform: scale(0);
    transform: scale(0);
  } 100% {
    -webkit-transform: scale(1.0);
    transform: scale(1.0);
    opacity: 0;
  }
`;

const Spinner = styled.div`
  width: 40px;
  height: 40px;
  margin: 100px auto;
  background-color: white;
  border-radius: 100%;
  animation: ${scaleOut} 1s infinite ease-in-out;
`;

export default Spinner;
