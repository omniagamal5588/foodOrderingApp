import Link from '@/components/link';
import { buttonVariants } from '@/components/ui/button';
import { Routes } from '@/constants/enums';
import { getCurrentLocale } from '@/lib/getCurrentLocale';
import getTrans from '@/lib/translation';
import { ArrowRightCircle } from 'lucide-react';
import Image from 'next/image';

async function Hero() {
  const local =  await getCurrentLocale();
  const {home }= await getTrans(local);
  const {hero}= home


  
  return (
    <section className='section-gap'>
      <div className='container grid grid-cols-1 md:grid-cols-2'>
        <div className='md:py-12'>
          <h1 className='text-4xl font-semibold'></h1>
          <p className='text-accent my-4'>{hero.description}</p>
          <div className='flex items-center gap-4'>
            <Link
              href={`/${Routes.MENU}`}
              className={`${buttonVariants({
                size: 'lg',
              })} space-x-2 !px-4 !rounded-full uppercase`}
            >
             Show More
              <ArrowRightCircle
                className={`!w-5 !h-5`}
              />
            </Link>
            <Link
              href={`/${Routes.ABOUT}`}
              className='flex gap-2 items-center text-black hover:text-primary duration-200 transition-colors font-semibold'
            >
            learn more
              <ArrowRightCircle
                className={`!w-5 !h-5`}
              />
            </Link>
          </div>
        </div>
        <div className='relative hidden md:block'>
          <Image
            src='/assets/images/pizza.png'
            alt='Pizza'
            fill
            className='object-contain'
            loading='eager'
            priority
          />
        </div>
      </div>
    </section>
  );
}
export default Hero;