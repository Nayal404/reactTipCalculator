import React, {useState} from 'react'
import './text.css'
const Text = () => {
    const [bill, setB] = useState(0)
    const [pcent, setP] = useState(0)
    const [ppl, setPl] = useState(0)
    const [tip, setT] = useState(0)
    const calcTip = ()=>{
        let eachTip = ((pcent)/100*bill)/ppl
        setT(eachTip)
    }
  return (
    <>
    <div className="container">
      <div className="form-group my-4">
    <label htmlFor="exampleInputPassword1">Enter The Total Bill:</label>
    <input type="text" className="form-control" onChange={(e)=>setB(e.target.value)} id="exampleInputPassword1"/>
  </div>
  <div className="form-group my-4">
    <label htmlFor="exampleInputPassword1">Tip Percent:</label>
    <input type="text" className="form-control" onChange={(e)=>setP(e.target.value)} id="exampleInputPassword1"/>
  </div>
  <div className="form-group my-4">
    <label htmlFor="exampleInputPassword1">Number Of People: </label>
    <input type="text" className="form-control" onChange={(e)=>setPl(e.target.value)} id="exampleInputPassword1"/>
  </div>
  <div className="my-5">
    <button className="btn btn-primary" onClick={calcTip}>Calculate Tip</button>
  </div>
  <center>
    <div className="my-3">
        <h3>The Tip (Each) Person Will Pay is: {tip}</h3>
    </div>
  </center>
  </div>
    </>
  )
}

export default Text