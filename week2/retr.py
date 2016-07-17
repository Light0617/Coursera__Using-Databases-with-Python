#!usr/bin/python

import re,urllib

url='http://www.pythonlearn.com/code/mbox.txt'
context=urllib.urlopen(url)

file1=open('mbox.txt','r+');
for line in context:
	file1.write(line)

file1.close()



