export default function QuizProgress({
  score,
  maxScore,
  isLoading,
  progress,
}: {
  score: number;
  maxScore: number;
  isLoading: boolean;
  progress: number;
}) {
  if (isLoading) {
    return (
      <div className='mb-6'>
        <div className='flex justify-between items-center mb-2 text-sm'>
          <span className='text-violet-200'>Progresso</span>
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
        <span className='text-violet-200'>Progresso</span>
        <span className='font-medium text-violet-200'>
          {score} / {maxScore}
        </span>
      </div>
      <div className='w-full bg-gray-800 h-3 rounded-full relative overflow-hidden'>
        <div
          className='h-full bg-gradient-to-r from-violet-500 to-violet-300 transition-all duration-500'
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
