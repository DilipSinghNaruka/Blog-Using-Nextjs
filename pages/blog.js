import styles from '../styles/Home.module.css'
import Link from 'next/link';


function Blog() {
  return (
    <>
    <h1>Letest Blogs </h1>
    <div className="blogItem">
      <Link href={'/Blogpost/learn-javascript'}>
      <h3>How to learn Javascript </h3></Link>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, accusamus quam repudiandae ad, nisi dolorem voluptatum id numquam at quaerat ipsum sint. Modi sit soluta deserunt, pariatur quis debitis quo saepe nemo accusamus beatae maxime ratione a reiciendis assumenda quasi fugit possimus repellat tenetur repellendus?</p>
    </div>
    <div className="blogItem">
      <h3>How to learn Javascript </h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, accusamus quam repudiandae ad, nisi dolorem voluptatum id numquam at quaerat ipsum sint. Modi sit soluta deserunt, pariatur quis debitis quo saepe nemo accusamus beatae maxime ratione a reiciendis assumenda quasi fugit possimus repellat tenetur repellendus?</p>
    </div>
    <div className="blogItem">
      <h3>How to learn Javascript </h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, accusamus quam repudiandae ad, nisi dolorem voluptatum id numquam at quaerat ipsum sint. Modi sit soluta deserunt, pariatur quis debitis quo saepe nemo accusamus beatae maxime ratione a reiciendis assumenda quasi fugit possimus repellat tenetur repellendus?</p>
    </div>
    </>
  )
}

export default Blog