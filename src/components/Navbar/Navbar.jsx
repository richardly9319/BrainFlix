import logo from '../../assets/Logo/BrainFlix-logo.svg';
import './Navbar.scss';
import userImage from '../../assets/Images/Mohan-muruge.jpg';
import uploadIcon from '../../assets/Icons/upload.svg'
import Button from '../Button/Button';

function Navbar() {
    return (
        <div className="navbar">
            <img className="navbar__logo" src={logo} alt="logo" />
            <div className="navbar__searchBar-and-Img-and-Button1">
                <input type="text" placeholder="Search"/>
                <Button visibility="1" icon={uploadIcon} text="Upload" />
                <img className="navbar__userImage" src={userImage} alt="user" />
            </div>
            <Button visibility="2" icon={uploadIcon} text="upload"/>
        </div>
    )
}

export default Navbar;  

































