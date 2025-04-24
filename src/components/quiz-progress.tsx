const getLevel = (score: number) => {
  return Math.floor(score / 1000);
};
const getMaxScoreForLevel = (level: number) => level * 1000;

export default function QuizProgress({
  score,
  isLoading,
}: {
  score: number;
  isLoading: boolean;
}) {
  const level = getLevel(score);
  const maxScoreForCurrentLevel = getMaxScoreForLevel(level);
  const progressPercentage =
    ((score % maxScoreForCurrentLevel) / maxScoreForCurrentLevel) * 100;

  const displayScore =
    score > maxScoreForCurrentLevel
      ? `${maxScoreForCurrentLevel} / ${maxScoreForCurrentLevel}`
      : `${score} / ${maxScoreForCurrentLevel}`;

  if (isLoading) {
    return (
      <div className='mb-6'>
        <div className='flex justify-between items-center mb-2 text-sm'>
          <span className='text-violet-200'>Progresso</span>
          <span className='font-medium text-violet-200'>{displayScore}</span>
          <span className='font-medium text-violet-200'>Carregando...</span>
        </div>
        <div className='w-full bg-gray-800 h-3 rounded-full relative overflow-hidden'>
          <div className='h-full bg-gradient-to-r from-violet-500 to-violet-300 animate-pulse' />
        </div>
      </div>
    );
  }

  return (
    <div className='mb-6'>
      <div className='flex justify-between items-center mb-2 text-sm'>
        <span className='text-violet-200'>Progresso - Nível {level}</span>
        <span className='font-medium text-violet-200'>{score}</span>
      </div>
      <div className='w-full bg-gray-800 h-3 rounded-full relative overflow-hidden'>
        <div
          className='h-full bg-gradient-to-r from-violet-500 to-violet-300 transition-all duration-500'
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
    </div>
  );
}
