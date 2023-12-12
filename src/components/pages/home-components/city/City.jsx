import { Button } from "../../../common/button/Button"
import city from "/public/mock-imges/img/city.svg"

export const City = () => {
  return (
    <div className="container py-24 ">
        <div className="flex justify-between items-center max-tablet:flex-col">
            <div>
                <img className="mb-7" src={city} alt="city" loading="lazy"/>
            </div>
            <div className="w-5/12 max-tablet:w-full">
                <h3 className="font-space-bold font-700 text-[48px] text-globalDark">Coming to a city near you</h3>
                <p className="font-lexend-deca font-400 text-[15px] mt-4 mb-4 text-globalDark">Scoot is available in 4 major cities so far. We’re expanding rapidly, so be sure to let us know if you want to see us in your hometown. We’re aiming to let our scooters loose on 23 cities over the coming year.</p>
                <Button>Learn More</Button>
            </div>
            
        </div>
    </div>
  )
}
