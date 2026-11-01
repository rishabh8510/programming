m = int(input("Enter month number: "))
if m==12 or m==1 or m==2:
    print("Winter")
elif m==3:
    print("Spring")
elif m==4 or m==5 or m==6:
    print("Summer")
elif m==7 or m==8 or m==9:
    print("Monsoon")
elif m==10 or m==11:
    print("Autumn")
else: 
    print("Enter valid month number")