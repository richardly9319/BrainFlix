import logo from '../../assets/Logo/BrainFlix-logo.svg';
import './Navbar.scss';
import userImage from '../../assets/Images/Mohan-muruge.jpg';
import uploadIcon from '../../assets/Icons/upload.svg'
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="navbar">
            <Link to="/">
            <img className="navbar__logo" src={logo} alt="logo" />
            </Link>
            <div className="navbar__searchBar-and-Img-and-Button1">
                <input className="navbar__searchBar" type="text" placeholder="Search"/>
                <Link to='/VideoUpload'>
                <Button visibility="1" icon={uploadIcon} text="Upload" />
                </Link>
                <img className="navbar__userImage" src={userImage} alt="user" />
            </div>
            <Link to='/VideoUpload'>
            <Button visibility="2" icon={uploadIcon} text="upload"/>
            </Link>
        </div>
    )
}

export default Navbar;  

































