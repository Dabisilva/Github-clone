import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 25px 32px;
`;

export const Line = styled.div`
    max-width: 1280px;
    border-top: 1px solid var(--border);
    width: 100%;
`;

export const GithubLogo = styled(FaGithub)`
    fill: var(--border);
    width: 24px;
    height: 24px;
    flex-shrink: 0;
    margin-top: 40px;
`;

