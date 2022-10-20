import {
  Container,
  Typography,
  Grid,
  Button,
  Box,
  Hidden,
  Link,
} from '@material-ui/core'
import React from 'react'
import { useProfileStyles } from './Styles/styles'
import { myProfile } from './Datas/getData'

import BackgroundContainer from './BackgroundContainer'

import dark_d7 from './Images/Decorations/dark/decoration7.svg'
import dark_d8 from './Images/Decorations/dark/decoration8.svg'

const GridprofileDP = (props) => {
  return (
    <Grid item xs={9} md={8}>
      <img src={myProfile.DP} className={props.className} alt="Logo" />
    </Grid>
  )
}

const GridProfileContent = (props) => {
  const classes = useProfileStyles()
  return (
    <Grid item xs={7} md={4} className={props.className}>
      <Typography
        gutterBottom={true}
        className={classes.NameFont}
        align={props.align}
      >
        {myProfile.name}
      </Typography>
      <Typography
        gutterBottom={true}
        className={classes.subtitleFont}
        align={props.align}
      >
        {myProfile.role}
      </Typography>
      <Typography
        gutterBottom={true}
        paragraph
        className={classes.subtitleFont2}
        align={props.align}
      >
        {myProfile.technologies}
      </Typography>
      <Typography
        gutterBottom={true}
        paragraph
        variant="subtitle2"
        color="textSecondary"
        align={props.align}
      >
        {myProfile.tools}
      </Typography>
      {/* <Box textAlign={props.align}>
        <Link href={myProfile.CV} download underline="none">
          <Button
            className={classes.DownloadCV}
            variant="contained"
            color="primary"
          >
            Dowload CV
          </Button>
        </Link>
      </Box> */}
    </Grid>
  )
}

function Profile(props) {
  const classes = useProfileStyles()

  return (
    <Container className={classes.profileContainer} id="HOME">
      <BackgroundContainer color="dark" />
      <Box className={classes.profileContainerDuplicate}>
        <Hidden mdUp>
          <img
            src={myProfile.nameImage}
            className={classes.sideNameXS}
            alt="Logo"
          />
          <img src={dark_d8} className={classes.sideDecorationXS} alt="Logo" />
          <img src={dark_d7} className={classes.sideDecoration2XS} alt="Logo" />
        </Hidden>
        <Hidden smDown>
          <img
            src={myProfile.nameImage}
            className={classes.sideNameMD}
            alt="Logo"
          />
          <img src={dark_d8} className={classes.sideDecorationMD} alt="Logo" />
          <img src={dark_d7} className={classes.sideDecoration2MD} alt="Logo" />
        </Hidden>

        <Grid container justifyContent="center" alignItems="center">
          <Hidden mdUp>
            <GridprofileDP className={classes.profileImageXS} />
            <GridProfileContent align="center" />
          </Hidden>

          <Hidden smDown>
            <GridProfileContent
              align="left"
              className={classes.ProfileContentMD}
            />
            <GridprofileDP className={classes.profileImageMD} />
          </Hidden>
        </Grid>
      </Box>
    </Container>
  )
}

export default Profile
