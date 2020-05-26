import React from 'react';
import Post from './components/post.js'
import './App.css';

function App() {

  return (

    <div className="App">
     
      <h1>Roshan Patel</h1>  

      <ul>
        <li><a href="#">Linkedin</a></li>
        <li><a href="#">Github</a></li>
      </ul>

     

      <h2>Projects</h2>

      <div className='post-container'>

        <Post title='Pokemon Type Prediction' 
              url='https://github.com/rshnn/pokemon-types'
              imgname='poke-orig.png'
              classNames='poketypes'
        />  

        <Post title='What if Hubery Humphrey has a Data Scientist?' 
              url='https://github.com/rshnn/pokemon-types'
              imgname='hubert.jpg'
              classNames='hubert'
        />

        <Post title='Image Colorization using Neural Networks' 
              url='https://github.com/rshnn/pokemon-types'
              imgname='recolor.png'
        />
        

        <Post title='Machine eLearned 18th Century Gangsta Rap' 
              url='https://github.com/rshnn/pokemon-types'
              imgname='rap_orig.jpg'
              classNames='rap'
        />

      </div>


    <p>2020</p>

    </div>
  );
}

export default App;
