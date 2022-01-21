import Results from '../components/Results'
import Input from '../components/ui/Input'
import styles from '../styles/Index.module.css'
import moment from 'moment'
import { useState } from 'react'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  const [investment, setInvestment] = useState(0)
  const [apr, setApr] = useState(0)
  const [initialDate, setInitialDate] = useState('')
  const [futureDate, setFutureDate] = useState('')

  const [token1InitialPrice, setToken1InitialPrice] = useState(0)
  const [token1FuturePrice, setToken1FuturePrice] = useState(0)

  const [token2InitialPrice, setToken2InitialPrice] = useState(0)
  const [token2FuturePrice, setToken2FuturePrice] = useState(0)

  const days = moment(futureDate).diff(initialDate, 'days')

  const token1InitialQuantity = investment / 2 / token1InitialPrice
  const token2InitialQuantity = investment / 2 / token2InitialPrice
  const productConstant = token1InitialQuantity * token2InitialQuantity
  const futurePriceRatio = token1FuturePrice / token2FuturePrice

  const token1FutureQuantity = Math.sqrt(productConstant / futurePriceRatio)
  const token2FutureQuantity = Math.sqrt(productConstant * futurePriceRatio)

  const futureValueBeforeInterest =
    token1FuturePrice * token1FutureQuantity + token2FuturePrice * token2FutureQuantity

  const futureValuePlusInterest =
    futureValueBeforeInterest * (1 + (apr / 360 / 100) * days)

  const valueIfHeld =
    token1FuturePrice * token1InitialQuantity + token2FuturePrice * token2InitialQuantity

  const impermanentLoss = futureValueBeforeInterest - valueIfHeld

  const interestEarned = futureValuePlusInterest - futureValueBeforeInterest

  const profitVsHolding = futureValuePlusInterest - valueIfHeld

  return (
    <div className={styles.container}>
      {/* <h1>Impermanent Loss Calculator</h1> */}
      <p className={styles.slide_in_left}>
        This calculator uses the standard constant product formula to determinate
        impermanent loss. However, most calculators do not account for LP&apos;s rewards,
        this one does. Just input the information required and <i>voila</i>.
      </p>
      <h2 className={styles.slide_in_left}>General Information</h2>
      <div className={styles.inputArea}>
        <Input
          value={investment}
          type='number'
          title='Investment ($)'
          onChange={(e: any) => setInvestment(e)}
        />
        <Input
          value={apr}
          type='number'
          title='APR (%)'
          onChange={(e: any) => setApr(e)}
        />
        <Input
          value={initialDate}
          type='date'
          title='Date Started'
          onChange={(e: any) => setInitialDate(e)}
        />
        <Input
          value={futureDate}
          type='date'
          title='Future Date'
          onChange={(e: any) => setFutureDate(e)}
        />
      </div>
      <h2 className={styles.slide_in_left}> Data - Token 1</h2>
      <div className={styles.inputArea}>
        <Input
          value={token1InitialPrice}
          type='number'
          title='Initial Price ($)'
          onChange={(e: any) => setToken1InitialPrice(e)}
        />
        <Input
          value={token1FuturePrice}
          type='number'
          title='Future Price ($)'
          onChange={(e: any) => setToken1FuturePrice(e)}
        />
      </div>
      <h2 className={styles.slide_in_left}>Data - Token 2</h2>
      <div className={styles.inputArea}>
        <Input
          value={token2InitialPrice}
          type='number'
          title='Initial Price ($)'
          onChange={(e: any) => setToken2InitialPrice(e)}
        />
        <Input
          value={token2FuturePrice}
          type='number'
          title='Future Price ($)'
          onChange={(e: any) => setToken2FuturePrice(e)}
        />
      </div>
      <h2 className={styles.slide_in_left}>Results</h2>
      <Results
        futureValueBeforeInterest={futureValueBeforeInterest}
        initialDate={initialDate}
        futureDate={futureDate}
        interestEarned={interestEarned}
        futureValuePlusInterest={futureValuePlusInterest}
        valueIfHeld={valueIfHeld}
        impermanentLoss={impermanentLoss}
        profitVsHolding={profitVsHolding}
      />
    </div>
  )
}

export default Home
