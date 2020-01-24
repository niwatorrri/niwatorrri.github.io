---
layout: post
title: "Quick Start on Java for C/C++ Programmers"
author: "Tori"
header-style: text
comments: true
tags: 
- Computer Science
---

Reference: <https://www.seas.upenn.edu/~cis1xx/resources/JavaForCppProgrammers/j-javac-cpp-ltr.pdf>

- TOC
{:toc}

## Compile and run: a simple example

Assume we have a `Factorial.java` file that returns the factorial of a given non-negative integer:

```java
public class Factorial {
    public static void main(String[] args) {
        if (args.length != 0) {
            int num = Integer.parseInt(args[0]);
            System.out.println(factorial(num));
        }
    }
    
    private static int factorial(int fact) {
        int result = fact;
        if (fact == 0)
            return 1;
        else {
            while (fact != 1)
                result *= --fact;
        }
        return result;
    }
}
```

Note: file name MUST match the (only public) class name defined in it

Compile the program by

```
javac Factorial.java
```

This will generate a `Factorial.class` file which is the executable. To run the program:

```
java Factorial 5
```

which returns 120. Note: NO `.class` extension is needed.

## The Java language

Execution environment:

- C/C++: high-level programming language ----compile---> platform-specific machine language
- Java: high-level programming language ---compile---> platform-independent language *bytecode*, contained in `.class` files
- Bytecode is designed to be run by a *Java Virtual Machine* (JVM), an interpreter that translates bytecode into machine language and can be installed on different platforms

Language syntax is very similar to C/C++, but note their differences as follows.

Primitive data types

- char: only supports 8-bit ASCII in C, but 16-bit Unicode in Java

- int: always signed int in Java, four types (byte, short, int, long)

- float: two types (float and double), literals are double by default

- boolean: only takes value of `true` or `false`, NO numerical types are allowed

- operator: + in Java can concatenate (literal or converted) strings; NO operator overload is allowed unlike C++

- arrays: declared as objects using the new operator, reaching out of bound will throw an exception; has a length attribute

```java
int[] scores = new int[100];
char[] grades = {'A', 'B', 'C'};
int[][] array = { {1, 2}, {3, 4} };
```

- strings: immutable, declared with `String str = "Hello world!";`, has multiple methods available

Other differences:

- Java has NO pointers, only object references. NO pointer arithmetic, no conversion to primitive types, no address/dereferencing operators (as & and * in C), no need for memory management
- NO global variables in Java
- NO struct, union, typedef as in C
- Methods: i.e. functions in C, MUST be defined inside a class, can be invoked before declaration
- The main() method MUST be declared as follows: argc can be determined by args.length

```java
public static void main(String[] args)
```

- Private and public are modifiers but not labels in Java; Constructor should be used with new operator
- Enhanced loop: `for (int x: nums) do(x);` is a shorthand for `for (int i = 0; i < nums.length; ++i) do(nums[i]);`.

## Java classes

An example: `Account.java`

```java
class Account {
  private double balance;
  private static double interest;
  
  public Account(double balance) { // constructor
    this.balance = balance;
  }
  public void withdraw(double amount) {
    if (balance >= amount)
	    balance -= amount;
  }
  public double getBalance() {
    return balance;
  }
  public static void setInterest(double interestRate){
    interest = interestRate;
  }
  
  public static void main(String[] args) {
    Account act = new Account(500);
    act.withdraw(200);
    System.out.println("Balance:" + act.getBalance());
    Account.setInterest(5.0);
  }
}
```

Class members:

- four types: fields, methods, inner classes, inner interfaces
- fields: instance variables and class variables (declared using `static`), e.g. balance vs. interest rate
- methods: instance methods and class methods (declared using `static`), e.g. deposit vs. setInterestRate
- Instance members are accessed using an object name, class members are accessed using the class name

Access modifiers

- four types: public, protected, default, private
- Protected members can be accessed by subclasses
- Default access level is called *package access*, i.e. only classes in the same package can access them

## Inheritance in Java

Inheritance:

- Java only allows single inheritance (NO multiple inheritance)
- Only accessible members will be inherited
- Inheritance is specified by `extends` keyword; the `Object` class is inherited by default
- Overloading (methods with the same name but different parameters) and overriding (rewrite a superclass method)
- The `final` modifier, applied to a field, member or class, cannot be changed/overridden/inherited

```java
class Account {
  protected double balance;
  protected static double interest;
  
  public Account(double balance) { // constructor
    this.balance = balance;
  }
  protected void withdraw(double amount) {
    if (balance >= amount)
        balance -= amount;
  }
  public double getBalance() {
    return balance;
  }
  public static void setInterest(double interestRate){
    interest = interestRate;
  }
}

public class CheckingAccount extends Account {
  public CheckingAccount(double balance) {
    super(balance); // call the superclass constructor
  }
  public void cashCheck(double amount) {
    withdraw(amount);
  }
  public static void main(String[] args) {
    CheckingAccount act = new CheckingAccount(500);
    act.withdraw(200);
    System.out.println("Balance:" + act.getBalance());
    CheckingAccount.setInterest(5.0);
  }
}
```

The `Object` class

- All Java classes are ultimately subclasses of the `Object` class
- It has methods, e.g. `toString()` that can be overridden
- Can define structures that take objects of class `Object`, similar to C++ templates

## Abstract classes and Interfaces

Abstract class: using `abstract` modifier

- Abstract classes cannot be instantiated
- Abstract methods must be implemented in subclass

```java
abstract class Account {
  protected double balance;
  
  public Account(double balance) {
    this.balance = balance;
  }
  public double getBalance() {
    return balance;
  }
  public abstract void withdrawWithFee(double amount);
}

public class CheckingAccount extends Account {
  public CheckingAccount(double balance) {
    super(balance);
  }
  public void withdrawWithFee(double amount) {
    if (balance >= amount + 0.5)
      balance -= (amount + 0.5); // a $0.5 fee
  }
  public static void main(String[] args) {
    CheckingAccount act = new CheckingAccount(500);
    act.withdrawWithFee(200);
    System.out.println("Balance:" + act.getBalance());
  }
}
```

Preferred modifier order: [public/protected/private] static abstract final class

Interfaces: deal with multiple inheritance

- All interfaces and methods defined in them are implicitly abstract, so no `abstract` keyword is needed
- All members defined in an interface are implicitly public
- All fields defined in an interface are implicitly static and final 
- An interface cannot be instantiated, so no constructors
- Declared with `interface` keyword instead of `class`; can inherit from multiple interfaces
- Extends classes <-> Implements interfaces, can do simultaneously `class A extends B implements C`

```java
interface Account {
  public static final double interest = 0.35;
  public void withdraw(double amount);
}
class SavingsAccount implements Account {
  private double balance;
  public void withdraw(double amount) {
    balance += amount;
  }
}
```

Inner classes and inner interfaces: classes defined in a class & interfaces defined in an interface

## Input and Output

## Packages and Imports

## Exceptions and Assertions

## Other features

New in Java 5: generics, enums, varargs, annotations, autoboxing

New in Java 8: lambda expressions, pipelines and streams