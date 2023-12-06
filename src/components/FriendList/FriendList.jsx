import { Container } from './FriendList.styled';
import { FriendListItem } from './FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <Container>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          isOnline={friend.isOnline}
          name={friend.name}
          avatar={friend.avatar}
        />
      ))}
    </Container>
  );
};
