from flask import Flask,render_template
import os

myapp = Flask(__name__)

@myapp.route("/")
def home():
    return render_template('index.html')


if __name__ == "__main__":
    port = os.getenv('PORT',5000)
    myapp.run(host='0.0.0.0',port=port,debug=True)