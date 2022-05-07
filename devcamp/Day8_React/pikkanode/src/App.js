import "./App.css";
import PikkanodeReact from './Pikkanode';
// import Navbar from './navbar';
import Footer from "./Footer";

import Navbar from "./components/Navbar";
import "./styles.css";


function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <article>
          <h1>Enjoy PikkaNode Now!!</h1>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry...
          <PikkanodeReact />
          
        </article>
      </div>
      <Footer/>
    </div>
  );
}

// function App() {
//   return (
//     <div>
//       <Navbar />
//       <PikkanodeReact />
//       <Footer/>
//     </div>
//   );
// };

export default App;
