import { useState } from "react";
import TooltipComponent from "./TooltipComponent";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

function App() {
  const [position, setPos] = useState("left");

  const handleButtonClick = (value) => {
    setPos(value);
  };

  return (
    <div className="App">
      <div className="title"><h1>Tooltip Function</h1></div>
      <TooltipComponent position={position} />
      <ButtonGroup aria-label="Button Group" id="buttons">
        <Button variant="outline-primary" onClick={() => handleButtonClick("left")}>
          Left
        </Button>
        <Button variant="outline-danger" onClick={() => handleButtonClick("top")}>
          Top
        </Button>
        <Button variant="outline-success" onClick={() => handleButtonClick("right")}>
          Right
        </Button>
        <Button variant="outline-warning" onClick={() => handleButtonClick("bottom")}>
          Bottom
        </Button>
      </ButtonGroup>
      
    </div>
  );
}

export default App;