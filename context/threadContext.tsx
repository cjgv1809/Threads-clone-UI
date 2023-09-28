import { createContext, useEffect, useState } from "react";
import { generateRandomThread } from "../utils/generateDummyData";

export const ThreadsContext = createContext<Thread[]>([]);

export default function ThreadContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [threads, setThreads] = useState<Thread[]>([]);

  useEffect(() => {
    setThreads(generateRandomThread());
  }, []);

  return (
    <ThreadsContext.Provider value={threads}>
      {children}
    </ThreadsContext.Provider>
  );
}
