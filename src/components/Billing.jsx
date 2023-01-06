import { bill,apple,google } from '../assets'
import styles, {layout} from '../style'
function Billing() {
  return (
    <section className={`${layout.sectionReverse} main-container justify-center items-center `}>
      <div className={`left ${layout.sectionImgReverse} `}>
        <img src={bill} alt="billing" className='w-[100%] h-[100%] relative z-[5]' />
        <div className='white__gradient absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full '/>
        <div className='pink__gradient absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full '/>
        </div>
        
      <div className={`right ${layout.sectionInfo}   `}>
        <h2 className={`${styles.heading2}`}>Easily control your <br className='sm:block hidden'/> billing & invoicing.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>
        <div className={`flex flex-row flex-wrap  sm:mt-10 mt-6 ` }>
        <img src={apple} alt="apple_stor" className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer'/>
        <img src={google} alt="google_play_stor"  className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer'/>
        </div>
      </div>
    </section>
  )
}

export default Billing