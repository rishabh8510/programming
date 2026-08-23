cp = int(input("Enter cost price: "))
sp = int(input("Enter selling price: "))
if cp>sp:
    print(cp - sp, "loss")
elif cp<sp:
    print(sp - cp, "profit")
else:
    print("Neither profit nor loss")