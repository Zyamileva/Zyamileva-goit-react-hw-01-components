import {
  Avatar,
  Item,
  Status,
  Name,
  Online,
  Offline,
} from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <Item>
      <Status>{isOnline ? <Online /> : <Offline />}</Status>
      <Avatar src={avatar} alt={name} width="100" />
      <Name>{name}</Name>
    </Item>
  );
};
