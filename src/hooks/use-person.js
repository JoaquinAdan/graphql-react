import { useLazyQuery } from '@apollo/client'
import { FIND_PERSON } from './graphql/queries'

const usePerson = () => {
  const [getPerson, result] = useLazyQuery(FIND_PERSON)
  return [getPerson, result]
}

export default usePerson
