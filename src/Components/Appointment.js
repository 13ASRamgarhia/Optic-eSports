import React, { useState } from 'react'
import { useRef } from 'react'
import { Header,  Modal } from 'semantic-ui-react'

function Appointment() {
  const [open, setOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    companyName: "",
    message: ""
  })

  const [formLoading, setFormLoading] = useState(false)
  const formRef = useRef()
  const [success, setSuccess] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormLoading(true)
    console.log(formData)
    setTimeout(() => {setFormLoading(false)}, 2000)
    setTimeout(() => setSuccess("**This functionality is yet to be implemented**"), 2100)
    setTimeout(() => {setOpen(false)}, 6000)
    setTimeout(() => setSuccess(""), 6100)
  }

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<p className='w-full h-full px-6 py-3'>Book an Appointment</p>}
    >
      <Modal.Header>Book an Appointment</Modal.Header>
      <Modal.Content image>
        <Modal.Description>
          <Header>Appointment form</Header>
          <p>
            Please fill the form below to book an appointment. Our executives will get back to you as soon as possible
          </p>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className='mt-4 space-y-4 flex flex-col'
          >
            <label className='flex flex-col space-y-1 text-lg'>
              <span className=''>Your Name</span>
              <input
                type='text'
                name='name'
                value={formData.name}
                onChange={handleChange}
                autoComplete='off'
                placeholder="What's your name?"
                className='py-1 px-2 border border-gray-500 hover:border-headingColor focus:border-2 focus:outline-none w-[33%] rounded-xl'
              />
            </label>
            <label className='flex flex-col space-y-1 text-lg'>
              <span className=''>Your email</span>
              <input
                type='text'
                name='email'
                value={formData.email}
                onChange={handleChange}
                autoComplete='off'
                placeholder="What's your email?"
                className='py-1 px-2 border border-gray-500 hover:border-headingColor focus:border-2 focus:outline-none w-[33%] rounded-xl'
              />
            </label>
            <label className='flex flex-col space-y-1 text-lg'>
              <span className=''>Your mobile number</span>
              <input
                type='text'
                name='mobile'
                value={formData.mobile}
                onChange={handleChange}
                autoComplete='off'
                placeholder="What's your mobile number?"
                className='py-1 px-2 border border-gray-500 hover:border-headingColor focus:border-2 focus:outline-none w-[33%] rounded-xl'
              />
            </label>
            <label className='flex flex-col space-y-1 text-lg'>
              <span className=''>Your company name</span>
              <input
                type='text'
                name='companyName'
                value={formData.companyName}
                onChange={handleChange}
                autoComplete='off'
                placeholder="What's your company name?"
                className='py-1 px-2 border border-gray-500 hover:border-headingColor focus:border-2 focus:outline-none w-[33%] rounded-xl'
              />
            </label>
            <label className='flex flex-col space-y-1 text-lg'>
              <span className=''>Comments</span>
              <textarea
                rows={7}
                name='message'
                value={formData.message}
                onChange={handleChange}
                autoComplete='off'
                placeholder='Any comments or information?'
                className='py-1 px-2 border border-gray-500 hover:border-headingColor focus:border-2 focus:outline-none w-[33%] rounded-xl'
              />
            </label>
            <p>{success}</p>
            <button type="submit" className='bg-logoColor py-4 px-6 rounded-2xl text-white hover:text-white focus:text-white w-fit'>{formLoading ? "Submitting..." : "Submit"}</button>
          </form>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <div className="flex space-x-6 py-4">
        <button type="button" onClick={() => setOpen(false)} className='bg-black py-4 px-6 rounded-2xl text-white hover:text-white focus:text-white'>Cancel</button>
        </div>
      </Modal.Actions>
    </Modal>
  )
}

export default Appointment