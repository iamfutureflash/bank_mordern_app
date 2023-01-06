import { features } from '../constants';
import styles, { layout } from '../style';
import Button from './Button';

function Business() {
  return (
    <section id='features' className={`main-container ${layout.section}`
    }>
      <div className={`left ${layout.sectionInfo}`} >
        <h2 className={`${styles.heading2}`}>You do the business,
          <br c />
          we’ll handle the money.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 `}> With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
        <div classNam='button '>
          <Button />
        </div>
      </div>

      <div className={`right ${layout.sectionImg} flex-col`}>
        {
          features.map((feature, index) => (
            <FeatureCard key={feature.id} {...feature} index={index} />
          ))
        }
      </div>
    </section >
  )
}


const FeatureCard = ({ index, icon, title, content }) => {
  return (
    <div className={`  flex flex-row p-6 rounded-2xl ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
      <div className={`w-[64px] h-[64px] bg-dimBlue rounded-full ${styles.flexCenter}`}>
        <img src={icon} alt="icon" className='w-[50%] h-[50%] object-contain' />
      </div>
      <div className={`flex-1 flex flex-col ml-3`}>
        <h4 className='font-poppins font-semibold text-white tex-[18px] leading-[23px]'>{title}</h4>
        <p className='font-poppins font-normal text-dimWhite text-[16px] leading-[24px]'>{content}</p>
      </div>
    </div>
  )
}
export default Business