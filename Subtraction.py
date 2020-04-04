#Subtraction.py
def main(request):

    num1 = None
    num2 = None

    headers = {
        'Access-Control-Allow-Origin': '*'
    }
    
    request_json = request.get_json()

    if 'num1' in request_json: 
        num1 = request_json['num1']
    else:
        return ('Invalid request', 500, headers)
    
    if 'num2' in request_json: 
        num2 = request_json['num2']
    else:
        return ('Invalid request', 500, headers)
    
    try:
        difference = (num1 - num2)
        message = "The difference between " + str(num1) + " and " + str(num2) + " is " + str(difference)
        return (message, 200, headers)
    except:
        return ('Unknown error occured', 500, headers)


# Code below is a Hello World! example provided by the Google cloud interface
#
# def hello_world(request):
#     """Responds to any HTTP request.
#     Args:
#         request (flask.Request): HTTP request object.
#     Returns:
#         The response text or any set of values that can be turned into a
#         Response object using
#         `make_response <http://flask.pocoo.org/docs/1.0/api/#flask.Flask.make_response>`.
#     """
#     request_json = request.get_json()
#     if request.args and 'message' in request.args:
#         return request.args.get('message')
#     elif request_json and 'message' in request_json:
#         return request_json['message']
#     else:
#         return f'Hello World!'