import logo from './logo.svg';
import './App.css';

function App() {
  const greeting = "Это тестовый проект ФИО";
  const name = "Иванов Иван Иванович";


  return (
    <div className="App">
     <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
         {name}
      </header>
    </div>
  );
}

export default App;
