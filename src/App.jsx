function App() {
  let rates = {
    EUR: 1,
    AED: '3.973561',
  }

  return (
    <>
      <form>
        currency: <input />
        <button type="submit">exchange rate</button>
      </form>
      <pre>{JSON.stringify(rates, null, 2)}</pre>
    </>
  )
}

export default App
