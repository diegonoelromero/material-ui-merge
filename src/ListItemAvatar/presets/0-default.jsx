import * as React from 'react';
import ListItemAvatarM from '../ListItemAvatar';
import AvatarM from '../../Avatar/Avatar';

const Avatar = (props) => <AvatarM {...props}>{props.children}</AvatarM>

const ListItemAvatar = (props) => <ListItemAvatarM {...props} />;

export default (
  <ListItemAvatar label="Active" key="1">
    <Avatar key="1.1" alt="Remy Sharp" src="https://pbs.twimg.com/profile_images/1072203920083116032/bsnMtLgG_bigger.jpg" />
  </ListItemAvatar>
);