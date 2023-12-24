import styled from '@emotion/styled';

export const ProfileCard = styled.div`
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

export const Description = styled.div`
  margin-bottom: 20px;
  text-align: center;
  color: var(--secondary);
  width: 100%;
`;

export const Avatar = styled.img`
  margin: 20px auto 15px auto;
  display: block;
  width: 150px;
  border-radius: 50%;
  box-shadow: var(--inset-shadow);
`;

export const Name = styled.p`
  margin-bottom: 10px;
  font-size: 25px;
  font-weight: 700;
  color: var(--blue);
  text-shadow: var(--main-shadow);
`;

export const Tag = styled.p`
  margin-bottom: 10px;
  font-size: 20px;
  text-shadow: var(--main-shadow);
`;

export const Location = styled.p`
  font-size: 20px;
  text-shadow: var(--main-shadow);
`;

export const StatsList = styled.ul`
  display: flex;
  gap: 10px;
  padding: 10px;
  justify-content: space-between;
  width: 100%;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: 33.333%;
  gap: 7px;
  box-shadow: var(--main-shadow);
`;

export const Label = styled.span`
  font-weight: 500;
  color: var(--secondary);
`;

export const Quantity = styled.span`
  font-weight: 600;
  color: var(--blue);
  text-shadow: var(--main-shadow);
`;
