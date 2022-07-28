import React from 'react'
import styled from 'styled-components'

import { Link } from 'react-router-dom'

const Container = styled.div`
    width: 100%;
    height: auto;
    margin-bottom: 45px;
    cursor: pointer;    
`
const Image = styled.img`
    width: 100%;
    height: auto;
    background-color: #999;
`
const Details = styled.div`
    display: flex;
    margin-top: 5px;
    gap: 12px;
`
const ChannelImage = styled.img`
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: #999;
`
const Title = styled.div`
    
`

const Texts = styled.h1`
    font-size: 16px;
    font-weight: 500;
    color: ${({ theme }) => theme.text};
`

const ChannelName = styled.h2`
    font-size: 14px;
    color: ${({ theme }) => theme.textSoft};
    margin: 5px 0px;
`

const Info = styled.div`
    font-size: 14px;
    color: ${({ theme }) => theme.textSoft};
`

export const Card = () => {
    return (
        <Link to="/video/test" style={{textDecoration: "none", width: "22%"}}>
            <Container>
                <Image src="https://i.ytimg.com/vi/7CqJlxBYj-M/maxresdefault.jpg" />
                <Details>
                    <ChannelImage src='https://i.ytimg.com/vi/7CqJlxBYj-M/maxresdefault.jpg' />
                    <Texts>
                        <Title>Test Video</Title>
                        <ChannelName>Smokey Dev</ChannelName>
                        <Info>05112001 views</Info>
                    </Texts>
                </Details>
            </Container>
        </Link>
    )
}
