import { ALL_PERSONS } from '../graphql/queries'
import { useMutation } from '@apollo/client'
import { CREATE_PERSON } from '../graphql/mutations'

const useCreatePerson = ({ notifyError }) => {
  const [createPerson, result] = useMutation(CREATE_PERSON, {
    refetchQueries: [{ query: ALL_PERSONS }],
    onError: (error) => {
      console.log(error.graphQLErrors)
      notifyError(error.graphQLErrors[0].message)
    },
  })
  return [createPerson, result]
}
export default useCreatePerson
