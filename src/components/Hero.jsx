import styles from '../style';
import { discount, robot } from '../assets';
import GetStarted from './GetStarted';
const Hero = () => {
  return (
    <section id='home' className={` main-container flex flex-col md:flex-row ${styles.paddingY}`}>
      <div className={` sm:top-placement md:left-placement child-container flex-1 ${styles.flexStart} flex-col sm:px-16 xl:px-0 px-6`}>
        <div className="discount-component-left flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px] mr-2" />
          <p className={` ${styles.paragraph} ml-2 `} >
            <span className='text-white'>20%</span>{" "}Discount For {" "}
            <span className='text-white'>1 Month</span> Account
          </p>
        </div>

        <div className='generation-component capitalize flex flex-row justify-between items-center w-full'>
          <h1 className='text-white flex-1 font-poppins font-semibold text-[52px] ss:text-[72px] leading-[75px] ss:leading-[100.8px] '>
            the next <br className='sm:block hidden' />
            <span className='text-gradient'> generation </span>
          </h1>
          <div className='get-started-component ss:flex hidden md:mr-4 mr-0 '>
            <GetStarted />
          </div>
        </div>

        <h1 className=' text-white  font-poppins font-semibold text-[52px] ss:text-[68px] leading-[60px] ss:leading-[100.8px] w-full h-[20%]'>
          Payment Method
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Our team of experts uses a methodology to identify the credit cards most likely to fit your needs.
          We examine annual percentage rates, annual fees.
        </p>
      </div>

      <div className={`right flex-1 ex-1 flex flex-col ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={robot} alt="billing" className='w-[100%] h-[100%] relative z-[5]' />

        <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient ' />
        <div className='absolute z-[1] w-[80%] h-[80%] bottom-40
  rounded-full white__gradient opacity-[50%]'/>
        <div className='absolute z-[0] w-[50%] h-[50%] right-20
        bottom-10 left-20 blue__gradient ' />
        <div className='absolute z-[0] w-[70%] h-[50%] right-[-20%]
        bottom-0  blue__gradient' />

        <div className={`ss:hidden ${styles.flexCenter}`}>
          <GetStarted className="z-5" />
        </div>
      </div>

    </section>
  )
}

export default Hero