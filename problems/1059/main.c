#include <stdio.h>
#include <gmp.h>

#define MIN 0x10000
#define MAX 0xFFFFF

int main() {
    unsigned int x, y, z, count;
    char buffer[8];
    mpz_t result;

    mpz_init(result);

	x = MIN;
	for (y = x+1; y < MAX; y++) {
		z = x+y;
		if (z > MAX) {
			break;
		}
		sprintf(buffer, "%x", z);
		if (buffer[4] == '1') {
			count++;
		}
	}

	mpz_add_ui(result, result, count);

	while (count > 0) {
		x++;
		sprintf(buffer, "%x", x);
		if (buffer[4] == '1' || buffer[4] == '9') {
			count--;
		}
		mpz_add_ui(result, result, count);
	}

	gmp_printf("answer is %Zd\n", result);

	mpz_clear(result);
	return 0;
}
