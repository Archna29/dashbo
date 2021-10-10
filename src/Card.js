import React from 'react';
import Cardgrid from './Cardgrid';
import Belowgrid from './Belowgrid';
import UpcomingPay from './UpcomingPay';
const Card = () => {
    return (
        <>
       <div id ="container">
       <h4>Hello matt</h4>
       <div class="row row row-cols-1 row-cols-md-3 g-3">
       <div class="col"> 
            <div className="card">
  <div className="card-body">
  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADh
  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" 
  className="img-fluid rounded-start float-start"  id="logo" alt="..."/>
    <h5 className="card-title mt-3"> Upcoming Workout</h5>
    </div>
    <div className="carddata mx-auto border border-success border-3 rounded w-75">
    <h6 className="card-title m-2 mx-3 ">Next Workout in</h6>
    <h4 className="card-subtitle mb-1  mx-3 text-success">2 days</h4>
    <h6 className="card-subtitle mb-3 mx-3 text-danger">10:00, 12 Oct 2020</h6></div>
    <h6 className="card-subtitle mx-5 mt-3 mb-0">EmS Budy Studio</h6>
    <p className="card-text m-1 mx-5">kosfjlksdjf 11-258 km</p>
    <a href="#" className="btn btn-success mb-3">Workout schedule</a>
</div>
</div>

  <div className="col">
   <Cardgrid heading="Remaining Workout"
   comp={<Belowgrid/>}
   />
 </div>
 <div className="col">
   <Cardgrid heading="Completed workouts" 
     comp={<UpcomingPay/>}
   />
 </div> 
 
</div>
</div>
        </>
    )
}
export default Card;