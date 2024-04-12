import { gql } from '@apollo/client'

export const CREATE_PERSON = gql`
  mutation createPerson($name: String!, $phone: String, $street: String!, $city: String!, $age: Int!) {
    addPerson(name: $name, street: $street, phone: $phone, city: $city, age: $age) {
      name
      age
      id
      phone
      address {
        city
        street
      }
    }
  }
`

export const EDIT_NUMBER = gql`
  mutation editNumber($name: String!, $phone: String!) {
    editNumber(name: $name, phone: $phone) {
      name
      phone
      id
    }
  }
`
