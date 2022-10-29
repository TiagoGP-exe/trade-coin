import { FC } from 'react'
import { AiOutlineRight } from 'react-icons/ai'

interface PathsProps {
  path: string[]
  finalPath: string
  className?: string
}

const Paths: FC<PathsProps> = ({ path, finalPath, className = '' }) => (
  <div
    className={`${className} flex gap-3 cursor-default items-center text-gray-400 dark:text-slate-500 text-sm py-4`}
  >
    {path.map(itemPath => (
      <div key={itemPath} className='flex gap-3 items-center'>
        <p>{itemPath?.toUpperCase()}</p>
        <AiOutlineRight />
      </div>
    ))}
    <p className='cursor-default text-gray-800 dark:text-slate-300 font-semibold'>
      {finalPath?.toUpperCase()}
    </p>
  </div>
)

export default Paths
