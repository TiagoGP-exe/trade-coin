import { useTheme } from 'next-themes'
import { FC } from 'react'

interface LogoProps {
  classname?: string
}

const Logo: FC<LogoProps> = ({ classname = 'w-20' }) => {
  const { theme } = useTheme()
  const imgName = theme === 'light' ? 'logo' : 'logo-light'
  return (
    <img src={`/${imgName}.svg`} className={` flex-shrink-0 ${classname}`} />
  )
}
export default Logo
