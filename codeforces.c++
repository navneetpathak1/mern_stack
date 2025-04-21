#include <iostream>
#include <cmath> 
using namespace std;

int main() {
    long long A, B, C, D;
    cin >> A >> B >> C >> D;

    const double EPS = 1e-9;
    double left = B * log(A);
    double right = D * log(C);

    if (left > right + EPS)
        cout << "YES";
    else
        cout << "NO";

    return 0;
}