#!usr/bin/python
import re,urllib

file=open('mbox.txt')
num1=0
for line in file:
	#if not re.search('^From:.*an@umich.edu.*',line):continue
	if not line.startswith('From: '):continue
	if 'umich.edu' in line:num1+=1

print num1
