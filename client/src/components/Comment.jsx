import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    gap: 10px;
    margin: 30px 0;
`

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`
const Details = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const Name = styled.span`
    font-size: 13px;
    font-weight: 500;
    color: ${({ theme }) => theme.text};
`

const Date = styled.span`
    font-size: 12px;
    font-weight: 400;
    color: ${({theme}) => theme.textSoft};
    margin-left: 5px;
`

const Text = styled.span`
    font-size: 14px;
    color: ${({theme}) => theme.text};
    font-weight: 300;
`
const Comment = () => {
  return (
    <Container>
        <Avatar src="https://i.ytimg.com/vi/7CqJlxBYj-M/maxresdefault.jpg"/>
        <Details>
            <Name>Minh Nguyen <Date>2 days ago</Date></Name>
            <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id quo iste qui eos dolor tempore dicta aut quidem ipsum beatae! Quod id architecto asperiores facere neque culpa exercitationem non unde.</Text>  
        </Details>
    </Container>
  )
}

export default Comment