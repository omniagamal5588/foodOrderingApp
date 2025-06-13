import { Routes } from '@/constants/enums';
import MainHeading from '../main-heading';


async function About() {
  
  return (
    <section className='section-gap' id={Routes.ABOUT}>
      <div className='container text-center'>
        <MainHeading subTitle='Our Story' title='About Us' />
        <div className='text-accent max-w-md mx-auto mt-4 flex flex-col gap-4'>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Mollitia est nemo nihil nesciunt quibusdam ullam possimus quod cum, 
            illum sequi rerum eius necessitatibus culpa itaque rem recusandae nam accusamus laudantium.</p>

          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto,
             explicabo nulla recusandae laborum nostrum atque quo animi tenetur facilis aspernatur
             sequi neque ex nihil ad ducimus iure quisquam eum quidem.</p>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Tenetur ea dolorem commodi soluta sequi incidunt quae quasi eligendi maiores quibusdam,
             nostrum mollitia voluptatibus voluptatum adipisci dignissimos necessitatibus et numquam nam.</p>
        </div>
      </div>
    </section>
  );
}

export default About;