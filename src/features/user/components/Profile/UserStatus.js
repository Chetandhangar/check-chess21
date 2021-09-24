import React,{useState}from 'react';
import {useSelector} from 'react-redux'
import {} from '../../userSlice';
import {Button} from '@material-ui/core'
import {FollowButton} from '../Buttons/FollowButton';
import {Modal,ModalBody, ModalHeader,ModalFooter} from 'reactstrap'
import {Grid,TextField} from '@material-ui/core'

export const UserStatus = ({user})  =>{
    const [modal, setModal] = useState(false);
    const {currentUser} = useSelector((state) => state.user);
    const toggle = () => setModal(!modal);
    const [bio,setBio] = useState(currentUser?.bio)
    return(
        <div>
           {currentUser?._id !== user?._id ? 
           <FollowButton user={user}/>
            : 
            <Button onClick={toggle}>Edit Profile</Button>
        }
            <Modal  size="md" isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>
             Edit Profile
            </ModalHeader>
            <ModalBody>
            <Grid container>
            <Grid item xs={12} md={6}>
            <TextField 
            disabled id="standard-disabled" 
            label="Firstname" defaultValue={currentUser?.firstName} />
            </Grid>
            <Grid item xs ={12} md={6}>
            <TextField 
            disabled id="standard-disabled" 
            label="LastName" defaultValue={currentUser?.lastName} />
            </Grid>
            <Grid item xs={12}>
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="bio"
                label="bio"
                name="bio"
                autoComplete="bio"
                autoFocus
                defaultValue={currentUser?.bio}
                value={bio}
                onChange={(e) => setBio(bio => bio = e.target.value)}
            />
            </Grid>
            </Grid>
            </ModalBody> 
            <ModalFooter>
                <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
            </Modal>
        </div>
    )
}