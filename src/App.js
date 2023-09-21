import { GlobalStyle } from "./style/GlobalStyle";
import Template from "./components/template/Template";
import Background from "./components/organism/Background";

function App() {
  return (
    <>
      <GlobalStyle />
      <>
        {/* three.js 을 사용한 우주 배경 */}
        <Background />
        <Template />
      </>
    </>
  );
}

export default App;
