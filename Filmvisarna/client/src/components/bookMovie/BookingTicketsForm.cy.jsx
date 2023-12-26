import React from 'react'
import BookingTicketsForm from './BookingTicketsForm'

describe('<BookingTicketsForm />', () => {
  it('renders', () => {
    cy.mount(<BookingTicketsForm />)
  })
})