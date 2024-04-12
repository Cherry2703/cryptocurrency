import React from "react";
import ProfileInfo from "../Components/ProfileInfo";



// import { useEffect, useState } from "react";

// import ProfileInfo from "../Components/ProfileInfo";
// import PopulationGraph from "./PopulationGraph";

// const Dashboard=()=>{

//     const [populationData,setPopulationData]=useState([])
//     const [populationTakenInfo,setPopulationTakenInfo]=useState("")
//     //  const [description,setDescription]=useState("")
//     //  const [data,setData]=useState([])
//     //  const [timeUpdate,setTimeUpdate]=useState("")


// useEffect(()=>{
//     getPopulationData()
//     getData()
// },[])
   
// 




//     return(
//         <div>
//             <ProfileInfo/>
//             
//                  {/* <div className="recent-post-cont">
//                     <div>
//                         <h3>Last Updated</h3>
//                         <p>Time : {timeUpdate}</p>
//                     </div>
//                     <div className="currency-container-cont">
//                          <div className="currency-container">
//                             <p>{data && data.bpi.USD.code}</p>
//                             <p>{data && data.bpi.USD.rate} </p>
//                         </div>
//                         <div className="currency-container">
//                             <p>{data &&data.bpi.EUR.code}</p>
//                             <p>{data && data.bpi.EUR.rate} </p>
//                         </div>
//                         <div className="currency-container">
//                             <p>{data && data.bpi.GBP.code}</p>
//                             <p>{data && data.bpi.GBP.rate} </p>
//                         </div> 
//                     </div>
                 
//                     <p>{description}</p>
//                 </div>  */}

//             </div>
//         </div>
//     )
// }

// export default Dashboard




const History =()=>{
    return(
        <div>
            <ProfileInfo/>
            <div className="cont-page">
                <div>
                    <h1>You are now in,History Page</h1>
                </div>
            </div>
        </div>
    )
}


export default History