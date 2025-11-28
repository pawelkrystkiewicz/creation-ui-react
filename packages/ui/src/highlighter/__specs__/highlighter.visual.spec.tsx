import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { Highlighter } from '..'

describe('Highlighter Visual Tests', () => {
  it('renders text without highlighting when no search words', async () => {
    const { container } = render(
      <Highlighter
        textToHighlight="This is some sample text"
        searchWords={[]}
      />
    )
    expect(container).toBeVisible()
    await expect(container).toMatchScreenshot()
  })

  it('renders text without highlighting when searchWords is undefined', async () => {
    const { container } = render(
      <Highlighter
        textToHighlight="This is some sample text"
        searchWords={undefined as any}
      />
    )
    expect(container).toBeVisible()
    await expect(container).toMatchScreenshot()
  })

  describe('Single word highlighting', () => {
    it('highlights single word at the beginning', async () => {
      const { container } = render(
        <Highlighter
          textToHighlight="Hello world, this is a test"
          searchWords={['Hello']}
        />
      )
      await expect(container).toMatchScreenshot()
    })

    it('highlights single word in the middle', async () => {
      const { container } = render(
        <Highlighter
          textToHighlight="Hello world, this is a test"
          searchWords={['this']}
        />
      )
      await expect(container).toMatchScreenshot()
    })

    it('highlights single word at the end', async () => {
      const { container } = render(
        <Highlighter
          textToHighlight="Hello world, this is a test"
          searchWords={['test']}
        />
      )
      await expect(container).toMatchScreenshot()
    })
  })

  describe('Multiple word highlighting', () => {
    it('highlights multiple words', async () => {
      const { container } = render(
        <Highlighter
          textToHighlight="The quick brown fox jumps over the lazy dog"
          searchWords={['quick', 'fox', 'lazy']}
        />
      )
      await expect(container).toMatchScreenshot()
    })

    it('highlights multiple occurrences of the same word', async () => {
      const { container } = render(
        <Highlighter
          textToHighlight="The cat sat on the mat with the cat"
          searchWords={['the', 'cat']}
        />
      )
      await expect(container).toMatchScreenshot()
    })
  })

  describe('Case insensitive highlighting', () => {
    it('highlights regardless of case', async () => {
      const { container } = render(
        <Highlighter
          textToHighlight="Hello HELLO hello HeLLo"
          searchWords={['hello']}
        />
      )
      await expect(container).toMatchScreenshot()
    })
  })

  describe('Edge cases', () => {
    it('handles word not found in text', async () => {
      const { container } = render(
        <Highlighter
          textToHighlight="This is sample text"
          searchWords={['notfound']}
        />
      )
      await expect(container).toMatchScreenshot()
    })

    it('handles partial word matches', async () => {
      const { container } = render(
        <Highlighter
          textToHighlight="Testing the tester"
          searchWords={['test']}
        />
      )
      await expect(container).toMatchScreenshot()
    })

    it('handles special characters in search', async () => {
      const { container } = render(
        <Highlighter
          textToHighlight="Email: user@example.com"
          searchWords={['user']}
        />
      )
      await expect(container).toMatchScreenshot()
    })
  })

  describe('Long text highlighting', () => {
    it('highlights in long paragraph', async () => {
      const { container } = render(
        <Highlighter
          textToHighlight="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
          searchWords={['ipsum', 'tempor', 'veniam']}
        />
      )
      await expect(container).toMatchScreenshot()
    })
  })

  describe('In context', () => {
    it('renders highlighter in search results context', async () => {
      const searchResults = [
        'React is a JavaScript library',
        'Vue.js is a progressive framework',
        'Angular is a platform for building',
      ]
      const { container } = render(
        <ul className="space-y-2">
          {searchResults.map((result, index) => (
            <li key={index} className="p-2 border rounded">
              <Highlighter
                textToHighlight={result}
                searchWords={['is', 'a']}
              />
            </li>
          ))}
        </ul>
      )
      await expect(container).toMatchScreenshot()
    })
  })
})
