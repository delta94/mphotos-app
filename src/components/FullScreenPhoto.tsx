import React from 'react';
import {createStyles, Dialog, fade, makeStyles, Theme} from "@material-ui/core";
import {Photo} from "../types/photo";
import PhotosApi, {PhotoType} from "../services/api";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosSharpIcon from "@material-ui/icons/ArrowBackIosSharp";
import ArrowForwardIosSharpIcon from "@material-ui/icons/ArrowForwardIosSharp";
import FullscreenExitIcon from '@material-ui/icons/FullscreenExit';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            backgroundColor: theme.palette.common.black,
            color:  theme.palette.common.black,
        },
        imgItem: {
            display: 'flex',
            margin: 'auto',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: theme.palette.common.black,
            maxHeight: '100%'
        },
        dialogContent: {
            backgroundColor: theme.palette.common.black,
            padding: 0,
            margin: 0,
            border: 0,
        },
        img: {
            objectFit: 'contain',
            maxWidth: '100%',
            maxHeight: '100%',
            width: 'auto',
            height: 'auto',
            //borderColor: theme.palette.common.black,
            //width: '100%',
            //height: '100%',
        },
        navButtons: {
            position: 'absolute',
            top: theme.spacing(2),
            right: theme.spacing(2),
        },
        editButton: {
            color: '#FFFFFF',
            backgroundColor: fade(theme.palette.grey.A700, 0.3).toString(),
            marginRight: theme.spacing(1),
            '&:hover': {
                backgroundColor: fade(theme.palette.grey.A700, 0.6).toString(),
            },
        },
    }),
);

interface FullScreenPhotoProps {
    photo: Photo,
    openDialog: boolean,
    onClose: () => void,
    onPrev: () => void,
    onNext: () => void,
}


const FullScreenPhoto: React.FC<FullScreenPhotoProps> = ({photo, openDialog, onClose, onPrev, onNext}) => {

    const classes = useStyles();

    return (
        <React.Fragment>
            <Dialog className={classes.root} fullScreen open={openDialog} onClose={onClose} maxWidth="lg">
                <div className={classes.imgItem}>
                    <img alt={photo.title} className={classes.img} src={PhotosApi.getImageUrl(photo, PhotoType.Original)}/>
                    <div className={classes.navButtons}>
                        <IconButton aria-label="previous" className={classes.editButton} onClick={onPrev}>
                            <ArrowBackIosSharpIcon fontSize="small"/>
                        </IconButton>
                        <IconButton aria-label="next" color="primary" onClick={onNext}
                                    className={classes.editButton}>
                            <ArrowForwardIosSharpIcon fontSize="small"/>
                        </IconButton>
                        <IconButton aria-label="fullScreen" color="primary" onClick={onClose}
                                    className={classes.editButton}>
                            <FullscreenExitIcon fontSize="small"/>
                        </IconButton>
                    </div>
                </div>

                {/*<DialogContent className={classes.dialogContent} >
                    <img className={classes.img} src={props.url} onClick={props.onClose}/>
                </DialogContent>*/}
            </Dialog>
        </React.Fragment>
    );
};

export default FullScreenPhoto;