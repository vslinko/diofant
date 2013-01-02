from itertools import count
from gmpy import mpz, fac

for i in count():
    if len(str(fac(i))) >= 2010:
        break

print "answer is %d" % i
