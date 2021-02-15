import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Picture from './Picture';
import styled from 'styled-components';

const Div = styled.div `
  display: flex;
  flex-direction: column;
  background-image: url("https://images.unsplash.com/photo-1445905595283-21f8ae8a33d2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3452&q=80");
  background-size: 50px;
`;

const Explanation = styled.p `
  color: aqua;
  padding: 0% 20% 0% 20%;
`
const Title = styled.h1 `
  color: crimson;
`
const Date = styled.h2 `
  border: 2px outset dodgerblue;
  border-width: 10px;
  color: white;
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
      <Date>{nasaData.date}</Date>
      <Title className="title">{nasaData.title}</Title>
        <Picture url={nasaData.url}/>
      <Explanation className="explanation">{nasaData.explanation}</Explanation>
    </Div>
  );
};


export default PictureContainer;
