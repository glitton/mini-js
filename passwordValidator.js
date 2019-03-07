// Simple program that checks the validity of a password based on 4 conditions

let count = 0

const isPasswordValid = input => {
  hasUpperCase(input)
  if (hasUpperCase(input)) {
    count++
    console.log(`Your password has an uppercase letter.`)
  }
  if (!hasUpperCase(input)) {
    console.log(`Your password is invalid, it needs an uppercase letter.`)
  }

  hasLowerCase(input)
  if (hasLowerCase(input)) {
    count++
    console.log(`Your password has a lowercase letter.`)
  }
  if (!hasLowerCase(input)) {
    console.log(`Your password is invalid, it needs a lowercase letter.`)
  }

  isLongEnough(input)
  if (isLongEnough(input)) {
    count++
    console.log(`Your password has at least 8 characters.`)
  }
  if (!isLongEnough(input)) {
    console.log(`Your password needds to have at least 8 characters.`)
  }

  hasSpecialCharacter(input)
  if (hasSpecialCharacter(input)) {
    count++
    console.log(`Your password has a special character.`)
  }
  if (!hasSpecialCharacter(input)) {
    console.log(`Your password needs to have a special character.`)
  }

  if (count === 4) {
    console.log(`Woohoo, you've created a valid password!`)
  }
}

const hasUpperCase = input => {
  for (let i in input) {
    if (input[i] === input[i].toUpperCase()) {
      return true
    }
  }
}

const hasLowerCase = input => {
  for (let i in input) {
    if (input[i] === input[i].toLowerCase()) {
      return true
    }
  }
}

const isLongEnough = input => {
  if (input.length >= 8) {
    return true
  }
}

const hasSpecialCharacter = input => {
  const specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*']
  for (let i in input) {
    for (let char in specialCharacters) {
      if (input[i] === specialCharacters[char]) {
        return true
      }
    }
  }
}

isPasswordValid('NodoSAy#$')
