#!usr/bin/python

class animal:
	age=0
	name=''
	def __init__(self,z='cat'):
		self.name=z
		print self.name,'is an animal'
	def part(self):
		self.age=self.age+1
		print self.name,"'s age=",self.age
	def __del__(self):
		print self.name,'is leaving'

class dog(animal):
	def bark(self):
		self.age+=2
		self.part()
		print self.name,'is barking!!!'
		
dog1=dog('Sam')
dog1.part()
dog1.bark()
dog1.part()
print dog1.age

cat=animal()
cat.part()
