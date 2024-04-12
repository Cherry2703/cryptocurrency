import { Component } from "react";

import { FaArrowUp } from "react-icons/fa6";
import { FaArrowDown } from "react-icons/fa";



import ProfileInfo from "../Components/ProfileInfo";
import PopulationGraph from "../Pages/PopulationGraph"


const assetsList=[
    {   
        id:1,
        logo:"NSBT",
        name:"Nature Based Solution Token",
        rate:"0.72 $",
        color:"#8ebd60",
        hike:"+11.01%",
        future:<FaArrowUp/>
    },
    {
        id:2,
        logo:"EFT",
        name:"Energy Efficency Token",
        rate:"0.36 $",
        color:"#afbd60",
        hike:"+9.15%",
        future:<FaArrowUp/>
    },
    {
        id:3,
        logo:"WPCT",
        name:"Energy Efficency Token",
        rate:"0.36 $",
        color:"#8ebd60",
        hike:"+11.01%",
        future:<FaArrowUp/>
    },
    {
        id:4,
        logo:"RET",
        name:"Energy Efficency Token",
        rate:"0.36 $",
        color:"#e6e33e",
        hike:"-0.56%",
        future:<FaArrowDown/>
    },
    {
        id:5,
        logo:"WET",
        name:"Energy Efficency Token",
        rate:"0.36 $",
        color:"#32d9bd",
        hike:"-1.48%",
        future:<FaArrowDown/>
    }
]

class Dashboard extends Component{

    state={data:[],assestsData:{},inf:"",description:"",timeUpdated:"",assetsData:[]}

    componentDidMount(){
        this.getPopulationData()
        this.getAssetsData()
    }

    getPopulationData=async()=>{
             const populationApi="https://datausa.io/api/data?drilldowns=Nation&measures=Population"
             const populationFetch=await fetch(populationApi)
            const populationFetchResponse=await populationFetch.json()
            const final=populationFetchResponse.data.map((each)=>({
                nation:each.Nation,
                year:each.Year,
                 population:each.Population
             }))
             this.setState({data:final})
             this.setState({inf:populationFetchResponse.source[0].annotations.source_description})
        }

    getAssetsData=async()=>{
     const api="https://api.coindesk.com/v1/bpi/currentprice.json"
     const res=await fetch(api)
     const resData=await res.json()
     this.setState({assestsData:resData.bpi})
     this.setState({description:resData.disclaimer})
    this.setState({assestsData:resData})
    this.setState({timeUpdated:resData.time.updated})
    }

    render(){
        const {data,inf,description,timeUpdated}=this.state

        
        return(
            <div>
                <ProfileInfo/>
                <div className="population-and-profile-cont">
                    <div className="population-graph-cont">
                        <PopulationGraph data={data} />
                        <p>{inf}</p>
                    </div>
                    <div className="recent-post-cont">
                        <h1>In Recent Posts</h1>
                        <hr/>
                        <p><span>Carbon Cell</span> Pioneering Financial Solutions for a Greener Future!</p>
                        <p>Read More: <a href="https://carboncell.medium.com/">https://carboncell.medium.com</a>
                        <br/>In a world where decarbonization is paramount, Carbon cell is leading the charge <br/>
                        to the redefine #carbon marketsFollowing this thread to learn how we are making<br/> sustainable....</p>
                    </div>
                    <div className="recent-post-cont">
                        <h3>Assets</h3>
                        <p>{description}</p>
                        <p>Time Updated : {timeUpdated}</p>
                        <ul className="assets-list-cont">

                            {assetsList.map(each=>(
                                <li key={each.id}>
                                    <div>
                                        <h4>{each.logo}</h4>
                                        <p>{each.name}</p>
                                        <div>
                                            <p>
                                                {each.price}
                                            </p>
                                            <p>{each.hike} {each.future}</p>
                                        </div>
                                        <button type="button" style={{background:each.color,padding:"10px",border:"none",borderRadius:"8px"}} >Trade</button>
                                    </div>
                                </li>
                            ))}

                            
                        </ul>
                    </div>
                </div>                   

                
            </div>
        )
    }
}

export default Dashboard