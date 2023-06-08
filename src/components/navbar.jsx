import YTLogo from '../images/youtubelogo.png'
import Notification from '../images/notification.png'
import Videologo from '../images/videologo.png'
import '../styles/navbar.css'
function Navbar()
{
    return(
        <div className="navbar">
        <div className="logo">
            <img  width={80} src={YTLogo} alt="" />
        </div>
        <div className="searchbar">
        <input type="text" placeholder="Search"/>
        </div>  
        <div className="useroptions">
            <img  width={35} src={Videologo} alt="" />
            <img width={35} src={Notification} alt="" />
            <h4>V</h4>
            </div>  
        </div>
    )
}
export default Navbar;