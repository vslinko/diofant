#include <gmp.h>

int main() {
    unsigned int i = 0, last = 999999;
    unsigned long long int p = 1;
    mpz_t n;
    mpz_init(n);

    while (i < last) {
        mpz_set_ui(n, p);
        mpz_mul_ui(n, n, 1000000);
        mpz_sub_ui(n, n, 1);
        if (mpz_probab_prime_p(n, 10) > 0) {
            i++;
        }
        p++;
    }

    gmp_printf("answer is %Zd\n", n);

    mpz_clear(n);
    return 0;
}
