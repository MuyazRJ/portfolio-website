"use client"

import { Disclosure, Transition } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

export default function DisclosureArea() {
  return (
    <div className="w-full px-4 pt-16 flex flex-col items-center mb-[200px]">
      <h2 className='font-bold text-7xl self-center mb-[4rem] text-[#1c1c1c]'>Got a question?</h2>

      <div className="w-[full] rounded-2xl bg-[#F6C84A] p-2">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-[900px] justify-between rounded-lg bg-white px-4 py-2 text-left text-sm font-medium text-black hover:bg-gray-100 duration-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 items-center">
                <span className='text-xl'>I'm interested, how do we continue?</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-8 w-8 text-black`}
                />
              </Disclosure.Button>
              <Transition
                enter="transition duration-300 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-300 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-black">
                If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in full, no questions asked.
              </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-[900px] justify-between rounded-lg bg-white duration-200 px-4 py-2 text-left text-sm font-medium text-black hover:bg-gray-100  focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 items-center">
                <span className='text-xl'>What happens when I get in contact?</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-8 w-8 text-black`}
                />
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                No.
              </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  )
}
