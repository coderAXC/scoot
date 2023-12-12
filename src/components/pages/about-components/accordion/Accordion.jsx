import { Accordion, AccordionItem } from '@szhsin/react-accordion';

export const Acc = () => {
  return (
    <div className='container'>
    <h3 className='text-globalDark text-center font-space-bold font-700 text-[48px]'>FAQs</h3>
    <Accordion>
        <div className='dfcol gap-4 mb-3'>
        <AccordionItem className="bg-grey-1 p-4" header={<span className='font-space-bold font-700 text-[24px] text-globalDark'>How do I download the app?</span>}>
            <span className='text-globalDark font-lexend-deca font-400 text-[15px]'>
            To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page.
            </span>
        </AccordionItem>

        <AccordionItem className="bg-grey-1 p-4" header={<span className='font-space-bold font-700 text-[24px] text-globalDark'>How do I download the app?</span>}>
        <span className='text-globalDark font-lexend-deca font-400 text-[15px]'>
            To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page.
            </span>
        </AccordionItem>

        <AccordionItem className="bg-grey-1 p-4" header={<span className='font-space-bold font-700 text-[24px] text-globalDark'>How do I download the app?</span>}>
        <span className='text-globalDark font-lexend-deca font-400 text-[15px]'>
            To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page.
            </span>
        </AccordionItem>
        </div>
        <div className='dfcol gap-4'>
        <AccordionItem className="bg-grey-1 p-4" header={<span className='font-space-bold font-700 text-[24px] text-globalDark'>How do I download the app?</span>}>
        <span className='text-globalDark font-lexend-deca font-400 text-[15px]'>
            To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page.
        </span>
        </AccordionItem>

        <AccordionItem className="bg-grey-1 p-4" header={<span className='font-space-bold font-700 text-[24px] text-globalDark'>How do I download the app?</span>}>
        <span className='text-globalDark font-lexend-deca font-400 text-[15px]'>
            To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page.
        </span>
        </AccordionItem>

        <AccordionItem className="bg-grey-1 p-4" header={<span className='font-space-bold font-700 text-[24px] text-globalDark'>How do I download the app?</span>}>
        <span className='text-globalDark font-lexend-deca font-400 text-[15px]'>
            To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page.
        </span>
        </AccordionItem>
        </div>
    </Accordion>
    </div>
  )
}
