
        /*1. Write a function named "convertFahrToCelsius" that takes a single parameter and converts it to celsius.
        console.log("Fahr to Celsius Result");*/

        function convertFahrToCelsius(parameter){
            let errorMessage = JSON.stringify(parameter);
            const floatedparameter = parseFloat(parameter);
            if(isNaN(floatedparameter)){   
                console.log(`${errorMessage} is not a valid number but a/an ${typeof(parameter)}`);
            } else{
                var faherient = parameter;
                var FahrToCelsius = (faherient - 32) * 5 / 9 ;

               console.log(FahrToCelsius.toFixed(4));
            } 

        }
        convertFahrToCelsius(50);
        convertFahrToCelsius({temp: 0});
        



                

        /*2.Write a function named "checkYuGiOh" that takes a number, n, as an argument, creates an array of 
        numbers from 1 to n and replaces multiples of 2, 3, and 5 with "yu", "gi" and "oh", 
        then returns the resulting array.*/

        console.log("checkYuGiOh Result");

        function checkYuGiOh(n) {
            let strArr = [];
            const floatValue = parseFloat(n)
            if(isNaN(floatValue)){   
               return `invalid parameter: ${n}`;
            } 
            else { 
                for (let i = 1; i <= n; i++) {
                    if (i % 2 == 0 && i % 3 == 0 && i % 5 == 0) {
                        strArr.push("===yu-gi-oh");

                    } else if (i % 3 == 0 && i % 5 == 0) {
                        strArr.push("===gi-oh");

                    } else if (i % 2 == 0 && i % 3 == 0) {
                        strArr.push("===yu-gi");

                    } else if (i % 2 == 0 && i % 5 == 0) {
                        strArr.push("===yu-oh");

                    } else if (i % 2 == 0) {
                        strArr.push("yu");

                    } else if (i % 3 == 0) {
                        strArr.push("gi");

                    } else if (i % 5 == 0) {
                        strArr.push("oh");

                    } else {
                        strArr.push(i);
                    }
                
                }
            }        return strArr;
                                
        }
        console.log(checkYuGiOh(30)); 
        console.log(checkYuGiOh("10"));
        console.log(checkYuGiOh("fizzbuzz is meh"));

      

    
