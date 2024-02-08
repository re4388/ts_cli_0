// @ts-ignore
import jsome from 'jsome'

jsome.colors = {
  num: 'cyan', // stands for numbers
  // str: 'magenta', // stands for strings
  str: 'blue', // stands for strings
  bool: 'red', // stands for booleans
  // regex: 'blue', // stands for regular expressions
  undef: 'grey', // stands for undefined
  null: 'grey', // stands for null
  attr: 'green', // objects attributes -> { attr : value }
  quot: 'yellow', // strings quotes -> "..."
  punc: 'yellow', // commas seperating arrays and objects values -> [ , , , ]
  brack: 'yellow' // for both {} and []
}

jsome.level = {
  show: false,
  char: '.',
  color: 'red',
  spaces: 2,
  start: 0
}

export function colorizeJsonLog(jsonObj: any, title: string) {
  console.log('')
  console.log(title)
  jsome(jsonObj)
}
