// Arithmetic_v1.js
module.exports = function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    if (req.body.num1 && req.body.num2 && req.body.operation) {
        
        num1 = req.body.num1;
        num2 = req.body.num2;
        operation = req.body.operation;
        
        if (operation == 'multiply') {
            product = num1 * num2;
            context.res = {
                // status: 200, /* Defaults to 200 */
                body: "The product of " + num1 + " and " + num2 + " is " + product
            };
        } else if (operation == 'divide') {
            quotient = num1 / num2;
            context.res = {
                // status: 200, /* Defaults to 200 */
                body: "The quotient of " + num1 + " and " + num2 + " is " + quotient
            };
        } else if (operation == 'add') {
            sum = num1 + num2;
            context.res = {
                // status: 200, /* Defaults to 200 */
                body: "The sum of " + num1 + " and " + num2 + " is " + sum
            };
        };
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass at two numbers and the operation type in the request body"
        };
    }
    context.done();
};

// SAMPLE REQUEST BODY
// {
//     "num1": 1,
//     "num2": 22,
//     "operation": "multiply"
// }