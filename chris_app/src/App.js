import logo from './logo.svg';
import './App.css';
import { FirstComponent } from './FirstComponent';
import { SecondComponent } from './SecondComponent';

function App() {
  return (
    <>
      <p>This Text is in the App component</p>
      <FirstComponent />
      <SecondComponent value='4' />
      <SecondComponent value='5' />
      <SecondComponent value='6'>
        <FirstComponent />
      </SecondComponent>
    </>
  );
}

export default App;
