import mysql.connector
from mysql.connector import errorcode

#create class for connection object with various function 
class Connection:
  def __del__(self):
    self.myDB.close()

  def __init__(self, userName, password):
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
        self.myDB = connector

        '''
        create cursors, not sure why they should be buffered
        I read a little on it but was confused
        I am not sure If these should be used for every function but I will use it
        that way
        '''
        self.myCursor1 = self.myDB.cursor(buffered = True)
        self.myCursor2 = self.myDB.cursor(buffered = True)

  def toggleState(self, compleated):
  #get active tasks
    query = ("SELECT description, listId FROM task WHERE compleated = %s")
    value = (compleated,)
    self.myCursor1.execute(query,value)
    self.printDB(self.myCursor1)

  def printDB(cursor):
    for x in cursor:
      print(x)


#myDB.close()
#tasks = myCursor1.fetchall()