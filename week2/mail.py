#!usr/bin/python
import sqlite3

conn=sqlite3.connect('emialdb.sqlite')
cur=conn.cursor()

cur.execute('''
DROP TABLE IF EXISTS Counts''')

cur.execute('''
create table counts(emial TEXT, count INTEGER)''')

fname=raw_input('enter file name')
if(len(fname)<1):fname='mbox-short.txt'
fh=open(fname)
for line in fh:
	if not line.startswitch('From:'):continue
	prieces=line.split()
	email=pieces[1]
	cur.execute('update counts from counts from counts where email=?',(email,))
	try:
		count=cur.fetchone()[0]
		cur.execute('update counts set count=count+1 where email=?',(email,))
	except:
		cur.execute('''insert into counts(emial,count) values (?,1)''',(email,))
	conn.commit()
 
sqlstr='select email,count from count order by count desc limit 10'

for row in cur.execute(sqlstr):
	print str(row[0]),row[1]

cur.close()


