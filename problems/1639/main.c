#include <string.h>
#include <stdio.h>
#include <gmp.h>


int main() {
    unsigned long int i = 0;
    mpz_t n;
    mpz_init(n);
    char str[1048576];

    while (1) {
      i++;
      mpz_ui_pow_ui(n, 7, i);
      gmp_sprintf(str, "%Zd", n);
      size_t l = strlen(str);
      size_t sevens = 0;
      for (int j = 0; j < l; j++) {
        char c = str[j];
        if (c == '7') {
          sevens++;
        }
      }
      printf("%lu %s %zu\n", i, str, sevens);
      if (sevens >= 7) {
        break;
      }
    }

    mpz_clear(n);

    return 0;
}
