import { Container } from './FriendList.styled';
import { FriendListItem } from './FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <Container>
      {friends.map(({ isOnline, name, avatar, id }) => {
        return (
          <FriendListItem
            key={id}
            isOnline={isOnline}
            name={name}
            avatar={avatar}
          />
        );
      })}
    </Container>
  );
};
