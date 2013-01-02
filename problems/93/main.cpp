#include <iostream>
#include <gmpxx.h>

using namespace std;

int main() {
    mpz_class prime;

    for (int i = 0; i < 100001; i++) {
        mpz_nextprime(prime.get_mpz_t(), prime.get_mpz_t());
    }

    cout << "answer is " << prime << endl;

    return 0;
}
