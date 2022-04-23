import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
// import { makeStyles } from '@mui/styles';
// import 'fontsource-roboto';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
// const useStyles = makeStyles({
//   root: {
//     background: 'linear-gradient(45deg, #FE6B8B,#000)',
//     border: 0,
//     marginBottom: 15,
//     borderRadius: 15,
//     color: 'white',
//     padding: '15px 30px',
//   },
// });

// function ButtonStyled() {
//   const classes = useStyles();
//   return <Button className={classes.root}>Test styled Button</Button>;
// }

function CheckboxExample() {
  const [checked, setChecked] = React.useState(true);
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          icon={<DeleteIcon />}
          // checkedIcon={<DeleteIcon />}
          checkedIcon={<SaveIcon />}
          onChange={(e) => setChecked(e.target.checked)}
          color="secondary"
          inputProps={{
            'aria-label': 'secondary checkbox',
          }}
        />
      }
      label="Testing Checkbox"
    />
  );
}
function App() {
  return (
    <Container maxWidth="xs">
      <div className="App">
        <header className="App-header">
          <Typography
            variant="h2"
            component="div"
            fontSize={36}
            marginBottom={0}
          >
            Welcome to:
          </Typography>
          <Typography variant="subtitle1">Material UI</Typography>
          {/* <ButtonStyled /> */}
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={3} sm={6}>
              <Paper style={{ height: 75, width: '100%' }} />
            </Grid>
            <Grid item xs={3} sm={6}>
              <Paper style={{ height: 75, width: '100%' }} />
            </Grid>
            <Grid item xs={3} sm={6} lg={12}>
              <Paper style={{ height: 75, width: '100%' }} />
            </Grid>
          </Grid>
          <TextField
            variant="outlined"
            color="secondary"
            // type="date"
            // type="time"
            placeholder="test@test.com"
            type="email"
            // value="test@test.com"
            label="Email"
          />
          <CheckboxExample></CheckboxExample>
          <ButtonGroup size="large">
            <Button
              startIcon={<SaveIcon />}
              // endIcon={<SaveIcon/> }
              variant="contained"
              color="primary"
              // style={{fontSize: 54}}
              onClick={() => console.log('click')}
            >
              Save
            </Button>
            <Button
              startIcon={<DeleteIcon />}
              // endIcon={<SaveIcon/> }
              variant="contained"
              color="secondary"
              // style={{fontSize: 54}}
              onClick={() => console.log('click')}
            >
              Discard
            </Button>
          </ButtonGroup>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
      </div>
    </Container>
  );
}

export default App;
