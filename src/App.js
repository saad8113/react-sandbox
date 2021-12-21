import "./App.css";
import BannerImage from "./components/banner-image";
import NavBar from "./components/nav-bar";
import Footer from "./components/footer";
import Content from "./components/content";

function App() {
  return (
    <div className="App">
      <NavBar />
      <BannerImage />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
