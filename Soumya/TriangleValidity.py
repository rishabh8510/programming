a = int(input("Enter length of 1st side: "))
b = int(input("Enter length of 2nd side: "))
c = int(input("Enter length of 3rd side: "))
if a!=0 and b!=0 and c!=0:
    if a+b>c and a+c>b and b+c>a:
        print("It is a valid triangle")
    else:
        print("It is not a valid triangle")
else:
    print("It is not a valid triangle")