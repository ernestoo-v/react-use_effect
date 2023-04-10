import { useState, useEffect } from "react";



function App() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  const [count2, setCount2] = useState(0);


  useEffect(() => {
    setCalculation(() => count * 2);
  }, [count]);


  //Will print changed whenever the count2 value changed
  useEffect(() => {
    console.log('changed');
  }, [count2]);

  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <p>{calculation}</p>
      <p>{count2}</p>
      <button onClick={() => setCount2((a) => a + 1)}>-</button>


    </div>
  );
}
export default App;
