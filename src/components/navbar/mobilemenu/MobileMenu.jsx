import { Disclosure } from '@headlessui/react'
import React from 'react'

export default function MobileMenu({navigation, setStyle}) {
  return (
    <Disclosure.Panel className="sm:hidden">
    <div className="transition ease-in-out duration-300 absolute right-0 flex flex-col z-10 top-16 px-2 pb-3 pt-2 bg-slate-500 w-96 rounded">
      {navigation.map((item) => (
        <Disclosure.Button
          key={item.name}
          as="a"
          href={item.href}
          className={setStyle(item.href)}
         
          aria-current={item.current ? 'page' : undefined}
        >
          {item.name}
        </Disclosure.Button>
      ))}
    </div>
  </Disclosure.Panel>
  )
}
