"use client"

import { Disclosure, Transition } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

export default function DisclosureArea() {
  return (
    <div className="w-full px-4 pt-16 flex flex-col items-center max-w-[1200px] mb-[100px] mx-auto">
      <h2 className='font-bold text-7xl self-center mb-[4rem] text-[#1c1c1c] text-center'>Got a question?</h2>
      
      <div className="w-[full] rounded-2xl bg-[#303030] p-2 shadow-lg relative">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="disclosure-box">
                <span className='text-xl'>I'm interested, how do we continue?</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-8 w-8 text-black duration-300`}
                />
              </Disclosure.Button>
              <Transition
                enter="transition duration-[400ms] ease-out"
                enterFrom="transform scale-90 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-[300ms] ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
              <Disclosure.Panel className="disclosure-text duration-300">
                If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in full, no questions asked 
              </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="disclosure-box">
                <span className='text-xl'>What happens when I get in contact?</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-8 w-8 text-black`}
                />
              </Disclosure.Button>
              <Transition
                enter="transition duration-[400ms] ease-out"
                enterFrom="transform scale-90 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-[300ms] ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
              <Disclosure.Panel className="disclosure-text duration-300">
                If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in full, no questions asked jk y ghj fghjfghj fg
              </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="disclosure-box">
                <span className='text-xl'>How much will it cost?</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-8 w-8 text-black`}
                />
              </Disclosure.Button>
              <Transition
                enter="transition duration-[400ms] ease-out"
                enterFrom="transform scale-90 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-[300ms] ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
              <Disclosure.Panel className="disclosure-text duration-300">
                If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in full, no questions asked s
              </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="disclosure-box">
                <span className='text-xl'>What happens when I get in contact?</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-8 w-8 text-black`}
                />
              </Disclosure.Button>
              <Transition
                enter="transition duration-[400ms] ease-out"
                enterFrom="transform scale-90 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-[300ms] ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
              <Disclosure.Panel className="disclosure-text duration-300">
                If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in full, no questions asked sha
              </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="disclosure-box">
                <span className='text-xl'>What happens when I get in contact?</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-8 w-8 text-black`}
                />
              </Disclosure.Button>
              <Transition
                enter="transition duration-[400ms] ease-out"
                enterFrom="transform scale-90 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-[300ms] ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
              <Disclosure.Panel className="disclosure-text duration-300">
                If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in full, no questions asked sha
              </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  )
}
