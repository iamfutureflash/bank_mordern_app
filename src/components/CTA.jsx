import styles from "../style"
import Button from "./Button"

const CTA = () => {
  return (
    <section className={`flex justify-between flex-wrap flex-col md:flex-row my-10 w-full bg-black-gradient-2 rounded-3xl md:py-[62px] md:px-[97px] py-[20px] px-[20px] box-shadow`}>
    <div className={`right my-2 sm`}>
      <h2 className={`${styles.heading2}`}>Let's try our service now!</h2>
      <p  className={`${styles.paragraph} my-1 max-w-[450px]`}>Everything you need to accept card payments and grow your business anywhere on the plant.</p>
    </div>
    <div className={`left flex  md:justify-center items-center  py-2 sm:mt-1 mt-4`}>
      <Button/>
    </div>
    </section>
  )
}

export default CTA