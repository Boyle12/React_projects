import React from 'react'

function Card({username = "Hc",post = "Not assigned yet"}) {
  // function Card({username = "Hitesh"}) { --> This is not sclable , but this is not incorrect we can use it for print the name.
  //console.log(props);
  
  return (
    <div className='p-4'>
      <img 
      src="https://img-c.udemycdn.com/user/200_H/272686492_6b9b.jpg" alt="Hitesh choudhary"
      className='rounded-xl mb-4' />
      <h1 className='text-2xl bg-green-500 p-3 rounded'>A card for photos</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quaerat corporis eligendi voluptatem neque pariatur adipisci tempora ab facilis temporibus necessitatibus assumenda dolores sint, architecto voluptates. Labore magni earum repellendus?
      </p>
      
      {username}{" "}
      {post}

    </div>
  )
}

export default Card