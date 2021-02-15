import React from 'react';
import styled from 'styled-components';

const SpaceImage = styled.img `
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: auto;
  `

const Picture = props => {
    return (
        <SpaceImage src={props.url} />
    )
}
export default Picture
