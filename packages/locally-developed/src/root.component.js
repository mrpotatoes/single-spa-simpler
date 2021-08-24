import styles from "./something.css";

// const styles = {
//   backgroundColor: 'lightgrey'
// }

export default () => (
  <section
    className={styles.face}
    onClick={() => {
      console.log("but seriously tho, andric rules");
    }}
  >
    ANDRIC RULES
  </section>
);
