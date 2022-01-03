import React,{useState,useEffect} from "react"
import './App.css';
import Navbar from "./header"
import Button from "./buttons/Button";

function App() {
   const [intial,setInitial]=useState([-20,2,2,4,-30])
   const [initialObject,setInitialObject]=useState([{name:"akram",id:3}])
  //  setInitial(intial.filter(i=>i<0))
  //  console.log(intial)
  let i=[1,2,3]
  let b=[{name:"subhan",id:1},{name:"salman",id:2}]
  let c=b.filter(p=>p.id==i[0])
  // console.log(c)
  // c.name="tingo"

  // console.log(c)
  // console.log("b",b[0].name="yoyo")
  // console.log("updatedB",b)
  // console.log([1,2,3,...intial.filter(i=>i<0)])
  let[l,setL]=useState("")
  let [number,setNumber]=useState(0)
  useEffect(() => {
  //  function l(){
  //   setNumber(number+1)
  //   setNumber(number+1)
  //   setNumber(number+1)
  //   console.log(number)
  //  }
  let addNumber=()=>{
    setNumberFunction()
    setNumberFunction()
    setNumberFunction()
  
    console.log(number)
    
  
  }
  
 
    return () => 
      // l()
      addNumber()
   
  }, [])
  // setL("subhan")

  // this is immiediate response , suestate cant handle so pass itin a function to make it work 
  // let setNumberFunction=()=>{
  //   setNumber(number+1)
  // }


  // now pass it i function to mutate it properly with immediate as it create chain 


  let setNumberFunction=()=>{
    setNumber(s=>s+1)
  }
let addNumber=()=>{
  setNumberFunction()
  setNumberFunction()
  setNumberFunction()

  console.log(number)
  

}

  return (
    <div className="App">
      <Navbar />

      <Button bg_color="yellow" >
        
        book theme
      </Button>

      
      
      
      
      
      
      
      
      {/* <h1>{number}</h1>

       <button onClick={()=>{setNumber(number+1)}}></button>


       <button onClick={addNumber}>add on with plain function pass</button> */}
    </div>
  );
}

export default App;
