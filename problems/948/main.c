#include <mpfr.h>


int main() {
    mpfr_t n;
    mpfr_init2(n, 16080);

    mpfr_set_ui(n, 2010, 1);
    mpfr_root(n, n, 2010, 1);

    mpfr_printf("%.2010Rf\n", n);

    mpfr_clear(n);
    return 0;
}
