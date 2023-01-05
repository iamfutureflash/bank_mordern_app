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
        <p className={`${styles.paragraph} `}> With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
      </div>

      <div className='right'></div>
    </section >
  )
}

export default Business