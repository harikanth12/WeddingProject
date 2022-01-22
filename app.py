from flask import Flask,render_template
import os

myapp = Flask(__name__)
PEOPLE_FOLDER = os.path.join('static', 'images')
myapp.config['UPLOAD_FOLDER'] = PEOPLE_FOLDER

@myapp.route("/")
def home():
    full_filename = os.path.join(myapp.config['UPLOAD_FOLDER'], '19250.jpg')
    scroll_image = os.path.join(myapp.config['UPLOAD_FOLDER'], '0R4A0096.jpg')
    return render_template('index.html',user_image = full_filename,scroll_image=scroll_image)


if __name__ == "__main__":
    port = os.getenv('PORT',5000)
    myapp.run(host='0.0.0.0',port=port,debug=True)