import React from 'react';
import './CreateNotes.css';
import './CreateNotes.css'
import IconButton from '@material-ui/core/IconButton';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import ColorLensOutlinedIcon from '@material-ui/icons/ColorLensOutlined';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';

function icons() {
    return (
        <div className="AddIcons">


                <IconButton aria-label="Index">
                <NotificationsNoneOutlinedIcon  />
                </IconButton>


                <IconButton aria-label="Reminder">
                <PersonAddOutlinedIcon  />
                </IconButton>

                <IconButton aria-label="Edit Label">
                <ImageOutlinedIcon />
                </IconButton>

                <IconButton aria-label="Archive">
                <ArchiveOutlinedIcon  />
                </IconButton>

                <IconButton aria-label="Colour">
                <ColorLensOutlinedIcon  />
                </IconButton>

                <IconButton aria-label="MoreIcons">
                <MoreVertOutlinedIcon  />
                </IconButton>
                
        </div>
    )
}

export default icons

