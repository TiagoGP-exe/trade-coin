import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import logo from '../assets/logo.svg'
import { RiGithubLine } from 'react-icons/ri'

const Footer: FC = () => (
  <div className='flex flex-col gap-y-2 sm:flex-row py-10 rounded-2xl max-w-screen-xl w-full justify-between'>
    <div className='flex gap-2 items-center'>
      <Link href='https://github.com/TiagoGP-exe/trade-coin'>
        <a>
          <RiGithubLine
            size={32}
            className='hover:scale-110 duration-150 ease-in-out cursor-pointer'
          />
        </a>
      </Link>
      <div className='w-40 '>
        <Link href='/'>
          <a>
            <Image
              src={logo}
              layout='responsive'
              alt='Logo'
              className='cursor-pointer opacity-90  hover:opacity-100 duration-150 ease-in-out'
            />
          </a>
        </Link>
      </div>
    </div>
    <p className='text-slate-400 font-semibold text-sm cursor-default'>
      © {new Date().getFullYear()} Tiago Guimarães Pinto. All rights reserved
    </p>
  </div>
)

export default Footer
