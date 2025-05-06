const microphone = {
  brand: "Fifine",
  indicator: true,
  price: 8000,
  color: "Black",
  cableColor: "White",
  startRecording() {
    console.log("Recording Start");
  },
  stopRecording() {
    console.log("Recording Stop");
  },
  // toString() {
  //   return this.brand
  // }
};

/**
 * Teare are two different parts in Object
 * 1. Noun -> Adjective (State/data/property/field)
 * 2. Varb -> Functionlities (stast, stop)
 */

microphone.startRecording();
console.log(microphone);

console.log(microphone.toString());

const testObj = new Object();
testObj.name = "Test name object";
testObj.time = new Date();
console.log(testObj);
console.log('My microphone = ' + microphone);



