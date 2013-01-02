from gmpy import mpz
result = {}
for i in xrange(999999, 0, -1):
    for n in range(3, 17):
        x = mpz(i).digits(n).count("2")
        if not i in result:
            result[i] = x
        else:
            result[i] += x

print "answer is %d" % max(zip(result.values(), result.keys()))[1]
