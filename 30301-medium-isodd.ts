// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<IsOdd<2023>, true>>,
  Expect<Equal<IsOdd<1453>, true>>,
  Expect<Equal<IsOdd<1926>, false>>,
  Expect<Equal<IsOdd<number>, false>>,
]


// ============= Your Code Here =============
type IsOdd<T extends number> = `${T}` extends `${string}${1 | 3 | 5 | 7 | 9}` ? true : false 