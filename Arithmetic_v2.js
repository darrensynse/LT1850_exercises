// Arithmetic_v2.js
module.exports = function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    serviceCall = function (n1, n2) {
        var http = require('http');

        data = {
            "num1": n1,
            "num2": n2
        }
        
        var post_req  = null,
            post_data = JSON.stringify(data);

        var post_options = {
            hostname: 'localhost',
            port    : '7071',
            path    : '/api/Subtraction',
            method  : 'POST',
            headers : {
                'Content-Type': 'application/json',
                'Cache-Control': 'no-cache',
                'Content-Length': post_data.length
            }
        };
                
        post_req = http.request(post_options, function (res) {
            context.log('STATUS: ' + res.statusCode);
            context.log('HEADERS: ' + JSON.stringify(res.headers));
            res.setEncoding('utf8');
            res.on('data', function (chunk) {
                //context.log('Response: ', chunk);
                serviceResponse = chunk;
                context.log('Response: ', serviceResponse);
            });
        });

        post_req.on('error', function(e) {
            context.log('problem with request: ' + e.message);
        });

        post_req.write(post_data);
        post_req.end(); 
        return serviceResponse; 
    };

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
        } else if (operation == 'subtract') {
            response = serviceCall(num1, num2);
            context.res = {
                body: response
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