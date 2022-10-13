import Form1 from './components/Form1';
import './App.css';
import Form2 from './components/Form2';
import Form3 from './components/Form3';
import Form4 from './components/Form4';
import 'bootstrap/dist/css/bootstrap.min.css';/*bootstrap for css*/
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/*Routing the components*/}
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Form1/>}/>
        <Route path='/form2' element={<Form2/>}/>
        <Route path='/form3' element={<Form3/>}/>
        <Route path='/form4' element={<Form4/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
