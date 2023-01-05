import styles from './style';
import { Navbar, Hero, Stats, Business, Billing, CardDeal, Testimonials, Clients, CTA, Footer } from './components';
const App = () => (
  <div className='main-container bg-primary w-full overflow-hidden'>
    <div className={`Navbar-container ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`Navbar-component ${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
    
    <div className={`Hero-container bg-primary ${styles.flexStart}`}>
      <div className={`Hero-component ${styles.boxWidth}`}>
        <Hero/>
      </div>
    </div>
    
    <div className={`Hero-container bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`Hero-component ${styles.boxWidth} text-secondary`}>
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA />
        <Footer />
      </div>
    </div>

  </div>
);



export default App