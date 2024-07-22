import axios from 'axios'
import { useState } from 'react'

function App() {
  let [currency, setCurrency] = useState('')
  let [rates, setRates] = useState({})

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault()
          axios
            .get(`https://open.er-api.com/v6/latest/${currency}`)
            .then((response) => setRates(response.data.rates))
        }}
      >
        <label>
          currency:{' '}
          <input
            type="text"
            value={currency}
            onChange={(event) => setCurrency(event.target.value)}
          />
        </label>
        <button type="submit">exchange rate</button>
      </form>
      <div>
        <a href="https://www.exchangerate-api.com/docs/supported-currencies">
          Supported currencies
        </a>
      </div>
      <pre>{JSON.stringify(rates, null, 2)}</pre>
    </>
  )
}

export default App
