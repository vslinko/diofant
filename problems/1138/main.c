#include <gmp.h>

#define TEN_MILLIONS 10000000


int main() {
    // define and init
    int i;
    mpz_t prime;
    mpz_init(prime);

    // wort process
    for (i = 0; i < TEN_MILLIONS; i++) {
        mpz_nextprime(prime, prime);
        gmp_printf("%Zd", prime);
    }

    // clead and return
    mpz_clear(prime);
    return 0;
}
