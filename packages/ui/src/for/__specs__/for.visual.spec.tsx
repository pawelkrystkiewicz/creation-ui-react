import { describe, expect, it } from 'vitest'
import { render } from 'vitest-browser-react'
import { For } from '../for'

describe('For Visual Tests', () => {
  it('renders list of simple items correctly', async () => {
    const items = ['Apple', 'Banana', 'Cherry', 'Date']
    
    const screen = render(
      <div style={{ padding: '16px' }}>
        <For each={items}>
          {(item, index) => (
            <div 
              key={index}
              style={{
                padding: '8px 12px',
                margin: '4px 0',
                backgroundColor: '#f8f9fa',
                border: '1px solid #dee2e6',
                borderRadius: '4px'
              }}
            >
              {index + 1}. {item}
            </div>
          )}
        </For>
      </div>
    )
    
    const container = screen.getByText('1. Apple').element().parentElement!
    await expect(container).toMatchScreenshot()
  })

  it('renders empty list correctly', async () => {
    const screen = render(
      <div style={{ 
        padding: '16px',
        border: '1px dashed #ccc',
        borderRadius: '4px',
        textAlign: 'center',
        color: '#6c757d',
        minHeight: '100px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <For each={[]}>
          {(item, index) => <div key={index}>{item}</div>}
        </For>
        <span>No items to display</span>
      </div>
    )
    
    const container = screen.getByText('No items to display').element().parentElement!
    await expect(container).toMatchScreenshot()
  })

  it('renders complex card layout', async () => {
    const users = [
      { id: 1, name: 'John Doe', role: 'Developer', avatar: '👨‍💻' },
      { id: 2, name: 'Jane Smith', role: 'Designer', avatar: '👩‍🎨' },
      { id: 3, name: 'Bob Johnson', role: 'Manager', avatar: '👨‍💼' }
    ]
    
    const screen = render(
      <div style={{ padding: '16px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
        <For each={users}>
          {(user, index) => (
            <div 
              key={user.id}
              style={{
                padding: '16px',
                backgroundColor: 'white',
                border: '1px solid #e0e0e0',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                minWidth: '200px',
                textAlign: 'center'
              }}
            >
              <div style={{ fontSize: '48px', marginBottom: '8px' }}>
                {user.avatar}
              </div>
              <h3 style={{ 
                margin: '0 0 4px 0', 
                fontSize: '18px', 
                color: '#333' 
              }}>
                {user.name}
              </h3>
              <p style={{ 
                margin: '0', 
                fontSize: '14px', 
                color: '#666',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                {user.role}
              </p>
              <div style={{
                marginTop: '8px',
                padding: '4px 8px',
                backgroundColor: '#f0f0f0',
                borderRadius: '12px',
                fontSize: '12px',
                color: '#888'
              }}>
                #{index + 1}
              </div>
            </div>
          )}
        </For>
      </div>
    )
    
    const container = screen.getByText('John Doe').element().parentElement!.parentElement!
    await expect(container).toMatchScreenshot()
  })

  it('renders numbered list with different colors', async () => {
    const items = [
      { text: 'First item', color: '#e3f2fd' },
      { text: 'Second item', color: '#f3e5f5' },
      { text: 'Third item', color: '#e8f5e8' },
      { text: 'Fourth item', color: '#fff3e0' }
    ]
    
    const screen = render(
      <div style={{ padding: '16px', maxWidth: '400px' }}>
        <h3 style={{ margin: '0 0 16px 0', color: '#333' }}>Colored List Items</h3>
        <For each={items}>
          {(item, index) => (
            <div 
              key={index}
              style={{
                padding: '12px 16px',
                margin: '8px 0',
                backgroundColor: item.color,
                border: '1px solid rgba(0,0,0,0.1)',
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}
            >
              <div style={{
                width: '24px',
                height: '24px',
                backgroundColor: 'rgba(0,0,0,0.1)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '12px',
                fontWeight: 'bold'
              }}>
                {index + 1}
              </div>
              <span style={{ fontSize: '14px', color: '#333' }}>
                {item.text}
              </span>
            </div>
          )}
        </For>
      </div>
    )
    
    const container = screen.getByText('Colored List Items').element().parentElement!
    await expect(container).toMatchScreenshot()
  })

  it('renders grid layout with images', async () => {
    const products = [
      { id: 1, name: 'Laptop', price: '$999', emoji: '💻' },
      { id: 2, name: 'Phone', price: '$699', emoji: '📱' },
      { id: 3, name: 'Tablet', price: '$499', emoji: '📲' },
      { id: 4, name: 'Watch', price: '$299', emoji: '⌚' }
    ]
    
    const screen = render(
      <div style={{ 
        padding: '16px',
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '16px',
        maxWidth: '400px'
      }}>
        <For each={products}>
          {(product, index) => (
            <div 
              key={product.id}
              style={{
                padding: '16px',
                backgroundColor: 'white',
                border: '1px solid #e0e0e0',
                borderRadius: '8px',
                textAlign: 'center',
                transition: 'transform 0.2s',
                cursor: 'pointer'
              }}
            >
              <div style={{ fontSize: '40px', marginBottom: '8px' }}>
                {product.emoji}
              </div>
              <h4 style={{ 
                margin: '0 0 4px 0', 
                fontSize: '16px', 
                color: '#333' 
              }}>
                {product.name}
              </h4>
              <p style={{ 
                margin: '0', 
                fontSize: '18px', 
                fontWeight: 'bold',
                color: '#0066cc' 
              }}>
                {product.price}
              </p>
            </div>
          )}
        </For>
      </div>
    )
    
    const container = screen.getByText('Laptop').element().parentElement!.parentElement!
    await expect(container).toMatchScreenshot()
  })

  it('renders table-like structure', async () => {
    const data = [
      { name: 'Alice', age: 25, department: 'Engineering' },
      { name: 'Bob', age: 30, department: 'Design' },
      { name: 'Charlie', age: 35, department: 'Marketing' }
    ]
    
    const screen = render(
      <div style={{ padding: '16px', fontFamily: 'Arial, sans-serif' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 80px 120px',
          gap: '8px',
          padding: '8px 12px',
          backgroundColor: '#f8f9fa',
          borderRadius: '4px',
          fontWeight: 'bold',
          marginBottom: '8px'
        }}>
          <div>Name</div>
          <div>Age</div>
          <div>Department</div>
        </div>
        <For each={data}>
          {(person, index) => (
            <div 
              key={index}
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 80px 120px',
                gap: '8px',
                padding: '8px 12px',
                backgroundColor: index % 2 === 0 ? 'white' : '#f8f9fa',
                border: '1px solid #dee2e6',
                borderRadius: '4px',
                marginBottom: '2px'
              }}
            >
              <div>{person.name}</div>
              <div>{person.age}</div>
              <div>{person.department}</div>
            </div>
          )}
        </For>
      </div>
    )
    
    const container = screen.getByText('Name').element().parentElement!.parentElement!
    await expect(container).toMatchScreenshot()
  })

  it('renders nested For components', async () => {
    const categories = [
      { 
        name: 'Fruits', 
        items: ['Apple', 'Banana', 'Orange'],
        color: '#e8f5e8'
      },
      { 
        name: 'Vegetables', 
        items: ['Carrot', 'Broccoli', 'Spinach'],
        color: '#f0f8e8'
      }
    ]
    
    const screen = render(
      <div style={{ padding: '16px' }}>
        <For each={categories}>
          {(category, categoryIndex) => (
            <div 
              key={categoryIndex}
              style={{
                marginBottom: '20px',
                padding: '16px',
                backgroundColor: category.color,
                borderRadius: '8px',
                border: '1px solid rgba(0,0,0,0.1)'
              }}
            >
              <h3 style={{ 
                margin: '0 0 12px 0', 
                color: '#333',
                fontSize: '18px'
              }}>
                {category.name}
              </h3>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <For each={category.items}>
                  {(item, itemIndex) => (
                    <span 
                      key={itemIndex}
                      style={{
                        padding: '4px 8px',
                        backgroundColor: 'rgba(255,255,255,0.8)',
                        borderRadius: '12px',
                        fontSize: '14px',
                        border: '1px solid rgba(0,0,0,0.1)'
                      }}
                    >
                      {item}
                    </span>
                  )}
                </For>
              </div>
            </div>
          )}
        </For>
      </div>
    )
    
    const container = screen.getByText('Fruits').element().parentElement!.parentElement!
    await expect(container).toMatchScreenshot()
  })
})