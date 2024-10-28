import { useState, useEffect } from 'react'

import toast from 'react-hot-toast'

export const useFetchSales = url => {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then(res => {
          if (!res.ok) {
            toast.error('Error fetching data')
          }
          return res.json()
        })
        .then(data => {
          setData(data)
          setIsPending(false)
          toast.error(null)
        })
        .catch(err => {
          setIsPending(false)
          toast.error(err.message)
        })
    }, 1000)
  }, [url])

  return { data, isPending }
}
