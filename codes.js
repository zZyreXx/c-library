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
#include <stdio.h>
void main() 
{
    int l, b, area;
    clrscr();
    printf("/n Enter the Length and breadth of the rectangle");
    scanf("%d%d,&l,&b);
    area=l+b;
    printf("/n The area of the rectangle=%d",area);
    getch();
}`
  },
  {
    title: "Total and Percentage",
    code: `#include <stdio.h>
#include<conio.h>
void main() 
{
  int a, b, c, d, e, total, p;
  clrscr();
  printf("/n Enter five marks");
  scanf("%d%d%d%d%d", &a, &b, &c, &d, &e);
  total=a+b+c+d+e;
  p=(total/500)*100;
  printf("/n total=%d", total);
  printf("/n percentage=%d",p);
  getch();
}`
  },
  {
    title: "Positive and Negative",
    code: `#include <stdio.h>
#include<conio.h>
void main() 
{
  int n;
  clrscr();
  printf("/n Enter the Numbers");
  scanf("%d", &n);
  if(n>0)
  {
  printf("/n The number in Positive");
  }
  else
  {
    printf("/n The number is negative");
  }
    getch();
}`
  },
  {
    title: "Odd or even",
    code: `#include <stdio.h>
#include<conio.h>
void main() 
{
    int a;
    printf("Enter a number");
    sacnf("%d", &a);
    if(a%2==0)
    {
        printf("The number is even");
    }
    else
    {
        printf("The number is Odd");
    }
    getch();
}`
  },
    {
    title: "Biggest of 3 Numbers",
    code: `#include <stdio.h>
#include<conio.h>
void main() 
{
    int a, b, c;
    clrscr();
    printf("/n Enter three Numbers");
    scanf("%d%d%d", &a&b&c);
    if(a>b)
    {
        if(a>c)
        {
            printf("%d is the largest number",a);
        }
        else
        {
            printf("%d is the largest number", c);
        }
          else
        {
        if (b>c)
        {
            printf("%d is the largest number", b);
        }
        else
        {
            printf("%d is the largest number", c);
        }
    }
    getch();
}`
  },
    {
    title: "The grade of student",
    code: `#include <stdio.h>
#include<conio.h>
void main() 
{
    int m;
    clrscr();
    printf("/n Enter the numbers");
    scanf("%d", &m);
    if(m>=95)
    {
        printf("/n the grade is S");
    }
    else if(m>=85)
    {
        printf("/n the grade is A+");
    }
        else if(m>=75)
        {
            printf("/n the grade is A");
        }
            else if(m>=65)
            {
            printf("/n the grade is B+");
            }
            else if(m>=55)
    {
        printf("/n the grade is B");
    }
    else if(m>=45)
    {
        printf("/n the grade is C");
    }
    else if(m>=35)
    {
        printf("/n the grade is D");
    }
    else
    {
        printf("/n the grade is F");
    }
    getch();
}`
  },
    {
    title: "Factorial of a Number",
    code: `#include <stdio.h>
#include<conio.h>
void main() 
{
    int n, i, f=1;
    clrscr();
    printf("NEter the numbers");
    scanf("%d", &n);
    for(i=1; i<n; i++)
    {
        f=f*;
    }
    printf("Factorial of %d=%d", n,f);
    getch();
}`
  },
   {
    title: "Fibsonacci Sereies",
    code: `#include <stdio.h>
#include<conio.h>
void main() 
{
    int n, i, l, prev, next;
    clrscr();
    printf("/N Enter the number");
    scanf("%d", &l);
    n=l;
    prev=l;
    printf("The fibonacci serries with %d elements:", l)
    printf("%d%d", prev, n);
    for(i=2; i<1; i++)
   {
    next=n+prev
    prev=n;
    n=next;
    printf("%d", next);
    }
    getch();
}`
  },
  {
    title: "Palindrome or not",
    code: `#include <stdio.h>
#include<conio.h>
void main() 
{
char ch[10], temp[10];
clrscr();
printf("/n Enter the string:");
gets(ch);
strcpy(temp, ch);
strrev(temp);
if(strcmp (ch, temp)==0)
{
printf("The string is palindrome");
}
else
{
  printf("The string is not a palindrome");
}
  getch();
}`
  },
];