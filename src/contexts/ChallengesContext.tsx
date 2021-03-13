import { createContext, ReactNode, useState } from "react";

export const ChallengesContext = createContext({});

interface ChallengerProviderProps {
  children: ReactNode;
}

export function ChallengesProvider({ children }: ChallengerProviderProps) {
  const [level, setLevel] = useState(1);
  const [currentExprerience, setCurrentExprerience] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(1);

  function levelUp() {
    setLevel(level + 1);
  }

  function startNewChallenge() {}

  return (
    <ChallengesContext.Provider
      value={{
        level,
        currentExprerience,
        challengesCompleted,
        startNewChallenge,
        levelUp,
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );
}
