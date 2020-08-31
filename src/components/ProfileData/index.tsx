import React from 'react';
import { StringifyOptions } from 'querystring';

import { Container } from './styles';

interface ProfileDataProps {
    userName: string
    name: string
    avatarUrl?: string
    followers: number
    following: number
    company?: string
    location?: string
    email?: string
    blog?: string
}

const ProfileData: React.FC<ProfileDataProps> = ({
    userName,
    name,
    avatarUrl,
    followers,
    following,
    company,
    location,
    email,
    blog,
}) => {
    return (
        <Container>

        </Container>
    );
}

export default ProfileData;