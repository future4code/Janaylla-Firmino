interface Cartoon {
   [index: string]: any
}

const homer: Cartoon = {
   name: "Homer Simpson",
   cartoon: "The Simpsons"
}

homer.phrase = "Moe, me vê mais uma Duff Beer!"
homer.hobbies = ["eat", "drink", "sleep", "watching tv"]

console.log(homer);
console.log(homer["name"])
