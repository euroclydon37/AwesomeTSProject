export function generateAntWinLikelihoodCalculator() {
  const delay = 7000 + Math.random() * 7000;
  const likelihoodOfAntWinning = Math.random();

  return (callback: (chance: number) => void) => {
    setTimeout(() => {
      callback(likelihoodOfAntWinning);
    }, delay);
  };
}

export const getWinChance = (): Promise<number> =>
  new Promise(resolve => generateAntWinLikelihoodCalculator()(resolve));
