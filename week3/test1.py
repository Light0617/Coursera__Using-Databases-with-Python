#!usr/bin/python

import sqlite3 
conn=sqlite3.connect('trackdb.sqlite')
cur=conn.cursor()


cur.execute('''SELECT t1.name,t2.title,t3.title
    FROM Artist t1 join Album t2 join Track t3 on t1.id=t2.artist_id and 
    t2.id=t3.album_id
    where t1.name=?
    ORDER BY t3.title  ''',('AC/DC',))
results=cur.fetchall()
for result in results:
        print 'artist=',result[0]
        print 'album=',result[1]
        print 'track=',result[2]



