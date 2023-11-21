import { describe, it, expect } from 'vitest'
import { capitalizeFirstLetter } from '../global'

describe('global', () => {
  describe('capitalizeFirstLetter', () => {
    it('should capitalize first letter', () => {
      expect(capitalizeFirstLetter('hello')).toBe('Hello')
    })
  })
})