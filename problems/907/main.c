#include <mpfr.h>


int main() {
    mpfr_t one, temp, result;
    mpfr_inits2(16080, one, temp, result, (mpfr_ptr) 0);
    unsigned int i, count;
    char buf[2013];

    mpfr_set_ui(one, 1, 1);
    mpfr_set_ui(result, 0, 1);

    for (i = 1; i <= 2010; i++) {
        mpfr_div_ui(temp, one, i, 1);
        mpfr_add(result, result, temp, 1);
    }

    mpfr_sprintf(buf, "%.2010Rf", result);

    for (i = 1, count = 0; i <= 2012; i++) {
        count += (buf[i] - '0');
    }

    mpfr_printf("answer is %i\n", count);

    mpfr_clears(one, temp, result, (mpfr_ptr) 0);
    return 0;
}
