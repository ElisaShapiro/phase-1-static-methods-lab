class Formatter {
  static capitalize(string) {
    return string[0].toUpperCase() + string.slice(1)
  }
  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-'\s]+/g, '')
  }
  static titleize(string) {
    let prep = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    string = string.split(" ") 
    string = string.map((word, index) => {
      if (index === 0) {
        word = this.capitalize(word)
        return word
      } else if (!prep.includes(word)) {
        word = this.capitalize(word)
        return word
      } else {
        return word
      }
    })
    return string.join(" ")
  }
}
// } for (word.charAt(0)){
//   return this.capitalize(word)
// } else {