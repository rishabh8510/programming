a = int(input("Enter number of days: "))
years = a//365
a = a - years*365
months = a//30
a = a - months*30
days = a
print("Years:", years, 'Months:', months, "Days:", days)