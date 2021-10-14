from tkinter import *
from tkinter import ttk
import DB.dataBase as db

#create an isnstance of the database connection1
testDB = db.Connection("test", "Test1234")


def toggleview():
    #toggleStatefunction
    testDB.toggleState()
    



#creating root window
root = Tk()
root.title("DB Interaction")

#creating the main frame of the app setting 
mainFrame = ttk.Frame(root, padding= " 3 3 12 12")
mainFrame.grid(column=0, row=0, sticky=(N, W, E, S))

# tells tk to expand when the window is resized 
root.columnconfigure(0, weight=1)
root.rowconfigure(0, weight=1)

#create the var and defined type, then created and placed the entry on
#the grid of the mainFrame
task = BooleanVar()
taskEntry = ttk.Entry(mainFrame, width = 30, textvariable = task)
taskEntry.grid(column = 1, row = 1, sticky = (W, E))

# add label to frame
ttk.Label(mainFrame, text = "Enter task").grid(column = 2, row = 1, sticky = (N, E))

# add entry button
ttk.Button(mainFrame, width = 20, text = "Enter", command = toggleview).grid(column = 1, row = 2, sticky = (N, W))


# adds padding to all children of the mainFrame
for child in mainFrame.winfo_children(): 
    child.grid_configure(padx=5, pady=5)

#start the program
root.mainloop()