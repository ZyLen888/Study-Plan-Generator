import styles from "./index.module.css";
import planlogo from "./assets/planning.png";

function App() {
  return (
    <main className={styles.main}>
      <img src={planlogo} alt="Plan logo" className={styles.icon} />
      <h3>✨ Generate a Study Plan based on any topic given! ✨</h3>

      <form>
        <input
          type="text"
          name="plan-description"
          placeholder="👀  Enter a topic of your interest!"
        />
        <input type="submit" value="🗓  Generate a plan!" />
      </form>
    </main>
  );
}

export default App;
