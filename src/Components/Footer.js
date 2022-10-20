import { Grid,Typography,Link,Hidden,Snackbar,Stepper,Step,StepLabel,Grow} from '@material-ui/core';
import React from 'react';
import { useFooterStyles } from './Styles/styles';
import {socialMedia} from './Datas/getData';
import {Favorite,CloseRounded,FileCopyRounded} from '@material-ui/icons';

function Footer(props) {
        const [activeStep, setActiveStep] = React.useState(-1);
        const [open, setOpen] = React.useState(false);
        const [contacts, setContacts] = React.useState({});

        const classes = useFooterStyles();   
        
        const handleSteps = step => {
            setActiveStep(step);
          };
        
          const stepIcon=(i,socialMedia)=>{
            return(
                <Link onClick={()=>handleSteps(i)}>
                    {socialMedia}
                </Link>                
            )
          }                      
            const handleClick = (contact) => {
                setOpen(true);
                setContacts(contact)
            };

            const handleClose = () => {
                setOpen(false);
                setContacts({});
            };

        return (           
            <div className={classes.footerContainer} id="CONTACT">             
                <Grid container justifyContent="center" alignItems='center' spacing={3}>  
                    <Hidden smDown>
                        <Stepper activeStep={activeStep} connector={false}>
                            {socialMedia.map((contact,index) => {
                            return (
                                <Step key={index}>              
                                <StepLabel StepIconComponent={()=>stepIcon(index,contact.socialMedia)} >                
                                    {(index===activeStep) && 
                                        <Grow in={true}
                                        style={{ transformOrigin: '0 0 0' }}{...({ timeout: 500 })}>
                                              <Link href={contact.link} underline={contact.link?'hover':'none'}> 
                                                    {contact.iconData}
                                              </Link>
                                        </Grow>
                                    }
                                </StepLabel>
                                </Step>
                            );
                            })}
                        </Stepper>
                    </Hidden>  
                    <Hidden mdUp>
                        {socialMedia.map((contact,index) => (
                            <Grid key={index} item>
                                <Link onClick={()=>handleClick(contact,index)}> 
                                    {contact.socialMedia}
                                </Link>                                                    
                            </Grid>
                        ))}
                        {open && <Snackbar
                                        anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'center',
                                        }}
                                        autoHideDuration={6000}
                                        open={open}
                                        onClose={handleClose}
                                        action={<Grid item><CloseRounded fontSize="small" onClick={handleClose} /></Grid>}
                                        message={
                                        <Grid container spacing={1} alignItems='center' justifyContent='center'>
                                            <Grid item>{contacts.socialMedia}</Grid>
                                            <Grid item><Link href={contacts.link} underline={contacts.link?'always':'none'} color='primary'>{contacts.iconData}</Link></Grid>
                                        </Grid>
                                        }                                                                                                                   
                                    />}
                    </Hidden>               
                </Grid>
                <Grid container justifyContent="center" alignItems='center' spacing={3}>
                        <Grid item>
                            <Typography variant="body2" align='center' color='textPrimary'>
                                    Made with <Favorite fontSize="small" className={classes.heart} /> in India
                            </Typography>
                        </Grid>
                </Grid>
            </div>
        );
}
export default Footer;