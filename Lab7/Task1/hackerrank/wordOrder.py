n = int(input())

d = dict()

for i in range(n):
   s = input()
   
   if s in d:
      d[s] += 1
   else:
      d[s] = 1
      
print(len(d), end='\n')

for val in d.values():
   print(val, end = ' ')
   
   