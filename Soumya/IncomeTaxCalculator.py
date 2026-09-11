s = int(input("Enter annual income: "))
if s <= 250000:
    print ("Income tax = 0")
elif s > 250000 and s <= 500000:
    print ("Income tax =", s*0.05)
elif s > 500000 and s <= 750000:
    print ("Income tax =", s*0.10)
elif s > 750000 and s <= 1000000:
    print ("Income tax =", s*0.15)
elif s > 1000000 and s <= 1250000:
    print ("Income tax =", s*0.20)
elif s > 1250000 and s <= 1500000:
    print ("Income tax =", s*0.25)
else:
    print ("Income tax =", s*0.30)