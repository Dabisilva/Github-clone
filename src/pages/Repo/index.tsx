import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Breadcrumb, RepoIcon, Stats, StarIcon, ForkIcon, GithubIcon, LinkButton } from './styles';

const Repo: React.FC = () => {
    return (
      <Container>
        <Breadcrumb>

          <RepoIcon/>

          <Link className={'username'} to={'/Dabisilva'}>
            DabiSilva
          </Link>

          <span>/</span>

          <Link className={'reponame'} to={'/Dabisilva/github-clone'}>
            github-clone
          </Link>
        </Breadcrumb>

        <p>Clone do github usando Reactjs com typescript consumindo a api v3 do próprio github.</p>

        <Stats>
          <li>
            <StarIcon/>
            <b>10</b>
            <span>stars</span>
          </li>

          <li>
            <ForkIcon/>
            <b>5</b>
            <span>Forks</span>
          </li>
        </Stats>

        <LinkButton href={'https://github.com/Dabisilva/Github-clone'}>

          <GithubIcon/>
          <span>View on Github</span>
        </LinkButton>
      </Container>
    );
}

export default Repo;