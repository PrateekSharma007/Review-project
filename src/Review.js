import React, { useState } from 'react'
import reviews from './Data'
// import Data from "./Data"

export default function Review() {

    const [index, setIndex] = useState(0)
    const { name, job, image, text } = reviews[index]



    const checkNumber = (number) => {
        if(number > reviews.length-1 ){
            return 0
        }
        if (number <0){
            return reviews.length - 1
        }
        return number
    }
    const nextPerson = () => {
        // console.log(-1)
        setIndex(index => {
            let newIndex = index + 1
            return checkNumber(newIndex) ;
        })
    }

    const prevPerson = () => {
        
        setIndex(index => {
            let newIndex = index - 1;
            return checkNumber(newIndex);
        })
    }

    return (

        <div className="box">
            <div className="review">
                <span><i className="fa-solid fa-quote-right"></i></span>
                <img src={image} alt={name} />
            </div>
            <div className="info">
                <h4>{name}</h4>
                <p>{job}</p>
                <p>{text}</p>
            </div>
            <button className = "left" onClick={prevPerson}><i className="fa-solid fa-angles-left"></i></button>
            <button className="right" onClick={nextPerson}><i className="fa-solid fa-angles-right"></i></button>

        </div>







    )
}
