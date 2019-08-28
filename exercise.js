const { project } = require('./project.js');
// console.log(project);

number_of_people = project['committee'].length;  // 3

// The current project is assigned to one of 3 committee members.
project['steps'].forEach((element, index) => {  
    // console.log(element, index);
    element['person'] = project['committee'][index % number_of_people];
})

console.log('The new project assignments:')
project['steps'].forEach(element => {
    console.log(element)
})