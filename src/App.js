import logo from './logo.svg';
import './App.css';
let name = "Sharma G";
function App() {
  return (
    <>
    <center>
      <nav>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </nav>
      <div className="container">
      <h1>Hello {name}</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris faucibus, eros nec lobortis tristique, quam metus varius justo, non molestie arcu arcu quis quam. Praesent eros quam, finibus vitae dignissim nec,</p>
      </div>
      </center>
    </>
  );
}

export default App;
