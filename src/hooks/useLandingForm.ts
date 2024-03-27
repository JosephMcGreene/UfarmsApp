import { useState } from 'react'
import axios from 'axios'

interface bundledData {
  email: string
  produceType: string[]
  zipcode: string
}

export default function useLandingForm() {
  const [zipcode, setZipcode] = useState('')
  const [email, setEmail] = useState('')
  const [produceType, setProduceType] = useState([])

  const bundledData: bundledData = {
    email,
    produceType,
    zipcode
  }

  /**
   * Takes a state setter (ie, setEmail), and the value the state should be updated to, consolidating form state management to one place in useLandingForm hook
   *
   * @param {Function} setter      the set function used to alter the corresponding state object
   * @param {Object}   eventTarget the DOM event target the state is being updated to
   */
  function setState(setter, eventTarget) {
    setter(eventTarget)
  }
  /* These are also added to avoid a long return array length.
  Just return setState as an object and access these functions as properties,
  which we can pass as first arguments TO setState in LandingForm.tsx */
  setState.setZipcode = setZipcode
  setState.setEmail = setEmail

  /**
   * Adds and removes items in an array based on the checkboxes the user checks and unchecks
   *
   * @param {Object} target the checkbox the user clicks
   */
  function handleProduceArray(target) {
    // Condition refers to state of the checkbox once the user clicks on it
    if (target.checked) {
      setProduceType(prevProduce => [...prevProduce, target.value])
    } else {
      setProduceType(prevProduce =>
        prevProduce.filter(item => item !== target.value)
      )
    }
  }

  /**
   * Sends POST request to Ufarms server containing form data
   *
   * @param {Object}  e  The event object from the submit button, used to prevent default action
   */
  async function submitForm(e) {
    e.preventDefault()

    await axios({
      data: bundledData,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'post',
      url: 'https://ufarms-backend-458b111e2b29.herokuapp.com/api/submit_form'
    })
  }

  return [setState, handleProduceArray, submitForm]
}