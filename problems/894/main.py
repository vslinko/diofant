from gmpy import mpz
print "answer is %d" % sum([int(d) for d in str(mpz("1" + "0" * 2009).next_prime())])
