import React from 'react';
import Button from 'react-bootstrap/Button'
import Post from './components/post.js'
import Socials from './components/socials.js'
import './App.css';

function App() {

  return (

    <div className="App">
     
      <div className='header'> 
        <h1>Roshan Patel</h1>  
        <Socials /> 
      </div>
     

      <h2>Projects</h2>

      <div className='post-container'>


        <Post title='Image colorization using neural networks' 
              url='https://github.com/rshnn/image-colorizer'
              imgname='recolor-trees.png'
              classNames='recolor'
        />
        

        <Post title='Pokédex: type prediction' 
              url='https://github.com/rshnn/pokemon-types'
              imgname='poke-orig.png'
              classNames='poketypes'
        />  

        <Post title='L3 cache (LLC) covert text channel exploit' 
              url='https://github.com/rshnn/covert'
              imgname='covert.gif'
              classNames='covert'
        />


        <Post title='Agent-based minesweeper solver' 
              url='#'
              imgname='minesweeper.png'
              classNames='minesweeper'
        />


        <Post title='An ontology to assist music success prediction' 
              url='https://github.com/rshnn/song-success-predictor'
              imgname='song-success.jpg'
              classNames='song'
        />


        <Post title='Search algorithms over 2D maze' 
              url='#'
              imgname='maze.png'
              classNames='maze'
        />


        <Post title='An implementation of flocking behavior' 
              url='https://github.com/rshnn/flockers'
              imgname='droids.gif'
              classNames='flockers'
        />




      </div>


    <p>2020</p>

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