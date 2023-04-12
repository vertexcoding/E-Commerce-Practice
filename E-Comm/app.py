from flask import Flask, render_template, send_from_directory, url_for

app = Flask(__name__, static_url_path='/static')

@app.route('/')
def main():
    return render_template('main.html')

@app.route('/checkout')
def checkout():
    return render_template('checkout.html')

@app.route('/rose-handbag')
def roseHandbag():
    return render_template('rose-handbag.html')


# JS & CSS
@app.route('/mainScript.js')
def mainScript():
    return send_from_directory('static', 'js/mainScript.js')

@app.route('/mainStyle.css')
def mainStyle():
    return send_from_directory('static', 'css/mainStyle.css')



    


if __name__ == '__main__':
    app.run(debug=True)