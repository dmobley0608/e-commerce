import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function NavLink({to, label}) {
    const router = useRouter()
    
    const setStyle=()=>{
        const style = 'text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'       
        if(router.pathname === to){
          
            style.join('bg-gray-500 text-white')
        }
        return style
    }
  return (
    <Link href={to}  className={setStyle()}>{label}</Link>
  )
}
