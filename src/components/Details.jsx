import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { BookImage } from './BookImage';

export const Details = () => {
  const item = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();


  return (
    <>
      <div id="main-details">
        <h1>DETAILS | ITEM : {id}</h1>
        <div>
          <h1>Title : {item.state.title} </h1> <br />
          <br />
          <figure>
            {<BookImage src={item.state.coverimage.toString()} width="200" height="350" alt="book image" />}
            <figcaption> <center><strong>Create by author : {item.state.author} </strong></center> </figcaption>
          </figure>
          <em>
            BOOK ID : {item.state.id}
            <br />
            <hr />
            <strong>Description : </strong>
            <i> {item.state.description} </i> <br />
          </em>


          {/* <strong> Available : {item.state.available.toString()} </strong> <br /><br /> */}
        </div>
        <button id="main-btn" onClick={() => navigate('/api', { state: item.state.id })}>Go back</button>
      </div>
    </>
  )
}
