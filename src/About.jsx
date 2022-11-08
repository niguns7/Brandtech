import React from "react";
import Cdata from "./Cdata";
import Card from "./Card";


const About =() => {
    return(
        <>
    <div className="my-5 text-center" id="Hee" >
    <h1> About Us! </h1>
 
       <p> We are high skilled developers all over nepal Providing services since 2018 with 100+ happy clients </p>
   
    </div>

    <div className="container-fluid mb-5">
            <div className="row">
                <div className="col-7 mx-auto">
                <div className="row gy-4">
                
                {
                    Cdata.map((val, ind) => {
                        return <Card key={ind}
                            imgsrc={val.imgsrc}s
                            name={val.name}
                            title={val.title}
                        />
                    })
                }

                    </div>
                </div>
            </div>
        </div>

        </>
    );
};
export default About;