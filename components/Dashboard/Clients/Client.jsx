'use client'

import { useEffect, useState } from 'react'

import axios from 'axios'

import { FaRegEdit, FaTrash } from 'react-icons/fa'

import Image from 'next/image'

import Modal from '@/components/Layout/Modal'
import Details from '@/components/Reusable/Details'
import Input from '../Input'
import toast from 'react-hot-toast'

export default function Client () {
  const [clients, setClients] = useState([])

  const [open, setOpen] = useState(false)

  const [rut, setRut] = useState('')
  const [phone, setPhone] = useState('')
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [address, setAddress] = useState('')

  const [editing, setEditing] = useState(false)

  const [currentClient, setCurrentClient] = useState(null)

  const fetchData = async (pages = 1, limit = 1000) => {
    const res = await axios.get('http://localhost:8000/clientes')
    setClients(res.data)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      if (editing && currentClient) {
        // Actualiza el cliente
        await axios.put(`http://localhost:8000/clientes/${currentClient.id}`, {
          RUT: rut,
          telefono: phone,
          nombre: name,
          apellido: lastName,
          direccion: address
        })
        toast.success('Client updated')
      } else {
        // Agrega un nuevo cliente
        await axios.post('http://localhost:8000/clientes', {
          RUT: rut,
          telefono: phone,
          nombre: name,
          apellido: lastName,
          direccion: address
        })
        toast.success('Client added')
      }

      // Limpia los campos después de la operación
      setRut('')
      setPhone('')
      setName('')
      setLastName('')
      setAddress('')
      setEditing(false)
      setOpen(false)

      // Actualiza la lista de clientes
      fetchData() // Asegúrate de que esto esté después de los cambios en el cliente
    } catch (error) {
      console.error('Error saving client:', error)
      toast.error('Error saving client')
    }
  }

  const handleEdit = (client) => {
    setCurrentClient(client)
    setRut(client.RUT)
    setPhone(client.telefono)
    setName(client.nombre)
    setLastName(client.apellido)
    setAddress(client.direccion)
    setEditing(true)
    setOpen(false)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <Modal>
      <header className='flex items-center mb-6'>
        <Image
          src='/images/client.png'
          alt='resource client'
          width={60}
          height={60}
          className='w-10 h-14 mr-2'
        />
        <h1 className='text-title font-extrabold text-3xl'>New Client</h1>
      </header>

      <hr className='mb-8 mx-11 border-[1.8px] border-[#ceddedff]' />

      {clients && (
        <div>
          {editing
            ? (
              <form onSubmit={handleSubmit}>
                <div className='grid grid-cols-1 sm:grid-cols-12 gap-4'>
                  <div className='sm:col-span-6'>
                    <Input
                      onChange={e => setRut(e.target.value)}
                      value={rut}
                      label='RUT'
                      type='text'
                      className='w-full'
                    />
                  </div>
                  <div className='sm:col-span-6'>
                    <Input
                      value={phone}
                      label='Phone'
                      type='number'
                      className='w-full'
                      onChange={e => setPhone(e.target.value)}
                    />
                  </div>
                  <div className='sm:col-span-6'>
                    <Input
                      value={name}
                      label='First Name'
                      className='w-full'
                      onChange={e => setName(e.target.value)}
                    />
                  </div>
                  <div className='sm:col-span-6'>
                    <Input
                      value={lastName}
                      label='Last Name'
                      className='w-full'
                      onChange={e => setLastName(e.target.value)}
                    />
                  </div>
                  <div className='sm:col-span-12'>
                    <Input
                      value={address}
                      label='Address'
                      className='w-full'
                      onChange={e => setAddress(e.target.value)}
                    />
                  </div>
                </div>

                <section className='flex justify-between items-center space-x-4 mt-6'>
                  <button type='submit' className='bg-button text-white px-6 py-2 w-full sm:w-auto'>
                    Update
                  </button>
                </section>
              </form>
              )
            : (
              <form onSubmit={handleSubmit}>
                <div className='grid grid-cols-1 sm:grid-cols-12 gap-4'>
                  <div className='sm:col-span-6'>
                    <Input
                      onChange={e => setRut(e.target.value)}
                      value={rut}
                      label='RUT'
                      type='text'
                      className='w-full'
                    />
                  </div>
                  <div className='sm:col-span-6'>
                    <Input
                      value={phone}
                      label='Phone'
                      type='number'
                      className='w-full'
                      onChange={e => setPhone(e.target.value)}
                    />
                  </div>
                  <div className='sm:col-span-6'>
                    <Input
                      value={name}
                      label='First Name'
                      className='w-full'
                      onChange={e => setName(e.target.value)}
                    />
                  </div>
                  <div className='sm:col-span-6'>
                    <Input
                      value={lastName}
                      label='Last Name'
                      className='w-full'
                      onChange={e => setLastName(e.target.value)}
                    />
                  </div>
                  <div className='sm:col-span-12'>
                    <Input
                      value={address}
                      label='Address'
                      className='w-full'
                      onChange={e => setAddress(e.target.value)}
                    />
                  </div>
                </div>

                <section className='flex justify-between items-center space-x-4 mt-6'>
                  <button type='submit' className='bg-button text-white px-6 py-2 w-full sm:w-auto'>
                    {editing ? 'Update' : 'Save'}
                  </button>
                  <button onClick={() => setOpen(true)} type='button' className='bg-button text-white px-6 py-2 w-full sm:w-auto'>Details</button>
                </section>
              </form>
              )}
        </div>
      )}

      <Details
        open={open}
        onClose={() => setOpen(false)}
      >
        <div className='w-screen max-w-5xl'>
          <div className='mx-auto my-4'>
            <h3 className='font-bold text-title'>Filter clients</h3>
            <hr className='mb-8 border-[1.8px] border-[#ceddedff]' />
          </div>
          <Input type='text' />
          <div className='overflow-x-auto overflow-y-auto max-h-64 p-3'>
            <table className='w-full table-auto'>
              <thead className='sticky top-0 h=12 bg-gray-50 text-xs font-semibold uppercase text-gray-400'>
                <tr>
                  <th className='p-2'>
                    <div className='text-left font-semibold'>RUT</div>
                  </th>
                  <th className='p-2'>
                    <div className='text-left font-semibold'>First name</div>
                  </th>
                  <th className='p-2'>
                    <div className='text-left font-semibold'>Last name</div>
                  </th>
                  <th className='p-2'>
                    <div className='text-left-font-semibold'>Address</div>
                  </th>
                  <th className='p-2'>
                    <div className='text-center font-semibold'>Phone</div>
                  </th>
                  <th className='p-2'>
                    <div className='text-center font-semibold'>Actions</div>
                  </th>
                </tr>
              </thead>

              <tbody className='divide-y divide-gray-100 text-sm'>
                {clients.slice(0).reverse().map(client => (
                  <tr key={client.RUT} className='font-medium text-gray-800'>
                    <td className='px-6 py-3 text-gray-800'>{client.RUT}</td>
                    <td className='px-6 py-3 text-gray-800'>{client.nombre}</td>
                    <td className='px-6 py-3 text-gray-800'>{client.apellido}</td>
                    <td className='px-6 py-3 text-gray-800'>{client.direccion}</td>
                    <td className='px-6 py-3 text-gray-800'>{client.telefono}</td>
                    <td className='flex space-x-4 items-center justify-center my-12 text-xl'>
                      <button
                        onClick={() => handleEdit(client)}
                        className='text-blue-500 rounded-full p-3 shadow-xl hover:bg-blue-100'
                      >
                        <FaRegEdit />
                      </button>
                      <button className='text-red-500 rounded-full p-3 shadow-xl hover:bg-red-100'>
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Details>

    </Modal>

  )
}
