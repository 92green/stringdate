# stringdate

Do you find that most of the time dates and times are strings? You receive them through JSON as a string and you render them to the user as a string. If you are already using libraries to manipulate and format them, why bother dealing with the rubbish JavaScript Date object. Just use strings everywhere.

## Features
- Only dates
- Only strings
- Functional by default
- ISO
- Small API

## Installation

```
yarn add stringdate
```

```
import {add, format} from 'stringdate';
import {pipeWith} from 'unfunctional';

const tomorrow = pipeWith(
    '2020-01-01',
    add('P1D'),
    format('EEEE MMMM do yyyy')
);

// tomorrow === 'Thursday January 2nd 2020';
```


# API

### Types
```
dateString = '2019-01-01';
duration = 'P1Y1M1D';
datePartType = 'year' | 'month' | 'day';
```

## Output
### format()
Format a date string. [Uses date-fns](https://date-fns.org/v2.9.0/docs/format)

```js
// format = (formatString) => (dateString) => string
const words = format('EEEE MMMM do yyyy')('2020-01-01') === 'Wednesday January 1st 2020';
```


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

const yesterday = subtract('P1D')('2020-01-01') === '2019-12-31';
const twoDays = subtract('P1D')('P3D') === 'P2D';
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

### min()
Return the smaller date or duration. _Note: P1M === P30D_
```js
// min = (compare: dateString) => (value: dateString) => dateString
// min = (compare: duration) => (value: duration) => duration

min('2012-01-01')('2020-01-01') === '2012-01-01';
min('P1D')('P1Y') === 'P1D';
```

### max()
Return the larger date or duration. _Note: P1M === P30D_
```js
// max = (compare: dateString) => (value: dateString) => dateString
// max = (compare: duration) => (value: duration) => duration

max('2012-01-01')('2020-01-01') === '2020-01-01';
max('P1D')('P1Y') === 'P1Y';
```

### now()
Return the current date string
```js
// now = () => dateString
const tomorrow = add('P1D')(now());
```

## Comparison

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
// isSame = (compare: dateString, part: datePartType) => (value: dateString) => boolean

const sameYear = isSame('year', '2020-01-01')('2020-11-11') === true;
const sameMonth = isSame('month', '2020-01-01')('2020-01-11') === true;
const sameDate = isSame('day', '2020-01-01')('2020-01-01') === true;
```

### isBetween()
Check if a date is between two dates (exclusive)
```js
// isBetween = (start: dateString, end: dateString) => (value: dateString) => boolean

isBetween('2020-01-01', '2020-12-31')('2020-06-01') === true;
isBetween('2020-01-01', '2020-12-31')('2020-12-31') === true;
isBetween('2020-01-01', '2020-12-31')('2020-01-01') === true;
isBetween('2020-01-01', '2020-12-31')('2020-12-31') === false;
isBetween('2020-01-01', '2020-12-31')('2022-01-01') === false;
```


## Duration
### difference() 
Find the distance between two dates. Returns are duration.
```
// difference = (dateString) => (dateString) => duration

difference('2020-01-01')('2020-01-02') === 'P1D';
```

