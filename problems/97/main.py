import sys


class Pyf:
  def __init__(self, a, b, c):
    self.a = a
    self.b = b
    self.c = c

  def is_pyf(self):
    return self.a * self.a + self.b * self.b == self.c * self.c

  def is_valid(self):
    return self.a < self.b and self.b < self.c

  def id(self):
    return "{}.{}.{}".format(self.a, self.b, self.c)

  def __str__(self):
    return "Pyf(a = {}, b = {}, c = {})".format(self.a, self.b, self.c)


def find_pyfs(var):
  checked_pyfs = set()
  result = []

  def _find_pyfs(var):
    checked_pyfs.add(var.id())

    if var.is_pyf():
      result.append(var)

    # move from c to a
    new_var = Pyf(var.a + 1, var.b, var.c - 1)
    if new_var.is_valid() and new_var.id() not in checked_pyfs:
      _find_pyfs(new_var)

    # move from c to b
    new_var = Pyf(var.a, var.b + 1, var.c - 1)
    if new_var.is_valid() and new_var.id() not in checked_pyfs:
      _find_pyfs(new_var)

  _find_pyfs(var)

  return result


def main():
  sys.setrecursionlimit(10000)

  pyfs = find_pyfs(Pyf(0, 0, 11000))
  muls = [pyf.a * pyf.b * pyf.c for pyf in pyfs]

  print([str(pyf) for pyf in pyfs])
  print(muls)
  print(min(muls))


main()
