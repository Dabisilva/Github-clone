import React from 'react';

import { Container, Flex, Avatar, Row, PeapleIcon, Column, CompaniIcon, LocationIcon, EmailIcon, BlogIcon } from './styles';

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
            <Flex>
                <Avatar src={avatarUrl} alt={userName} />

                <div>
                    <h1>{name}</h1>
                    <h2>{userName}</h2>
                </div>
            </Flex>

            <Row>
                <li>
                    <PeapleIcon />
                    <b>{followers}</b>
                    <span>followers</span>
                    <span>·</span>
                </li>

                <li>
                    <b>{following}</b>
                    <span>following</span>
                </li>
            </Row>

            <Column>
                    {company && (
                        <li>
                            <CompaniIcon />
                            <span>{company}</span>
                        </li>
                    )}
                    {location && (
                        <li>
                            <LocationIcon />
                            <span>{location}</span>
                        </li>
                    )}
                    {email && (
                        <li>
                            <EmailIcon />
                            <span>{email}</span>
                        </li>
                    )}
                    {blog && (
                        <li>
                            <BlogIcon />
                            <span>{blog}</span>
                        </li>
                    )}
            </Column>
        </Container>
    );
}

export default ProfileData;