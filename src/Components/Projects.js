import {  Typography, Grid, Hidden, Tab, Tabs, Divider, Chip, Box, Link,Paper} from '@material-ui/core';
import {StepContent,Step,StepLabel,Stepper} from '@material-ui/core';
import React from 'react';
import { useProjectStyles } from './Styles/styles';
import FiberManualRecordRoundedIcon from '@material-ui/icons/FiberManualRecordRounded';
import {GitHub} from '@material-ui/icons';
import {projects} from './Datas/getData';
import BackgroundContainer from './BackgroundContainer';
import dark_d7 from './Images/Decorations/dark/decoration7.svg';
import {Link as Scroll} from 'react-scroll';

function TabPanel(props) {
    const { children, value, index } = props;
    return (
      <div>
        {value === index && (
          <Box style={{height: "100%",}}>
            {children}
          </Box>
        )}
      </div>
    );
  }

function AboutProject(props){
    const {project,color}=props;
    const classes=useProjectStyles();
    return(
      <>      
        <Typography className={classes.ProjectPanelTitle} color={color} align='center'>{project.name}</Typography>                                                
        <Typography className={classes.ProjectPanelContent} color={color} align='center'>{project.about}</Typography>
        <Box className={classes.ProjectPanelChip}>
        {project.tools.map((item,index)=>{
              return(                                            
                <Chip key={index} label={item} color='secondary'/>
              )})}
        </Box>
        <Link color={color} href={project.githubLink}>
          <Box className={classes.ProjectPanelLink}>
            {project.githubLink && <GitHub />}
            <Typography className={classes.ProjectPanelContent} align='center'>{project.projectLink}</Typography>          
        </Box>
        </Link>
      </>
    )
}

function ProjectTab(props)
{
  const {project,color,spacing,icon}=props;
  const classes=useProjectStyles();

  return(
                <Grid container justifyContent="center" alignItems="center" spacing={spacing}>                                        
                    <Grid item>
                       {icon && <FiberManualRecordRoundedIcon color={color} fontSize="small"/> }
                    </Grid>  
                    <Grid item xs={9}>
                        <Typography color={color} className={classes.ProjectTitle}>{project.name}</Typography>                                                
                        <Typography color={color} className={classes.ProjectSubTitle}>{project.platform}</Typography>
                    </Grid>                                                                    
                </Grid>
  )
}

const stepIcon=()=>{
  return(
      <FiberManualRecordRoundedIcon color='primary' style={{fontSize:14}}/>
  )
}

function Projects(props) {
        const classes=useProjectStyles();
        const [value, setValue] = React.useState(0);
        const [activeStep, setActiveStep] = React.useState(0);

        const handleChange = (event, newValue) => {
          setValue(newValue);
        };
        const handleSteps = step => {
          setActiveStep(step);
        };

        return (           
            <div id="PROJECTS" className={classes.projectContainer}>             
              <Typography className={classes.title} align='center'>Projects</Typography>
              <Hidden smDown>
                <Grid container justifyContent='center' alignItems="center">
                  <Grid item md={3} className={classes.tabGrid} >                  
                      <Tabs orientation="vertical" value={value} onChange={handleChange}                                                                                                                                       
                            TabIndicatorProps={{style: {height:1}}}>
                        
                        {projects.map((project,index)=>{
                         return(
                            <Tab className={classes.ProjectTab} key={index}
                              label={
                                      <ProjectTab project={project} spacing={1} icon={true}/>
                                    } />)})}
                           <Divider orientation="vertical" flexItem className={classes.Divider} />               
                        </Tabs>                                                
                  </Grid>
                  <Grid item md={7} className={classes.ProjectPanel}>  
                      <img src={dark_d7} className={classes.sideDecoration} alt="Logo" />
                      <BackgroundContainer color="light"/>                    
                      {projects.map((project,index)=>{                           
                            return(
                                <TabPanel value={value} index={index} key={index}> 
                                    <Box className={classes.ProjectPanelDuplicate}>
                                        <AboutProject project={project} color='secondary'/>
                                    </Box>                                   
                                </TabPanel>)})}
                  </Grid>
                </Grid>
              </Hidden>

              <Hidden mdUp>
              <Grid container className={classes.tabGrid} justifyContent='center' alignItems="center" direction="column">                                              
                
                        <Stepper activeStep={activeStep} orientation="vertical" connector="false" >
                          {projects.map((project, index) => (
                            <Step key={index} className={classes.step}>   
                                         <Scroll to={index-1} smooth={true} offset={0}> 
                             {activeStep!==index &&                                                                
                                 <Paper className={classes.ProjectTabXS}> <StepLabel onClick={()=>handleSteps(index)} StepIconProps={{completed:"false"}}
                                            StepIconComponent={stepIcon}>
                                    <ProjectTab project={project} spacing={1} color='primary' icon={false}/>
                                  </StepLabel></Paper>
                                }</Scroll>
                              <StepContent className={classes.ProjectPanelXS}>
                                
                                <Box className={classes.ProjectPanelXS2}>
                                  <BackgroundContainer color="light"/>
                                    <img src={dark_d7} className={classes.sideDecoration} alt="Logo" />  
                                    <Box className={classes.ProjectPanelXSDuplicate} id={index}>                                
                                      <AboutProject project={project} color='secondary'/>
                                    </Box>
                                </Box>
                              </StepContent>                              
                            </Step>
                          ))}
                           <Divider orientation="vertical" flexItem className={classes.DividerXS} />                                                            
              
                      </Stepper>                     
                 
                </Grid>
              </Hidden>
            </div>
        );
}
export default Projects;