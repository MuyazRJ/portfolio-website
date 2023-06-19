"use client"

import { FormEvent } from "react";
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import SpaceParticles from "./SpaceParticles";

const Form = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [emptyName, setEmptyName] = useState(false)
    const [emptyPhone, setEmptyPhone] = useState(false)
    const [emptyEmail, setEmptyEmail] = useState(false)
    const [emptyMessage, setEmptyMessage] = useState(false)
    const [useAnimation, setAnimation] = useState(false)
    const [isDisabled, setIsDisabled] = useState(false)

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [business, setBusiness] = useState('')

    function closeModal() {
        setIsOpen(false)
      }
    
    function openModal() {
    setIsOpen(true)
    }

    function resetErrors() {
        setEmptyName(false)
        setEmptyPhone(false)
        setEmptyEmail(false)
        setEmptyMessage(false)
    }

    function resetInputs() {
      setName('')
      setPhone('')
      setEmail('')
      setMessage('')
      setBusiness('')
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        resetErrors()
        setIsDisabled(true)

        let isError = false

        if (name.trim().length === 0) {
            setEmptyName(true)
            isError = true
            setAnimation(true)
        }

        if (phone.trim().length === 0) {
            setEmptyPhone(true)
            isError = true
            setAnimation(true)
        }

        if (email.trim().length === 0) {
            setEmptyEmail(true)
            isError = true
            setAnimation(true)
        }

        if (message.trim().length === 0) {
            setEmptyMessage(true)
            isError = true
            setAnimation(true)
        }

        if (!isError) {
            openModal()
            resetInputs()
        }

        setTimeout(() => {
          setAnimation(false)
          setIsDisabled(false)
        }, 750)
    }

    return ( 
        <div className="flex flex-col w-full mt-[10rem] relative justify-center items-center pb-[100px] shadow-xl bg-[#171717] z-10">
            <SpaceParticles id="form"/>
            <h2 className="font-bold text-7xl max-w-[70%] text-white text-center mt-14 [text-shadow:_0_0_10px_rgb(255_255_255_/_44%)]">We will show you what works</h2>
            <h4 className="text-5xl font-bold text-gray-300 mt-5 [text-shadow:_0_0_10px_rgb(255_255_255_/_34%)]">(For Free)</h4>

            <form action="" className="mt-16 bg-[#F6C84A] max-w-[1440px] flex flex-col p-16 pb-4 pt-12 rounded-[2rem] justify-center items-center gap-6" onSubmit={e => handleSubmit(e)}>
                <div className="flex justify-between w-full gap-6">
                    <input type="text" name="name" placeholder="name" className={`input-box ${emptyName ? 'border-2 border-red-500': ''} ${(emptyName && useAnimation) ? 'animate-wiggle': ''}`} maxLength={50} value={name} onChange={e => setName(e.target.value)}/>
                    <input type="text" name="business name" placeholder="business name" className="input-box" maxLength={50} value={business} onChange={e => setBusiness(e.target.value)}/>
                </div>

                <div className="flex justify-between w-full gap-6">
                    <input type="text" name="email" placeholder="email" className={`input-box ${emptyEmail ? 'border-2 border-red-500': ''} ${(emptyEmail && useAnimation) ? 'animate-wiggle': ''}`} maxLength={100} value={email} onChange={e => setEmail(e.target.value)}/>
                    <input type="text" name="phone" placeholder="phone" className={`input-box ${emptyPhone ? 'border-2 border-red-500': ''} ${(emptyPhone && useAnimation) ? 'animate-wiggle': ''}`} maxLength={50} value={phone} onChange={e => setPhone(e.target.value)}/>
                </div>

                <div className="flex w-full">
                    <textarea name="message" placeholder="message" className={`outline-none flex-1 p-4 rounded-md h-[15rem] resize-none ${emptyMessage ? 'border-2 border-red-500': ''} ${(emptyMessage && useAnimation) ? 'animate-wiggle': ''}`} maxLength={1000} value={message} onChange={e => setMessage(e.target.value)}/>
                </div>

                <div className="">
                    <input type="submit" className="bg-[#171717] text-white px-20 py-4 rounded-md shadow-lg hover:scale-110 duration-200 cursor-pointer" disabled={isDisabled}/>
                </div>
            </form>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-70"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-70"
                    leaveTo="opacity-0">
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>
                    <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Enquiry Sent
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Your enquiry has been successfully submitted. We'll respond as soon as we have reviewed your request.
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-[#171717] px-4 py-2 text-sm font-medium text-white hover:bg-[#252525] duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
                </div>
            </div>
                </Dialog>
            </Transition>
        </div>
     );
}
 
export default Form;