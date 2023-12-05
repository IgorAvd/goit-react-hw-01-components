import PropTypes from 'prop-types';
import { Container, InfoList, InfoListItem } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Container>
      <h2>{title}</h2>

      <InfoList>
        {stats.map(item => (
          <InfoListItem key={item.id}>
            <span>{item.label}</span>
            <span>{item.percentage}%</span>
          </InfoListItem>
        ))}
      </InfoList>
    </Container>
  );
};
