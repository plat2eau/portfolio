import "./App.css";
import Header from "./components/header/header";

function App() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Fira+Code&display=swap"
        rel="stylesheet"
      />
      <div className="background-color background-layout">
        <Header />
      </div>
    </>
  );
}

export default App;
