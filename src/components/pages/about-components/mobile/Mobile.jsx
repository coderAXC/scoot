import girl from "/public/mock-imges/img/girl.svg"

export const Mobile = () => {
  return (
    <>
    <div className="pt-[50px] pb-[50px] bg-bgi1 bg-no-repeat flex items-center bg-cover">
                <div className="container">
                    <h3 className="text-white font-space-bold font-700 text-[56px]">About</h3>
                </div>
            </div>
        <div className="container">
            <div className="container py-24">
            <div className="flex justify-between items-center">
                <div className="w-5/12">
                    <h3 className="font-space-bold font-700 text-[48px]">Mobility for the digital era</h3>
                    <p className="font-lexend-deca font-400 text-[15px] mt-4">Getting around should be simple (and even fun!) for everyone. We embrace technology to provide low cost, smart access to scooters at your fingertips.</p>
                </div>
                <div>
                    <img className="rounded-full" src={girl} alt="girl" loading="lazy"/>
                </div>
            </div>
        </div>
        </div>
    </>
  )
}
