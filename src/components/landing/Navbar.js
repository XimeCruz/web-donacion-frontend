import React, {useState} from 'react';
import Logo from "../../../src/assets/Logo.svg";

import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const navigate = useNavigate();

    const menuOptions = [
        {
        text: "Inicio",
        icon: <HomeIcon />,
        },
        {
        text: "Nosotros",
        icon: <InfoIcon />,
        },
        {
        text: "¿Cómo trabajamos?",
        icon: <CommentRoundedIcon />,
        },
        {
        text: "Empresas aliadas",
        icon: <PhoneRoundedIcon />,
        },
        {
        text: "Contacto",
        icon: <ShoppingCartRoundedIcon />,
        },
    ];

    const handleQuieroAyudar = () => {
        navigate('/formOrg');
      };
    
      const handleRegDon = () => {
        navigate('/regdon');
      };
     
    return (
        <nav>
            <div className="nav-logo-container">
                <img src={Logo} alt="" />
            </div>
            <div className="navbar-links-container">
                <a href="#nosotros">Nosotros</a>
                <a href="#trabajo">¿Como trabajamos?</a>        
                <a href="#empresas">Empresas aliadas</a>
                <a href="#contactos">Contacto</a>
                <button className="primary-button" onClick={handleQuieroAyudar}>
                    Recibir ayuda
                </button>
                <button className="primary-button" onClick={handleRegDon}>
                    Quiero donar
                </button>
                
                </div>
            <div className="navbar-menu-container">
                <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
            </div>
            <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
                <Box
                sx={{ width: 250 }}
                role="presentation"
                onClick={() => setOpenMenu(false)}
                onKeyDown={() => setOpenMenu(false)}
                >
                <List>
                    {menuOptions.map((item) => (
                    <ListItem key={item.text} disablePadding>
                        <ListItemButton>
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.text} />
                        </ListItemButton>
                    </ListItem>
                    ))}
                </List>
                <Divider />
                </Box>
            </Drawer>
        </nav>
    );
};

export default Navbar;




