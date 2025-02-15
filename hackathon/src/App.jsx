import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Button from '@mui/material/Button';

function helloWorld() {

  console.log("Hello world");
}

function App() {

  return (
  <>
  <div align="center" style={{top: "50%", left: "50%", transform: "translate(-50%, -50%)", position: "absolute"}}>

  <Button variant="contained" onClick={helloWorld}>Hello world</Button> 
  </div>
  </>
  );

}

export default App
