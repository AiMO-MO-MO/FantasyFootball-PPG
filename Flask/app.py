from flask import Flask, render_template, send_from_directory, jsonify

app = Flask(__name__)

@app.route('/')
def homepage():
    return render_template('Home.html')



@app.route('/QB')
def qb_index():
    return render_template('QBPointsFlask.html')


@app.route('/RB')
def rb_index():
    return render_template('RBPointsFlask.html')

@app.route('/WR')
def wr_index():
    return render_template('WRPointsFlask.html')

@app.route('/QB5.json')
def get_QB5_data():
    return send_from_directory('static', 'QB5.json')

@app.route('/QBPointData.json')
def get_QBPointData():
    return send_from_directory('static', 'QBPointData.json')

@app.route('/QBYear.json')
def get_QBYear_data():
    return send_from_directory('static', 'QBYear.json')

@app.route('/RB5.json')
def get_RB5_data():
    return send_from_directory('static', 'RB5.json')

@app.route('/RBPointData.json')
def get_RBPointData():
    return send_from_directory('static', 'RBPointData.json')

@app.route('/RBYear.json')
def get_RBYear_data():
    return send_from_directory('static', 'RBYear.json')

@app.route('/WR5.json')
def get_WR5_data():
    return send_from_directory('static', 'WR5.json')

@app.route('/WRPointData.json')
def get_WRPointData():
    return send_from_directory('static', 'WRPointData.json')

@app.route('/WRYear.json')
def get_WRYear_data():
    return send_from_directory('static', 'WRYear.json')



if __name__ == '__main__':
    app.run(debug=True)


