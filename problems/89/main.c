#include <gmp.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main() {
  mpz_t n, q, r, div, prime;

  mpz_init(n);
  mpz_init(q);
  mpz_init(r);
  mpz_init(div);
  mpz_init(prime);

  mpz_set_str(n, "386745374779148463746059", 10);
  mpz_set_ui(div, 2);

  while (1) {
    mpz_tdiv_qr(q, r, n, div);

    if (mpz_cmp(div, q) > 0) {
      break;
    }

    if (mpz_cmp_ui(r, 0) == 0) {
      if (mpz_probab_prime_p(div, 15) > 0) {
        mpz_set(prime, div);
      }

      gmp_printf("div = %Zd q = %Zd r = %Zd prime = %Zd\n", div, q, r, prime);

      if (mpz_probab_prime_p(q, 15) > 0) {
        mpz_set(prime, q);
        break;
      }
    }

    mpz_add_ui(div, div, 1);
  }

  gmp_printf("answer is %Zd\n", prime);

  mpz_clear(prime);
  mpz_clear(div);
  mpz_clear(r);
  mpz_clear(q);
  mpz_clear(n);

  return 0;
}
