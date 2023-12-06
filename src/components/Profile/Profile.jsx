import { Container, Description, StatsList } from './Profile.styled';

export const Profile = ({
  avatar,
  username,
  tag,
  location,
  followers,
  views,
  likes,
}) => {
  return (
    <Container>
      <Description>
        <img src={avatar} alt={username} />
        <p>{username}</p>
        <p>{tag}</p>
        <p>{location}</p>
      </Description>

      <StatsList>
        <li>
          <span>Followers</span>
          <span>
            <b>{followers}</b>
          </span>
        </li>
        <li>
          <span>Views</span>
          <span>
            <b>{views}</b>
          </span>
        </li>
        <li>
          <span>Likes</span>
          <span>
            <b>{likes}</b>
          </span>
        </li>
      </StatsList>
    </Container>
  );
};


