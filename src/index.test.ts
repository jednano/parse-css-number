import parse from '.'
import commonJSModule = require('.')

const typeError = new TypeError('Expected a number.')

describe('parse-css-number', () => {
	it('exports a CommonJS module for npm compatibility', () => {
		expect(commonJSModule).toBe(parse)
	})

	it('returns a positive integer (number type) as-is', () => {
		expect(parse(42 as any)).toBe(42)
	})

	it('throws parsing a string value of null', () => {
		expect(() => parse('null')).toThrow(typeError)
	})

	it('throws parsing null value', () => {
		expect(() => parse(null as any)).toThrow(typeError)
	})

	it('throws parsing NaN value', () => {
		expect(() => parse(NaN as any)).toThrow(typeError)
	})

	it('throws parsing Infinity value', () => {
		expect(() => parse(Infinity as any)).toThrow(typeError)
	})

	describe('number-exclusive scenarios', () => {
		it('parses a positive fraction', () => {
			expect(parse('4.01')).toBe(4.01)
		})

		it('parses a negative fraction', () => {
			expect(parse('-456.8')).toBe(-456.8)
		})

		it('parses a fractional number w/o a leading zero', () => {
			expect(parse('.60')).toBe(0.6)
		})

		it('parses scientific notation', () => {
			expect(parse('10e3')).toBe(10e3)
		})

		it('parses complicated scientific notation', () => {
			expect(parse('-3.4e-2')).toBe(-3.4e-2)
		})

		it('throws parsing an integer with a trailing decimal point', () => {
			expect(() => parse('12.')).toThrow(
				'Decimal points must be followed by at least one digit.',
			)
		})

		it('throws parsing two leading signs', () => {
			expect(() => parse('+-12.2')).toThrow(
				'Only one leading +/- is allowed.',
			)
		})

		it('throws parsing two decimal points', () => {
			expect(() => parse('12.1.1')).toThrow(
				'Only one decimal point is allowed.',
			)
		})
	})

	describe('number-safe integer scenarios', () => {
		it('parses a positive integer (without a leading + sign)', () => {
			expect(parse('12')).toBe(12)
		})

		it('parses a positive integer (with a leading + sign)', () => {
			expect(parse('+123')).toBe(123)
		})

		it('parses a negative integer', () => {
			expect(parse('-456')).toBe(-456)
		})

		it('parses zero', () => {
			expect(parse('0.0')).toBe(0)
		})

		it('parses zero with a leading +', () => {
			expect(parse('+0.0')).toBe(0)
		})

		it('parses zero with a leading -', () => {
			expect(parse('-0.0')).toBe(-0)
		})

		it('throws parsing letters', () => {
			expect(() => parse('ten')).toThrow(typeError)
		})

		it('throws parsing a special character', () => {
			expect(() => parse('_5')).toThrow(typeError)
		})
	})
})
