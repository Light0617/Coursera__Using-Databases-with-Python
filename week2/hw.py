#!usr/bin/python
import sqlite3,re

conn=sqlite3.connect('emaildb.sqlite')
cur=conn.cursor()

cur.execute('''
DROP TABLE IF EXISTS Counts''')

cur.execute('''
create table Counts (org text,count integer)''')

fname='mbox.txt'
if (len(fname)<1): fname='mbox.txt'
fh=open(fname)
for line in fh:
	if not re.search('^From:',line):continue
	items=line.split()
	org=re.findall('@(.+)',items[1])[0]
	cur.execute('select count from Counts where org=?',(org,))
	row=cur.fetchone()
	if row is None:
		cur.execute('''insert into Counts (org,count) values (?,1)''',(org,))
	else:
		cur.execute('update Counts set count=count+1 where org=?',(org,))
conn.commit()
sqlstr='select org,count from Counts order by count desc'

print 'Counts:'
for row in cur.execute(sqlstr):
	print str(row[0]),row[1]
cur.close()





