import useLandingForm from '../hooks/useLandingForm'

export default function LandingForm() {
  const [state, setState, handleProduceArray, submitForm] = useLandingForm()
  const { setZipcode, setEmail } = setState

  return (
    <form className="flex flex-col items-start">
      <div className="flex justify-between w-full">
        <label htmlFor="zipcode">Zip Code: </label>
        <input
          id="zipcode"
          name="zipcode"
          onChange={e => setState(setZipcode, e.target.value)}
          placeholder="12345"
          type="text"
          value={state.zipcode}
        />
      </div>
      <div className="flex justify-between w-full">
        <label htmlFor="email">Email: </label>
        <input
          id="email"
          name="email"
          onChange={e => setState(setEmail, e.target.value)}
          placeholder="example@farm.com"
          type="email"
          value={state.email}
        />
      </div>

      <h4 className="text-xl mt-6">I want to grow:</h4>
      <h4 className="mb-2">(Select all that apply)</h4>

      <label className="ml-4 cursor-pointer" htmlFor="berries">
        <input
          id="berries"
          name="berries"
          onClick={e => handleProduceArray(e.target)}
          type="checkbox"
          value="Berries"
        />{' '}
        Berries
      </label>
      <label className="ml-4 cursor-pointer" htmlFor="greens">
        <input
          id="greens"
          name="greens"
          onClick={e => handleProduceArray(e.target)}
          type="checkbox"
          value="Greens"
        />{' '}
        Greens
      </label>
      <label className="ml-4 cursor-pointer" htmlFor="herbs">
        <input
          id="herbs"
          name="herbs"
          onClick={e => handleProduceArray(e.target)}
          type="checkbox"
          value="Herbs"
        />{' '}
        Herbs
      </label>
      <label className="ml-4 cursor-pointer" htmlFor="flowers">
        <input
          id="flowers"
          name="flowers"
          onClick={e => handleProduceArray(e.target)}
          type="checkbox"
          value="Flowers"
        />{' '}
        Flowers
      </label>
      <label className="ml-4 cursor-pointer" htmlFor="vegetables">
        <input
          id="vegetables"
          name="vegetables"
          onClick={e => handleProduceArray(e.target)}
          type="checkbox"
          value="Vegetables"
        />{' '}
        Vegetables
      </label>
      <label className="ml-4 cursor-pointer" htmlFor="other">
        <input
          id="other"
          name="other"
          onClick={e => handleProduceArray(e.target)}
          type="checkbox"
          value="Other"
        />{' '}
        Other
      </label>

      {/* <label htmlFor="other" className="flex flex-col mt-2">
        Other? What do you mean?
        <textarea
          name="other"
          id="other"
          placeholder="I want to grow..."
          value={state.otherExplanation}
          onChange={(e) => setOtherExplanation(e.target.value)}
          className="px-2"
        ></textarea>
      </label> */}

      <button
        className="bg-slate-100 text-black text-xl w-full mt-6 rounded-2xl border-0 py-3"
        onClick={e => submitForm(e)}
        type="submit">
        Join Waitlist
      </button>
    </form>
  )
}
