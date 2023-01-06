import { clients } from "../constants";
import styles from "../style";

const Clients = () => (
    <section className={`${styles.flexCenter}`}>
      <div className={`${styles.flexCenter}  flex-wrap w-full my-4`}>
        {clients.map((clients_logo) => (
          <div key={clients_logo.id} className={`${styles.flexCenter} flex-1  sm:min-w-[192px] min-w-[120px] my-2`}>
            <img src={clients_logo.logo} alt="clients_logo" className={`sm:w-[192px] w-[100px] object-contain `} />
          </div>
        ))}
      </div>
    </section>
  )

export default Clients