import { useRouter } from 'next/router'
import { FC } from 'react'
import { RiGithubLine } from 'react-icons/ri'
import Logo from './Logo'

const Footer: FC = () => {
  const { push } = useRouter()

  return (
    <div className='flex flex-col gap-y-2 sm:flex-row py-10 rounded-2xl max-w-screen-xl w-full justify-between items-center'>
      <div className='flex gap-2 items-center'>
        <div onClick={() => push('https://github.com/TiagoGP-exe/trade-coin')}>
          <RiGithubLine
            size={32}
            className='hover:scale-110 duration-150 ease-in-out cursor-pointer'
          />
        </div>
        <div onClick={() => push('/')}>
          <Logo classname='w-14' />
        </div>
      </div>
      <p className='text-slate-400 font-semibold text-sm cursor-default'>
        © {new Date().getFullYear()} Tiago Guimarães Pinto. All rights reserved
      </p>
    </div>
  )
}

export default Footer
