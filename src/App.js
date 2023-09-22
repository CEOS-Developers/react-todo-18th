import { GlobalStyle } from "./style/GlobalStyle";
import Template from "./components/template/Template";
import Background from "./components/organism/Background";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <>
        {/* three.js 을 사용한 우주 배경 */}
        <Background />
        <Template />
      </>
    </RecoilRoot>
  );
}

export default App;
