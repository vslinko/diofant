#include <gmp.h>


int main() {
    mpz_t n, mod;
    mpz_init(n);
    mpz_init(mod);

    mpz_set_ui(n, 1237 + 566);
    mpz_set_str(n, "105476117015", 10);

    while (1) {
        mpz_add_ui(n, n, 1237);

        mpz_mod_ui(mod, n, 123);
        if (mpz_cmp_ui(mod, 12) != 0) continue;

        mpz_mod_ui(mod, n, 239);
        if (mpz_cmp_ui(mod, 57) != 0) continue;

        mpz_mod_ui(mod, n, 361);
        if (mpz_cmp_ui(mod, 239) != 0) continue;

        mpz_mod_ui(mod, n, 566);
        if (mpz_cmp_ui(mod, 361) != 0) continue;

        mpz_mod_ui(mod, n, 1237);
        if (mpz_cmp_ui(mod, 566) != 0) continue;

        gmp_printf("answer is %Zi\n", n);
        break;
    }

    mpz_clear(n);
    mpz_clear(mod);
    return 0;
}
