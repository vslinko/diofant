#include <stdlib.h>
#include <string.h>
#include <stdio.h>

const int MAXSTRSIZE = sizeof(char) * (767 + 1);

int maxdigit(const char * str) {
  int maxdigit = 0;

  for (int i = 0; i < strlen(str); i++) {
    int c = str[i] - '0';
    if (c > maxdigit) {
      maxdigit = c;
    }
  }

  return maxdigit;
}

int main() {
  char * str = malloc(MAXSTRSIZE);
  strcpy(str, "11");

  for (int i = 0; i < 8; i++) {
    char *m = malloc(sizeof(char) * 2);
    char *newstr = malloc(MAXSTRSIZE);
    sprintf(m, "%d", maxdigit(str) + 1);
    newstr[0] = '\0';

    for (int i = 0; i < strlen(str); i++) {
      strcat(newstr, m);
      int l = strlen(newstr);
      newstr[l] = str[i];
      newstr[l + 1] = '\0';
    }
    strcat(newstr, m);

    free(m);
    free(str);

    str = newstr;
  }

  printf("%c%c\n", str[299], str[300]);

  free(str);

  return 0;
}