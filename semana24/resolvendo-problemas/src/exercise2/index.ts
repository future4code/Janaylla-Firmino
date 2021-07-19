function stringCompression(string: string): string {
  let stringCompression: string = "";
    for (let i = 0; i < string.length; i++) {
      let count: number = 0;
      const letter: string = string.substr(i, 1)
      const index = i;
      for (let j = 0; letter == string.substr(index + j, 1); i++, j++) {
        count++;
        console.log(letter)
      }
      stringCompression += letter + count;
    }


  return stringCompression
}
console.log(stringCompression("aaabbbccaa"))