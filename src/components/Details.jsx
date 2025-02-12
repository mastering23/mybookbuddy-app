import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export const Details = () => {
  const item = useLocation();
  const navigate = useNavigate();

  return (
    <>   <h1>DETAILS</h1>
      <div>
    
        <h1>Title : {item.state.title} </h1> <br />
        <em>
        ID : {item.state.id} <br />
        Description : {item.state.description} <br />
        Create By Author : {item.state.author} <br />
        <br /><br /><br />
        </em>
      
        {<img src={item.state.coverimage.toString()} width="200" alt="book image" />} <br />
         <strong> Available : {item.state.available.toString()} </strong> <br /><br />


      </div>
      <button onClick={() => navigate('/api', { state: '' })}>Go back</button>  </>
  )
}
