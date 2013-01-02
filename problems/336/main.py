for n in xrange(2, 1000):
    if str(pow(2009, n))[-3:] == '009':
        print "answer is %d" % (n+1)
        break
