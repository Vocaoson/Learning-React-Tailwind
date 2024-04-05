import Button from '../components/Button';
import { shoes, statistics } from './../constants/index';
import { bigShoe1 } from '../assets/images';
import ShoeCard from '../components/ShoeCard';
import { useState } from 'react';

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  return (
    <section id="home" className="w-full flex justify-center min-h-screen gap-10 max-container max-xl:flex-col">
      <div className="relative xl:h-2/5 flex flex-col justify-center items-start w-full max-lg:padding-x pt-28">
        <p className='text-coral-red text-xl font-montserrat'>Our Summer collections</p>
        <h1 className='text-8xl font-bold mt-10'>
          <span>The New Arrival</span>
          <br />
          <span className='text-coral-red'>Nike</span> Shoes
        </h1>
        <p className='font-montserrat mt-10 mb-10 text-xl text-gray-500'>Discover stylish Nike arrivals, quality comfort, and innovation for your active life.</p>
        <Button></Button>
        <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16'>
          {
            statistics.map((item) => (
              <div key={item.label}>
                <p className='font-bold text-4xl'>{item.value}</p>
                <p>{item.label}</p>
              </div>
            ))
          }
        </div>
      </div>
      <div className='relative flex justify-center items-center xl:min-h-screen max-xl: py-40 bg-primary bg-hero bg-cover bg-center'>
        <img src={bigShoeImg} alt="bigShoe1" width={650} height={500} className='object-contain relative z-10' />
        <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%]'>
          {
            shoes.map((shoe) => (
              <div key={shoe}>
                <ShoeCard
                  imgUrl={shoe}
                  changeBigShoeImage={() => { 
                    setBigShoeImg(shoe.bigShoe)
                  }}
                  bigShoeImg={bigShoeImg}
                >

                </ShoeCard>
              </div>
            )
            )
          }
        </div>
      </div>
    </section>

  )
}

export default Hero;