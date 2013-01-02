from gmpy import mpz

bases = range(2, 11)
print "answer is %d" % sum((i for i in xrange(1, 1000001) if all((mpz(i).digits(base).find("00") < 0 for base in bases))))
