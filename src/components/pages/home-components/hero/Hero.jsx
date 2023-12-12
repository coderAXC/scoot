import { Button } from "../../../common/button/Button";

export const Hero = () => {
  return (
    <>
{/* bg-[url('./mock-imges/img/Bitmap.jpg') */}
    <div className="bg-bgi0 bg-cover bg-no-repeat py-20 flex flex-col relative z-0 pb-[90px] md:py-[120px] md:bg-hero-bg-tablet lg:bg-hero-bg-desktop overflow-hidden">
                <h1 className='font-space-bold text-[40px] text-white px-6 text-center md:text-[56px] md:px-10 md:leading-[56px] lg:text-start lg:px-20 lg:ml-20 lg:w-3/5 xl:w-2/5'>Scooter sharing made simple</h1>
                <h2 className='text-center text-white px-7 my-5 text-[15px] leading-7 md:px-20 lg:text-start lg:ml-48 lg:mt-20 lg:w-3/5 xl:w-[30%]'>Scoot takes the hassle out of urban mobility. Our bikes are placed in convenient
                    locations in each of our cities. Use our app to locate the nearest bike, unlock
                    it with a tap, and you’re away!
                </h2>
                <div className='mx-auto mt-5 mb-20 lg:mx-64 xl:mx-[270px]'>
                    <Button>Getscootin</Button>
                </div>
            </div>
    </>
  );
};
