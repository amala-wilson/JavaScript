/* Challenge 1 */
/* Print all of the students and their cohort. */

let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

for(let i=0;i<students.length;i++){
    let studentObj = students[i]
    console.log("Name: "+studentObj["name"]+", "+"Cohort: "+studentObj["cohort"]);
}

/* Challenge 2 */
/*
    EMPLOYEES
    1 - JONES, MIGUEL - 11
    2 - BERTSON, ERNIE - 12
    3 - LU, NORA - 6
    4 - BARKYOUMB, SALLY - 14
    MANAGERS
    1 - CHAMBERS, LILLIAN - 15
    2 - POE, GORDON - 9
*/
let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };

 for (let user in users){
     let userKey = user;
     let userObjs = users[userKey];
     console.log(userKey.toUpperCase());
     for(var i=0;i<userObjs.length;i++){
         let j = i + 1;
         let userObj = userObjs[i];
         let nameLen = userObj['last_name'].length + userObj['first_name'].length;
         console.log(j+" - "+userObj['last_name']+", "+userObj['first_name']+" - "+nameLen);
     }
 }