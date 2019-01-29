const tooManySigns = /^[+-]{2,}/
const trailingDecimalPoint = /\.$/

export default function parseCSSNumber(value: string) {
	switch (typeof value) {
		case 'string':
			break
		case 'number':
			if (JSON.stringify(value) === 'null') {
				throw new TypeError('Expected a number.')
			}
			return value
		default:
			throw new TypeError('Expected a number.')
	}
	if (tooManySigns.test(value)) {
		throw new Error('Only one leading +/- is allowed.')
	}
	try {
		const c1 = value.substr(0, 1)
		const parsed = JSON.parse(
			c1 === '+' ? value.substr(1) : c1 === '.' ? `0${value}` : value,
		)
		if (typeof parsed === 'number') {
			return parsed
		}
	} catch (err) {
		if (value.split('.').length > 2) {
			throw new Error('Only one decimal point is allowed.')
		}
		if (trailingDecimalPoint.test(value)) {
			throw new Error(
				'Decimal points must be followed by at least one digit.',
			)
		}
	}
	throw new TypeError('Expected a number.')
}

// @ts-ignore
module.exports = Object.assign(exports.default, exports)
