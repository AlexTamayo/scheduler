import { useState } from "react";

function useVisualMode(initial) {

  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  const transition = (newMode, replace = false) => {
    if (replace) {
      setHistory(prev => [...prev.slice(0, prev.length - 1), newMode])
    } else {
      setMode(newMode);
      setHistory(prev => [...prev, newMode]);
    }
  };

  const back = () => {
    if(history.length > 1) {
      setHistory(prev => [...prev.slice(0, prev.length - 1)])
    }
  }

  return { mode: history[history.length - 1], transition, back }
}

export default useVisualMode;