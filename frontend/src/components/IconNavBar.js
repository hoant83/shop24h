import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button, Container, Navbar } from "react-bootstrap"
import { faBell, faCircleUser, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useNavigate, useParams } from "react-router-dom";
import { Menu, MenuItem } from "@mui/material";
import { useEffect, useState } from 'react';
import { auth, googleProvider } from '../firebase';
function IconNavBar ({user}){
    console.log(user)
    const navigate = useNavigate();
    const goToLoginPage = () => {
        navigate("/login");
    }
    const onLogOutClick = () => {
        auth.signOut()
        .then(() => {
            //setUser(null)
        })
        .catch((error) => {
            console.log(error)
        })
    }
    // khối menuItem
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
            <>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text style={{fontSize: 20}}>
                        {(user == undefined || user == null) ? <div><FontAwesomeIcon type="button" onClick={goToLoginPage} className="text-success ms-2" icon={faCircleUser}/> <small type="button" onClick={goToLoginPage} className="ms-2 mr-2">Đăng nhập</small> 
                        <FontAwesomeIcon className="text-warning ms-2 mr-2" icon={faBell}/> 
                        <FontAwesomeIcon className="text-danger ms-2" icon={faCartShopping}/></div>
                        : <div>
                                <img
                                    id="user"
                                    aria-controls={open ? 'user-menu' : undefined}
                                    
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={handleClick}
                                    src={user.photoURL} style={{width: 30, height: 30, borderRadius: 30}} 
                                >
                                </img>
                                <small
                                    id="user"
                                    aria-controls={open ? 'user-menu' : undefined}
                                    
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={handleClick}
                                    type="button" className="ms-2 mr-2"
                                >
                                    {user.displayName}
                                </small> 
                                
                                <Menu
                                    id="user-menu"
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    MenuListProps={{
                                    'aria-labelledby': 'user',
                                    }}  
                                >
                                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                                    <MenuItem onClick={handleClose}>My account</MenuItem>
                                    <MenuItem onClick={onLogOutClick}>Logout</MenuItem>
                                </Menu>
                            <FontAwesomeIcon className="text-warning ms-2 mr-2" icon={faBell}/> 
                            <FontAwesomeIcon className="text-danger ms-2" icon={faCartShopping}/></div>
                    }
                        
                    </Navbar.Text>
                </Navbar.Collapse>
            </>
    )
}
export default IconNavBar