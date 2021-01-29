import React from 'react';
import Button from 'react-bootstrap/Button'
import Posts from './components/post.js'
import Socials from './components/socials.js'
import './App.css';
import data from './posts.json'; 

function App() {





  return (

    <div className="App">
     
      <div className='header'> 
        <h1>Roshan Patel</h1>  
        <Socials /> 
      </div>
     

      <h2>Projects</h2>

      <div className='post-container'>

        <Posts data={data} />

      </div>


    <p>2021</p>

    </div>
  );
}

export default App;



        // <Post title='Machine Learned 18th Century Gangsta Rap' 
        //       url='https://github.com/rshnn/pokemon-types'
        //       imgname='rap_orig.jpg'
        //       classNames='rap'
        // />


        // <Post title='What if Hubery Humphrey has a Data Scientist?' 
        //       url='https://github.com/rshnn/pokemon-types'
        //       imgname='hubert.jpg'
        //       classNames='hubert'
        // />