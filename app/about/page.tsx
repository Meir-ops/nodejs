import React from 'react'
import "./AboutUs.css";
import Image from 'next/image';


const UsersPage = () => {
  return (
    <div className="about-us">
      
      <h1>Why Women Love Bergs</h1>
At Bergs, we believe that every woman deserves to feel confident, comfortable, and beautiful — every single day. That’s why our premium lingerie line is thoughtfully designed with soft fabrics, supportive fits, and elegant styles.

From wire-free nursing bras to seamless everyday essentials, our collections are made to move with you — empowering you to look and feel your best, no matter the occasion.
<br />

<div className='flex items-center justify-center'>
  <Image
          src="/bergs1.png"
          alt="Description of my image"
          width={500}
          height={300}
        />
</div>

</div>

  )
}

export default UsersPage
