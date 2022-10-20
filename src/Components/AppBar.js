import {  useScrollTrigger,AppBar,Toolbar, Button, Typography, Hidden, Collapse , Box} from '@material-ui/core';
import MailTo from '@material-ui/core/Link';
import React, { useState } from 'react';
import { useAppBarStyles } from './Styles/styles';
import profileIcon from './Images/profileIcon.svg';
import {MenuRounded,CloseRounded} from '@material-ui/icons';
import {Link} from 'react-scroll';
import {myProfile} from './Datas/getData';

const MenuMD =(props)=>{
    const classes=useAppBarStyles();
    return (
        <Link className={classes.menuLink} to={props.text} spy={true} smooth={true}>
            <Button className={classes.menu}>{props.text}</Button>
        </Link>
    )
}
const MenuXS =(props)=>{
    const classes=useAppBarStyles();
    
    return (
        <Toolbar>  
            <Link to={props.text} spy={true} smooth={true}>
                <Button className={classes.menuXS} onClick={props.onClick}>{props.text}</Button>
            </Link> 
        </Toolbar>
    )
}

const HireMe=(props)=>{
    const {children,className}=props;
    return(
        <MailTo underline='none' color='secondary' className={className}
         href={"mailto:"+ myProfile.mail.id +"?subject="+myProfile.mail.subject+"&body="+ myProfile.mail.body}>
                {children}
        </MailTo>
    )
}

function Bar(props) {

        const [viewMenu,setViewMenu]=useState(false);
        
        const{width,margin,padding,iconProfile}=props;
        
        const classes=useAppBarStyles();
        
        const trigger = useScrollTrigger({
            disableHysteresis: true,
            threshold: 0,
            target: props.window ? window() : undefined
          });

        const viewMenuBar=()=>{
            setViewMenu((prev) => !prev);            
        }

        return (
                <AppBar color={trigger || viewMenu ? 'secondary':'transparent'} 
                        className={trigger || viewMenu ? classes.appbarTrigger:null}
                        elevation={trigger ? 24 : 0}
                        style={{width:width,marginInline:margin,paddingBlock:padding,}}>
                            
                            <Toolbar variant='dense'>
    
                                <img src={profileIcon} className={iconProfile} alt="Logo" />
                                <Typography className={classes.NameMenu} color='primary'> {myProfile.shortName}</Typography>

                                <Hidden xsDown>
                                        <MenuMD text="HOME"/>
                                        <MenuMD text="PROJECTS"/>
                                        <MenuMD text="SKILLS"/>
                                        <MenuMD text="CONTACT"/>
                                                                        
                                <Button className={classes.menu} onClick={viewMenuBar} variant="contained" color="primary">
                                    <HireMe>HIRE ME</HireMe>
                                </Button>

                                </Hidden>
                                <Hidden smUp>
                                    {!viewMenu &&<MenuRounded color="primary" onClick={viewMenuBar}/>}
                                    {viewMenu &&<CloseRounded color="primary" onClick={viewMenuBar}/>}
                                </Hidden>
                            </Toolbar>
                           
                            <Hidden smUp>                           
                                <Collapse in={viewMenu}>
                                    <Box elevation={4} className={classes.ToolBarXS}>
                                        <MenuXS text="HOME" onClick={viewMenuBar}/>
                                        <MenuXS text="PROJECTS" onClick={viewMenuBar}/>
                                        <MenuXS text="SKILLS" onClick={viewMenuBar}/>
                                        <MenuXS text="CONTACT" onClick={viewMenuBar}/>
                                        
                                        <Button className={classes.HireMeXS} onClick={viewMenuBar} variant="contained" color="primary">
                                            <HireMe className={classes.HireMeXSLink}>HIRE ME</HireMe>
                                        </Button>                                        
                                    </Box>
                                </Collapse>
                            </Hidden>                 
                </AppBar>
        );
}

function NavBar(props)
{
    const classes=useAppBarStyles();
    return(
        <>
            <Hidden smDown>
                <Bar width='80%' margin='10%' padding='0.4%' iconProfile={classes.profileIconMD}/>
            </Hidden>
            <Hidden mdUp>
                <Bar width='90%' margin='5%' iconProfile={classes.profileIconXS}/>
            </Hidden>
        </>
    )
}

export default NavBar;