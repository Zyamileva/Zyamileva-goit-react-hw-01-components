import styled from '@emotion/styled';

export const Container = styled.table`
  margin: 0 auto 40px;
  padding: 20px;
  width: 400px;
  align-items: center;
  background-color: var(--bg);
  box-shadow: var(--main-shadow);
  border-radius: 10px;
`;

export const TableHead = styled.thead`
  width: 100%;
  font-size: 20px;
  font-weight: 700;
  text-shadow: var(--main-shadow);
  text-align: center;
  color: var(--blue);
`;

export const TableRow = styled.tr`
  display: flex;
  gap: 20px;
  justify-content: space-around;
  width: 100%;
  margin-bottom: 10px;
`;

export const TableBody = styled.tbody`
  width: 100%;
  text-align: center;
`;
export const TableData = styled.td`
  font-size: 20px;
  font-weight: 700;
  text-shadow: var(--main-shadow);
  text-align: center;
  color: var(--secondary);
  width: 33%;
`;
export const Type = styled.td`
  width: 33%;
`;
export const Amount = styled.td`
  width: 33%;
`;
export const Currency = styled.td`
  width: 33%;
`;
