a = int(input("Enter age: "))
if a<0:
    print("Enter valid age")
elif a>=0 and a<1:
    print("Infant")
elif a>=1 and a<13:
    print("Child")
elif a>=13 and a<20:
    print("Teenager")
elif a>=20 and a<60:
    print("Adult")
else:
    print("Senior Citizen")