import react from "react";
import styles from "./contact.module.scss";
import ContactForm from "./ContactForm.jsx"


function Contact() {



    return(
    <section className={styles.ContactSection}>
    <div className={styles.ContactContent}> 
    <h1 className={styles.contactHead}> now, lets chat.</h1>
    </div>
    <div className={styles.ContactForm}> 
    <ContactForm />

    </div>
    </section>
    )
}


export default Contact;