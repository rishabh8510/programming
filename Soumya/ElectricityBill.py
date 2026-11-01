n = int(input("Enter no. of units consumed: "))
bill = 0
for i in range(1, n+1):
    if i<=100:
        bill += 5
    elif i>100 and i<=200:
        bill += 7
    elif i>200 and i<=300:
        bill += 10
    else:
        bill += 12
print ("Bill: ", bill)