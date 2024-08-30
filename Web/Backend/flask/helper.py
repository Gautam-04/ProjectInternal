import google.generativeai as genai
import os
import json
import matplotlib.pyplot as plt
import numpy as np

def load_data(pathToData):
    with open(pathToData, "r") as f:
        return json.loads(f.read())
    
def executeCodeFromArray(codeArray: list[str]):
    for graph in codeArray:
        graph = graph.splitlines()
        print(graph, sep="\n")
        for line in graph:
            try:
                print(line)
                eval(line)
            except Exception as e:
                print(e)
        plt.clf()
    
def imageToB64(image):
    pass


class DisasterAnalysis:
    def __init__(self, data):
        self.data = data

        genai.configure(api_key=os.environ['GEMINI_API_KEY'])
        self.model = genai.GenerativeModel('gemini-1.5-flash')
        
        self.chat = self.model.start_chat()

    def generateReportFromData(self):
        return (self.chat.send_message(f'''The data provided below is a JSON sturucted data of a disaster (check disaster type in data). Read the data, analyse it, and generate a highly detailed report of about 2 pages about it in the context of disaster management. {self.data}''')).text
    
    def generateGraphPhrases(self):
        return (self.chat.send_message('''Now, generate 5 phrases from which graphs that support the data from the report.
                                                    Generate these phrases which would effectively assist the report.
                                                    Make sure each graph phrase will have atleast 2 labels or data points in.
                                                    Exclude any phrases containing only one label in total or a label which would render 0 on the graph axis.
                                                    For example, '20% of the affected were injures, and 5% died'.
                                                    Do not give graph ideas but phrases for graphs.
                                                    The data needed for the graphs MUST be included in those phrases.
                                                    Give nothing but the graph statements.
                                                    No formatting and new line for each statement.''')).text

    def generateGraphCodePython(self, graphPhrases, pathForSaving):
        graphCode = self.chat.send_message(f''' Below are statements to generate graphs from:
                                            {graphPhrases}
                                            Carefully ready each statement and decide what graph to use (line, pie, bar, etc).
                                            Finally, generate a JSON array consisting of the lines of code to generate those graphs seperately using python and matplotlib that the eval function of python.
                                            Add a line for saving to '{pathForSaving}' the generated graph at the end instead of show.
                                            Do not declare any variables as they raise an error in eval(), directly use the corresponding data in the function parameters.
                                            Exclude any statements that you think will render an empty graph.
                                            Final output should only be a json array and no stray text or explanations.''').text
        print(graphCode)
        return json.loads(graphCode[8:len(graphCode) - 3])