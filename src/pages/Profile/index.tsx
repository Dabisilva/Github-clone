import React from 'react';
import ProfileData from '../../components/ProfileData';

import { Container, Main, LeftSide, RightSide } from './styles';

const Profile: React.FC = () => {
  return (
    <Container>
      <Main>
        <LeftSide>
          <ProfileData
            userName={'DabiSilva'}
            name={'Davi Barbosa'}
            avatarUrl={'https://avatars3.githubusercontent.com/u/57877449?v=4'}
            followers={1000}
            following={3}
            company={'Nolu'}
            location={'Brasília, Brazil'}
            email={'dabisilvaond@gmail.com'}
          />
        </LeftSide>

        <RightSide></RightSide>
      </Main>
    </Container>
  );
}

export default Profile;