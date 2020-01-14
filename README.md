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

## Output
### format() date / duration

## Manipulation
### add() 
```
add = (duration) => (dateString) => dateString
add = (duration) => (duration) => duration
```

### subtract()
```
subtract = (duration) => (dateString) => dateString
subtract = (duration) => (duration) => duration
```

### startOf()
```
startOf = (datePartType) => (dateString) => dateString
```

### endOf() date
```
endOf = (datePartType) => (dateString) => dateString
```
### isBefore() 
```
isBefore = (dateString) => (dateString) => boolean
```
### isAfter()

```
isAfter = (compare: dateString) => (value: dateString) => boolean
```
### isSame()
```
isSame = (compare: dateString, part: datePartType) => (value: dateString) => boolean
```
### isBetween()
```
isBetween = (start: dateString, end: dateString) => (value: dateString) => boolean
```

### min()
### max()
### now()

## Duration
### difference() dates
### gt() durations
### lt() durations
### gte() durations
### lte() durations


