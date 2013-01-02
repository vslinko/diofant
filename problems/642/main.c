#include <gmp.h>
#include <limits.h>

int main() {
    unsigned short int i = 0, c = 0;
    mpz_t n;
    mpz_init(n);

    unsigned char str[USHRT_MAX];

    while (c < 14) {
        str[i] = '1';
        str[++i] = 0;

        mpz_set_str(n, str, 2);
        if (mpz_probab_prime_p(n, 5) > 0) {
            c++;
        }
    }

    gmp_printf("answer is %Zd\n", n);

    mpz_clear(n);
    return 0;
}
