// import cssModules from './something.css'
// console.log('cssModules', cssModules)

import test from "./test";

const styles = {
  backgroundColor: "lightgrey",
};

export default () => (
  <section
    className={styles.face}
    onClick={() => {
      console.log("but seriously tho, andric rules");
    }}
  >
    ANDRIC RULES {test()}
  </section>
);
