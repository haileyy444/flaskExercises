from flask import Flask, request
from operations import add, sub, mult, div

app = Flask(__name__)

operators = {
    "add": add,
    "sub": sub,
    "mult": mult,
    "div": div
    }

@app.route("/math/<function>")
def do_math(function):
    a = int(request.args.get("a"))
    b = int(request.args.get("b"))
    sum = operators[function](a,b)

    return str(sum)



@app.route("/add")
def do_add():
    a = int(request.args.get("a"))
    b = int(request.args.get("b"))
    sum = add(a,b)

    return str(sum)

@app.route("/sub")
def do_sub():
    a = int(request.args.get("a"))
    b = int(request.args.get("b"))
    sum = sub(a,b)

    return str(sum)


@app.route("/mult")
def do_mult():
    a = int(request.args.get("a"))
    b = int(request.args.get("b"))
    sum = mult(a,b)

    return str(sum)

@app.route("/div")
def do_div():
    a = int(request.args.get("a"))
    b = int(request.args.get("b"))
    sum = div(a,b)

    return str(sum)


