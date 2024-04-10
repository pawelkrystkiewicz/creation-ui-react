import React from 'react'
import { For } from '@root/packages/react/src'
import { mount } from 'cypress/react18'

describe('For Component Tests', () => {
  it('correctly renders list items', () => {
    const testItems = [
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
    ]

    mount(<For each={testItems}>{(item, index) => <div key={index}>{item.name}</div>}</For>)

    cy.contains('Item 1').should('be.visible')
    cy.contains('Item 2').should('be.visible')
  })
})
