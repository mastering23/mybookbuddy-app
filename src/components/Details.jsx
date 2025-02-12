import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export const Details = () => {
  const item = useLocation();
  const navigate = useNavigate();

  return (
    <>   <h1>DETAILS COMPONENT IS WORKING</h1>
      <div>
        ID : {item.state.id} <br />
        Title : {item.state.title} <br />
        Description : {item.state.description} <br />
        Create By Author: {item.state.author} <br />
        Available :{item.state.available.toString()} <br /><br /><br />
        {<img src={item.state.coverimage.toString()} width="200" alt="book image" />} <br /><br />


      </div>
      <button onClick={() => navigate('/api', { state: '' })}>Go back</button>  </>
  )
}
