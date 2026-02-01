const friends = ['Akash','Rahul','Adarsh','Arif','gaurav','Rakesh','Arjun']
let i = 0;
while (i < friends.length) { // auto add name if we update the string
    console.log(`${i+1}. ${friends[i]}`);
    i++;
}
