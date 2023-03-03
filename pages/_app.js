import "../styles/global.css";
import { DarkModeToggle } from "../components/darkModeToggle";

const App = ({ Component, pageProps }) => {

  return (
    <>
      <DarkModeToggle />
      <Component {...pageProps} />
    </>
  );
};

export default App;
