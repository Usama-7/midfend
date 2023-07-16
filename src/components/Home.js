import React from 'react'
import Notes from './Notes';
import AddNotes from './AddNotes';

const Home = () => {
    return ( 

        <>
        


       <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="./images/cover2.webp" height={500} className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block text-dark">
        <h2>Add Notes on Daily Bases</h2>
       
      </div>
    </div>
    <div className="carousel-item">
      <img src="./images/cover5.webp" height={500} className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block text-dark">
      <h2>Delete Any Note You Added</h2>
      </div>
    </div>
    <div className="carousel-item">
      <img src="./images/cover.webp" height={500} className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block text-dark">
      <h2>You can Edit any note</h2>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>



<Notes/>
<AddNotes/>

        </>
     );
}
 
export default Home