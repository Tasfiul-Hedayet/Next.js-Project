import Link from "next/link";
import styles from "../styles/payment.module.css";
import Navbar from "../components/Nav";
import Footer from "../components/Footer";

function payment() {
  return (
    <>
    <div className={styles.bg}>
      <Navbar />
      <div className={styles.main}>
        <h1>Card Details</h1>
      </div>

      <div className={styles.form}>
      <p>First Name <input type="text" /></p>
      <p>Last Name <input type="text" /></p>
      <p>Card No <input type="text" /></p>
      <p>CVV <input type="text" /></p>

      </div>

      <div className={styles.button}>
        <button>
          <Link href="/ptext">Pay</Link>
        </button>
      </div>

      <div className={styles.nav}>
      <Footer />
      </div>
      
      </div>
    </>
  );
}

export default payment;
