import road from "/public/mock-imges/img/road.svg"

export const Better = () => {
  return (
    <div className="container py-24">
        <div className="flex justify-between items-center">
            <div>
            <img src={road} alt="road" loading="lazy"/>
            </div>
            <div className="w-5/12">
                <h3 className="font-space-bold font-700 text-[48px]">Better urban living</h3>
                <p className="font-lexend-deca font-400 text-[15px] mt-4">We’re helping connect cities and bring people closer together. Our scooters are also fully-electric and we offset the minimal carbon footprint for each ride.</p>
            </div>
        </div>
    </div>
  )
}
