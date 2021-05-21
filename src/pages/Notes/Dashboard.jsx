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
import Addnotes from '../../components/CreateNotes';
// import Note from './Note';


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
 width: "650px",
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

export default function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
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
            
              <SearchIcon class = "searchIcon"/>
             
            <InputBase
              placeholder="Search"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
            
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
          {['Notes', 'Reminders', 'Inspiration', 'Personal','Work','Edit Lable','Archive','Bin'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
              {index === 0 && <EmojiObjectsOutlinedIcon/>}
              {index === 1 && <NotificationsNoneOutlinedIcon/>}
              {index === 2 && <LabelOutlinedIcon />}
              {index === 3 && <LabelOutlinedIcon />}
              {index === 4 && <LabelOutlinedIcon/>}
              {index === 5 && <EditOutlinedIcon/>}
              {index === 6 && <ArchiveOutlinedIcon />}
              {index === 7 && <DeleteIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div> 
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
         {/* <div>
            <form>
                <input type="text" placeholder ="Title" name="title" />
                <p> 
                  <textarea name="content" placeholder ="Take a note ......"/>
                   
                    </p>
            </form>

        </div>  */}
        <Addnotes />
        
        
       
      </main>
    </div>
  );
}