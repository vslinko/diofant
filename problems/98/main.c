#include <gmp.h>

int main() {
  mpz_t prime, sum;

  mpz_init(prime);
  mpz_init(sum);

  while (1) {
    mpz_nextprime(prime, prime);

    if (mpz_cmp_ui(prime, 3000000) >= 0) {
      break;
    }

    mpz_add(sum, sum, prime);
  }

  gmp_printf("%Zd\n", sum);

  mpz_clear(prime);
  mpz_clear(sum);

  return 0;
}
