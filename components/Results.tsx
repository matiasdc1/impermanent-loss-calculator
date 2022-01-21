import styles from '../styles/Results.module.css'
import moment from 'moment'
import { Fragment } from 'react'
export interface ResultsType {
  futureValueBeforeInterest: number
  initialDate: string
  futureDate: string
  interestEarned: number
  futureValuePlusInterest: number
  valueIfHeld: number
  impermanentLoss: number
  profitVsHolding: number
}

var formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})

const Results: React.FC<ResultsType> = props => {
  const futureValueBeforeInterest = props.futureValueBeforeInterest
  const initialDate = props.initialDate
  const futureDate = props.futureDate
  const interestEarned = props.interestEarned
  const futureValuePlusInterest = props.futureValuePlusInterest
  const valueIfHeld = props.valueIfHeld
  const impermanentLoss = props.impermanentLoss
  const profitVsHolding = props.profitVsHolding

  const isDataComplete =
    futureValueBeforeInterest > 0 && initialDate.length > 0 && futureDate.length > 0

  return (
    <div className={`${styles.results} ${styles.slide_in_bottom}`}>
      {!isDataComplete && (
        <div className={styles.fade_in}>
          Complete the data needed to show the results.
        </div>
      )}
      {isDataComplete && (
        <div className={styles.fade_in}>
          Your future value before interest is:{' '}
          <b className={futureValueBeforeInterest > 0 ? styles.green : styles.red}>
            {futureValueBeforeInterest
              ? formatter.format(futureValueBeforeInterest)
              : '$0.00'}
          </b>
          <br />
          <br />
          The interest earned from {moment(initialDate).format('MMMM Do YYYY')} to{' '}
          {moment(futureDate).format('MMMM Do YYYY')} is:{' '}
          {interestEarned ? (
            <b className={interestEarned > 0 ? styles.green : styles.red}>
              {formatter.format(interestEarned)}
            </b>
          ) : (
            '$0.00'
          )}
          <br />
          <br />
          Your total return will be:{' '}
          {futureValuePlusInterest ? (
            <b className={futureValuePlusInterest > 0 ? styles.green : styles.red}>
              {formatter.format(futureValuePlusInterest)}
            </b>
          ) : (
            '$0.00'
          )}
          <br />
          <br />
          If you held the assets you would have:{' '}
          <b className={valueIfHeld > 0 ? styles.green : styles.red}>
            {valueIfHeld ? formatter.format(valueIfHeld) : '$0.00'}
          </b>
          <br />
          <br />
          You incurred in an impermanent loss of:{' '}
          <b className={impermanentLoss > 0 ? styles.green : styles.red}>
            {impermanentLoss ? formatter.format(impermanentLoss) : '$0.00'}
          </b>
          <br />
          <br />
          Your total profit vs holding is:{' '}
          <b className={profitVsHolding > 0 ? styles.green : styles.red}>
            {profitVsHolding ? formatter.format(profitVsHolding) : '$0.00'}
          </b>
        </div>
      )}
    </div>
  )
}

export default Results
