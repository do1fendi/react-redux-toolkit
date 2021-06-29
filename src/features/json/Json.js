import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { jsonData, setJson, delJson } from "./jsonSlice";

export function Json() {
  const [num, setNum] = useState()

  const json = useSelector(jsonData);
  const dispatch = useDispatch();
  const callJson = () => {
      const num = Math.floor(Math.random() * 100) + 1
    fetch(`https://jsonplaceholder.typicode.com/todos/${num}`)
      .then((response) => response.json())
      .then((json) => dispatch(setJson(json)));
  };
  return (
    <div>
      <button onClick={callJson}>Call JSON</button>
      {/* {JSON.stringify(json)} */}
      <input type='number' value={num} onChange={(e) => setNum(e.target.value)} />
      <button onClick={() => dispatch(delJson(num))}>Delete JSON</button>
      {json.map(item => <div key={item.id}>{item.userId} - {item.title} <button onClick={() => dispatch(delJson(item.id))}>-</button></div>)}
    </div>
  );
}

// export default Json
