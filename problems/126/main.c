#include <gmp.h>
#include <string.h>

#define MAX 354294

int main() {
  mpz_t mul, res, tmp, total;
  char str[10000];

  mpz_init(mul);
  mpz_init(res);
  mpz_init(tmp);
  mpz_init(total);

  mpz_set_ui(total, 1);

  while (mpz_cmp_ui(mul, MAX) < 0) {
    mpz_add_ui(mul, mul, 1);
    gmp_sprintf(str, "%Zd", mul);

    mpz_set_ui(res, 0);
    for (int i = 0; i < strlen(str); i++) {
      int c = str[i] - '0';
      mpz_set_ui(tmp, c);
      mpz_pow_ui(tmp, tmp, 5);
      mpz_add(res, res, tmp);
    }

    if (mpz_cmp(mul, res) == 0) {
      mpz_mul(total, total, mul);
      gmp_printf("mul = %Zd res = %Zd total = %Zd\n", mul, res, total);
    }
  }

  gmp_printf("%Zd\n", total);

  mpz_clear(mul);
  mpz_clear(res);
  mpz_clear(tmp);
  mpz_clear(total);

  return 0;
}
