s = "11"
for i in range(8):
    m = max(map(int, s)) + 1
    new_s = ""
    for i in s:
         new_s += str(m) + i
    s = new_s + str(m)

print "answer is " + s[299:301]
