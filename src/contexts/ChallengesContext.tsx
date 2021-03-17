import { createContext, ReactNode, useState } from "react";
import challenges from "../../challenges.json";

interface Challenge {
  type: "body" | "eye";
  description: string;
  amount: number;
}

interface ChallengerContextData {
  level: number;
  currentExprerience: number;
  challengesCompleted: number;
  activeChallenge: Challenge;
  levelUp: () => void;
  startNewChallenge: () => void;
}

interface ChallengerProviderProps {
  children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengerContextData);

export function ChallengesProvider({ children }: ChallengerProviderProps) {
  const [level, setLevel] = useState(1);
  const [currentExprerience, setCurrentExprerience] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);
  const [activeChallenge, setActiveChallenge] = useState(null);

  function levelUp() {
    setLevel(level + 1);
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];

    setActiveChallenge(challenge);
  }

  return (
    <ChallengesContext.Provider
      value={{
        level,
        currentExprerience,
        challengesCompleted,
        levelUp,
        startNewChallenge,
        activeChallenge,
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );
}
