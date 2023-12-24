import styled from '@emotion/styled';

export const StatisticsBlock = styled.section`
  margin: 50px auto;
  padding: 15px;
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--bg);
  border-radius: 20px;
  box-shadow: var(--main-shadow);
`;
export const Title = styled.h2`
  color: var(--blue);
  margin: 0 auto 20px auto;
  font-weight: 900;
`;
export const StatList = styled.ul`
  display: flex;
  gap: 5px;
  justify-content: space-between;
  margin: 0 auto 10px auto;
  width: 100%;
`;
export const Item = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: var(--secondary);
  width: calc((100% - 4 * 5px) / 5);
  box-shadow: var(--main-shadow);
`;
export const Labael = styled.span`
  font-size: 20px;
  font-weight: 700;
  text-shadow: var(--main-shadow);
  text-align: center;
`;
export const Parcentage = styled.span`
  font-size: 20px;
  font-weight: 600;
  text-shadow: var(--main-shadow);
  text-align: center;
`;
