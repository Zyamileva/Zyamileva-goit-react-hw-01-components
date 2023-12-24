import styled from '@emotion/styled';

export const Item = styled.li`
  margin: 0 auto 0 0;
  padding: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  gap: 25px;
  border-radius: 10px;
  box-shadow: var(--main-shadow);
`;

export const Status = styled.span``;

export const Avatar = styled.img`
  background-color: var(--blue);
  border-radius: 10px;
  box-shadow: var(--main-shadow);
`;

export const Name = styled.p`
  font-size: 20px;
  font-weight: 700;
  color: var(--blue);
  text-shadow: var(--main-shadow);
`;

export const Online = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: var(--online);
`;

export const Offline = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: var(--offline);
`;
