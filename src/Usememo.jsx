import React from 'react'

const Usememo = () => {
    const [number, setNumber] = React.useState(0);
    const [count, setCount] = React.useState(0);

    function cubeNumber(num){
        console.log("cube is done")
        return Math.pow(num,3);
    }

    const result = React.useMemo(()=>{
        return cubeNumber(number)
    },[number])
  return (
    <div>
      <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} />
      <h1>Cube of the number  ; {result}</h1>
      <hr /><br /><hr />
      <button onClick={()=>setCount(count + 1)}>
        count++
      </button>
      <h1>Cout : {count}</h1>
    </div>
  )
}

export default Usememo
