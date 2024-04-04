string = input()

n = len(string)

cnt1, cnt2 = 0, 0

for i in range(n):
   vowel = False
   s = ''
   
   if string[i] == 'A' or string[i] == 'E' or string[i] == 'O' or string[i] == 'I' or string[i] == 'U':
      vowel = True
   
   for j in range(i, n):
      s += string[j]
      
      if vowel:
         cnt1 += 1
      else:
         cnt2 += 1
         
if cnt1 > cnt2:
   print('Kevin', cnt1)
else:
   print('Stuart', cnt2)
      
      
      