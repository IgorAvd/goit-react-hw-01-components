import { FriendItem } from './FriendList.styled';

export const FriendListItem = ({ id, isOnline, avatar, name }) => {
  return (
    <>
      <FriendItem key={id} isOnline={isOnline}>
        <span>{isOnline}</span>
        <img src={avatar} alt="User avatar" width="48" />
        <p>{name}</p>
      </FriendItem>
    </>
  );
};
