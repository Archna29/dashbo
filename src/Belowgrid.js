import React from 'react'

const Belowgrid=()=> {
    return (
        <>
           <div className="card mt-1">
  <div className="card-body ">
    <h6 className="card-title mt-1">My services
    <i class="fa fa-ellipsis-h float-end" aria-hidden="true"></i>
    </h6>
    <h6 className="card-subtitle mx-0 text-success  ">EMS workout</h6></div>
    <div className="d-flex mx-3 mt-1 border-top border-2 border-muted">
  <div className=" mt-2 ms-3 w-50 bd-highlight">Type</div>
  <div className="mt-2 w-50 bd-highlight">Expire in</div>
</div>
<div className="d-flex mx-3 mt-1">
  <h6 className=" ms-3 w-50 text-dark">EMS Workout</h6>
  <h6 className=" w-50 text-danger">256 days</h6>
</div>
<div className="d-flex mx-3 mt-1 text-muted border-top border-1 border-muted">
  <p className=" ms-3 mt-2 w-50 ">Workout Amount</p>
  <p className=" w-50 mt-2 ">Remaining</p>
</div>
<div className="d-flex mx-3 text-dark ">
  <p className=" ms-3 w-50 ">1200</p>
  <p className=" w-50  ">25</p>
</div>
    </div>  
        </>
    )
}

export default Belowgrid;
