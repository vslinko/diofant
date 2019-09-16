#include <gmp.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main() {
  mpz_t p_4_4;
  mpz_init(p_4_4);
  mpz_set_ui(p_4_4, 4);
  mpz_pow_ui(p_4_4, p_4_4, 4);

  mpz_t p_8_8;
  mpz_init(p_8_8);
  mpz_set_ui(p_8_8, 8);
  mpz_pow_ui(p_8_8, p_8_8, 8);

  mpz_t p_16_16;
  mpz_init(p_16_16);
  mpz_set_ui(p_16_16, 16);
  mpz_pow_ui(p_16_16, p_16_16, 16);

  char* buffer;
  int result = 0;
  mpz_t x;

  mpz_init(x);
  mpz_set_ui(x, 32);
  mpz_pow_ui(x, x, 32);
  mpz_add(x, x, p_4_4);
  mpz_sub_ui(x, x, 1);
  mpz_mul(x, x, p_16_16);
  mpz_add(x, x, p_8_8);
  mpz_sub_ui(x, x, 1);
  buffer = mpz_get_str(NULL, 2, x);

  for (int i = 0; i < strlen(buffer); i++) {
    if (buffer[i] == '1') {
      result += 1;
    }
  }

  printf("%d\n", result);

  free(buffer);
  mpz_clear(x);
  mpz_clear(p_16_16);
  mpz_clear(p_8_8);
  mpz_clear(p_4_4);
  return 0;
}
