
var students = [];

function student(first, last, age)
       {
           this.firstname = first;
           this.lastname = last;
           this.age = age;
           this.greeting = function()
              {
                return "Hi I'm " + this.firstname + " and I'm " + this.age + " years old."; 
              };
       }
students.push (new student("Ryan","Garcia",24));
students.push (new student("Gerovanta","Davis",25));
students.push (new student("Max","Holloway",31));

for (var index=0; index<students.length; index++)
    {  
       var student = students[index];
       console.log(student.greeting());
    }

//var s1 = new student("shiv","chhetri",21);
//console.log(s1);
//console.log(s1.greeting());


//var student0 = {
    //firstname : "john",
    //lastname : "cena",
   // age : 42
//};

//for (var index=0; index<students.length; index++)
//    {
//        console.log(students[index]);
//    }