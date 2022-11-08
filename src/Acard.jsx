import React from "react";


const Card =(props) => {
    return(
        <>
        
                <div className="col-md-4 col-10 mx-auto">
                <div className="card" >
                        <img src= {props.imgsrc} class="card-img-top" alt="imagess" />
                    <div className="card-body">
                        <h5 className="card-title font-weight-bold"> {props.name}</h5>
                        <h6 className="card-title font-weight-bold"> {props.title}</h6>
                    </div>
                    </div>
                        </div>
        </>
    );
};
export default Card;