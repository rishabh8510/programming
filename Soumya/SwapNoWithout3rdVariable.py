a=int (input("Enter 1st no.:"))
b=int (input("Enter 2nd no.:"))
print("Original:",a,b)
a,b = b,a
print("Swapped directly:",a,b)
#a=a+b
#b=a-b
#a=a-b
#print("Swapped using sum:",a,b)