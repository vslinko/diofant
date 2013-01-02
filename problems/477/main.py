from itertools import count
from math import sqrt

def prime_gen():
   primes = []
   for n in count(2):
       if all(n%p for p in primes if p <= sqrt(n)):
           primes.append(n)
           yield n

two = str(pow(2, 10000))

primes = prime_gen()
result = 0
prime = next(primes)

for i in range(0, len(two)):
    if i+1 == prime:
        result += int(two[i])
        prime = next(primes)

print "answer is %d" % result
