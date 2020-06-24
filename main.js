let allRead = true;

let notifications = [
  { message: "Lorem", read: true },
  { message: "Ipsum", read: true },
  { message: "Dolor", read: false },
  { message: "Sit", read: false },
  { message: "Amet", read: true },
];

// find if there is any message to read => return undefined or an object.
const isFalse = notifications.find(
  (notification) => notification.read === false
);

// set false if there is a message to read otherwise true.
allRead = isFalse ? false : true;

console.log(allRead);
