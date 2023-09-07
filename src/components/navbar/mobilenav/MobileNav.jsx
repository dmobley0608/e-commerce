import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import React from 'react'
import MobileMenu from '../mobilemenu/MobileMenu'
import { usePathname, useRouter } from 'next/navigation'

export default function MobileNav({open, navigation}) {
  const pathName = usePathname()
  const setStyle=(to)=>{     
      let style = ' text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2'
      if(pathName === to){
          style+=' bg-gray-900 text-white font-medium text-lg'
      }
      return style
  }
  return (
    <>
    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
    <span className="absolute -inset-0.5" />
    <span className="sr-only">Open main menu</span>
    {open ? (
      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
    ) : (
      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
    )}
  </Disclosure.Button>
  <MobileMenu navigation={navigation} setStyle={setStyle}/>
  </>
  )
}
