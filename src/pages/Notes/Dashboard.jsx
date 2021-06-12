import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import './Dashboard.css';
import InputBase from '@material-ui/core/InputBase';
import LabelOutlinedIcon from '@material-ui/icons/LabelOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import DeleteIcon from '@material-ui/icons/Delete';
import Addnotes from '../../components/CreateNotes/CreateNotes';
import DisplayNote from '../../components/DisplayNotes/DisplayNote';
import Userservice from '../../Services/userservices';
import MenuBookSharpIcon from '@material-ui/icons/MenuBookSharp';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Imagekeep from '../../assests/Keep.png';
import SettingsIcon from '@material-ui/icons/Settings';
import RefreshIcon from '@material-ui/icons/Refresh';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Note from '../../components/Note/Note';
import Trash from '../../components/TrashFolder/Trash';
import Archive from '../../components/Archivefolder/Archive';
import { Redirect, Route, useHistory, Switch } from "react-router-dom"


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    background: "white",
    zIndex: theme.zIndex.drawer + 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'spaceBetween',

  },
  // appBarShift: {
  //   marginLeft: drawerWidth,
  //   // width: `calc(100% - ${drawerWidth}px)`,
  //   transition: theme.transitions.create(['width', 'margin'], {
  //     easing: theme.transitions.easing.sharp,
  //     duration: theme.transitions.duration.enteringScreen,
  //   }),
  // },
  search: {
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
    border: "1px solid transparent",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "#f1f3f4",
    height: "40px",
    marginLeft: "100px",
    borderRadius: "8px",
    position: 'relative',
    width: "750px",
    padding:"10px"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),

    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const axios_service = new Userservice();

export default function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const [notes, setNote] = React.useState([]);


  let search = useHistory();

  React.useEffect(() => {
    GetNotes();
  }, [])

  const GetNotes = () => {
    axios_service.DisplayNote().then((result) => {
      console.log(result.data);
      setNote(result.data);
    }).catch((err) => {
      console.log(err);
    })
  }


  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  const handleChangePath = (value) => {
    if (value === "archive") {
      search.push("/dashboard/archive")
    }
    else if (value === "trash") {
      search.push("/dashboard/trash")
   }
   else if(value === "dashboard") {
    search.push("/dashboard")
   }
 
   };



  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>

          {open ?


            <IconButton
              color="black"
              aria-label="open drawer"
              onClick={handleDrawerClose}
              edge="start"
              className={clsx(classes.menuButton, {
                // [classes.hide]: open,
              })}
            >




              <MenuIcon />
            </IconButton>

            :

            <IconButton
              color="black"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, {
                // [classes.hide]: open,
              })}
            >




              <MenuIcon />
            </IconButton>
          }

          <img className="imagekeep" src={Imagekeep} />
          <div className="Fundoo">
            <div id="DF">F</div>
            <div id="DU">U</div>
            <div id="DN">N</div>
            <div id="DD">D</div>
            <div id="DO">O</div>
            <div id="DOO">O</div>
            <div id="DN">N</div>
            <div id="DOOO">O</div>
            <div id="DT">T</div>
            <div id="DE">E</div>
          </div>




          <div className={classes.search}>

            <SearchIcon class="searchIcon" />

            <InputBase
              placeholder="Search"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />

          </div>
          <div className="Icons-header">
            <div className="Icons-header1">

            <div className="Setting" color="black"><SettingsIcon /></div>
            <div className="Refresh" color="black"><RefreshIcon /></div>
            <div className="Profile" color="black"><AccountCircleIcon /></div>
          </div>
          </div>


        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <List>
        <ListItem button key="Personal">
            <ListItemIcon>{<LabelOutlinedIcon />}</ListItemIcon>
            <ListItemText primary="Personal" />
          </ListItem>
          <ListItem button key="Notes" onClick={() =>handleChangePath("dashboard")}>
            <ListItemIcon>{<EmojiObjectsOutlinedIcon />}</ListItemIcon>
            <ListItemText primary="Notes" />
          </ListItem>
          <ListItem button key="Reminder">
            <ListItemIcon>{<NotificationsNoneOutlinedIcon />}</ListItemIcon>
            <ListItemText primary="Reminder" />
            </ListItem>
            <ListItem button key="Inspiration">
            <ListItemIcon>{<LabelOutlinedIcon />}</ListItemIcon>
            <ListItemText primary="Inspiration" />
          </ListItem>
         
          <ListItem button key="Work">
            <ListItemIcon>{<LabelOutlinedIcon />}</ListItemIcon>
            <ListItemText primary="Work" />
          </ListItem>
          <ListItem button key="Edit Label">
            <ListItemIcon>{<EditOutlinedIcon />}</ListItemIcon>
            <ListItemText primary="Edit Label" />
          </ListItem>
          <ListItem button key="Archive" onClick={() =>handleChangePath("archive")}>
            <ListItemIcon>{<ArchiveOutlinedIcon />}</ListItemIcon>
            <ListItemText primary="Archive" />
          </ListItem>
          <ListItem button key="Bin" onClick={()=>handleChangePath("trash")}>
            <ListItemIcon>{<DeleteIcon />}</ListItemIcon>
            <ListItemText primary="Bin" />
          </ListItem>
        </List>

        {/* <List>
          {['Notes', 'Reminders', 'Inspiration', 'Personal', 'Work', 'Edit Lable', 'Archive', 'Bin'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index === 0 && <EmojiObjectsOutlinedIcon />}
                {index === 1 && <NotificationsNoneOutlinedIcon />}
                {index === 2 && <LabelOutlinedIcon />}
                {index === 3 && <LabelOutlinedIcon />}
                {index === 4 && <LabelOutlinedIcon />}
                {index === 5 && <EditOutlinedIcon />}
                {index === 6 && <ArchiveOutlinedIcon />}
                {index === 7 && <DeleteIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List> */}
        {/* <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div> */}
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />

        {/* <Addnotes getnotes={notes} getNoteMethod={GetNotes} />
        <DisplayNote getnotes={notes} getNoteMethod={GetNotes} /> */}

             <Switch>
                <Route exact path="/dashboard" component={Note} />
                <Route  path="/dashboard/archive" component={Archive} />
        <Route  path="/dashboard/trash" component={Trash} />
        </Switch>
              




      </main>
    </div>
  );
}
