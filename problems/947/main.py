from itertools import count

for n in count():
    x = pow(9, n) - pow(7, n)
    if x >= 1000 and x % 1000 == 0:
        print "answer is %d" % n
        break
