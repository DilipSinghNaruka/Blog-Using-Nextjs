import React from 'react';
import { useRouter } from 'next/router'

const slug = () => {
    const router = useRouter()
   const {slug} = router.query;
   return <div> <h1> title of the page {slug} </h1>
   <div>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni odio vel distinctio, ullam tempore dignissimos architecto. Ad quas perferendis itaque aspernatur tenetur magnam. Saepe reiciendis non dolore ullam harum magni quos beatae culpa! Quam aliquid et harum voluptatibus nulla? Ipsum recusandae facilis tempora non dolore?
   </div>
   </div>;
}

export default slug 