from flask import Flask,render_template

myapp = Flask(__name__)

@myapp.route("/")
def home():
    return render_template('index.html')


if __name__ == "__main__":
    myapp.run(host='0.0.0.0',port=5000,debug=True)