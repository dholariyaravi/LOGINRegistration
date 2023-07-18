import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';

import img12pro from "../Componet/IMG/profile-img.jpg";
import img13pro from "../Componet/IMG/testimonials-1.jpg";
import img14pro from "../Componet/IMG/testimonials-2.jpg";
import img15pro from "../Componet/IMG/testimonials-3.jpg";
import img16pro from "../Componet/IMG/testimonials-4.jpg"

const dataim = [{
  name: "Rajan kathiriya",
  IID: "Rajan",
  age: "20",
  gmail :"rk99@gmail.com",
  mobailNO : "968582522",
  gender: "male",
  photo: img12pro,
}, {
  name: "Ravi dholariya",
  IID: "Ravi",
  mobailNO : "968582522",
  age: "20",
  gender: "male",
  gmail :"ravi@gmail.com",
  photo: img13pro,
}, {
  name: "Mansi senjaliya",
  IID: "Mansi",
  mobailNO : "968582522",
  age: "22",
  gmail :"rr10@gmail.com",
  gender: "female",
  photo: img14pro,
}
  , {
  name: "jensi Sojitra",
  IID: "jensi",
  age: "20",
  gmail :"rk41@gmail.com",
  gender: "female",
  mobailNO : "968582522",
  photo: img15pro,
}, {
  name: "Jay Sojitra",
  IID: "Jay",
  age: "20",
  gmail :"rp5@gmail.com",
  gender: "male",
  mobailNO :- "968582522",
  photo: img16pro,
}]


const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxwidth: '100%',
  maxHeight: '100%',
});


export default function ComplexGrid({ }) {
  return (
    <>
      <div className='container-fluid'>
        {dataim.map((val) => {
          return (
            <>
              <div className='row m-2 rounded-2' style={{ backgroundColor: '#fafcfe', border: "2px solid #4a4e51db", }}>
                <div className='col-md-6 col-sm-12 col-lg-6 w-50 my-2' >
                  <img src={val.photo} className='w-75 rounded-2' />
                </div>
                
                <div className='col-md-6 col-sm-12 col-lg-6 w-50'>
                  <Typography gutterBottom variant="subtitle1" component="div">
                    {val.name} 
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {val.age} , {val.gender}
                  </Typography>
                  <Typography gutterBottom variant="subtitle1" component="div" >
                   {val.gmail}
                  </Typography>
                  <Typography gutterBottom variant="subtitle1" component="div" >
                   {val.mobailNO}
                  </Typography>
                  {/* <Typography variant="body2" >
                    <button type='button' style={{ border: "1px solid", backgroundColor:'#575f72' }} onClick={()=>(val.IID)} className='text-white btn mt-2 px-3'>View</button>
                  </Typography> */}
                </div>

              </div>
            </>
          )
        })}
      </div>
    </>
  );
}