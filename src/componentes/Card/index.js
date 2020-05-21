import React from 'react';
import cardImg from '../../img/card-image.png';

export default function Cards(){
    return(
        <div class="card" style="width: 18rem;">
  <img src={cardImg} class="card-imge" alt="card-image"></img>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    )
}