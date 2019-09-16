#include <gmp.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

const int MAX = 10000000;

int main() {
  int stringLength = 0;
  int zeroDigits = 0;
  mpz_t prime;
  mpz_init(prime);

  for (int i = 0; i <= MAX; i++) {
    char* buffer;
    mpz_nextprime(prime, prime);
    buffer = mpz_get_str(NULL, 10, prime);
    int bufferLen = strlen(buffer);

    for (int s = (stringLength % 2) + 1; s <= bufferLen; s += 2) {
      if (buffer[s] == '0') {
        zeroDigits += 1;
      }
    }

    stringLength += bufferLen;
    free(buffer);
  }

  printf("%d\n", zeroDigits);

  mpz_clear(prime);
  return 0;
}
