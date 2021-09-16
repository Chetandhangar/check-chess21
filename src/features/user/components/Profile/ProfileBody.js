import React from 'react'
import {Card,CardImg,CardText,CardTitle,CardBody,CardSubtitle} from 'reactstrap';
import { UserStatus } from './UserStatus'

export const ProfileBody = ({user}) => {

     const formatDate = (ISOString) => {
        const date = new Date(ISOString).toUTCString().substring(4, 16);
        return date;
     };
    return(
        <div className="container">
            <Card>
                <CardImg top width="100%" height="10%" alt="Card image cap" />
                <CardBody>
                    <CardTitle tag="h5">{user?.firstName} {" "} {user?.lastName}
                    </CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">{`@${user?.username}`}</CardSubtitle>
                    <CardText>{user?.bio}</CardText>
                    <CardText> Joined  {formatDate(user?.createdAt)}</CardText>
                    <CardText>{user?.followingCount} following  {" "}
                    {user?.followersCount} Followers
                    </CardText>
                    <UserStatus user={user}/>
                </CardBody>
            </Card>
        </div>
    )
}