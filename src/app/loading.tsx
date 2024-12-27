// import classes from "@/app/loading.module.css";
// import NumberTicker from "@/components/ui/number-ticker";
// export default function LoadingPage() {
//   return (
//     <div className="flex flex-col items-center justify-center lg:mt-60 mt-60">
//       {/* <h1 className={classes.loading}>Shiva Shankar Reddy</h1> */}
//       <NumberTicker value={100} className={classes.loading} />
//       <h2 className={classes.loading}>L o a d i n g...</h2>
//     </div>
//   );
// }
"use client";
import React, { useEffect, useState } from "react";
import "./loading.module.css"; // Import CSS file

interface Greeting {
  language: string;
  text: string;
}

const Loading: React.FC = () => {
  const greetings: Greeting[] = [
    { language: "English", text: "Welcome" },
    { language: "Hindi", text: "स्वागत है" },
    { language: "Kannada", text: "ಸ್ವಾಗತ" },
    { language: "Telugu", text: "స్వాగతం" },
    { language: "", text: "Glad You’re Here – Explore My Work" },
  ];

  const [currentGreeting, setCurrentGreeting] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGreeting((prev) => (prev + 1) % greetings.length);
    }, 1500);
    return () => clearInterval(interval);
  }, [greetings.length]);

  return (
    <div style={styles.container} className="bg-gray-600 text-yellow-300">
      <div style={styles.textContainer}>
        <h1 style={styles.greeting}>{greetings[currentGreeting].text}</h1>
        <p style={styles.language}>{greetings[currentGreeting].language}</p>
      </div>
      <div className="loader"></div> {/* Use the CSS class for the loader */}
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#f3f4f6",
    // color: "#333",
    fontFamily: "Arial, sans-serif",
  },
  textContainer: {
    textAlign: "center",
    marginBottom: "20px",
  },
  greeting: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    margin: 0,
  },
  language: {
    fontSize: "1.2rem",
    // color: "#555",
  },
};

export default Loading;
