import {
  StatisticsBlock,
  Title,
  StatList,
  Item,
  Labael,
  Parcentage,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsBlock>
      {title && <Title>{title}</Title>}
      <StatList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <Item key={id}>
              <Labael>{label}</Labael>
              <Parcentage>{percentage}%</Parcentage>
            </Item>
          );
        })}
      </StatList>
    </StatisticsBlock>
  );
};
