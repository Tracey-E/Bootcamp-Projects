let data ={
    "data": [{
      "type": "articles",
      "id": "1",
      "attributes": {
        "title": "JSON:API paints my bikeshed!",
        "body": "The shortest article. Ever.",
        "created": "2015-05-22T14:56:29.000Z",
        "updated": "2015-05-22T14:56:28.000Z"
      },
      "relationships": {
        "author": {
          "data": {"id": "42", "type": "people"}
        }
      }
    }],
    "included": [
      {
        "type": "people",
        "id": "42",
        "attributes": {
          "name": "John",
          "age": 80,
          "gender": "male"
        }
      }
    ]
  }

let output= document.getElementById("output")
     console.log(data)
     console.log(data.data[0])
     
 let attributes = data.data[0].attributes;

 for( let key in attributes) {
console.log(key, attributes[key])
output.innerText = output.innerText + key + ": " + attributes[key] + "\n"
 }

let dataString = JSON.stringify(data)

output.innerText = output.innerText + "\n" + dataString

window.localStorage.setItem("data", dataString)

let items = JSON.parse(localStorage.getItem("data"))
console.log(items)

window.localStorage.removeItem("data")

//session storage goes after browser closed
//local storage stays in browser

function b64EncodeUnicode(str) {
    return btoa(encodeURIComponent(str));
};

function UnicodeDecodeB64(str) {
    return decodeURIComponent(atob(str));
};

str ='I am a string to encode'

let encoded = b64EncodeUnicode(str)
output.innerText = output.innerText + "\n" + " I am a codded string " + encoded

console.log(encoded)

let uncoded = UnicodeDecodeB64(encoded)
output.innerText = output.innerText + "\n " +" I am a uncoded string " + uncoded

console.log(uncoded)