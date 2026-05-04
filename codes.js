const codes = [
  {
    title: "Hello World",
    code: `#include <stdio.h>
#include <conio.h>

void main() {
    printf("Hello, World!");
    getch(); 
}`
  },

  {
    title: "Area of Rectangle",
    code: `#include <stdio.h>
#include <conio.h>

void main() {
    int l, b, area;
    clrscr();

    printf("\\nEnter length and breadth:");
    scanf("%d %d", &l, &b);

    area = l * b;

    printf("\\nArea = %d", area);
    getch();
}`
  },

  {
    title: "Total and Percentage",
    code: `#include <stdio.h>
#include <conio.h>

void main() {
  int a, b, c, d, e, total, p;
  clrscr();

  printf("\\nEnter five marks:");
  scanf("%d%d%d%d%d", &a, &b, &c, &d, &e);

  total = a + b + c + d + e;
  p = (total * 100) / 500;

  printf("\\nTotal = %d", total);
  printf("\\nPercentage = %d", p);

  getch();
}`
  },

  {
    title: "Positive or Negative",
    code: `#include <stdio.h>
#include <conio.h>

void main() {
  int n;
  clrscr();

  printf("\\nEnter number:");
  scanf("%d", &n);

  if(n > 0)
    printf("\\nPositive");
  else
    printf("\\nNegative");

  getch();
}`
  },

  {
    title: "Odd or Even",
    code: `#include <stdio.h>
#include <conio.h>

void main() {
    int a;
    clrscr();

    printf("Enter a number: ");
    scanf("%d", &a);

    if(a % 2 == 0)
        printf("Even");
    else
        printf("Odd");

    getch();
}`
  },

  {
    title: "Biggest of 3 Numbers",
    code: `#include <stdio.h>
#include <conio.h>

void main() {
    int a, b, c;
    clrscr();

    printf("\\nEnter three numbers:");
    scanf("%d%d%d", &a, &b, &c);

    if(a > b && a > c)
        printf("%d is largest", a);
    else if(b > c)
        printf("%d is largest", b);
    else
        printf("%d is largest", c);

    getch();
}`
  },

  {
    title: "Grade of Student",
    code: `#include <stdio.h>
#include <conio.h>

void main() {
    int m;
    clrscr();

    printf("\\nEnter marks:");
    scanf("%d", &m);

    if(m >= 95)
        printf("S");
    else if(m >= 85)
        printf("A+");
    else if(m >= 75)
        printf("A");
    else if(m >= 65)
        printf("B+");
    else if(m >= 55)
        printf("B");
    else if(m >= 45)
        printf("C");
    else if(m >= 35)
        printf("D");
    else
        printf("F");

    getch();
}`
  },

  {
    title: "Factorial",
    code: `#include <stdio.h>
#include <conio.h>

void main() {
    int n, i, f = 1;
    clrscr();

    printf("Enter number:");
    scanf("%d", &n);

    for(i = 1; i <= n; i++) {
        f = f * i;
    }

    printf("Factorial = %d", f);
    getch();
}`
  },

  {
    title: "Fibonacci Series",
    code: `#include <stdio.h>
#include <conio.h>

void main() {
    int n, i, a = 0, b = 1, next;
    clrscr();

    printf("Enter number of terms:");
    scanf("%d", &n);

    printf("%d %d", a, b);

    for(i = 2; i < n; i++) {
        next = a + b;
        printf(" %d", next);
        a = b;
        b = next;
    }

    getch();
}`
  },

  {
    title: "Addition of Two Matrices",
    code: `#include <stdio.h>
#include <conio.h>

void main() {
    int a[10][10], b[10][10], sum[10][10];
    int i, j, r, c;

    clrscr();

    printf("Enter rows and columns: ");
    scanf("%d%d", &r, &c);

    printf("Enter first matrix:\\n");
    for(i = 0; i < r; i++) {
        for(j = 0; j < c; j++) {
            scanf("%d", &a[i][j]);
        }
    }

    printf("Enter second matrix:\\n");
    for(i = 0; i < r; i++) {
        for(j = 0; j < c; j++) {
            scanf("%d", &b[i][j]);
        }
    }

    // Addition
    for(i = 0; i < r; i++) {
        for(j = 0; j < c; j++) {
            sum[i][j] = a[i][j] + b[i][j];
        }
    }

    printf("Sum of matrices:\\n");
    for(i = 0; i < r; i++) {
        for(j = 0; j < c; j++) {
            printf("%d ", sum[i][j]);
        }
        printf("\\n");
    }

    getch();
}`
  },

  {
    title: "Palindrome String",
    code: `#include <stdio.h>
#include <string.h>
#include <conio.h>

void main() {
    char ch[20], temp[20];
    clrscr();

    printf("Enter string:");
    gets(ch);

    strcpy(temp, ch);
    strrev(temp);

    if(strcmp(ch, temp) == 0)
        printf("Palindrome");
    else
        printf("Not palindrome");

    getch();
}`
  }
];
