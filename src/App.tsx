import { useState } from 'react';
import { Greeting } from './components/Greeting';

function App() {
  const [isOn, setIsOn] = useState(false)

  const toggleSetIsOn = () => {
    setIsOn(current => !current);
  }

  const getEvenNumbers = (numbers: number[]) => {
    return numbers.filter((number) => number % 2 == 0)
  }

  return (
    <div className="App">
      {isOn && <div><Greeting name="John" /></div>}
      {!isOn && <div>Greeting is hidden</div>}
      
      <button
        type="button"
        onClick={toggleSetIsOn}
      >{isOn && <span>ON</span>}
      {!isOn && <span>OFF</span>}</button>

      <p>{getEvenNumbers([1, 2, 3, 4, 5, 6])}</p>
    </div>
  );
}

export default App;
