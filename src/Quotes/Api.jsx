import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import Quote from './Quote'



export default function Api(props) {
  const [quote, setQuote] = useState('')

  async function getFromApi() {
    const respone = await Axios.get('https://api.quotable.io/random?minLength=20&maxLength=140')
    setQuote(respone.data.content)
  }

  function generateNewQuote() {
    getFromApi()
  }

  useEffect(() => {
    getFromApi()

    return () => {

    }
  }, [])

  return (
    <>
      <Quote generateNewQuote={generateNewQuote} content={quote} />
    </>
  )
}
