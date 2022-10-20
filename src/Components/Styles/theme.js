
import { createTheme } from '@material-ui/core/styles';
const font =  "'ProductSans-Bold', Product Sans";

const primary = "#632cf8";
const secondary = "#fff";
const defaultColor = "#F8F8FF";
const active  = "#000";

const textSecondary = "#303030";
const transparent = "#ffffff00";

const theme = createTheme({
  overrides: {
    MuiAppBar:{
      root:{
        borderRadius:25,
        boxShadow: 'none',
        transition: '.5s',
      },
      positionFixed:{
        top:20,
        left:0,        
      },      
    },
    MuiTabs: {
      indicator: {
        backgroundColor: primary,  
        marginTop:'11%',
        width:'20%',               
      }
    },
    MuiTab: {
      textColorInherit:{
        color: primary,
        opacity:1,
        paddingBlock:'6%',
      },
      root: {
        backgroundColor: secondary,        
        boxShadow:`0 0 8px ${primary}`,
        borderRadius:5,       
        margin:'5%',
          "&:hover": {
            backgroundColor: secondary,
            color: primary
          },
          "&$selected": {
            backgroundColor: primary,
            color: secondary,          
          }
      },      
    },
    MuiDivider:{
      root:{
        backgroundColor:primary,
      },
      flexItem:{
        height:'80%',
      }
    },
    MuiStepper:{
      root:{
        backgroundColor:transparent,
        color: secondary,
      }
    },
    MuiStepConnector:
    {
      root:{
        padding:0
      },
      vertical:{
        padding:0
      },
  },
  MuiStepContent:{
    root:{
      marginLeft:'-15px',
      padding:0,
      width:'110%'
    }
  },
  MuiChip:{
    root:{
        height:'5%',
        paddingBlock:'0.75%',
        fontSize:12,
    }
  },
  MuiSnackbarContent:{
    root:{
        color:primary,
        backgroundColor:secondary,
    }
  },
  MuiTypography:
  {
    colorPrimary:{color:primary},
    colorSecondary:{color:secondary},
    colorTextPrimary:{color:active},
    colorTextSecondary:{color:textSecondary}  
  }
  },
  typography: {
    fontFamily: font, 
    
  },
  palette: {
    primary: 
    {    
        main: primary,           
    },
    secondary: 
    {    
        main: secondary,                      
    },
  },

});
  
export {theme}