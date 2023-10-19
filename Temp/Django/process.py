import pandas as pd
import sqlite3

# # Read csv file.
user_log = pd.read_csv("user_log.csv").dropna()


# # Connect to (create) database.
database = "db.sqlite3"
conn = sqlite3.connect(database)

user_log_dtype = {
    "username" : "TextField",
    "send_address" : "TextField",
    "prompt" : "TextField",
    "result" : "TextField",
    "num" : "IntegerField"
}



user_log.to_sql(name='users_user_log', con=conn, if_exists='replace', dtype = user_log_dtype,index=True, index_label="id")

conn.close()