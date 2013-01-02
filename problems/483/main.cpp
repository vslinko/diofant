#include <iostream>
#include <list>

#define BILLION 1000000000
#define MAGIC 888

using namespace std;

int main() {
    unsigned int i;
    list<unsigned int> people, temp;

    for (i = 1; i <= BILLION; i++) {
        if (i % MAGIC == 0) {
            people.push_back(i);
        }
    }

    list<unsigned int>::iterator it;
    while (people.size() > 888) {
        temp.clear();
        i = 0;
        for (it = people.begin(); it != people.end(); it++) {
            i++;
            if (i % MAGIC == 0) {
                temp.push_back(*it);
            }
        }
        people = temp;
    }

    i = 0;
    for (it = people.begin(); it != people.end(); it++) {
        i += *it;
    }

    cout << "answer is " << i << endl;

    return 0;
}
