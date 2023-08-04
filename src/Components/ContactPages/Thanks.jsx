import React, { useState, useEffect } from 'react'
import thanks_loader from '../../images/thanks-loader.gif'
import '../../Elements/Thanks.css'

const Thanks = ({isSubmitted}) => {
    const [isLoaderActive, setIsLoaderActive] = useState(true);
    useEffect(() => {

        if(isSubmitted){
            //setTimeout : it will  run that function for only specific period of time for eg if i want to run loader for only 1500 seconds then i will use setTimeout
            //SetInterval function :  will call the function every time_delay seconds you have written as below 1500 it will call again and again
            const setLoader = setTimeout(() => {
                setIsLoaderActive(false);
            }, 1000);
        }

    
    
     
    }, [])
    
  return (
    <>
        <div className='thanks-wrapper'>
            <div className="loader" style={{display:isLoaderActive ? "block" : "none"}}>
                <img src={thanks_loader} alt="" />

            </div>
            <div className="thanks-msg" style={{display: isLoaderActive ? "none":"block"}}>
                <span>🎉 Thanks for reaching out! We'll be in touch soon. 📞</span>
            </div>
            
        </div>
    </>
  )
}

export default Thanks