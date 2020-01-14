# stringdate

Do you find that most of the time dates and times are strings? You receive them through JSON as a string and you render them to the user as a string. If you are already using libraries to manipulate and format them, why bother dealing with the rubbish JavaScript Date object. Lets just use strings everywhere.



## Features
- Only strings
- Functional by default
- ISO
- Small API

## Installation

```
yarn add stringdate
```

# API

### Types
```
dateString = '2019-01-01';
duration = 'P1Y1M1D';
datePartType = 'year' | 'month' | 'day';
```

## Output
### format() date / duration

## Manipulation
### add() 
Add a duration to a date or add a duration to another duration.
```js
// add = (duration) => (dateString) => dateString
// add = (duration) => (duration) => duration

const tomorrow = add('P1D')('2020-01-01') === '2020-01-02';
const twoDays = add('P1D')('P1D') === 'P2D';
```

### subtract()
Subtract a duration from a date or subtract a duration from another duration.
```
// subtract = (duration) => (dateString) => dateString
// subtract = (duration) => (duration) => duration
```

### startOf()
Return the start of a date part based on the given date string

```js
// startOf = (datePartType) => (dateString) => dateString

const newYear = startOf('year')('2020-11-11') === '2020-01-01';
const firstOfMonth = startOf('month')('2020-11-11') === '2020-11-01';
```

### endOf()
Get the end of a date part based on the given date string
```js
// endOf = (datePartType) => (dateString) => dateString

const newYearsEve = endOf('year')('2020-11-11') === '2020-01-01';
const endOfMonth = endOf('month')('2020-11-11') === '2020-11-30';
```

### isBefore() 
Check if a date is before another date
```js
// isBefore = (dateString) => (dateString) => boolean

isBefore('2020-12-25')('2020-12-01') === true;
isBefore('2020-12-25')('2020-12-30') === false;

```

### isAfter()
Check if a date is after another date
```js
// isAfter = (dateString) => (dateString) => boolean

isAfter('2020-12-25')('2020-12-30') === true;
isAfter('2020-12-25')('2020-12-01') === false;

```

### isSame()
Check if a date or date part is the same
```js
// isSame = (compare: dateString, part?: datePartType) => (value: dateString) => boolean

const sameYear = isSame('2020-01-01', 'year')('2020-11-11') === true;
const sameMonth = isSame('2020-01-01', 'month')('2019-01-11') === true;
const sameDay = isSame('2020-01-01', 'day')('2019-06-01') === true;
const sameDate = isSame('2020-01-01', 'day')('2020-01-01') === true;
```

### isBetween()
```js
// isBetween = (start: dateString, end: dateString) => (value: dateString) => boolean
```

### min()
```js
// min = (compare: dateString) => (value: dateString) => dateString
```
### max()
```js
// max = (compare: dateString) => (value: dateString) => dateString
```
### now()
```js
// now = () => dateString
```

## Duration
### difference() 
```
// difference = (dateString) => (dateString) => duration
```

