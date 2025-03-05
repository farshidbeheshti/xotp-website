import CircularProgress from "@mui/material/CircularProgress";
import { useEffect, useState } from "react";

export function RemainingTime({
  duration,
  remaining,
}: {
  duration: number;
  remaining: number;
}) {
  // TODO: duration must not accept the number zero(0)!

  const [time, setTime] = useState<number>();
  let timer = remaining;
  useEffect(() => {
    const timeId = setInterval(() => {
      if (timer != 0) {
        // TODO: It needs resetting after re-rendering the component!
        --timer;
      }
      setTime(timer * (100 / duration));
    }, 1000);
    return () => {
      clearInterval(timeId);
    };
  }, [remaining]);
  return (
    <CircularProgress
      variant="determinate"
      value={time}
      thickness={3}
      size={150}
      color={time == -100 ? "error" : "primary"}
    />
  );
}
