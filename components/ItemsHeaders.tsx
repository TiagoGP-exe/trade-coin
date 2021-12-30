import Link from 'next/link'
import { FC } from 'react'

interface ItemsHeaders {
  title: string
  goToPage?: '/' | '/exchanges'
}

const ItemsHeaders: FC<ItemsHeaders> = ({ title, goToPage = '/' }) => (
  <div className="justify-center items-center">
    <Link href={goToPage}>
      <a>
        <p className="font-semibold cursor-pointer hover:text-cyan-500 duration-150 hover:tracking-wider ease-in-out">
          {title}
        </p>
      </a>
    </Link>
  </div>
)

export default ItemsHeaders
