import tw from "twin.macro";
import "./App.css";
import styled from "styled-components";
import { Home } from "./app/containers/Home";

const AppContainer = styled.div`
  ${tw`
  w-full
  h-full  
  flex
  flex-col
  `}
`;

function App() {
  return (
    <AppContainer>
      <Home />
    </AppContainer>
  );
}

export default App;
