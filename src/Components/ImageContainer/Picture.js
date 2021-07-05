import React from 'react';
import styled from 'styled-components';

const SpaceImage = styled.img `
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: auto;
  `

  const VidText = styled.a `
    color: white;
 
  `

const Picture = props => {

  if(props.media_type == "image"){
    return (
        <SpaceImage src={props.url} />
    )
  } else {
    return (
      <VidText href={props.url}>Check out this exciting video</VidText>
    )
  }
}
export default Picture
