import React,{useState} from "react"
import { FaBars } from "react-icons/fa"
import { AiOutlineHome } from "react-icons/ai";
import { RiBuildingLine } from "react-icons/ri";
import { IoCubeOutline } from "react-icons/io5";
import { HiArrowsUpDown } from "react-icons/hi2";
import { CgSandClock } from "react-icons/cg";
import { FaWallet } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdContactSupport } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { HiDotsVertical } from "react-icons/hi";




import { NavLink } from "react-router-dom";

const Sidebar=({children})=>{
    const [isSideBarOpen,setIsSideBarOpen]=useState(false)
    const toggleSidebar=()=>setIsSideBarOpen(!isSideBarOpen)
    const menuItems=[
        {
            path:"/",
            name:"Home",
            icon:<AiOutlineHome/>
        },
        {
            path:"/organisation",
            name:"Organisation",
            icon:<RiBuildingLine/>
        },
        {
            path:"/assets",
            name:"Assets",
            icon:<IoCubeOutline/>
        },
        {
            path:"/trade",
            name:"Trade",
            icon:<HiArrowsUpDown/>
        },
        {
            path:"/history",
            name:"History",
            icon:<CgSandClock/>
        },
        {
            path:"/wallet",
            name:"Wallet",
            icon:<FaWallet/>
        }
    ]
return(
    <div className="container">
        <div style={{width : isSideBarOpen ?"300px":"50px"}} className="sidebar">
            <div className="top_section">
                <h1 style={{display: isSideBarOpen ? "block":"none"}}>Crypto Currencies</h1>
                <div style={{marginLeft:isSideBarOpen?"50px":"0px"}} className="bars">
                    <FaBars onClick={toggleSidebar}/>
                </div>
            </div>
            <div>
                {menuItems.map((item,index)=>(
                    <NavLink to={item.path} key={index} className="link" activeClassName="active">
                        <div className="icon">{item.icon}</div>
                        <div style={{display: isSideBarOpen?"block":"none"}} className="link_text">{item.name}</div>
                    </NavLink>
                ))
            }
            </div>
            <div>
                <div className="link">
                    <div className="icon"><IoIosNotificationsOutline/></div>
                    <div style={{display: isSideBarOpen?"block":"none"}} className="link_text">Notifications</div>
                </div>
                <div className="link">
                    <div className="icon"><MdContactSupport/></div>
                    <div style={{display: isSideBarOpen?"block":"none"}} className="link_text">Support</div>
                </div>
                <div className="link">
                    <div className="icon"><IoSettingsSharp/></div>
                    <div style={{display: isSideBarOpen?"block":"none"}} className="link_text">Notifications</div>
                </div>
                <div className="link">
                    <div className="icon"><CgProfile/></div>
                    <div className="profile-cont-sidebar">
                        <div className="profile-info-sidebar">
                            <p>Brooklyne Simmons</p>
                            <p>brooklyn@simmons.com</p>
                        </div>
                        <div className="icon"><HiDotsVertical/></div>
                    </div>
                </div>
            </div>
        </div>
        <main>{children}</main>
    </div>
)
}

export default Sidebar