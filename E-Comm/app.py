from flask import Flask, render_template, send_from_directory, url_for

app = Flask(__name__, static_url_path='/static')

@app.route('/')
def main():
    return render_template('main.html')

@app.route('/handbags')
def handbags():
    return render_template('handbags.html')

@app.route('/checkout')
def checkout():
    return render_template('checkout.html')

@app.route('/payment')
def payment():
    return render_template('payment.html')

@app.route('/signIn')
def signIn():
    return render_template('signIn.html')

@app.route('/createAccount')
def createAccount():
    return render_template('createAccount.html')


# Products
@app.route('/rose-handbag')
def roseHandbag():
    return render_template('rose-handbag.html')

@app.route('/purse')
def purse():
    return render_template('purse.html')

@app.route('/handbag2')
def handbag2():
    return render_template('handbag2.html')

@app.route('/leatherJacket')
def leatherJacket():
    return render_template('leatherJacket.html')


# JS & CSS
@app.route('/mainScript.js')
def mainScript():
    return send_from_directory('static', 'js/mainScript.js')

@app.route('/mainStyle.css')
def mainStyle():
    return send_from_directory('static', 'css/mainStyle.css')



    


if __name__ == '__main__':
    app.run(debug=True)