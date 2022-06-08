import { useState } from "react";
import './SignUp.css'
function SignUp()
{
  const [state,setState]=useState({
    name:'',
    email:'',
    phnumber:0,
    age:0
  })

  console.log(state);

    return(
      <div className="Header">
        <form onSubmit={(event)=>{
          alert('Last Submitted '+document.getElementById("name").value);
             setState({
               name:document.getElementById("name").value,
               email:document.getElementById("email").value,
               phnumber:document.getElementById("phno").value,
               age:document.getElementById("age").value,
             });
             event.preventDefault();
            }} action="" method="" className="form-control">
            <label htmlFor="name" >
                 Name:
                 <input id="name"type="text" placeholder="Enter your name" required />
             </label>
             <br />
             <br />
             <label htmlFor="email">
                 Email:
                 <input id="email"type="email" placeholder="Enter your email" required />
             </label>
             <br />
             <br />
             <label >
                 Phone Number:
                 <input id="phno"type="text" placeholder="Enter your phn.number" required />
             </label> 
             <br />
             <br />
             <label >
                 Age:
                 <input id="age"type="number" placeholder="Enter your age"  required/>
             </label> 
             <br />
             <br />
      
             <input type="submit" value="SUBMIT" />
                     
        </form>
        <div className="display">
          <h3>CURRENT Name:{state.name}</h3>
          <h3>CURRENT Email:{state.email}</h3>
          <h3>CURRENT PH.no:{state.phnumber}</h3>
          <h3>CURRENT Age:{state.age}</h3>
        </div>

      </div>
    );
}
export default SignUp;