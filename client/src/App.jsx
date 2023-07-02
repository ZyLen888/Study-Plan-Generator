import styles from "./index.module.css";
import planlogo from "./assets/planning.png";
import loadingGif from "./assets/loading.gif";

import { useState } from "react";

function App() {
  const [planDesc, setPlanDesc] = useState("");
  const [studyPlan, setStudyPlan] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const generatedStudyPlan = await generatePlan();
    setStudyPlan(generatedStudyPlan);
    setIsLoading(false);
  };

  const generatePlan = async () => {
    const response = await fetch("http://localhost:3002/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ planDesc: planDesc }),
    });
    const data = await response.json();
    return data.studyPlan;
  };

  return (
    <main className={styles.main}>
      <img src={planlogo} alt="Plan logo" className={styles.icon} />
      <h3>
        ✨ Learn ANYTHING in a week! ✨ <br /> Generate a 7-days study plan on any topic.{" "}
      </h3>
      <p>⏰ Please give 30~40 seconds for your plan to be generated!</p>

      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="plan-description"
          placeholder="👀  Enter a topic of your interest!"
          onChange={(e) => setPlanDesc(e.target.value)}
        />
        <input type="submit" value="🗓  Generate a plan!" />
        {isLoading ? (
          <div className={styles.loadingContainer}>
            <img src={loadingGif} alt="Loading" className={styles.loadingImage} />
          </div>
        ) : (
          <pre>{studyPlan}</pre>
        )}
      </form>
    </main>
  );
}

export default App;
