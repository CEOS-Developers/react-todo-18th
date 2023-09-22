import TodoList from "./TodoList";
import { styled, createGlobalStyle } from "styled-components";

function App() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <TodoList />
      </Wrapper>
    </>
  );
}

export default App;

//CSS

const GlobalStyle = createGlobalStyle`
@font-face{
  font-family: "양진체";
  src: url("https://cdn.jsdelivr.net/gh/supernovice-lab/font@0.9/yangjin.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
}
  html, body, #root{
    height: 100%;
    margin: 0;
    padding: 0;
  }
`;
const Wrapper = styled.div`
  background-image: url("https://www.10wallpaper.com/wallpaper/1366x768/2106/Macos_Monterey_2021_Apple_WWDC_5K_Poster_1366x768.jpg");
  height: 100%;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  font-family: "양진체";
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
