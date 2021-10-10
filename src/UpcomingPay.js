import React from 'react'

function UpcomingPay() {
    return (
        <>
            <div className="card mt-1">
  <div className="card-body ">
    <h6 className="card-title mt-1">Upcoming Payment
    <i class="fa fa-ellipsis-h float-end" aria-hidden="true"></i>
    </h6>
    <p className="card-text m-1">Amount</p>
    <h5 className="card-title mt-1 ms-1 text-success">550,000</h5>
    <div className="d-flex mx-1 text-muted">
  <p className=" w-50 ">Deadline</p>
  <p className=" w-50  ">left installment</p>
</div>
 <div className="d-flex mx-1">
  <h6 className="w-50 text-danger">14.01.2020</h6>
  <h6 className=" w-50 text-dark ">10 inst</h6>
</div>
    <a href="#" className="btn btn-success m-2 w-75">Pay now</a>

    </div>
    </div>
        </>
    )
}

export default UpcomingPay;
