#include <gmp.h>
#include <stdio.h>

int main() {
    mpz_t result, temp;

    mpz_init(result);
    mpz_init(temp);

    mpz_set_ui(result, 32);
    mpz_pow_ui(result, result, 32);

    mpz_set_ui(temp, 4);
    mpz_pow_ui(temp, temp, 4);
    mpz_add(result, result, temp);

    mpz_sub_ui(result, result, 1);

    mpz_set_ui(temp, 16);
    mpz_pow_ui(temp, temp, 16);
    mpz_mul(result, result, temp);

    mpz_set_ui(temp, 8);
    mpz_pow_ui(temp, temp, 8);
    mpz_add(result, result, temp);

    mpz_sub_ui(result, result, 1);


    int sizeinbase = mpz_sizeinbase(result, 2), string_size = sizeinbase + 2;
    char result_string[string_size];
    mpz_get_str(result_string, 2, result);

    char c;
    int i, count = 0;
    for (i = 0; i < sizeinbase; i++) {
        c = result_string[i];
        if (c == '1') {
            count++;
        }
    }
    printf("answer is %i\n", count);

    mpz_clear(result);
    mpz_clear(temp);
    return 0;
}

