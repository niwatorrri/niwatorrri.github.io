---
layout: post
title: "Quick Start on Java for C++ Programmers"
author: "Tori"
header-style: text
comments: true
tags: 
- Computer Science
---

Reference: <https://www.seas.upenn.edu/~cis1xx/resources/JavaForCppProgrammers/j-javac-cpp-ltr.pdf>

- TOC
{:toc}

## Compile and Run: an Example

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
        if (fact == 0) {
            return 1;
        }
        while (fact != 1) {
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

## The Java Language

Execution environment:

- C/C++: high-level programming language ----compile---> platform-specific machine language
- Java: high-level programming language ---compile---> platform-independent language *bytecode*, contained in `.class` files
- Bytecode is designed to be run by a *Java Virtual Machine* (JVM), an interpreter that translates bytecode into machine language and can be installed on different platforms

Language syntax is very similar to C/C++, but note their following differences.

Primitive data types

- char: only supports 8-bit ASCII in C, but 16-bit Unicode in Java

- int: always signed int in Java, four types (byte, short, int, long)

- float: two types (float and double), literals are double by default

- boolean: only takes value of `true` or `false`, NO casting from numerical types is allowed

- operator: + in Java can concatenate strings; NO operator overload is allowed unlike C++

- arrays: declared as objects using the new operator, reaching out of bound will throw an exception; has a length attribute

```java
int[] scores = new int[100];
char[] grades = {'A', 'B', 'C'};
int[][] array = { {1, 2}, {3, 4} };
```

- strings: immutable, declared with `String str = "Hello world!";`, has multiple methods available

Other differences and features

- Java has NO pointers, only object references. NO pointer arithmetic, no conversion to primitive types, no address/dereferencing operators (as & and * in C), no need for memory management
- NO struct, union, typedef as in C
- NO global variables in Java, only class members
- Methods: i.e. functions in C, MUST be defined inside a class, can be invoked before declaration
- The main() method MUST be declared as follows: argc can be determined by args.length

```java
public static void main(String[] args)
```

- Private and public are modifiers in Java but not labels as in C++
- Constructor should be used with new operator (this can be easily forgotten by C++ programmers)
- Enhanced loop: `for (int x: nums) do(x);` is a shorthand for `for (int i = 0; i < nums.length; ++i) do(nums[i]);`
- Java supports variable length of method arguments by using `...`, e.g. `void sayWords(String... words)`, where `words` is inherently of type `String[]`

## Java Classes

An example: `Account.java`

```java
class Account {
  private double balance;
  private static double interest;
  
  public Account(double balance) { // constructor
    this.balance = balance;
  }
  
  public void withdraw(double amount) {
    if (balance >= amount) {
	    balance -= amount;
    }
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
- Design pattern: do not declare any fields as public and always use `getField()` and `setField()`

### Inheritance in Java

Inheritance:

- Java only allows single inheritance (NO multiple inheritance)
- Only accessible members will be inherited
- Inheritance is specified by `extends` keyword; the `Object` class is inherited by default
- Overloading: methods with the same name but different parameters
- Overriding: rewrite a superclass method, often accompanied by an annotation `@Override`, which is a form of metadata that provides information for compiler and has no effect on the program
- The `final` modifier, applied to a field, member or class, cannot be changed/overridden/inherited

```java
class Account {
  protected double balance;
  protected static double interest;
  
  public Account(double balance) { // constructor
    this.balance = balance;
  }
  
  public void withdraw(double amount) {
    if (balance >= amount) {
        balance -= amount;
    }
  }
  
  public double getBalance() {
    return balance;
  }
}

public class CheckingAccount extends Account {
  public CheckingAccount(double balance) {
    super(balance); // call the superclass constructor
  }
  
  @Override	// annotation
  public void withdraw(double amount) {
    balance -= amount;
  }
}
```

The `Object` class

- All Java classes are ultimately subclasses of the `Object` class
- It has methods, e.g. `toString()` that can be overridden
- Can define structures that take objects of class `Object`, similar to C++ templates

### Abstract Classes and Interfaces

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
  
  @Override
  public void withdrawWithFee(double amount) {
    if (balance >= amount + 0.5)
      balance -= (amount + 0.5); // a $0.5 fee
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
  
  @Override
  public void withdraw(double amount) {
    balance += amount;
  }
}
```

### Anonymous Classes

Anonymous classes enable you to declare and instantiate a class at the same time. Use them if you need to use a local class only once.

```java
public class HelloWorldAnonymousClasses {
    interface HelloWorld { // or any other class
        public void greet();
    }
  
    public void sayHello() {
        // not using anonymous class
        class EnglishGreeting implements HelloWorld {
            public void greet() {
                System.out.println("Hello world!");
            }
        }
        HelloWorld englishGreeting = new EnglishGreeting();
        englishGreeting.greet();
        
        // using anonymous class
        HelloWorld spanishGreeting = new HelloWorld() {
            public void greet() {
                System.out.println("Hola, mundo!");
            }
        };
        spanishGreeting.greet();
    }  
}
```

### Lambda Expressions

Lambda expression is Java's first step into functional programming. It is based on a special type of interface called functional interface.

Using anonymous classes to specify an event handler:

```java
button.setOnAction(new EventHandler() {
    @Override
    public void handle(ActionEvent event) {
        System.out.println("Hello World!");
    }
});
```

The `button.setOnAction` method requires an object of type `EventHandler`. The `EventHandler` is an interface with only one method.

```java
@FunctionalInterface
interface EventHandler {
    public void handle(ActionEvent event);
}
```

This interface is a functional interface, as suggested by the annotation. And thus you could use the following lambda expression to replace it:

```java
button.setOnAction(
    event -> System.out.println("Hello World!")
);
```

## Generics

Generic types: a minimal example

```java
public class Box<T> {
    // T stands for "Type"
    private T t;

    public void set(T t) { this.t = t; }
    public T get() { return t; }
  
    public static void main(String[] args) {
        Box<Integer> integerBox = new Box<Integer>();
        Box<Integer> anotherIntegerBox = new Box<>(); // only in Java 7 or later
    }
}
```

- Multiple type parameters: `public class OrderedPair<K, V> implements Pair<K, V> {...}`
- AVOID using raw types: `Box rawBox = new Box<Integer>(); // DON'T DO THIS!`

Generic methods

```java
public class Util {
    public static <K, V> boolean compare(Pair<K, V> p1, Pair<K, V> p2) {
        return p1.getKey().equals(p2.getKey()) &&
               p1.getValue().equals(p2.getValue());
    }
}

public class Pair<K, V> {
    private K key;
    private V value;

    public Pair(K key, V value) {
        this.key = key;
        this.value = value;
    }

    public void setKey(K key) { this.key = key; }
    public void setValue(V value) { this.value = value; }
    public K getKey()   { return key; }
    public V getValue() { return value; }

    public static void main(String[] args) {
        // The complete syntax for invoking Util.compare would be:
        Pair<Integer, String> p1 = new Pair<>(1, "apple");
        Pair<Integer, String> p2 = new Pair<>(2, "pear");
        boolean same = Util.<Integer, String>compare(p1, p2);

        // Generally, the compiler will infer the type that is needed:
        same = Util.compare(p1, p2);
    }
}
```

Bounded type parameters

- There may be times when you want to restrict the types that can be used as type arguments in a parameterized type. For example, a method that operates on numbers might only want to accept instances of `Number` or its subclasses. 
- Solution: `public <T extends Number> method(T t);`
- A type parameter can have multiple bounds: `<T extends B1 & B2 & B3>`. T should be a subtype of all the types listed. If one of the bounds is a class, it must be specified first. 

Caveats

- To implement generics, the Java compiler applies type erasure to replace all type parameters with their bounds or `Object` if the type parameters are unbounded. The produced bytecode thus contains only ordinary classes, interfaces, and methods. And therefore:
- You cannot declare static fields whose type are type parameters while this is allowed in C++ templates

```java
public class MobileDevice<T> {
    private static T os; // compile error
}
```

- You cannot use casts or `instanceof` with parameterized types

```java
public static <E> void rtti(List<E> list) {
    if (list instanceof ArrayList<Integer>) {  // compile error
    }
}
```

- A class cannot have two overloaded methods that will have the same signature after type erasure.

```java
public class Example {
    public void print(Set<String> strSet) { }
    public void print(Set<Integer> intSet) { } // compile error
}
```

## Essential Packages

### Exceptions

Valid Java programming language code must honor the *Catch or Specify Requirement*. It means that code that might throw certain exceptions must be enclosed by either of the following:

- A `try` statement that catches the exception. The `try` must provide a handler for the exception.
- A method that specifies that it can throw the exception. The method must provide a `throws` clause that lists the exception.

Types of exceptions:

- *Checked exceptions*: exceptional conditions that a well-written application should anticipate and recover from; *subject to* the Catch or Specify Requirement.
- *Unchecked exceptions*: include errors (external and unrecoverable) and runtime exceptions (internal and unrecoverable), *not subject to* the Catch or Specify Requirement.

An example is as follows. This method has three different exit possibilities:

1. try -> normal execution -> finally
2. try -> catch IndexOutOfBoundsException -> finally
3. try -> catch IOException -> finally

```java
public void writeList() {
    PrintWriter out = null;
    try {
        out = new PrintWriter(new FileWriter("OutFile.txt"));
        for (int i = 0; i < SIZE; i++) {
            out.println("Value at: " + i + " = " + list.get(i));
        }
    } catch (IndexOutOfBoundsException e) {
        System.err.println("Caught IndexOutOfBoundsException: " + e.getMessage());
    } catch (IOException e) {
        System.err.println("Caught IOException: " + e.getMessage());
    } finally {
        if (out != null) {
            System.out.println("Closing PrintWriter");
            out.close();
        } else {
            System.out.println("PrintWriter not open");
        }
    }
}
```

If the `writeList` method doesn't catch the checked exceptions that can occur within it, the `writeList` method must specify that it can throw these exceptions.

```java
public void writeList() throws IOException, IndexOutOfBoundsException {...}
```

Remember that `IndexOutOfBoundsException` is an unchecked exception; including it in the `throws` clause is not mandatory. You could just write the following.

```java
public void writeList() throws IOException {...}
```

### Input and Output

Read input from command line:

```java
Console c = System.console();
String login = c.readLine("Enter your login: ");
```

Common output methods:

- Invoking `print` or `println` outputs a single value after converting the value using the appropriate `toString` method.

```java
public class Root {
    public static void main(String[] args) {
        int i = 2;
        double r = Math.sqrt(i);
        
        System.out.print("The square root of ");
        System.out.print(i);
        System.out.print(" is ");
        System.out.print(r);
        System.out.println(".");
        // output: The square root of 2 is 1.4142135623730951.

        i = 5;
        r = Math.sqrt(i);
        System.out.println("The square root of " + i + " is " + r + ".");
        // output: The square root of 5 is 2.23606797749979.
    }
}
```

- The `format` method formats multiple arguments based on a *format string*.

```java
public class Root2 {
    public static void main(String[] args) {
        int i = 2;
        double r = Math.sqrt(i);
        System.out.format("The square root of %d is %f.%n", i, r);
    }
}
```

### Collections

A collection represents a group of objects known as its elements. Its sub-interfaces include Set, List, Queue, Deque, Map, SortedSet and SortedMap. All can be imported from `java.util.*`. Similar to C++ STL.

- Set\<T\> implementations: `HashSet`, `TreeSet`, and `LinkedHashSet`
  - Methods: size, isEmpty, add, remove, contains, addAll, removeAll, etc.

```java
public class FindDups {
    public static void main(String[] args) {
        Set<String> s = new HashSet<String>();
        for (String a : args) {
            s.add(a);
        }
        System.out.println(s.size() + " distinct words: " + s);
    }
}
```

- List\<T\> implementations: `LinkedList` and `ArrayList`
  - Methods: size, isEmpty, add, remove, get, set, etc.
- Map\<K, V\> implementations: `HashMap`, `TreeMap` and `LinkedHashMap`
  - Methods: size, isEmpty, put, putIfAbsent, get, getOrDefault, remove(K), remove(K, V), replace(K, newV), replace(K, oldV, newV), etc.
- Queue\<T\> implementation: `PriorityQueue`
  - Methods: size, add, peek, poll, etc.
- Note: many of these implementation are not thread-safe. There are thread-safe counterparts if you need to use them.

Common misunderstanding

- Although Integer is a subclass of Number, List\<Integer\> is NOT a subclass of List\<Number\>! That means you cannot pass `List<Integer>` to a method that takes `List<Number>` as a parameter.
- Generally, `MyClass<A>` has no relationship with `MyClass<B>`, regardless of whether or not `A` and `B` are related
- Solution: wildcards

Wildcards (?): represents an unknown type

- `public void method(List<?> list);`
- `public void method(List<? extends Number> list)`
- `public void method(List<? super Number> list)`
- PECS (Producer Extends Consumer Super) principle
  - If you are *only* pulling items from a generic collection, it is a producer and you should use `extends`
  - If you are *only* stuffing items in, it is a consumer and you should use `super`
  - If you do both with the same collection, you should use neither

### Pipelines and Streams

This is also introduced in Java 8 along with lambda expressions. Assume a `Person` class as follows.

```java
public class Person {
    public enum Sex { MALE, FEMALE }

    String name;
    LocalDate birthday;
    Sex gender;
    String emailAddress;

    public int getAge() {...}
    public String getName() {...}
}
```

For a `Collection<Person> roster`, we can do:

```java
roster
    .stream()
    .filter(e -> e.getGender() == Person.Sex.MALE)
    .forEach(e -> System.out.println(e.getName()));

double average = roster
    .stream()
    .filter(p -> p.getGender() == Person.Sex.MALE)
    .mapToInt(Person::getAge)
    .average()
    .getAsDouble();
```

The JDK contains many terminal operations (such as `average`, `sum`, `min`, `max`, and `count`) that return one value by combining the contents of a stream. These operations are called *reduction operations*. General-purpose reduction operations `reduce` and `collect` are also provided. Examples follow.

Parallelism: call `Collection.parallelStream()` or `Collection.stream().parallel()`.

```java
Integer totalAgeReduce = roster
   .stream()
   .map(Person::getAge)
   .reduce(0, (a, b) -> a + b);

List<String> namesOfMaleMembersCollect = roster
    .stream()
    .filter(p -> p.getGender() == Person.Sex.MALE)
    .map(p -> p.getName())
    .collect(Collectors.toList());

Map<Person.Sex, List<Person>> byGender =
    roster
        .stream()
        .collect(
            Collectors.groupingBy(Person::getGender));

Map<Person.Sex, List<String>> namesByGender =
    roster
        .stream()
        .collect(
            Collectors.groupingBy(
                Person::getGender,                      
                Collectors.mapping(
                    Person::getName,
                    Collectors.toList())));

Map<Person.Sex, Integer> totalAgeByGender =
    roster
        .stream()
        .collect(
            Collectors.groupingBy(
                Person::getGender,                      
                Collectors.reducing(
                    0, Person::getAge,
                    Integer::sum)));
```