n = int(input("Enter Number of Subjects: "))
s=0
for i in range(1,n+1):
    m=int(input("Enter marks of subject:"))
    s+=m
sum=s/n
if sum>=91 and sum<=100:
    print("Grade - A1")
elif sum>=81 and sum<91:
    print("Grade - A2")
elif sum>=71 and sum<=81:
    print("Grade - B1")
elif sum>=61 and sum<71:
    print("Grade - B2")
elif sum>=51 and sum<61:
    print("Grade - C")
elif sum>=41 and sum<51:
    print("Grade - D")
elif sum>=31 and sum<41:
    print("Grade - E")
else:
    print("Grade - F")