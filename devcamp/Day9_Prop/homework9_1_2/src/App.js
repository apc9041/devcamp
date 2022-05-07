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
          <h1>Enjoy PikkaNode</h1>
          we are website which allows users, who sign-up for free profiles, to connect with friends, work colleagues or people they don't know, online...
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
