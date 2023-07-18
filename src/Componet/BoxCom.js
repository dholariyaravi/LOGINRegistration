import React, { useState } from 'react';
// import { data } from '../Json';
import Boximg2 from '../Componet/Boximg2';

const BoxCom = () => {
  
  const [bill, setbill] = useState();


  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-1'></div>
          <div className='col-lg-5'>
            <Boximg2 />
          </div>
          <div className='col-lg-5'>
            <Boximg2 />
          </div>
          <div className='col-sm-1'></div>
        </div>
      </div>
    </>
  );
};



export default BoxCom;


