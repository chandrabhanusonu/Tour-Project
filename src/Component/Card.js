import { useState } from "react";

function Card({id,name,info,image,price,removeTour}) {
    const [readmore,setReadmore ] = useState(false);
    const description = readmore ? info :`${info.substring(0,200)}...`;


    function readmoreHandler() {
        setReadmore(!readmore);
    }


    return(
        <div className="card">
            <img src={image} alt="" className="image" />
            <div>
                <div className="tour-details">
                    <h4 className="tour-price">{price}</h4>
                    <h4 className="tour-name">{name}</h4>
                </div>

                <div className="description">
                    {description}
                    <span onClick={readmoreHandler}>
                        {readmore?'Show Less' : 'Read More'}
                    </span>
                </div>
            </div>        
            
            <button onClick={() => removeTour(id)} className="btn-red">Not Intrested</button>
        </div>
    )
}

export default Card;