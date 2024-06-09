from flask import Flask, request, jsonify
from bson.json_util import dumps
from bson.objectid import ObjectId
import db
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/courses", methods=['GET'])
def getCourses():
    con = db.get_connection()
    DBC = con.DB
    try:
        courses = DBC.Courses
        response = app.response_class(
            response=dumps(
                courses.find()
            ),
            status=200,
            mimetype='application/json'
        )
        return response
    finally:
        con.close()
        print("Connection closed")

@app.route("/courses", methods=['POST'])
def createCourse():
    data = request.get_json()
    con = db.get_connection()
    DBC = con.DB 
    try:
        courses = DBC.Courses
        courses.insert_one(data)
        return jsonify({"message":"OK"})
    finally:
        con.close()
        print("Connection closed")
        
@app.route("/courses/<id>", methods=['GET'])
def getCourse(id):
    con = db.get_connection()
    DBC = con.DB
    try:
        courses = DBC.Courses
        print(courses)
        response = app.response_class(
            response=dumps(
                courses.find_one({"id": id})
            ),
            status=200,
            mimetype='application/json'
        )
        return response
    finally:
        con.close()
        print("Connection closed")

@app.route("/courses/<code>", methods=['PUT'])
def update(code):
    data = request.get_json()
    con = db.get_connection()
    DBC = con.DB
    try:
        courses = DBC.Courses
        courses.replace_one(
            {'id': code},
            data, True
        )
        return jsonify({"message":f"Updated id: {code}"})
    finally:
        con.close()
        print("Connection closed")

@app.route("/courses/<code>", methods=['DELETE'])
def delete(code):
    con = db.get_connection()
    DBC = con.DB
    try:
        courses = DBC.Courses
        courses.delete_one({'id': code})
        return jsonify({"message":f"Deleted id: {code}"})
    finally:
        con.close()
        print("Connection closed")
    
@app.route("/validateStudent", methods = ['GET'])
def findUser():
    data = request.json
    con = db.get_connection()
    DBC = con.DB
    try:
        students = DBC.Students
        student = students.find_one({'Username': data['username']})
        
        if not student:
            return {"status": "User not found",
                "studentName": None}
    
        if data['password'] != student['Password']:
            return {"status": "Invalid login",
                "studentName": None}
    
        return {"status": "Valid login",
                "studentName": student['FirstName']}

    finally:
        con.close()
        print("Connection closed")

@app.route("/student/<username>", methods=['PUT'])
def update_student(username):
    data = request.get_json()
    con = db.get_connection()
    DBC = con.DB
    try:
        students = DBC.Students
        students.replace_one(
            {'Username': username},
            data, True
        )
        return jsonify({"message":f"Updated id: {username}"})
    finally:
        con.close()
        print("Connection closed")

@app.route("/student/<username>", methods=['DELETE'])
def delete_student(username):
    con = db.get_connection()
    DBC = con.DB
    try:
        students = DBC.Students
        students.delete_one({'Username': username})
        return jsonify({"message":f"Deleted id: {username}"})
    finally:
        con.close()
        print("Connection closed")

@app.route("/postStudent", methods = ['POST'])
def signup():
    data = request.json
    con = db.get_connection()
    DBC = con.DB
    
    username = data.get('username')
    password = data.get('password')
    name = data.get('name')
    lastName = data.get('lastName')
    idNumber = data.get('idNumber')
    email = data.get('email')

    try:
        students = DBC.Students
        # Check if user already exists
        existing_user = students.find_one({'Username': username})
        
        if existing_user:
            return jsonify({"status": "User already exists"})

        # Insert new user
        new_user = {
            'Username': username,
            'Password': password,
            'FirstName': name,
            'LastName': lastName,
            'IDNumber': idNumber,
            'Email': email
        }
        students.insert_one(new_user)
        return jsonify({"status": "Signup successful", "name": name})

    except Exception as e:
        return jsonify({"status": "An error occurred", "message": str(e)})

    finally:
        con.close()