n = int(input("Enter Number of Subjects: "))
s=0
for i in range(1,n+1):
    m=int(input("Enter marks of subject:"))
    s+=m
sum=s/n
if sum>33:
    print("Pass")
else:
    print("Fail")