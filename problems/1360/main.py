from itertools import count

for n in count(4989190):
    x = 1
    for i in range(2, n+1):
        x += 1.0/i
    if x > 16:
        break

print "answer is %d" % n
