import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Picture from './Picture';

const PictureContainer = props => {
    const [nasaData, setNasaData] = useState([]);
    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
        .then(res => {
            setNasaData(res.data);
          console.log(res.data);
        })
      }, []);

  return (
    <div className="picture-container">
      <span className="title">{nasaData.title}</span>
        <Picture url={nasaData.url}/>
      <span className="explanation">{nasaData.explanation}</span>
    </div>
  );
};


export default PictureContainer;
