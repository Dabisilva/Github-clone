import React from 'react';
import { Link } from 'react-router-dom';

import { Container, TopSide, BotSide, RepoIcon, StartIcon, ForkIcon } from './styles';

interface RepoCardProps {
    userName: string
    repoName: string
    description?: string
    language?: string
    stars: number
    forks: number
}

const RepoCard: React.FC<RepoCardProps> = ({
    userName,
    repoName,
    description,
    language,
    stars,
    forks,
}) => {

    const languageClass = language ? language.toLowerCase() : 'other';
    
    return (
        <Container>
            <TopSide>
                <header>
                    <RepoIcon />

                    <Link to={`/${userName}/${repoName}`}>{repoName}</Link>
                </header>

                <p>{description}</p>
            </TopSide>

            <BotSide>
                <ul>
                    <li>
                        <div className={`language ${languageClass}`}></div>
                        <span>{language}</span>
                    </li>

                    <li>
                        <StartIcon />
                        <span>{stars}</span>
                    </li>

                    <li>
                        <ForkIcon />
                        <span>{forks}</span>
                    </li>
                </ul>
            </BotSide>
        </Container>
    );
}

export default RepoCard;