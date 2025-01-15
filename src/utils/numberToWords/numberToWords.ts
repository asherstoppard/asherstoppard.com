const baseNumberWords = [
  'zero',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten',
  'eleven',
  'twelve',
  'thirteen',
  'fourteen',
  'fifteen',
  'sixteen',
  'seventeen',
  'eighteen',
  'nineteen',
]

const tenWords = [
  'zero',
  'ten',
  'twenty',
  'thirty',
  'forty',
  'fifty',
  'sixty',
  'seventy',
  'eighty',
  'ninety',
]

const words = Array.from(new Array(100).keys()).map((i) => {
  if (i < 20) return baseNumberWords[i]
  if (i % 10 === 0) return `${tenWords[i / 10]}`

  return `${tenWords[Math.floor(i / 10)]} ${baseNumberWords[i % 10]}`
})

export const numberToWords = (num: number) => words[num]
