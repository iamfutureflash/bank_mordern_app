import { card } from '../assets'
import Button from './Button'
import styles, {layout} from '../style'
const CardDeal = () => {
  return (
    <section className={`main-container ${layout.section} `}>
      <div className={`left ${layout.sectionInfo}`}>
        <h4 className={`${styles.heading2} `}>Find a better card deal in few easy steps.</h4>
        <p  className={`${styles.paragraph} `}>Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>
        <div className='my-10'>
        <Button />
        </div>
      </div>
      <div className={`right ${layout.sectionImg}`}  >
        <img src={card} alt="online_analysis_image" className='w-[100%] h-[100%]' />
      </div>
    </section>
  )
}

export default CardDeal