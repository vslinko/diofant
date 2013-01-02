from gmpy import fac

problem708 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

for i in xrange(1, 1001):
    problem708[int(str(fac(i)).replace("0", "")[-1:])] += 1

print "answer is %d" % max(problem708)
