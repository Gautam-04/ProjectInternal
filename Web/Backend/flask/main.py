from dotenv import load_dotenv
from flask import Flask, request
from flask_cors import CORS, cross_origin
import os, shutil, base64
from helper import *

# CONSTANTS
PATH_FOR_IMAGES = "images/"

load_dotenv()

app = Flask(__name__)
cors = CORS(app)
# app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/', methods=['POST'])
def landing():
    imageList = os.listdir("images/")
    print(imageList)
    return "AapdaMitra Report Generation"



@app.route('/generate-report', methods=['POST'])
@cross_origin()
def generateReport():
    if request.method == 'POST':
        # print(request.json)
        data = request.json
        print(f"New request received! {data}")
        # Initialize new Model
        model = DisasterAnalysis(data)
        
        # Get report generated
        report = model.generateReportFromData()
        print(report)
        with open('report.md', "w") as f:
            f.write(report)

        # Get graph statements
        graphPhrases = model.generateGraphPhrases()
        print(graphPhrases)

        # Clear Old Images

        shutil.rmtree(PATH_FOR_IMAGES)
        os.mkdir(PATH_FOR_IMAGES)

        # Generate graph code
        graphCode = model.generateGraphCodePython(graphPhrases, PATH_FOR_IMAGES) 

        print(graphCode)
        # Execute graph code
        executeCodeFromArray(graphCode)

        # Generate response 
        print(report)
        response = {}
        with open("report.md", 'r') as f:
            response["report"] = f.read()

        imageList = os.listdir("images/")
        print(imageList)
        response["graphs"] = []
        for image in imageList:
            with open(f"images/{image}", 'rb') as f:
                response["graphs"].append(json.dumps(base64.b64encode(f.read()).decode('utf-8')))

        print(response)
        # Return response
        return response


        return "Check Console"
    else:
        return "Hit this endpoint with a POST request"
    



if __name__ == "__main__":
    app.run(debug=True)

