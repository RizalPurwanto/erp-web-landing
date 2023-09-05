import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import styled from '@emotion/styled'
import Navbar from './components/Navbar';

const AppComponent = styled.div`
  width:100%;
  height:400vh;
  background-color:white;
  display:flex;
  justify-content:flex-start;
  align-items:center;
  flex-direction:column;
`

function App() {
  return (
    <AppComponent >
      <Navbar></Navbar>
<Home></Home>
{/* <Home></Home>
<Home></Home>
<Home></Home> */}


    </AppComponent>
  );
}

export default App;
