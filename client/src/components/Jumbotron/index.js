import React from 'react';
import Carousel from '../Carousel'
import guitarImage from './image/theatre-swing.png'


const Jumbotron = () => {
  return (
    <div style={{background: "black"}}>
      <div className="jumbotron text-light" style={{backgroundImage: `url(${guitarImage})`}}>
        <h1 className="display-4">Share your creativity!</h1>
        <p className="lead">TLorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue placerat facilisis. Nullam dapibus justo sagittis, feugiat odio sed, feugiat metus.</p>
        <hr className="my-4 bg-light" />
        <p>Duis efficitur leo vitae lacus sagittis blandit.</p>
        <p class="lead">
          <a class="btn btn-outline-light btn-lg" href="#" role="button">Learn more</a>
        </p>
      </div>
    </div>
  )
}

export default Jumbotron;