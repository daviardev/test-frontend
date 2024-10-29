'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

import axios from 'axios'

import { FaRegEdit, FaTrash } from 'react-icons/fa'

import Modal from '@/components/Layout/Modal'
import Details from '@/components/Reusable/Details'
import Input from '../Input'

import toast from 'react-hot-toast'

export default function Client () {
  const [allClients, setAllClients] = useState([])
  const [clients, setClients] = useState([]) // eslint-disable-line no-unused-vars
  const [filteredClients, setFilteredClients] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

  const [open, setOpen] = useState(false)

  const [rut, setRut] = useState('')
  const [phone, setPhone] = useState('')
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [address, setAddress] = useState('')

  const [editing, setEditing] = useState(false)

  const [currentClient, setCurrentClient] = useState(null)

  const clientsPerPage = 20

  const fetchData = async (page = 1, limit = 40) => {
    try {
      const res = await axios.get(`http://localhost:8000/clientes?_page=${page}&_limit=${limit}&_sort=id&_order=desc`)
      setAllClients(res.data)
      setClients(res.data)
    } catch (error) {
      toast.error('Error fetching clients:', error)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const newClient = {
        RUT: rut,
        telefono: phone,
        nombre: name,
        apellido: lastName,
        direccion: address
      }

      if (editing && currentClient) {
        await axios.put(`http://localhost:8000/clientes/${currentClient.id}`, newClient)
        toast.success('Client updated')
      } else {
        await axios.post('http://localhost:8000/clientes', newClient)
        toast.success('Client added')
      }

      setRut('')
      setPhone('')
      setName('')
      setLastName('')
      setAddress('')
      setEditing(false)
      setOpen(true)
      fetchData()
    } catch (error) {
      toast.error('Error saving client', error)
    }
  }

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase()
    setSearchQuery(query)

    const filtered = allClients.filter(client =>
      client.RUT.toLowerCase().includes(query) ||
      client.nombre.toLowerCase().includes(query) ||
      client.apellido.toLowerCase().includes(query) ||
      client.telefono.toLowerCase().includes(query) ||
      client.direccion.toLowerCase().includes(query)
    )
    setFilteredClients(filtered)
    setCurrentPage(1)
  }

  const indexOfLastClient = currentPage * clientsPerPage
  const indexOfFirstClient = indexOfLastClient - clientsPerPage
  const currentClients = filteredClients.slice(indexOfFirstClient, indexOfLastClient)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

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

  const handleDelete = async clientId => {
    try {
      await axios.delete(`http://localhost:8000/clientes/${clientId}`)
      toast.success('Client deleted')
      fetchData()
    } catch (error) {
      toast.error('Error deleting client', error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const renderClients = () => {
    return currentClients.map((client) => (
      <tr key={client.id} className='font-medium text-gray-800'>
        <td className='px-6 py-3'>{client.RUT}</td>
        <td className='px-6 py-3'>{client.nombre}</td>
        <td className='px-6 py-3'>{client.apellido}</td>
        <td className='px-6 py-3'>{client.direccion}</td>
        <td className='px-6 py-3'>{client.telefono}</td>
        <td className='flex space-x-4 items-center justify-center my-12 text-xl'>
          <button
            onClick={() => handleEdit(client)}
            className='text-blue-500 rounded-full p-3 shadow-xl hover:bg-blue-100'
          >
            <FaRegEdit />
          </button>
          <button
            onClick={() => handleDelete(client.id)}
            className='text-red-500 rounded-full p-3 shadow-xl hover:bg-red-100'
          >
            <FaTrash />
          </button>
        </td>
      </tr>
    ))
  }

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

      {currentClients && (
        <form onSubmit={handleSubmit}>
          <div className='grid grid-cols-1 sm:grid-cols-12 gap-4'>
            <div className='sm:col-span-6'>
              <Input
                onChange={(e) => setRut(e.target.value)}
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
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className='sm:col-span-6'>
              <Input
                value={name}
                label='First Name'
                className='w-full'
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className='sm:col-span-6'>
              <Input
                value={lastName}
                label='Last Name'
                className='w-full'
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className='sm:col-span-12'>
              <Input
                value={address}
                label='Address'
                className='w-full'
                onChange={(e) => setAddress(e.target.value)}
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

      <Details open={open} onClose={() => setOpen(false)}>
        <div className='w-screen max-w-5xl'>
          <div className='mx-auto my-4'>
            <h3 className='font-bold text-title'>Filter clients</h3>
            <hr className='mb-8 border-[1.8px] border-[#ceddedff]' />
          </div>
          <Input
            type='text'
            value={searchQuery}
            onChange={handleSearch}
            placeholder='Search by RUT, name, last name, or phone'
            className='mb-4'
          />
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
                    <div className='text-left font-semibold'>Address</div>
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
                {renderClients()}
              </tbody>
            </table>
          </div>
          <div className='flex justify-center mt-4'>
            {[...Array(Math.ceil(filteredClients.length / clientsPerPage)).keys()].map(pageNumber => (
              <button
                key={pageNumber}
                onClick={() => paginate(pageNumber + 1)}
                className={`px-3 py-1 mx-1 ${currentPage === pageNumber + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
              >
                {pageNumber + 1}
              </button>
            ))}
          </div>
        </div>
      </Details>
    </Modal>
  )
}
