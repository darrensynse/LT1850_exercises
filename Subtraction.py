#Subtraction.py
import os
import json

postreqdata = json.loads(open(os.environ['req']).read())

if (postreqdata['num1'] and postreqdata['num2']):
    num1 = postreqdata['num1']
    num2 = postreqdata['num2']
    difference = (num1 - num2)

    message = "The difference between " + str(num1) + " and " + str(num2) + " is " + str(difference)
else:
    message = "Please pass two numbers in the request body"

response = open(os.environ['res'], 'w')
response.write(message)
response.close()
