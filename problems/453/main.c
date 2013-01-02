#include <math.h>
#include <stdio.h>
#include <stdlib.h>


int main() {
    unsigned int i, a, b;
    char buffer[9], ba[5], bb[5];

    for (i = 99999999; i >= 10001000; i--) {
        sprintf(buffer, "%i", i);

        ba[0] = buffer[0];
        ba[1] = buffer[1];
        ba[2] = buffer[2];
        ba[3] = buffer[3];
        ba[4] = 0;

        bb[0] = buffer[4];
        bb[1] = buffer[5];
        bb[2] = buffer[6];
        bb[3] = buffer[7];
        bb[4] = 0;

        a = strtol(ba, NULL, 10);
        b = strtol(bb, NULL, 10);

        if (pow(a, 2) + pow(b, 2) == i) {
            printf("answer is %i\n", i);
            break;
        }
    }

    return 0;
}
