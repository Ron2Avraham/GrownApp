import { Button, IconButton, makeStyles, Tabs, TextField, Toolbar } from '@material-ui/core'
import { Tab } from '@material-ui/core'
import { AppBar } from '@material-ui/core'
import React from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import appLogo from '../assets/AppLogo.png'
import SearchIcon from '@material-ui/icons/Search';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function Header() {
  const stylesClasses = useStyles(useStyles);
  const SearchButton = () => (
    <IconButton>
      <SearchIcon />
    </IconButton>
  )

  return (

    <header style={{
      justifyContent: "space-between",
      width: "100%",
      height: "7vh",
      // flexDirection: "row",
      background: "#B9C4C3",
      display: "flex",
      // borderBottomLeftRadius:20,
      // borderBottomRightRadius:20,
      // justifyContent: "space-between",
      padding: "10px 0",
      boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19) "
    }}>
      <img
        style={{ marginLeft: 15, height: "10vh", marginTop: -12 }}
        src={appLogo}

      />

      <div style={{ width: "100%", alignItems: "center" }}>
        <TextField
          inputProps={{ style: { fontSize: 25 } }} // font size of input text
          InputLabelProps={{ style: { fontSize: 25 } }} // font size of input label
          variant="outlined"
          style={{ alignSelf: "center", width: "80%" }}
          id="standard-name"
          InputProps={{ endAdornment: <SearchButton /> }}
        />

      </div>
    </header>
  )
}

export default Header
