import React from "react";

function Card() {
return (
    <div>
    {/* <div class="card h-100 col-3 m-auto"> */}
      <img src="https://cdn.pixabay.com/photo/2023/05/13/14/35/white-flower-7990645_1280.jpg" class="card-img-top img-fluid" alt="..."/>
      <div class="card-body">
        <h4 class="card-title text-center">Card title</h4>
        <p class="card-text text-center">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. otro poco más de texto</p>
      </div>
      <div class="card-footer d-flex justify-content-center">
      <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
   
  </div>

);
}

export default Card;