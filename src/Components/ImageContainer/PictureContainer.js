import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Picture from './Picture';
import styled from 'styled-components';

const Div = styled.div `
  display: flex;
  flex-direction: column;
`;

const Explanation = styled.p `
  color: dodgerblue;
  padding: 0% 20% 0% 20%;
`
const Title = styled.h1 `
  color: crimson;
`

const PictureContainer = props => {
    const [nasaData, setNasaData] = useState([]);
    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=jii9K98k8q1uAPm2cnUOZd5W0N1K8AJF4rJVWGzN')
        .then(res => {
            setNasaData(res.data);
          console.log(res.data);
        })
      }, []);

  return (
    <Div className="picture-container">
      <h2>{nasaData.date}</h2>
      <Title className="title">{nasaData.title}</Title>
        <Picture url={nasaData.url}/>
      <Explanation className="explanation">{nasaData.explanation}</Explanation>
    </Div>
  );
};


export default PictureContainer;
