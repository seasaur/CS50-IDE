#include <math.h>
//function that cubes index+1
int sumOfCube(int n) {
    if(n<1) {
        return n;
    }
    n=pow(n,3);
    return sumOfCube(n-1);
}