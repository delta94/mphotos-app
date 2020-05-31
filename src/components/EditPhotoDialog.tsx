import React, {useState} from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextField
} from "@material-ui/core";
import {Photo} from "../types/photo";

interface EditDialogProps {

    open: boolean,
    photo: Photo,
    onClose: () => void,
    onSubmit: (title: string, description: string, keywords: string) => void,
}

const EditPhotoDialog: React.FC<EditDialogProps>  = (props: EditDialogProps) => {

    const [title, setTitle] = useState<string>(props.photo.title);
    const [description, setDescription] = useState<string>(props.photo.description)
    const [keywords, setKeywords] = useState<string>(props.photo.keywords)

    const handleUpdate = () => {
        props.onClose()
        props.onSubmit(title, description, keywords)
    }

    const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };

    const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDescription(event.target.value);
    };

    const handleKeywordsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setKeywords(event.target.value);
    };

    return(
        <React.Fragment>
            <Dialog open={props.open}
                    onClose={props.onClose}
                    aria-labelledby="dialog-title">
            <DialogTitle id="dialog-title">Edit Photo</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Update title, description and text. Observe that keywords should be comma seprated
                </DialogContentText>
                <TextField margin="dense" id="title" label="Title" value={title}
                           onChange={handleTitleChange} fullWidth/>
                <TextField margin="dense" id="keywords" label="Keywords" value={keywords}
                           onChange={handleKeywordsChange} fullWidth/>
                <TextField margin="dense" id="description" label="Description" value={description}
                           onChange={handleDescriptionChange} fullWidth multiline rows={4} />
                <DialogActions>
                    <Button onClick={props.onClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleUpdate} color="primary" autoFocus>
                        Save Photo
                    </Button>
                </DialogActions>
            </DialogContent>
            </Dialog>
        </React.Fragment>
    );
};

export default EditPhotoDialog;
