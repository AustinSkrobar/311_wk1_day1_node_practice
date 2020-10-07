const split = (str, delim) => {
  // write code for strings.split
return str.split(delim)
}

const pairs = (str) => {
  // write code for strings.pairs
  let parts = str.match(/[\s\S]{1,2}/g) || [];
  return parts
}



const reverse = (str) => {
  // write code for strings.reverse
  const Arr = str.split("")
  
  console.log("Arr: ", Arr)

  const flipped = Arr.reverse()
  const joined = flipped.join('')
  console.log("flipped: ", flipped)
  console.log("joined: ", joined)
  return joined
}

module.exports = {
  split,
  pairs,
  reverse
}