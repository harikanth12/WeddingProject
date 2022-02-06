from flask import Flask,render_template
import os

myapp = Flask(__name__)
PEOPLE_FOLDER = os.path.join('static', 'images')
myapp.config['UPLOAD_FOLDER'] = PEOPLE_FOLDER
audio_folder = os.path.join('static','audio')
myapp.config['audio_folder'] = audio_folder

@myapp.route("/")
def home():
    full_filename = os.path.join(myapp.config['UPLOAD_FOLDER'], '19250.jpg')
    scroll_image = os.path.join(myapp.config['UPLOAD_FOLDER'], 'Banner.jpeg')
    bottom_left_img = os.path.join(myapp.config['UPLOAD_FOLDER'], 'Sruthi.png')
    bottom_right_img = os.path.join(myapp.config['UPLOAD_FOLDER'], 'Hari.png')
    audio_link = os.path.join(myapp.config['audio_folder'], 'invitation_audio.mp3')
    return render_template('index.html',user_image = full_filename,scroll_image=scroll_image,bottom_left_img=bottom_left_img,
                           bottom_right_img=bottom_right_img,audio_link=audio_link)



if __name__ == "__main__":
    port = os.getenv('PORT',5000)
    myapp.run(host='0.0.0.0',port=port,debug=True)