#include <stdio.h>

#define MAX 12345678987654321
#define LAST_NINE(x) ((x)%1000000000)

int main() {
    unsigned long int S, n, pown;

    for (n = 1, S = 0, pown = 3; n <= LAST_NINE(MAX); n++, pown=LAST_NINE(pown * 3)) {
        S = LAST_NINE(S + (n * pown));
    }

    printf("answer is %li\n", S);

    return 0;
}
