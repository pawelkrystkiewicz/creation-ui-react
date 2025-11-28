'use client'
import { CTA } from './cta'
import { Features } from './features'
import { Hero } from './hero'
import { Showcase } from './showcase'

export const Index = () => (
  <div className="flex flex-col">
    <Hero />
    <Features />
    <Showcase />
    <CTA />
  </div>
)
