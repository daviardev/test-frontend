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
  const [filteredClients, setFilteredClients] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

  const [open, setOpen] = useState(false)
  const [rut, setRut] = useState('')
  const [phone, setPhone] = useState('')
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')

  const [editing, setEditing] = useState(false)
  const [currentClient, setCurrentClient] = useState(null)

  const clientsPerPage = 60

  const fetchData = async () => {
    try {
      const res = await axios.get('http://localhost:8000/proveedores')
      setAllClients(res.data)
      setFilteredClients(res.data) // Inicialmente, todos los clientes están filtrados
    } catch (error) {
      toast.error('Error fetching clients:', error)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const newClient = {
        nombre: rut,
        precio: phone,
        stock: name,
        sucursal: lastName
      }

      if (editing && currentClient) {
        await axios.put(`http://localhost:8000/proveedores/${currentClient.id}`, newClient)
        toast.success('Provider updated')
      } else {
        await axios.post('http://localhost:8000/proveedores', newClient)
        toast.success('Provider added')
      }

      setRut('')
      setPhone('')
      setName('')
      setLastName('')
      setEditing(false)
      setOpen(false)
      fetchData()
    } catch (error) {
      toast.error('Error saving provider', error)
    }
  }

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase()
    setSearchQuery(query)

    const filtered = allClients.filter(client =>
      String(client.nombre).toLowerCase().includes(query) ||
      String(client.precio).toLowerCase().includes(query) || // Convertir a string
      String(client.stock).toLowerCase().includes(query) || // Convertir a string
      String(client.sucursal).toLowerCase().includes(query) // Convertir a string
    )
    setFilteredClients(filtered)
    setCurrentPage(1) // Reinicia la página a la primera al buscar
  }

  const indexOfLastClient = currentPage * clientsPerPage
  const indexOfFirstClient = indexOfLastClient - clientsPerPage
  const currentClients = filteredClients.slice(indexOfFirstClient, indexOfLastClient)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  const handleEdit = (client) => {
    setCurrentClient(client)
    setRut(client.nombre)
    setPhone(client.precio)
    setName(client.stock)
    setLastName(client.sucursal)
    setEditing(true)
    setOpen(false)
  }

  const handleDelete = async (clientId) => {
    try {
      await axios.delete(`http://localhost:8000/productos/${clientId}`)
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
    return currentClients.map(client => (
      <tr key={client.id} className='font-medium text-gray-800'>
        <td className='px-6 py-3'>{client.nombre}</td>
        <td className='px-6 py-3'>{client.precio}</td>
        <td className='px-6 py-3'>{client.stock}</td>
        <td className='px-6 py-3'>{client.sucursal}</td>
        <td className='flex space-x-4 items-center justify-center my-12 text-xl'>
          <button onClick={() => handleEdit(client)} className='text-blue-500 rounded-full p-3 shadow-xl hover:bg-blue-100'>
            <FaRegEdit />
          </button>
          <button onClick={() => handleDelete(client.id)} className='text-red-500 rounded-full p-3 shadow-xl hover:bg-red-100'>
            <FaTrash />
          </button>
        </td>
      </tr>
    ))
  }

  return (
    <Modal>
      <header className='flex items-center mb-6'>
        <Image src='/images/product.png' alt='resource product' width={60} height={60} className='w-10 h-14 mr-2' />
        <h1 className='text-title font-extrabold text-3xl'>New Product</h1>
      </header>

      <hr className='mb-8 mx-11 border-[1.8px] border-[#ceddedff]' />

      {currentClients && (
        <form onSubmit={handleSubmit}>
          <div className='grid grid-cols-1 sm:grid-cols-12 gap-4'>
            <div className='sm:col-span-6'>
              <Input onChange={(e) => setRut(e.target.value)} value={rut} label='Name' type='text' className='w-full' />
            </div>
            <div className='sm:col-span-6'>
              <Input value={phone} label='Price' type='number' className='w-full' onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div className='sm:col-span-6'>
              <Input value={name} label='Quantity' className='w-full' onChange={(e) => setName(e.target.value)} />
            </div>
            <div className='sm:col-span-6'>
              <Input value={lastName} label='Branch Office' className='w-full' onChange={(e) => setLastName(e.target.value)} />
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
            <h3 className='font-bold text-title'>Filter products</h3>
            <hr className='mb-8 border-[1.8px] border-[#ceddedff]' />
          </div>
          <Input type='text' value={searchQuery} onChange={handleSearch} className='mb-4' />
          <div className='overflow-x-auto overflow-y-auto max-h-64 p-3'>
            <table className='w-full table-auto'>
              <thead className='sticky top-0 h=12 bg-gray-50 text-xs font-semibold uppercase text-gray-400'>
                <tr>
                  <th className='p-2'><div className='text-left font-semibold'>Name</div></th>
                  <th className='p-2'><div className='text-left font-semibold'>Price</div></th>
                  <th className='p-2'><div className='text-left font-semibold'>Stock</div></th>
                  <th className='p-2'><div className='text-left font-semibold'>Branch Office</div></th>
                  <th className='p-2'><div className='text-center font-semibold'>Actions</div></th>
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
