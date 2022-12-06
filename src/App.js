import {BrowserRouter,Routes,Route} from "react-router-dom"
import Header from "./components/Header";
import Class8 from "./components/Class8";
import Class9 from "./components/Class9";
import Class10 from "./components/Class10";
import Team from "./components/Team";
import {configStore} from "../src/Redux/configStore"
import { Provider } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const localStore = configStore()
  return (
    <Provider store={localStore}>
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path="/" element={<Team/>}/>
    <Route path="/8th" element={<Class8/>}/>
    <Route path="/9th" element={<Class9/>}/>
    <Route path="/10th" element={<Class10/>}/>
    </Routes>
    </BrowserRouter>
    </Provider>
    
  );
}

export default App;
