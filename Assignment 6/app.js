            //Chapter 21-25 (Task 1)//
// var FirstName = prompt("Enter First Name");
// var LastName = prompt("Enter Last Name");
// var FullName = FirstName+LastName
// alert(FullName)

             //Chapter 21-25 (Task 2)//
// var mobile = prompt("Favorite mobile phone");
// var length = mobile.length
// alert("My Favorite Phone is: "+mobile);
// alert("Length of string is "+length);

            //Chapter 21-25 (Task 3)//
// var word = ("Pakistani")
// var n =word.indexOf("n")
// alert(word+"\nIndex of n is: " +n)

        //Chapter 21-25 (Task 4)//

// var word = ("Hello World")
// var l =word.lastIndexOf("l")
// alert(word+"\nIndex of l is: " +l)

            //Chapter 21-25 (Task 5)//

//  var word = ("Pakistani")
//  var n =word.charAt("3")
// alert(word+"\nCharacter at index 3 is " +n)

             //Chapter 21-25 (Task 6)//

// var FirstName = prompt("Enter First Name");
//  var LastName = prompt("Enter Last Name");
//  var FullName = FirstName.concat(LastName)
// alert(FullName)

            //Chapter 21-25 (Task 7)//

// var word = ("City: Hyderabad");
// var replace = word.replace("Hyder","Islam")
// alert(word+"\nAfter Replacement"+replace);

            //Chapter 21-25 (Task 8)//

// var message = ("Ali and Sami are best friends. They play cricket and football together");
// var replace = message.replace(/and/g,"&")
// alert(message+"\nAfter Replacement: "+replace);

             //Chapter 21-25 (Task 9)//

// var x = "472";
// value = typeof(x)
// var a = parseInt(x);
// value2 = typeof(a)
// alert("Value: "+x + "\n Type: "+value+"\n"+"Value: "+a+"\n"+"Type: "+value2);

            //Chapter 21-25 (Task 10)//

// var input = prompt("Please Enter any word")
// var convert = input.toUpperCase()
// alert("User Input: "+input+"\nUpper Case: "+convert)

            //Chapter 21-25 (Task 11)//

// function titleCase(str) { 
//         str = str.toLowerCase().split(' '); 
//         for (var i = 0; i < str.length; i++) { 
//           str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);  
//         } 
//         return str.join(' '); 
//       }
//       userinput = prompt("Enter Any Word")
//       alert(titleCase(userinput)); 

            //Chapter 21-25 (Task 12)//

// var num = 35.36
// var convert = num.toString()
// var res = convert.replace(".","")
// alert("Number: "+num+"\nResult: "+res)

            //Chapter 21-25 (Task 13)//

// var userinput = prompt("Please Enter any word")
// var format = /@ . , !/;
// if(userinput.match(format)){
//         return true;
// }       
// else{
//         return false;   
        
// }

                 //Chapter 21-25 (Task 15)//

// var inputtxt = prompt("Enter password")
// function CheckPassword(inputtxt) 
// { 
// var passw=  /^[A-Za-z]\w{7,14}$/;
// if(inputtxt.value.match(passw)) 
// { 
// alert('Correct, try another...')

// }
// else
// { 
// alert('Wrong...!')

// }
// }

                //Chapter 21-25 (Task 16)//

// var university = ("University of Karachi");
// var res = university.split("")
// alert(res)

             //Chapter 21-25 (Task 18)//

// var string = 'The quick brown fox jumps over the lazy dog';

// alert(string.match(/t/gi).length);


             //Chapter 26-30 (Task 1)//

// var  positive = +prompt("Enter a value");
// var round_off = Math.round(positive);
// var floor = Math.floor(positive);
// var ceil = Math.ceil(positive);
// alert("Number: " + positive);
// alert("<br>" +"Round Off: " + round_off);
// alert("<br>" +"floor Value: " + floor);
// alert("<br>" +"ceil value: " + ceil);

             //Chapter 26-30 (Task 2)//

// var  negative = +prompt("Enter a value");
// var round_off = Math.round(negative);
// var floor = Math.floor(negative);
// var ceil = Math.ceil(negative);
// alert("Number: " + negative);
// alert("<br>" +"Round Off: " + round_off);
// alert("<br>" +"floor Value: " + floor);
// alert("<br>" +"ceil value: " + ceil);

             //Chapter 26-30 (Task 3)//

// var pos_num = prompt("Enter a value");
// var abs = Math.abs(pos_num);
// alert("<b>" +"The absolute value of " + pos_num + " is " + abs + "</b>");

             //Chapter 26-30 (Task 4)//

// var random = Math.random() * 7;
// var short_float = Math.floor(random);
// if(short_float === 1){
//     alert("Random dice value: " + short_float)
// }
// else if(short_float === 2){
//     alert("Random dice value: " + short_float)
// }
// else if(short_float === 3){
//     alert("Random dice value: " + short_float)
// }
// else if(short_float === 4){
//     alert("Random dice value: " + short_float)
// }
// else if(short_float === 5){
//     alert("Random dice value: " + short_float)
// }
// else if(short_float === 6){
//     alert("Random dice value: " + short_float)
// }
// else{
//     alert("Random dice value: " + 1)
// }

             //Chapter 26-30 (Task 5)//

// var headTail = prompt("Enter head's coin name");
// var Tailhead = prompt("Enter tail's coin name");
// var random = Math.random() * 2;
// var short_float = Math.floor(random);
// console.log(short_float)
// if(short_float == 0){
//     alert(headTail + " won the toss")
// }
// else if(short_float == 1){
//     alert(Tailhead + " won the toss")
// }

             //Chapter 26-30 (Task 6)//

// var random = Math.random() * 101;
// var short_float = Math.floor(random);
// alert("<b>" +" Random number between 1 and 100: " + "</b>" + short_float);

             //Chapter 26-30 (Task 8)//
             
// var value_input = +prompt("Enter a value under 0 to 10");
// var ran_Dom = Math.random() * 11 ;
// var short_float = Math.floor(ran_Dom);
// if(value_input == short_float){
//     alert("congratulation! You won");
// }
// else{
//     alert("Sorry!");
// }




   //Chapter 31-34 (Task 1)//

// var d =new Date();
// alert(d)

            //Chapter 31-34 (Task 2)//

// var month = ["January","February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"] 
// var d = new Date();
// var m = month[d.getMonth()];
// alert(m)

            //Chapter 31-34 (Task 3)//
  
// var day = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
// var m = new Date();
// var  d = day[m.getDay()]
// alert("Today is " + d)           

            //Chapter 31-34(Task 4)//

// var day = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
// var m = new Date();
// var  d = day[m.getDay()]
// if(d.getDay == "Sunday"|| d.getDay == "Saturday"){
//     alert("Today is "+d+"\nIt's a fun day")
// }
// else{
//     alert("Today is "+d)
// }

            //Chapter 31-34(Task 5)//

// var m = new Date()
// var d = m.getDate()
// if(d.getDate > 15)
// {
//     alert("Last day of the month")
// }
// else(d.getDate < 14)
// {
//     alert("First Fifteen days of the month")
// }

            //Chapter 31-34(Task 6)//
// var minutes = 1000 * 60;
// var d  = new Date()
// var m = d.getTime();
// var y=Math.round(m/minutes)
// alert("Current Date: "+d+"\nElapsed milisecond since January 1,1970: "+m+"\nElapsed minutes since January 1,1970: "+y)

                //Chapter 31-34(Task 7)//

// var d = new Date()
// var t = (d.getHours()+":"+d.getMinutes()+":"+d.getSeconds())
// var hours = (d.getHours+24-2)%24;
// if(hours == 0){
//     alert("It's Am")
// }
// else if(hours >12){
//     alert("It's Pm")
// }

            //Chapter 31-34(Task 8)//

// var laterdate = new Date(2020, 11, 31, 00, 00, 00, 00);
// alert("Later Date: "+laterdate)

            //Chapter 31-34(Task 9)//

// var date1 = new Date()
// var date2 = new Date("Dec 10, 2015 20:15:10")
// var res = Math.abs(date1 - date2) / 1000;
// var days = Math.floor(res / 86400);
// alert(days+"Day have passed since 1st Ramdan 2015")

            //Chapter 31-34(Task 10)//

// var date1 = new Date()
// var date2 = new Date("Jan 01, 2020 20:15:10")
// var res = Math.abs(date1 - date2) / 1000;
// alert("On refrence date "+date1+"\n"+res+" second have been passed since beginning of 2020")


            //Chapter 31-34(Task 11)//
// var date = new Date();
// var date1 = new Date();
//  date1.setHours(date1.getHours() -1)
// alert("Current date: "+date+"1 hour ago it was"+date1)

            //Chapter 31-34(Task 12)//
// var date = new Date();
// var date1 = new Date();
// date1.setFullYear(date1.getFullYear() - 100)
// alert("Current date: "+date+"100 year back"+date1)

            //Chapter 31-34(Task 13)//
        
// var age = +prompt("please enter your age")
// var date1 = new Date();
// var date = date1.getFullYear()-age
// alert("Your age is: "+age+"\nYour date of year is: "+date)

            //Chapter 31-34(Task 14)//

// var Customename =prompt("Enter Customer name");
// var Month  = prompt("Enter Month");
// var Unit = prompt("Enter number of units")
// var charges = +prompt("Enter charges per unit");
// var latepayment = +prompt("Enter late payment charges")
// var netammount =Unit*charges
// var grossamount = netammount+latepayment

// alert("K=Electric bill"+"\nCustomer Name: "+Customename+"\nMonth: "+Month+"\nNumber of Units: "+Unit+"\nCharges per unit: "+charges+"\n\nNet Amount Payable (within Due Date): "+netammount+"\n Gross Amount Payable (after Due Date): "+grossamount)





            //Chapter 35-38(Task 1)//

// function date(){
//     document.write(new Date());
// }
// date();

            //Chapter 35-38(Task 2)//

// function greet(){
//   var first = prompt("Enter your first name");
//   var last = prompt("Enter last name");
//   var gret = "Hello! " + first+ " " +last;
//   alert(gret);
// }
// greet();

            //Chapter 35-38(Task 3)//

// function add(){
//     var first = +prompt("Enter first Value");
//     var second = +prompt("Enter second Value");
//     var ad = first+second;
//     alert(ad)
//     return ad;
// }
// add();

            //Chapter 35-38(Task 4)//

// function calculator(num1,num2){
//     return num1+num2;
// }
// document.write(calculator(5,5));

            //Chapter 35-38(Task 5)//

// function exp(num1){
//  return num1 ** 2
// }
// document.write(exp(2));

            //Chapter 35-38(Task 6)//

// function factorial(n){
//     return (n != 1) ? n * factorial(n - 1) : 1;
// }
  
//   alert( factorial(4) );

            //Chapter 35-38(Task 7)//

// function counting(){
//     var first = +prompt("Enter first value");
//     var end = +prompt("Enter End value");
//     for(i = first ; i <= end ; i++){
//         alert(i + "<br>")
//     }
// }
// counting();

            //Chapter 35-38(Task 8)//

// function calculateHypotenuse(){
//         alert("Hello! this is a rigth triangle formula please give values for process the formula \n Hypotenuse2 = Base2 + Perpendicular2");
//         var inpur_forbase = +prompt("Enter Base value");
//         var inpur_forperp = +prompt("Enter perp value");
//         var square_base = inpur_forbase ** 2;
//         var square_perp = inpur_forperp ** 2;
//         var hyp_plus = square_base + square_perp;
//         var hyp_square = Math.sqrt(hyp_plus);
//         alert("Hypotenuse = " + hyp_square);
        
//     }
// calculateHypotenuse();

            //Chapter 35-38(Task 9 Part 1)//

// function calculaterectangle(Width , height){
//     return Width * height;
// }
// alert(calculaterectangle(2,3));

            //Chapter 35-38(Task 9 Part 2)//

// function calculaterectangle2(width , height){
//     var pro = width * height;
//     alert(pro);
// } 
// calculaterectangle2(5,5);

            //Chapter 35-38(Task 10)//

// function pelindrom(){
//     var word = prompt("Enter palindrome word");
//     var check = word.split("").reverse().join("");
//     if(word === check){
//         alert(word + " is palindrome word");
//     }else{
//         alert(word + " is not palindrome word");
//     }
// }
// pelindrom();

            //Chapter 35-38(Task 11)//

// function ocuur(){
//     var text = "JSResourceS.com";
// alert("Text: " + text);
// alert("<br>" + "There are " + text.match(/o/gi).length + " occurrence(s) of word 'o' ");
// }
// ocuur();

            //Chapter 35-38(Task 14 Part 1)//

// function calcCircumference(num1 , num2 , num3){
//     alert("Hello! enter value of radius for this formula \n Circumference of circle = 2πr")
//    var num1 = 2;
//    var num2 = 3.14;
//    var num3 = +prompt("Enter radius value");
//    var tot = num1*num2*num3;
//    alert("Circumference of circle " + tot);
// }
// calcCircumference();

            //Chapter 35-38(Task 14 Part 2)//

// function calculateArea(numb1 , numb2){
//     alert("Hello! enter value of radius for this formula \n Area of circle = πr2")
//     var numb1 = 3.14;
//     var radius = +prompt("Enter radius value");
//     var numb2 = radius ** 2;
//     var total = numb1*numb2;
//     alert("Area of circle " +total);
// }
// calculateArea();