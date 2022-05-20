import Header from "./style components/Header";
import Contents from "./style components/Contents";
import Receipt from "./style components/Receipt";
import { ThemeProvider } from "styled-components";
import theme from "./theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Header />
          <Contents />
          <Receipt />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
