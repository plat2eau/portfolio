import "./App.css";
import Layout from './components/Layout.js'
import 'remixicon/fonts/remixicon.css'
import Home from "./screens/home.js";

function App() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Fira+Code&display=swap"
        rel="stylesheet"
      />
      <Layout>
        <Home />
      </Layout>
    </>
  );
}

export default App;
