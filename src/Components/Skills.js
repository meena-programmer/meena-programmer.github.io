import { Typography,Hidden,Step,StepLabel,Stepper,Grid, Box,StepConnector} from '@material-ui/core';
import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import { useSkillStyles } from './Styles/styles';
import FiberManualRecordRoundedIcon from '@material-ui/icons/FiberManualRecordRounded';
import {skills,UIUX_Design} from './Datas/getData';
import BackgroundContainer from './BackgroundContainer';
import dark_d8 from './Images/Decorations/dark/decoration8.svg';

const stepIcon=()=>{
    return(
        <FiberManualRecordRoundedIcon style={{fontSize:14}}/>
    )
}

const CustomizedConnector = withStyles({
    line: {        
        position:'relative',
        left:-5,
        height:'35px'
      }
  })(StepConnector);
  

function Skills(props) {
        const classes = useSkillStyles();       
       
        var skillCount=skills.length;        

        const getGrid=split=>{
            var count=1;
            if(skillCount>8 && split) count=2;
            var elements=[];
            var indexFrom=0, indexTo=skillCount/count;

            for (var i = 0; i < count; i++) 
            {
                if(i===1) {indexFrom=skillCount/count; indexTo=skillCount}

                elements.push( 
                    <Grid item key={i}>
                        <Stepper orientation="vertical" connector={<CustomizedConnector />}>
                            {skills.map((skill, index) => {
                                if(index >= indexFrom && index < indexTo)  
                                    return(
                                        <Step key={index}>                      
                                            <StepLabel StepIconProps={{active:"true"}} active="true"
                                                        StepIconComponent={stepIcon}>
                                                <Typography color='secondary' className={classes.skillTitle}>{skill}</Typography>                                                                         
                                            </StepLabel>                      
                                        </Step>)
                                else return null
                                    })}
                        </Stepper>
                    </Grid>)
            }
            return elements;
        }
        return (           
            <div className={classes.skillContainer} id="SKILLS">
                
                <BackgroundContainer color="light"/>
              <Typography className={classes.title} align='center' color='secondary'>Skills</Typography>                      
                <Grid container justifyContent='center' spacing={6}>                
                   <Hidden mdUp>
                       <><img src={dark_d8} className={classes.sideDecorationXS} alt="Logo" /> {getGrid(false)}</>
                    </Hidden> 
                    <Hidden smDown>
                       <><img src={dark_d8} className={classes.sideDecorationMD} alt="Logo" /> {getGrid(true)}</>
                    </Hidden>
                </Grid>
                    {(UIUX_Design.length!==0) && 
                        <Box className={classes.subtitle}>
                            <FiberManualRecordRoundedIcon style={{fontSize:14}} color='secondary'/>
                        <Typography color='secondary' variant="subtitle2">UI/UX Designing</Typography>
                        </Box>
                    }
                <Grid container justifyContent="center" alignItems='center' spacing={4} 
                      style={{paddingInline:'1%'}}>
                    {UIUX_Design.map((item,index) => (
                        <Grid key={index} item>
                            <Box>
                             <center><img src={item.logo} height={50} alt="Logo" /></center>
                                <Typography variant="body2" align='center' color='secondary'>
                                    {item.name}
                                </Typography>  
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </div>
        );
}
export default Skills;