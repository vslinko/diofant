#include <mpfr.h>

int main() {
    char buf[1000003]; // 2 first symbols (zero and dot) + 1000000 symbols after dot + 1 EOL
    int count, i;
    mpfr_t n;
    mpfr_init2(n, 8000000); // 1000000 bytes for precision

    mpfr_set_ui(n, 1, 1);
    mpfr_sin(n, n, 1);
    mpfr_sprintf(buf, "%.1000000Rf", n);

    for (i = 2, count = 0; i < 1000002; i++) { // skip 2 symbols
        if (buf[i] == '1') {
            count++;
        }
    }

    mpfr_printf("answer is %i\n", count);

    mpfr_clear(n);
    return 0;
}
