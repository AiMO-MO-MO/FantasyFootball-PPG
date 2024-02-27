from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def homepage():
    print('Homepage')

@app.route('/QB')
def qb_index():
    return render_template('QBPointsFlask.html')


@app.route('/RB')
def rb_index():
    return render_template('RBPointsFlask.html')

@app.route('/WR')
def wr_index():
    return render_template('WRPointsFlask.html')

if __name__ == '__main__':
    app.run(debug=True)
