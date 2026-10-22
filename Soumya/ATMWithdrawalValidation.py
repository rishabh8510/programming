a = int(input("Enter amount to be withdrawn: "))
b = int(input("Enter balance: "))
m = int(input("Enter minimum balance: "))
if a<=0:
    print("Enter valid amount")
if a%100 != 0:
    print("Enter amount in terms of multiple of 100")
if a>(b-m):
    print("Insufficient balance")