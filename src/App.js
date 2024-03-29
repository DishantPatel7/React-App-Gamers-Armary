import "./App.css";
import Foot from "./Components/Footer/footer";
import Head from "./Components/Header/header";
import Games from "./Components/Home/games";
import Homeconts from "./Pages/home";
import Productpage from "./Pages/productapage";

function App() {
  return (
    <>
      <Head />
      {/* <Homeconts /> */}
      {/* <Productpage /> */}
      <Games />
      <Foot />
    </>
  );
}
export default App;
