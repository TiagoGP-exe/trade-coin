import { FC } from 'react'
import { AiOutlineRight } from 'react-icons/ai'
import { toCapitalaze } from '../utils/string'

interface PathsProps {
  path: string[]
  finalPath: string
}

const Paths: FC<PathsProps> = ({ path, finalPath }) => (
  <div className="flex gap-3 cursor-default items-center text-gray-400 text-sm py-4">
    {path.map(itemPath => (
      <div key={itemPath} className="flex gap-3 items-center">
        <p>{itemPath}</p>
        <AiOutlineRight />
      </div>
    ))}
    <p className="cursor-default text-gray-800 font-semibold">
      {toCapitalaze(finalPath)}
    </p>
  </div>
)

export default Paths
