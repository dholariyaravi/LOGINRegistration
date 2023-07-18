import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import TextField from '@mui/material/TextField';
import { Link} from 'react-router-dom';

export default function Registration() {

    const [data, setdata] = useState({
        title : "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        acceptTerms: 'true'
    });

     const myhedal = (e) => {
        setdata({...data,[e.target.name]: e.target.value});
     }

     const mysubmit = (e) => {
        e.preventDefault();
        // console.log(data);

        axios.post('http://localhost:4000/accounts/register',data)
            .then(p => {
                console.log(p.data)
                toast('login Successfully')
            }).catch(
                p => {
                   toast('faled')
                   console.log(p)
             });
         }


  return (
    <div className='css111'>
           <form className='from122' onSubmit={mysubmit}>
           
           <h2 style={{color:'white'}}>REGISTRATION</h2><br/>
        
        <TextField  label="title" variant="outlined" className='coll-11' name="title" onChange={myhedal}/><br/><br/>
        <TextField  label="firstName" variant="outlined" className='coll-11' name="firstName" onChange={myhedal}/><br/><br/>
        <TextField  label="lastName" variant="outlined" className='coll-11' name="lastName" onChange={myhedal}/><br/><br/>
        <TextField  label="email" variant="outlined" className='coll-11' name="email" onChange={myhedal}/><br/><br/>
        <TextField  label="password" variant="outlined" className='coll-11' name="password" onChange={myhedal}/><br/><br/>
        <TextField  label="confirmPassword" variant="outlined" className='coll-11' name="confirmPassword" onChange={myhedal}/><br/><br/>

        {/* <input type='submit' value='Save' className='btnbuttom'/> */}
        <Link className='btn btn-dark px-4' to={'/'}>Login</Link>
       <hr/>

        <div className="container">
          <input type='submit' href="#" className="btn btn-dark px-5" value=' Submit ' />
       </div>

        </form>

   

    </div>
  )
}
