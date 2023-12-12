import value1 from "/public/mock-imges/img/values-1.svg"
import value2 from "/public/mock-imges/img/values-2.svg"
import value3 from "/public/mock-imges/img/values-3.svg"

export const Values = () => {
  return (
    <div className="container">
        <h2 className="font-space-bold font-700 text-[48px] text-center">Our Values</h2>
        <div className="flex justify-between gap-7">
            <div className="w-4/12">
                <img src={value1} alt="value" loading="lazy"/>
                <h3 className="text-globalDark text-center font-space-bold text-[24px] font-700 mb-[10px]">Our tech</h3>
                <p className="text-globalDark-1 text-center font-400 font-lexend-deca text-[15px]">We’re using cutting edge technology to drive accessible urban transportation forward. Our fully electric scooters are a joy to ride!</p>
            </div>
            <div className="w-4/12">
            <img src={value2} alt="value" loading="lazy"/>
            <h3 className="text-globalDark text-center font-space-bold text-[24px] font-700 mb-[10px]">Our integrity</h3>
                <p className="text-globalDark-1 text-center font-400 font-lexend-deca text-[15px]">We are fully committed to deliver a great yet safe, sustainable micro-mobility experience in every city we serve.</p>
            </div>
            <div className="w-4/12">
            <img src={value3} alt="value" loading="lazy"/>
            <h3 className="text-globalDark text-center font-space-bold text-[24px] font-700 mb-[10px]">Our community</h3>
                <p className="text-globalDark-1 text-center font-400 font-lexend-deca text-[15px]">We support every community we serve. All workers are paid a living wage based on their location and are Scoot employees.</p>
            </div>
        </div>
    </div>
  )
}
