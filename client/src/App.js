
import './App.css';
import * as React from 'react';
//import Box from '@mui/material/Box';
import { Container, AppBar, Typography, Grow, Grid } from '@mui/material';
//import { withStyles } from '@mui/styles';
//import { makeStyles } from '@mui/styles';
//import { createTheme, ThemeProvider } from '@mui/material/styles';
import Student from './components_new/showStudent/showStudent';
import Create from './components_new/createStudent/createStudent';
import { styled } from '@mui/material/styles';
//import useStyles from './styles';
/*
const theme = createTheme();
const useStyles = makeStyles( (theme) => ({
    appBar: {
      borderRadius: 115,
      margin: '30px 0',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
  },
}));

function Component(){
  const classes = useStyles();
  return <div className={classes.appBar} />
}
*/

const Root = styled('AppBar')(() => ({
      borderRadius: 115,
      margin: '30px 0',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
}));

function App() {
 
  return (
    <div>
      <Container maxWidth= "lg">
        <Root>
          <AppBar position="static" color="inherit">
          <Typography variant="h2" gutterBottom component="div" align="center">Students Create and Show</Typography>
          </AppBar>
        </Root>
        <Grow in>
          <Container>
            <Grid container justify="space-between" alignItmes="stretch">
              <Grid item xs={12} sm={7}>
                <Root>
                  <AppBar position="static" color="inherit">
                    <Student />
                  </AppBar>
                </Root>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Root>
                  <AppBar position="static" color="inherit">
                     <Create />
                  </AppBar>
                </Root>
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </div>
  
  );
}

export default App;
