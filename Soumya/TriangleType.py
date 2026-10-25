a = int(input("Enter length of 1st side: "))
b = int(input("Enter length of 2nd side: "))
c = int(input("Enter length of 3rd side: "))
if a!=0 and b!=0 and c!=0:
    if a==b==c:
        print("Equilateral Triangle")
    elif a==b!=c or a==c!=b or b==c!=a:
        print("Isosceles Triangle")
    elif a!=b!=c:
        print("Scalene Triangle")
else:
    print("It is not a valid triangle")