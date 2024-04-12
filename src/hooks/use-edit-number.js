import { ALL_PERSONS } from '../graphql/queries'
import { useMutation } from '@apollo/client'
import { EDIT_NUMBER } from '../graphql/mutations'

const useEditNumber = () => {
  const [editNumber, result] = useMutation(EDIT_NUMBER, {
    refetchQueries: [{ query: ALL_PERSONS }],
    onError: (error) => {
      console.log(error.graphQLErrors)
      // notifyError(error.graphQLErrors[0].message)
    },
  })
  return [editNumber, result]
}
export default useEditNumber
