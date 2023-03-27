import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import Btn from "./components/Btn/Btn";
import Card from "./components/Card/Card";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Btn>Sort By Date</Btn>
      <Card></Card>
      <Btn>See More</Btn>
    </div>
  );
}

export default App;
