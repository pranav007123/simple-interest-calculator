
import { TextField, Stack, Button } from '@mui/material'
import './App.css'
import { useState } from 'react'


function App() {

  

  const [interest, setInterest] = useState(0)
  const [principle, setPrinciple] = useState(0)
  const [rate, setRate] = useState(0)
  const [year, setYear] = useState(0)

  const [principleAmountValid, setPrincipleAmountValid] = useState(true)
  const [rateAmountValid, setRateAmountValid] = useState(true)
  const [yearAmountValid, setYearAmountValid] = useState(true)


  const Handlereset = () => {
    setPrinciple(0)
    setInterest(0)
    setRate(0)
    setYear(0)
  }
  const handleValidation = (tag) => {
    const { value, name } = tag
    console.log(value, name);
    console.log(!!value.match(/^[0-9]*.?[0-9]+$/));
    if (!!value.match(/^\d*\.?\d+$/)) {
      if (name == "principle") {
        setPrinciple(value)
        setPrincipleAmountValid(true)
      } else if (name == "rate") {
        setRate(value)
        setRateAmountValid(true)
      } else {
        setYear(value)
        setYearAmountValid(true)
      }

    } else {
      //invalid
      if (name == "principle") {
        setPrinciple(value)
        setPrincipleAmountValid(false)
      } else if (name == "rate") {
        setRate(value)
        setRateAmountValid(false)
      } else {
        setYear(value)
        setYearAmountValid(false)
      }
    }
  }
  const HandleCalculate = ()=>{
if(principle && year && rate){
  setInterest(principle*year*rate/100)
}else{
  alert("Fill the form")
}
  }
  return (


    <div style={{ width: "100%", height: '100vh' }} className='d-flex justify-content-center align-items-center bg-dark' >

      <div style={{ width: "600px" }} className='bg-light p-5 rounded ' >
        <h1>Simple Interest App</h1>
        <p>calculate your simple Interest Easily</p>
        <div className=' d-flex justify-content-center align-items-center bg-warning p-3 rounded shadow flex-column text-light '>
          <h1>₹{interest}</h1>
          <p className='f-bolder'>Total Simple Interest</p>
        </div>
        <form className='mt-5'>

          <div className='mb-5'>
            <TextField className='w-100' id="outlined-basic-principle" label="₹ Principle Amount" variant="outlined" value={principle || ""} name='principle' onChange={e => handleValidation(e.target)} />
          </div>
          {!principleAmountValid && <div className='text-danger mb-3'>*Invalid User Input</div>}
          <div className='mb-5'>
            <TextField className='w-100' id="outlined-basic-principle" label="Rate of interest (p.a)%" variant="outlined" value={rate || ""} name='rate' onChange={e => handleValidation(e.target)} />
          </div>
          {!rateAmountValid && <div className='text-danger mb-3'>*Invalid User Input</div>}
          <div className='mb-5'>
            <TextField className='w-100' id="outlined-basic-principle" label="Time Period (yr)" variant="outlined" value={year || ""} name='year' onChange={e => handleValidation(e.target)} />
          </div>
          {!yearAmountValid && <div className='text-danger mb-5'>*Invalid User Input</div>}

          <Stack direction="row" spacing={2} className='align-items-center , justify-content-center'>
            <Button onClick={HandleCalculate} disabled={ !principleAmountValid || !rateAmountValid || !yearAmountValid } style={{ width: "40%", height: "70px" }} className='bg-dark' variant="contained">CALCULATE </Button>
            <Button style={{ width: "40%", height: "70px" }} variant="outlined" onClick={Handlereset} >RESET</Button>
          </Stack>
        </form>
      </div>

    </div>
  )
}

export default App
