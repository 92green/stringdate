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
add = (duration) => (date) => date
add = (duration) => (duration) => duration
```

### subtract()
```
subtract = (duration) => (date) => date
subtract = (duration) => (duration) => duration
```

### startOf()
```
startOf = (y|M|d|h|m|s) => (date) => date
```

### endOf() date
```
endOf = (y|M|d|h|m|s) => (date) => date
```
### isBefore() 
```
isBefore = (dateString) => (dateString) => boolean
```
### isAfter()

```
isAfter = (dateString) => (dateString) => boolean
```
### isSame()
### isBetween()
### min()
### max()
### now()

## Duration
### difference() dates
### gt() durations
### lt() durations
### gte() durations
### lte() durations


