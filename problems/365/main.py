import datetime


def check_date(d):
    formated_date = ""
    if d.day < 10:
        formated_date += "0"
    formated_date += str(d.day)
    if d.month < 10:
        formated_date += "0"
    formated_date += str(d.month)
    if d.year < 10:
        formated_date += "0"
    if d.year < 100:
        formated_date += "0"
    if d.year < 1000:
        formated_date += "0"
    formated_date += str(d.year)
    
    if formated_date[0] != formated_date[7] or \
       formated_date[1] != formated_date[6] or \
       formated_date[2] != formated_date[5] or \
       formated_date[3] != formated_date[4]:
        return False
    return True


one_day = datetime.timedelta(days=1)
d = datetime.date.fromordinal(1)
count = 0

while d.year < 2009:
    if check_date(d):
        count += 1
    d += one_day

print "answer is %d" % count
