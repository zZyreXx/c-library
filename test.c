#include <stdio.h>
#include <conio.h>
void main()
{
    int l, b, area;
    clrscr();
    printf("Enter the length and breadth of the rectangle:");
    scanf("%d%d", &l, &b);
    area=1+b;
    printf("/n Teh area of the Rectangle=%d", area);
    getch();
}