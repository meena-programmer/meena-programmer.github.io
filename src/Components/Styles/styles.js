import { makeStyles } from '@material-ui/core/styles';

const useAppBarStyles = makeStyles((theme)=>({
    
    appbarTrigger:{
        boxShadow:"5px 0px 27px -5px rgba(0, 0, 0, 0.3) !important"
    },
    menuLink:{
      flexGrow:0.5,
    },
    menu:{        
        borderRadius:20,
        fontSize:11, 
        paddingInline:'4%', 
    },
    
    ToolBarXS:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
    },
    menuXS:{       
        borderRadius:20,
        fontSize:11,     
    },
    HireMeXS:{
        marginInline:'30%',
        marginBlock:'5%',
        width:'48%',
        borderRadius:20,
        fontSize:11, 
    },
    HireMeXSLink:{        
      paddingBlock:'2%', 
      width:'100%',            
    },
    NameMenu:{
        flexGrow:3,        
        fontSize:18,
        fontWeight:600
    },
    profileIconMD:{
        maxWidth:'3%',        
        marginInline:'2%'
    },
    profileIconXS:{
        maxWidth:'6%',        
        marginInline:'2%'
    },
    
  }));

  const useProfileStyles = makeStyles((theme)=>({
    profileContainer: {
        maxWidth:'100%',
        margin:0,
        position:'relative',
        zIndex:1,
      },
      profileContainerDuplicate: {             
        position:'relative',
      },
    profileImageXS:{
        marginTop:'25%',
        marginBottom:'10%',
        height:'100%',
         width:'100%',         
    },
    profileImageMD:{
        // marginTop:'10%',
        // height:'70%',
        //  width:'70%',
        //  marginLeft:'15%',
        marginTop:'10%',
        height:'100%',
         width:'100%',
    },
    ProfileContentMD:{
        paddingLeft:'15%',
    },
    sideNameMD:{
       position:'absolute',
       top:35,
       left:0,
       maxWidth:'10%'
    },
    sideNameXS:{
      position:'absolute',
      top:10,
      left:0,
      maxWidth:'15%'
   },
    sideDecorationMD:{
      position:'absolute',
      bottom:0,
      left:0,
      maxWidth:'15%'
   },  
   sideDecorationXS:{
    position:'absolute',
    bottom:0,
    left:0,
    maxWidth:'25%'
 },  
 sideDecoration2MD:{
  position:'absolute',
  bottom:25,
  right:0,
  maxWidth:'25%'
},  
sideDecoration2XS:{
position:'absolute',
top:180,
right:30,
maxWidth:'35%'
},  
    NameFont:{
        fontSize:28,
        fontWeight:700
    },
    subtitleFont:{
        fontSize:16,
        fontWeight:600
    },
    subtitleFont2:{
        fontSize:13,
        fontWeight:600
    },
    DownloadCV:{
        borderRadius:20,
        marginBottom:'10%',
        paddingInline:'13%',
        fontSize:13
    }
  }));

  const useProjectStyles = makeStyles((theme)=>({
      projectContainer:{
        zIndex:-1,  
        paddingBottom:'5%'      
      },
      title:{
        fontSize:22,
        fontWeight:700,       
        paddingBottom:'2%',
        paddingTop:'7%',
      },
      ProjectTitle:{
        textTransform: 'capitalize',
        fontSize:14,
        fontWeight:500,
      },
      ProjectSubTitle:{
        textTransform: 'capitalize',
        fontSize:10,
        fontWeight:500,
      },
      ProjectTab:{        
        opacity:1,
        width:'75%',
        zIndex:1,
        boxShadow:`5px 0px 27px -5px ${theme.palette.primary.main} !important`
      },
      ProjectTabXS:{        
        width:'80%',
        marginBlock:'5%',
        marginInline:'10%', 
        paddingLeft:'10%',
        paddingBlock:'5%',
        boxShadow:`5px 0px 27px -5px ${theme.palette.primary.main} !important`,
        borderRadius:8,
        zIndex:1,
      },
      tabGrid:{
          position:'relative',
      },
      Divider:{
          position:'absolute',
          bottom:'10%',
          left:'16%',
          zIndex:0,
      },
      DividerXS:{
        position:'absolute',
        bottom:'10%',
        left:'25.5%',
        zIndex:0,
    },
      ProjectPanel:{
          display:'flex',
          marginBlock:'2%',
          backgroundColor:theme.palette.primary.main,
          padding:'5%',
          paddingInline:'5%',
          width:'100%',
          alignSelf:'stretch',
          borderRadius:10,
          position:'relative'
      },

      ProjectPanelDuplicate:{    
        position:'relative'
    },

      ProjectPanelXS:{
        backgroundColor:theme.palette.primary.main,        
        borderRadius:10,     
        width:'109%',        
    },
    ProjectPanelXS2:{     
      width:'100%', 
      position:'relative',
    },
    ProjectPanelXSDuplicate:{
      position:'relative',
    },
    step:{
      zIndex:1,
    },
      ProjectPanelTitle:{
        textTransform: 'capitalize',
        fontSize:18,
        fontWeight:600,
        marginBlock:'5%',
      },
      ProjectPanelContent:{
        fontSize:14,
        fontWeight:500,
        margin:'5%',
      },
      ProjectPanelChip:{
        marginInline:'5%',
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        '& > *': {
          margin: theme.spacing(1),
        },
      },
      ProjectPanelLink:{
        marginBlock:'5%',
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        '& > *': {
          margin: theme.spacing(0.5),
        },
      },
      sideDecoration:{
        position:'absolute',
        bottom:0,
        right:0,
        maxWidth:'25%',
      }, 
  }));


  
  const useSkillStyles = makeStyles((theme)=>({
    skillContainer:{
      backgroundColor:theme.palette.primary.main,      
      overflow:'hidden',
      width:'100%',
      paddingBlock:'5%',      
      position:'relative',      
    },
    title:{
      fontSize:22,
      fontWeight:700,
      paddingBlock:'3%',
    },
    skillTitle:{
      textTransform: 'capitalize',
      fontSize:14,
      fontWeight:500,
    },
    subtitle:{
      marginBlock:'1%',
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
        flexWrap: 'wrap',
        '& > *': {
          margin: theme.spacing(1),
        },
    },
    sideDecorationMD:{
      position:'absolute',
      bottom:20,
      left:0,
      maxWidth:'15%',
    }, 
    sideDecorationXS:{
      position:'absolute',
      bottom:100,
      left:0,
      maxWidth:'20%',
    }, 
}));

const useFooterStyles= makeStyles((theme)=>({
  footerContainer:{
    overflow:'hidden',
    paddingBlock:'5%'
  },
  heart:{
    color:'red',
    paddingTop:'2%'
  },
}));

  export {useAppBarStyles,useProfileStyles,useProjectStyles,useSkillStyles,useFooterStyles}