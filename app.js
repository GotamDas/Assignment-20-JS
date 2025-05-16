        // Chap 4 (Variables names legal and Illegal)
        var productCost = 3.45;
        alert("1. corrected statement:\nproductCost= " + productCost);
        var nameofBand = "Coldplay";
        alert("2. camelCase Example:\nnameofBand = "+ nameofBand);
        var age = 22;
        alert("3. Single statement with number:\nage = " + age);
        var GotamDas = "Das";
        alert("4. Combination of first and last name in camleCase:\nGotamDas = "+ GotamDas);
        var myName = "john";
        var user123 =123;
        var $doller = 50;
        var _underscore = "yes";
        var firstName = "Hello_Alexa";
        alert ("5. legal Varibales:\nmyName = "+ myName +
            "\nuser123 = " + user123 +
            "\n$doller = " + $doller +
            "\n_udersocre = " + _underscore +
            "\nfirstName = " +firstName);
        alert("5. Illegal Variables (example, do not use):\n123user\nuser name\nmy-name\nvar")
        
        // Chap 5 (Math Expression I)
        // Ques1 
        // Name: Modules
        // Symbol: %
        // Ques2
        var num = 20 % 6;
        alert("The value of num is: " + num);
        // Ques3
        var largeNum = 1000 * 2000;
        alert ("largeNum = " +largeNum);
        // Ques4
        var a = 50;
        var b = 30;
        var result = a - b;
        alert("Result of a - b = " + result);
        // Ques5
        var remainder = 25 % 4;
        alert("Remainder of 25 % 4 = " + remainder);
        // Ques6
        alert("Multiplication of 8 * 7 = " + (8 * 7));

        // Chap 6 (Math Expression II)
        // ques1
        var x = 5;
        x++;
        alert("After increamenting, x = " + x); // Output: 6
        // ques2
        var x = 100;
        x--;
        alert("after decrementing, = " + x); // Output: 99
        // Ques3
        var x = 50;
        var y = x++;
        alert("Value of y is: " + y); // Output: 50
        // Ques4
        var y = 50;
        var z = --y;
        alert("Value of z is: " + z); // Output: 49
        // Ques5
        var num = 10;
        var newNum = num--;
        alert("Orignal num assigned to newNum:" + newNum + ", Now num is: " + num); // Output: 9
        // Ques6
        var a = 5;
        var b = a++;
        alert("Original a assigned to b:" + b + ", Now a is: " + a); // Output : 6
        // Ques7
        var value = 15;
        value++;
        alert("New value is: "+ value); // Output: 16
        // Chap 7 (Math Expressions III)
        // Ques1
        var calculatedNum = 2 + (2 * 6);
        alert("Value of calculatedNum:" + calculatedNum); // Output: 14
        // Ques2
        var calculatedNum = (2 + 2) * 6;
        alert("Value of calculatedNum:" + calculatedNum); // Output: 24
        // Ques3
        var calculatedNum = (2 + 2) * (4 + 2);
        alert("Value of calculatedNum: " + calculatedNum); // Output: 24
        // Ques4
        var calculatedNum = ((2 + 2) * 4) + 2;
        alert("Value of calculatedNum: " + calculatedNum);  // Output: 18
        // Ques5
        var cost = 2 + (2 * 4) + 10;
        alert("Cost is: "+ cost); // OutPut: cost is 20;
        var cost = (2 + 2) * (4 + 10);
        alert("Cost is: "+ cost); // Output: cost is 56
        // Ques6
        var units = 2 +(2 * 4) + 10;
        alert("Units is: " + units); // Output: 20
        // Ques7
        var pressure = (4 / 2) * 4;
        alert("Pressure is: " + pressure); // Output: 8
        var pressure = 4 / (2 * 4);
        alert("Pressure is: " + pressure); // Output: 0.5
        // Chap 8 (Concatenating Text Strings)
        // Ques1
        var num = "2" + "2";
        alert('"' + num + '"'); // OutPut: "22"
        // Ques2
        var message = "Hello," + "Dolly";
        alert('"' + message + '"'); // Output: "hello,Dolly"
        // Ques3
        alert("33" + 3);
        // Ques4
        alert("Pakistan" + "Zindabad"); // Output Pakistan Zindabad
        // Ques5
        var myVar = "Number is " + 7;
        alert(myVar); // 7
        // Ques6
        var part1 = "Hello ";
        var part2 = "World ";
        var combined = part1 + part2;
        alert(combined); // Helloworld

        // Chap 9 (Prompts)
        // Ques1
        var firstName = prompt("Enter first name");
        alert("First name is:" + firstName); 
        // Ques2
        var country = prompt("Country", "China");
        alert("Country is:" + country);
        // Ques3
        var yourName = prompt("Enter Your Name");
        alert ("Your name is:" + yourName);
        // Ques4
        var city = prompt("Enter your city name," , "Karachi");
        alert("City is: "+ city);
        // Ques5
        var msg = "Enter your favorite color";
        var def = "Blue";
        var userColor = prompt(msg, def);
        alert("Your color is: " + userColor);
        // Ques6
        var response = prompt("ENter your lucky number", "2")
        alert("You entered:" + response);
        // Chap10
        // Ques1
        var city = "Karachi"
        if(city === "Karachi") {
            alert("The city of lights");
        }
        // Ques2
        var x = 5;
        var y = 5;
        if (x === y) {
            var z = prompt("ENter the value of z?");
            var newVar = z;
            alert("You entered: " + newVar);
        }
        // Ques3
        var Zipcode = prompt("ENter your ZipCode");
        if(Zipcode === "75500"){
            alert("Karachi");
        } else {
            alert("Please write correct city");
        }
        // Ques4
        var num = 10;
        if(num === 10) {
            num = 1;
            alert("New value of num is: " + num);
        }
        // Chap 11 (Comparsion Operators)
        // Ques1
        var x = 5;
        var y = 10;
        if(x != y) {
            alert("Variables are not equal");
        }
        // Ques2
        var x = 15;
        var y = 10;
        if ( x >= y) {
            alert("x is greater than or equal to y");
        }
        // Ques3 
        var testNum = 5;
        if(testNum != 10) {
            testNum = 10;
            alert("testNum is now " + testNum);
        }
        // Ques4
        if(8 != 5) {
            alert("Congratulations! The condition is true.")
        }
        // Ques5
        var userName = prompt("Enter your first Name");
        if (userName != "John"){
            alert("No Match")
        }


