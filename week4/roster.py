#!usr/bin/python

import json
import sqlite3

conn=sqlite3.connect('rosterdb.sqlite')
cur=conn.cursor()

cur.executescript('''
drop table if exists user;
drop table if exists member;
drop table if exists course;

create table user(
	id integer not null primary key autoincrement unique,
	name text unique
);

create table course(
	id integer not null primary key autoincrement unique,
	title text unique
);

create table member(
	user_id integer,
	course_id integer,
	role integer,
	primary key(user_id,course_id)
);
''')

fname='roster_data.json'
str_data=open(fname).read()
jdata=json.loads(str_data)
for item in jdata:
	name=item[0]
	title=item[1]
	role=item[2]
	print name,title	
	cur.execute('''insert or ignore into user(name) 
			values(?)''',(name,))
	cur.execute('select id from user where name=?',(name,))
	user_id=cur.fetchone()[0]
	print 'uid=',user_id	
	cur.execute('''insert or ignore into course (title)
			values(?)''',(title,))
	cur.execute('select id from course where title=?',(title,))
	course_id=cur.fetchone()[0]
	print 'cid=',course_id	
	
	cur.execute('''insert or replace into member 
			(user_id,course_id,role) values(?,?,?)''',
			(user_id,course_id,role))
	
conn.commit()
cur.execute('''SELECT hex(User.name || Course.title || Member.role ) AS X FROM 
    User JOIN Member JOIN Course 
    ON User.id = Member.user_id AND Member.course_id = Course.id
    ORDER BY X''')
all1=cur.fetchall()
i=0
for item in all1:
	i+=1
	if i>30:break
	print item














