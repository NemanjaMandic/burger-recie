import React, {FC} from 'react';
import Layout from "./components/Layout";
import BurgerBuilder from "./containers/BurgerBuilder";
import './App.css';


const App: FC = () => {
  return (
    <div className="App">
     <Layout>
      <h1>Kurcina</h1> 
      <BurgerBuilder />
     </Layout>
    </div>
  );
}

export default App;
