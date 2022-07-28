import React from 'react'
import styled from 'styled-components'

import Comment from './Comment'

const Container = styled.div`
  
`
const NewComment = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`
const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`

const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${({theme}) => theme.textSoft} ;
  background-color: transparent;
  outline: none;
  padding: 5px;
  width: 80%;
`
const Comments = () => {
  return (
    <Container>
      <NewComment>
        <Avatar src="https://yt3.ggpht.com/llL2D9f_qFYq4GEybu_fjR8D8ylLBnE53d3lEd1F3mYOZBZsPZJv-Y84DY77iJGQUL4x-cNZUA=s88-c-k-c0x00ffffff-no-rj"/>
        <Input placeholder='Add a comment...'/>
      </NewComment>
      <Comment/>
    </Container>
  )
}

export default Comments


