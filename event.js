class Event {
    constructor(name, description) {
      this.name = name;
      this.description = description;
      this.availableTickets = [];
    }
}

// The below statement creates an object.
const eventObj1 = new Event(
    'KLOS Golden Gala',
    'An evening with hollywood vampires'
);

// 5. Create few more objects with different values.
const eventObj2 = new Event('Skillet & Sevendust', 'Victorious war tour');
const eventObj3 = new Event('Jenny Lewis', 'On the line tour 2019');

// 6. Create an empty Event array.
const eventArray = new Array();

// 7. pushing single object to an array
eventArray.push(eventObj1);
// pushing multiple objects to an array at once
eventArray.push(eventObj1, eventObj2, eventObj3);

// 8. in order to check whether the elements are pushed, use console.log
console.log(eventArray);