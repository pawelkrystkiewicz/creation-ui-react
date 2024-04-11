'use strict'
import { ELEMENT_STATUS, ELEMENT_VARIANTS } from '@creation-ui/react'
import { Button } from '@creation-ui/react'
import clsx from 'clsx'

// tabIndex attributes set

// { description: 'renders button with text and icon' },
// { description: 'displays loading state with centered spinner for [circle]' },
// { description: 'applies custom class names' },
// { description: 'renders button with iconLeft' },
// { description: 'renders button with iconRight' },

// { description: 'renders button with different size' },
// { description: 'renders circle button' },
// { description: 'applies uppercase class when uppercase prop is true' },
// { description: 'forwards ref to button element' },
// {
//   description:
//     'renders button with default theme values when no theme is provided',
// },
// { description: 'applies theme values from useTheme hook when provided' },
// { description: 'does not trigger click event when disabled' },
// { description: 'adds passed id to button' },
// { description: 'generates an id using useId hook when no id is provided' },
// { description: 'does not render loader when not loading' },
// { description: 'disables InteractiveContainer when button is disabled' },
// {
//   description:
//     'applies the correct styles for each combination of variant and status',
// },
// { description: 'applies the correct styles when circle prop is true' },

const modeVariantStatusExpectedClasses = {
  light: {
    contained: {
      //TODO: might want to add all other classes like hover, focus, active, etc
      primary: ['bg-primary', 'text-white'],
      success: ['bg-success', 'text-white'],
      warning: ['bg-warning', 'text-white'],
      error: ['bg-error', 'text-white'],
      info: ['bg-info', 'text-white']
    },

    outlined: {
      primary: ['border-primary', 'text-primary'],
      success: ['border-success', 'text-success'],
      warning: ['border-warning', 'text-warning'],
      error: ['border-error', 'text-error'],
      info: ['border-info', 'text-info']
    },
    text: {
      primary: ['bg-transparent', 'text-primary'],
      success: ['bg-transparent', 'text-success'],
      warning: ['bg-transparent', 'text-warning'],
      error: ['bg-transparent', 'text-error'],
      info: ['bg-transparent', 'text-info']
    }
  },
  dark: {
    contained: {
      primary: ['bg-primary', 'text-white'],
      success: ['bg-success', 'text-white'],
      warning: ['bg-warning', 'text-white'],
      error: ['bg-error', 'text-white'],
      info: ['bg-info', 'text-white']
    },
    outlined: {
      primary: ['border-primary', 'text-primary'],
      success: ['border-success', 'text-success'],
      warning: ['border-warning', 'text-warning'],
      error: ['border-error', 'text-error'],
      info: ['border-info', 'text-info']
    },
    text: {
      primary: ['bg-transparent', 'text-primary'],
      success: ['bg-transparent', 'text-success'],
      warning: ['bg-transparent', 'text-warning'],
      error: ['bg-transparent', 'text-error'],
      info: ['bg-transparent', 'text-info']
    }
  }
}

describe('Button', () => {
  it('should render default button with children', () => {
    let clicked = false

    cy.mount(
      <Button
        id="button-1-test"
        onClick={() => {
          clicked = true
        }}
      >
        Click me
      </Button>
    )
    const button = cy.get('button')

    expect(clicked).to.be.false

    button
      .should('exist')
      .should('have.text', 'Click me')
      .should('have.attr', 'type', 'button')
      .should('have.attr', 'aria-disabled', 'false')
      // .should('have.attr', 'tabIndex', '0')
      .should('have.attr', 'id', 'button-1-test')
      .click()
      .then(() => {
        expect(clicked).to.be.true
      })
  })

  it('should handle hover events and prevent interactions when disabled', () => {
    cy.mount(
      <Button id="button-1-test" disabled>
        Click me
      </Button>
    )
    const button = cy.get('button')

    button
      .should('exist')
      .should('have.text', 'Click me')
      .should('have.attr', 'aria-disabled', 'true')
      .should('have.attr', 'id', 'button-1-test')
      .should('have.class', 'pointer-events-none')

    cy.get('[data-testid=\'cui-interactive-container\']').should('have.class', 'cursor-not-allowed')
    cy.mount(<Button id="button-1-test">Click me</Button>)

    cy.get('button')
      .should('exist')
      .should('have.text', 'Click me')
      .should('have.attr', 'aria-disabled', 'false')
      .should('have.class', 'cursor-pointer')
      .trigger('mouseenter')
      .click()
      .trigger('mouseleave')

    cy.get('[data-testid="cui-interactive-container"]').should('not.have.class', 'cursor-not-allowed')
  })

  it('button should handle [loading] prop', () => {
    cy.mount(<Button loading>Loading</Button>)
    const button = cy.get('button')
    button.should('have.attr', 'aria-disabled', 'true')
    cy.get('[data-testid="cui-loader"]').should('be.visible')
  })

  it('should render button as [circle]', () => {
    cy.mount(<Button circle>+</Button>)
    const button = cy.get('button')
    button.should('have.css', 'border-radius', '9999px')
    cy.get('[data-testid="cui-loader"]').should('not.be.visible')

    cy.mount(
      <Button circle loading>
        +
      </Button>
    )
    cy.get('[data-testid="cui-loader"]').should('be.visible')
  })
  ;['light', 'dark'].forEach(mode =>
    describe(`should apply colors according to [variant] [status] and mode`, () => {
      describe(mode, () => {
        ELEMENT_VARIANTS.forEach(variant => {
          describe(variant, () => {
            ELEMENT_STATUS.forEach(status => {
              it(status, () => {
                cy.mount(
                  <div className={clsx(`w-full h-full`, mode === 'dark' && 'bg-black dark')}>
                    <Button status={status} variant={variant}>
                      {status}
                    </Button>
                  </div>
                )

                const button = cy.get('button')
                button
                  .invoke('attr', 'class') // returns "class1 class2 class3"
                  .then(classList => {
                    const classes = classList?.split(' ')
                    const expectedClasses = modeVariantStatusExpectedClasses[mode][variant][status]
                    expectedClasses.forEach(expectedClass => expect(classes).to.include(expectedClass))
                  })
              })
            })
          })
        })
      })
    })
  )
})
