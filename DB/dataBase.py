import mysql.connector
from mysql.connector import errorcode

def connect(userName, password):
  try:
    connector = mysql.connector.connect(user= userName, 
                                    password= password, 
                                    host= '127.0.0.1', 
                                    database= 'todo',
                                    use_pure=True)

  except mysql.connector.Error as err:
    if err.errno == errorcode.ER_ACCESS_DENIED_ERROR:
      print("Something is wrong with your user name or password")
    elif err.errno == errorcode.ER_BAD_DB_ERROR:
      print("Database does not exist")
    else:
      print(err)
  else:
      print("Connected")
      return connector

'''
create cursors, not sure why they should be buffered
I read a little on it but was confused
I am not sure If these should be used for every function but I will use it
that way
'''
myDB = connect('test', 'Test1234')
myCursor1 = myDB.cursor(buffered = True)
myCursor2 = myDB.cursor(buffered = True)

def toggleState(compleated):
#get active tasks
  query = ("SELECT description, listId FROM task WHERE compleated = %s")
  value = (compleated,)
  myCursor1.execute(query,value)

#tasks = myCursor1.fetchall()

for x in myCursor1:
  print(x)


#myDB.close()