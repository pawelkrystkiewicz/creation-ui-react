'use strict'
import { ELEMENT_STATUS, ELEMENT_VARIANTS } from '@creation-ui/core'
import { Button } from '@root/packages/react/src'
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
      primary: ['bg-primary-500', 'text-white'],
      success: ['bg-success-500', 'text-white'],
      warning: ['bg-warning-500', 'text-white'],
      error: ['bg-error-500', 'text-white'],
      info: ['bg-info-500', 'text-white'],
    },

    outlined: {
      primary: ['border-primary-500', 'text-primary-500'],
      success: ['border-success-500', 'text-success-500'],
      warning: ['border-warning-500', 'text-warning-500'],
      error: ['border-error-500', 'text-error-500'],
      info: ['border-info-500', 'text-info-500'],
    },
    text: {
      primary: ['bg-transparent', 'text-primary-500'],
      success: ['bg-transparent', 'text-success-500'],
      warning: ['bg-transparent', 'text-warning-500'],
      error: ['bg-transparent', 'text-error-500'],
      info: ['bg-transparent', 'text-info-700'],
    },
  },
  dark: {
    contained: {
      primary: ['bg-primary-500', 'text-white'],
      success: ['bg-success-500', 'text-white'],
      warning: ['bg-warning-500', 'text-white'],
      error: ['bg-error-500', 'text-white'],
      info: ['bg-info-500', 'text-white'],
    },
    outlined: {
      primary: ['border-primary-500', 'text-primary-500'],
      success: ['border-success-500', 'text-success-500'],
      warning: ['border-warning-500', 'text-warning-500'],
      error: ['border-error-500', 'text-error-500'],
      info: ['border-info-500', 'text-info-500'],
    },
    text: {
      primary: ['bg-transparent', 'text-primary-500'],
      success: ['bg-transparent', 'text-success-500'],
      warning: ['bg-transparent', 'text-warning-500'],
      error: ['bg-transparent', 'text-error-500'],
      info: ['bg-transparent', 'text-info-700'],
    },
  },
}

describe('Button', () => {
  it('should render default button with children', () => {
    let clicked = false

    cy.mount(
      <Button
        id='button-1-test'
        onClick={() => {
          clicked = true
        }}
      >
        Click me
      </Button>,
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
      <Button id='button-1-test' disabled>
        Click me
      </Button>,
    )
    const button = cy.get('button')

    button
      .should('exist')
      .should('have.text', 'Click me')
      .should('have.attr', 'aria-disabled', 'true')
      .should('have.attr', 'id', 'button-1-test')
      .should('have.class', 'pointer-events-none')

    cy.get("[data-testid='cui-interactive-container']").should('have.class', 'cursor-not-allowed')
    cy.mount(<Button id='button-1-test'>Click me</Button>)

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
      </Button>,
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
                  </div>,
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
    }),
  )
})
