import { Button } from '../../../common/button/Button'
import zero from "/public/mock-imges/img/soqqa.svg"

export const Zero = () => {
  return (
    <div className="container py-24">
        <div className="flex justify-between items-center max-tablet:flex-col-reverse">
            <div className="w-5/12 max-tablet:w-full">
                <h3 className="font-space-bold font-700 text-[48px] text-globalDark">Easy to use riding telemetry</h3>
                <p className="font-lexend-deca font-400 text-[15px] mt-4 mb-4 text-globalDark">The Scoot app is available with riding telemetry. This means it can show you your average speed, how long you've been using the scooter, your traveling distance, and many more things all in an easy to use app.</p>
                <Button>Learn More</Button>
            </div>
            <div>
                <img className='rounded-full mb-7' src={zero} alt="zero" loading="lazy"/>
            </div>
        </div>
    </div>
  )
}
