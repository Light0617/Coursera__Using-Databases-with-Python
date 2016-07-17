#!usr/bin/python


import xml.etree.ElementTree as ET

def lookup(d,key):
	found=False
	for child in d:
		print 'tag=',child.tag
		print 'text=',child.text
		if found: return child.text
		if child.tag=='key' and child.text==key:
			found=True
	return None

fname='Library.xml'
stuff=ET.parse(fname)
all=stuff.findall('dict/dict/dict')
for entry in all:
	#print 'entry=',entry
	if (lookup(entry,'Track ID')is None):continue
	name=lookup(entry,'Name')
	print 'name=',name





