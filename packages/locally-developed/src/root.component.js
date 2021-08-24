import test from "./test";
import cssModules from "./something.css";

export default () => (
  <section
    onClick={() => {
      console.log("but seriously tho, andric rules");
    }}
  >
    <div className={cssModules.face}>ANDRIC RULES {test()}</div>
  </section>
);
