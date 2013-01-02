def double_gen(s):
    i = 1
    l = len(s)
    while i < l:
        yield int(s[i-1]+s[i])
        i += 1

s = ""
for i in range(1, 1001):
    s += str(i*i)

g = double_gen(s)
print "answer is %d" % sum((1 for i in g if i % 2 == 0))
