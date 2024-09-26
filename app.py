from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        principal = request.form.get('principal', type=float)
        rate = request.form.get('rate', type=float)
        time = request.form.get('time', type=float)
        simple_interest = (principal * rate * time) / 100
        return render_template('result.html', principal=principal, rate=rate, time=time, interest=simple_interest)
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)