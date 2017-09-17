# ECC Club Night Tool
This is the program we used to do club night sign-ups for 2017-18. It may or
may not be used in the future but I just wanted to leave it here in case
anyone wants to use it in the future. Written in NodeJS.

## Dependencies
Use:
```shell
npm install [package]
```
Packages:
- readline
- fs (usually built-in)
- colors

## Usage
This tool runs in the console.
```shell
clear
node collect.js [list file]
```

## Validation
To make sure nobody trolled you on the signups, validate.js tests for valid
Exeter email addresses, and prints any offending text with the line number
attached.
```shell
node validate.js [list file]
```
