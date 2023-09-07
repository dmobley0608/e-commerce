"use client"
import { Fragment, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import NavLink from './navlink/NavLink'
import MobileNav from './mobilenav/MobileNav'
import ShoppingBag from './shoppingbag/ShoppingBag'




export default function Navbar() {
  const [active, setActive] = useState()
  const navigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'Shop', href: '/products', current: false },
    { name: 'About', href: '#', current: false }
    ,
  ]

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <Disclosure as="nav" className="bg-slate-700 text-white shadow-sm min-w-full mb-7">
      {({ open }) => (
        <>

          <div className="mx-auto  px-2 sm:px-6 ">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">

                {/* Mobile menu button*/}
                <MobileNav open={open} navigation={navigation} />

              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <h1 className='font-extrabold text-lg drop-shadow-lg shadow-slate-200 '>All The Ducks</h1>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        label={item.name}
                        aria-current={active ? 'page' : undefined}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 left-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <ShoppingBag quantity={8} />
              </div>
            </div>
          </div>


        </>
      )}
    </Disclosure>
  )
}
