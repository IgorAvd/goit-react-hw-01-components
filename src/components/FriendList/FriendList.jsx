import { Container, FriendItem } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <Container>
      {friends.map(friend => (
        <FriendItem key={friend.id} isOnline={friend.isOnline}>
          <span>{friend.isOnline}</span>
          <img src={friend.avatar} alt="User avatar" width="48" />
          <p>{friend.name}</p>
        </FriendItem>
      ))}
    </Container>
  );
};
