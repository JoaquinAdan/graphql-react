import { ALL_PERSONS } from './graphql/queries'
import { useMutation } from '@apollo/client'
import { CREATE_PERSON } from './graphql/mutations'
const useCreatePerson = () => {
  const [createPerson] = useMutation(CREATE_PERSON, { refetchQueries: [{ query: ALL_PERSONS }] })
  return [createPerson]
}
export default useCreatePerson
