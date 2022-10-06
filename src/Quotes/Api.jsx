import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import Quote from './Quote'
import $, { easing } from 'jquery';


export default function Api(props) {
  const [quote, setQuote] = useState('')
  let respone = ''
  async function getFromApi() {

    respone = await Axios.get('https://api.quotable.io/random?minLength=20&maxLength=140')
    setQuote(respone.data.content)
    $('.text').fadeIn(250);

  }

  async function generateNewQuote() {
    $('.text').fadeOut(500);
    setTimeout(() => {
      getFromApi();
    }, 500)
    rotateButton()
  }
  function rotateButton() {
    $('#diceButtonId svg').animate({
      rotate: '0deg'
    }, { duration: 500 }, "easein", $('#diceButtonId svg').animate({ rotate: '360deg' })
    )
    console.log('rotateButton')
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
