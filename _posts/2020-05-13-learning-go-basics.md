---
layout: post
title: "Learning Go: Getting Started"
author: "Tori"
header-style: text
comments: true
tags: 
- Computer Science
---

- TOC
{:toc}

## Why Go?

Go is a statically typed, compiled programming language. It was designed at Google in 2007 to improve programming productivity in an era of multicore, networked machines and large codebases. The designers wanted to address criticism of other languages in use at Google, but keep their useful characteristics.

Go is syntactically similar to C, but with memory safety, garbage collection, structural typing, and CSP-style concurrency. More of the features:

- Minimalism: easy to learn, read, write and maintain
- Compatibility: succinct and strict compatibility guarantees
- Performance: compiled language similar to C, optimized standard libraries, built-in concurrency primitives (lower latency and smaller overhead)
- Development: automatic documentation, built-in frameworks for testing and profiling, clear code separation, race condition detector, etc.
- OOP without classes, inheritance, constructors, generics, and others

## Go Basics

This tutorial onwards is almost completely based on [A Tour of Go](https://tour.golang.org/list).

### Packages and Functions

Every Go program is made up of packages. Programs start running in package `main`. The following program is using the packages with import paths `"fmt"` and `"math/rand"`.

The imports are grouped into a parenthesized statement. Writing multiple import statements is also acceptable but not considered a good style.

```go
package main

import (
	"fmt"
	"math/rand"
)

func main() {
	fmt.Println("My favorite number is", rand.Intn(10))
}
```

In Go, a name is *exported* if it begins with a capital letter. For example, `Pizza` is an exported name, as is `Pi`, which is exported from the `math` package. In contrast, `pizza` and `pi` do not start with a capital letter, so they are not exported.

When importing a package, you can refer only to its exported names. Any "unexported" names are not accessible from outside the package.

```go
fmt.Println(math.pi) // error: cannot refer to unexported name math.pi
```

A function can take zero or more arguments. In this example, `add` takes two parameters of type `int`. Notice that the type comes *after* the variable name. This is believed to be easier to understand compared to C syntax, especially when things get complicated. (See [Go's declaration syntax](https://blog.golang.org/gos-declaration-syntax) for more explanations.)

```go
func add(x int, y int) int {
	return x + y
}

func main() {
	fmt.Println(add(42, 13))
}
```

When two or more consecutive named function parameters share a type, you can omit the type from all but the last. Also, a function can return any number of results. The following `swap` function takes two strings and returns two strings.

```go
func swap(x, y string) (string, string) {
	return y, x
}
```

Go's return values may be named. If so, they are treated as variables defined at the top of the function. These names should be used to document the meaning of the return values.

A `return` statement without arguments returns the named return values. This is known as a "naked" return. Naked return statements should be used only in short functions, otherwise they can harm readability in longer functions.

```go
func split(sum int) (x, y int) {
	x = sum * 4 / 9  // int division
	y = sum - x
	return
}
```

### Variables and Types

The `var` statement declares a list of variables; as in function argument lists, the type is placed at last. A `var` statement can be at package or function level.

A var declaration can include initializers, one per variable. If an initializer is present, the type can be omitted; the variable will take the type of the initializer. Variables declared without an explicit initial value are given their *zero value*, which is `0` for numeric types, `false` for boolean, and empty string for strings.

```go
var i, j int = 1, 2
var b bool

func main() {
	var c, python, java = true, false, "no!"
	fmt.Println(i, j, b, c, python, java) // 1 2 false true false no!
}
```

Inside a function, the `:=` short assignment statement can be used in place of a `var` declaration with implicit type. Outside a function, every statement begins with a keyword (`var`, `func`, and so on) and so the `:=` construct is not available.

```go
func main() {
	var i, j int = 1, 2
	c, python, java := true, false, "no!"
	fmt.Println(i, j, k, c, python, java)
}
```

Go's basic types are

```
bool

string

int  int8  int16  int32  int64
uint uint8 uint16 uint32 uint64 uintptr

byte // alias for uint8

rune // alias for int32, represents a Unicode code point

float32 float64

complex64 complex128
```

The following example shows variables of several types, and also that variable declarations may be "factored" into blocks, as with import statements. When you need an integer value you should use `int` unless you have a specific reason to use a sized or unsigned integer type.

```go
package main

import (
	"fmt"
	"math/cmplx"
)

var (
	ToBe   bool       = false
	MaxInt uint64     = 1<<64 - 1
	z      complex128 = cmplx.Sqrt(-5 + 12i)
)

func main() {
	fmt.Printf("Type: %T Value: %v\n", ToBe, ToBe)     // Type: bool Value: false
	fmt.Printf("Type: %T Value: %v\n", MaxInt, MaxInt) // Type: uint64 Value: 18446744073709551615
	fmt.Printf("Type: %T Value: %v\n", z, z)           // Type: complex128 Value: (2+3i)
}
```

In `fmt` package, the format string for printing is similar to C but greatly simplified. For example, `%v` presents the value in a default format, and `%T` presents a Go-syntax representation of the type of the value. See [Package fmt](https://golang.org/pkg/fmt/) for more information.

Unlike in C, in Go assignment between items of different type requires an explicit conversion. The expression `T(v)` converts the value `v` to the type `T`. For example:

```go
i := 42
f := float64(i)
u := uint(f)
```

Constants are declared like variables, but with the `const` keyword. Constants cannot be declared using the `:=` syntax. For example, `const Pi = 3.14`.

Pointers: A pointer holds the memory address of a value. The type `*T` is a pointer to a `T` value. Its zero value is `nil`. The `&` operator generates a pointer to its operand. The `*` operator denotes the pointer's underlying value. Unlike C, Go has no pointer arithmetic.

```go
func main() {
  i := 42
	p := &i         // point to i
	fmt.Println(*p) // read i through the pointer: 42
	*p = 21         // set i through the pointer
	fmt.Println(i)  // see the new value of i: 21
}
```

### Flow Control Statements

Loops: Go has only one looping construct, the `for` loop. The basic `for` loop, similar to C, has three components separated by semicolons:

- the init statement: executed before the first iteration
- the condition expression: evaluated before every iteration
- the post statement: executed at the end of every iteration

The init statement will often be a short variable declaration, and the variables declared there are visible only in the scope of the `for` statement.

**Note:** Unlike other languages like C, Java, or JavaScript, there are no parentheses surrounding the three components of the `for` statement and the braces `{ }` are always required.

```go
func main() {
	sum := 0
	for i := 0; i < 10; i++ {
		sum += i
	}
	fmt.Println(sum) // 45
}
```

The init and post statements are optional. If you omit the loop condition it loops forever. You still use `for` for a while loop in C. Just simply drop the semicolons.

```go
func main() {
	sum := 1
	for ; sum < 10; sum += 1 {
		sum *= 2
		fmt.Println(sum) // 2 6 14
	}
	for sum < 64 {
		sum *= 2
		fmt.Println(sum) // 30 60 120
	}
	for { // infinite loop
	}
}
```

Conditional statements: Go's `if` statements are like its `for` loops; the expression need not be surrounded by parentheses `( )` but the braces `{ }` are required.

Like `for`, the `if` statement can start with a short statement to execute before the condition. Variables declared by the statement are only in scope until the end of the `if`, including any of the `else` blocks followed.

```go
func pow(x, n, lim float64) float64 {
	if v := math.Pow(x, n); v < lim {
		return v
	} else {
		fmt.Printf("%v >= %v\n", v, lim)
	}
	// can't use v here, though
	return lim
}

func main() {
	fmt.Println(pow(3, 2, 10), pow(3, 3, 20))
  // First line:  27 >= 20
  // Second line: 9 20
}
```

A `switch` statement is a shorter way to write a sequence of `if - else` statements. It runs the first case whose value is equal to the condition expression.

Go's switch is like the one in C, C++, Java, etc., except that Go only runs the selected case, not all the cases that follow. In effect, the `break` statement that is needed at the end of each case in those languages is provided automatically in Go. Switch cases evaluate cases from top to bottom, stopping when a case succeeds.

Another important difference is that Go's switch cases need not be constants, and the values involved need not be integers.

```go
import (
	"fmt"
	"runtime"
)

func main() {
	fmt.Print("Go runs on ")
	switch os := runtime.GOOS; os {
	case "darwin":
		fmt.Println("OS X.")
	case "linux":
		fmt.Println("Linux.")
	default:
		// freebsd, openbsd,
		// plan9, windows...
		fmt.Printf("%s.\n", os)
	}
}
```

Switch without a condition is the same as `switch true`. This construct can be a clean way to write long if-then-else chains.

```go
import (
	"fmt"
	"time"
)

func main() {
	t := time.Now()
	switch {
	case t.Hour() < 12:
		fmt.Println("Good morning!")
	case t.Hour() < 17:
		fmt.Println("Good afternoon.")
	default:
		fmt.Println("Good evening.")
	}
}
```

Defer statement: A defer statement defers the execution of a function until the surrounding function returns. The deferred call's arguments are evaluated immediately, but the function call is not executed until the surrounding function returns.

Deferred function calls are pushed onto a stack. When a function returns, its deferred calls are executed in last-in-first-out order. To learn more about defer statements read this [blog post](https://blog.golang.org/defer-panic-and-recover).

```go
func main() {
	fmt.Println("counting")
	for i := 0; i < 5; i++ {
		defer fmt.Println(i)
	}
	fmt.Println("done") // counting done 4 3 2 1 0
}
```

### More Types: Structs, Arrays, Slices, Maps

Structs: A `struct` is a collection of fields. Struct fields are accessed using a dot. Struct fields can also be accessed through a struct pointer. To access the field `X` of a struct when we have the struct pointer `p` we could write `(*p).X`. However, that notation is cumbersome, so the language allows just `p.X`.

```go
type Vertex struct {
	X, Y int
}

var (
	v1 = Vertex{1, 2} // has type Vertex
	v2 = Vertex{X: 1} // Y:0 is implicit
	v3 = Vertex{}     // X:0 and Y:0
	p  = &v3          // has type *Vertex
)

func main() {
	fmt.Println(v1)         // {1 2}
	fmt.Println(v2.X, v2.Y) // 1 0
	p.X = 4
	fmt.Println(p)          // &{4 0}
}
```

Arrays: The type `[n]T` is an array of `n` values of type `T`. An array's length is part of its type, so arrays cannot be resized. Although an array has a fixed size, a slice is a dynamically-sized, flexible view into the elements of an array. In practice, slices are much more common than arrays.

The type `[]T` is a slice with elements of type `T`. A slice is formed by specifying two indices, a low and high bound, separated by a colon: `a[low : high]`. This selects a half-open range which includes the first element, but excludes the last one. When slicing, you may omit the high or low bounds to use their defaults instead. The default is zero for the low bound and the length of the slice for the high bound.

This is an array literal: `[3]bool{true, true, false}`. And this creates the same array as above, then builds a slice that references it: `[]bool{true, true, false}`.

```go
func main() {
	var a [2]string
	a[0] = "Hello"
	fmt.Println(a) // [Hello ]

	primes := [6]int{2, 3, 5, 7, 11, 13}
	fmt.Println(primes) // [2 3 5 7 11 13]
  
	var s []int = primes[:4]
	fmt.Println(s) // [2 3 5 7]
}
```

Changing the elements of a slice modifies the corresponding elements of its underlying array. Other slices that share the same underlying array will see those changes.

A slice has both a *length* and a *capacity*. The length of a slice is the number of elements it contains. The capacity of a slice is the number of elements in the underlying array, counting from the first element in the slice. The length and capacity of a slice `s` can be obtained using the expressions `len(s)` and `cap(s)`.

The zero value of a slice is `nil`. A nil slice has a length and capacity of 0 and has no underlying array.

```go
func main() {
	numbers := [6]int{2, 3, 5, 7, 11, 13}
	s := numbers[:2]
	printSlice(s) // len=2 cap=6 [2 3]
	s = s[:4]
	printSlice(s) // len=4 cap=6 [2 3 5 7]
	s = s[2:]
	printSlice(s) // len=2 cap=4 [5 7]
	s = s[:3]
	printSlice(s) // len=3 cap=4 [5 7 11]
}

func printSlice(s []int) {
	fmt.Printf("len=%d cap=%d %v\n", len(s), cap(s), s)
}
```

Slices can be created with the built-in `make` function; this is how you create dynamically-sized arrays. In the following example, the `make` function allocates a zeroed array and returns a slice that refers to that array. To specify a capacity, pass a third argument to `make`.

```go
a := make([]int, 5)  // len(a)=5, cap(a)=5
b := make([]int, 0, 5) // len(b)=0, cap(b)=5
```

Go provides a built-in `append` function to append new elements to a slice. Example usage:

```go
slice = append(slice, elem1, elem2)
slice = append(slice, anotherSlice...)
```

The `range` form of the `for` loop iterates over a slice or map. When ranging over a slice, two values are returned for each iteration. The first is the index, and the second is a copy of the element at that index. You can skip the index or value by assigning to `_`, or if you only want the index, you can omit the second variable.

```go
func main() {
	pow := make([]int, 5)
	for idx := range pow {
		pow[idx] = 1 << i
	}
	for idx, value := range pow {
		fmt.Printf("%d %d\n", idx, value) // 0 1; 1 2; 2 4; 3 8; 4 16
	}
}
```

A map maps keys to values. The zero value of a map is `nil`. A `nil` map has no keys, nor can keys be added. The `make` function returns a map of the given type, initialized and ready for use.

Map operations:

- Insert or update an element in map `m`: `m[key] = elem`
- Retrieve an element: `elem = m[key]`
- Test that a key is present with a two-value assignment: `elem, ok = m[key]`. `ok` is true if `key` is in `m` and false otherwise. When `ok` is false, `elem` is the zero value of the element type.
- Delete an element: `delete(m, key)`

```go
type Vertex struct {
	Lat, Long float64
}

func main() {
	l := make(map[string]int)
	l["what"] = 2
	fmt.Println(l) // map[what:2]

	var m = map[string]Vertex{
		"Bell Labs": {40.68, -74.39}, // Vertex type omitted in literals
		"Google":    {37.42, -122.08},
	}
	fmt.Println(m) // map[Bell Labs:{40.68 -74.39} Google:{37.42 -122.08}]
}
```

### Functional Programming

Functions are values too. They can be passed around just like other values. Function values may be used as function arguments and return values.

```go
func compute(fn func(float64, float64) float64) float64 {
	return fn(3, 4)
}

func main() {
	hypot := func(x, y float64) float64 {
		return math.Sqrt(x*x + y*y)
	}
	fmt.Println(hypot(5, 12))

	fmt.Println(compute(hypot))
	fmt.Println(compute(math.Pow))
}
```

Go functions may be closures. A closure is a function value that references variables from outside its body. The function may access and assign to the referenced variables; in this sense the function is "bound" to the variables. In the following example, the `adder` function returns a closure. Each closure is bound to its own `sum` variable.

```go
func adder() func(int) int {
	sum := 0
	return func(x int) int {
		sum += x
		return sum
	}
}

func main() {
	pos, neg := adder(), adder()
	for i := 0; i < 10; i++ {
		fmt.Println(pos(i), neg(-2*i))
	}
}
```

## Methods and Interfaces

### Methods

Go does not have classes. However, you can define methods on types. A method is a function with a special *receiver* argument. The receiver appears in its own argument list between the `func` keyword and the method name. In the following example, the `Abs` method has a receiver of type `Vertex` named `v`.

```go
type Vertex struct {
	X, Y float64
}

func (v Vertex) Abs() float64 {
	return math.Sqrt(v.X*v.X + v.Y*v.Y)
}

func (v *Vertex) Scale(f float64) {
	v.X = v.X * f
	v.Y = v.Y * f
}

func main() {
	v := Vertex{3, 4}
	fmt.Println(v.Abs()) // 5
  
	v.Scale(10)
	fmt.Println(v.Abs()) // 50
}
```

You can also declare methods with pointer receivers. Methods with pointer receivers can modify the value to which the receiver points. Note that methods with pointer receivers take either a value or a pointer as the receiver when they are called. In the example above, even though `v` is a value and not a pointer, Go interprets the statement `v.Scale(5)` as `(&v).Scale(5)` since the `Scale` method has a pointer receiver.

You can only declare a method with a receiver whose type is defined in the same package as the method. That means you cannot declare a method with a receiver whose type is defined in another package, including built-in types such as `int`.

There are two reasons to use a pointer receiver. The first is so that the method can modify the value that its receiver points to. The second is to avoid copying the value on each method call. This can be more efficient if the receiver is a large struct, for example.

### Interfaces

An *interface type* is defined as a set of method signatures. A value of interface type can hold any value that implements those methods. A type implements an interface by implementing its methods. There is no explicit "implements" keyword.

```go
type Abser interface {
	Abs() float64
}

func main() {
	var a Abser
	f := MyFloat(-math.Sqrt2)
	v := Vertex{3, 4}

	a = f  // a MyFloat implements Abser
	a = &v // a *Vertex implements Abser

	// In the following line, v is a Vertex (not *Vertex)
	// and does NOT implement Abser.
	a = v
}

type MyFloat float64

func (f MyFloat) Abs() float64 {
	if f < 0 {
		return float64(-f)
	}
	return float64(f)
}

type Vertex struct {
	X, Y float64
}

func (v *Vertex) Abs() float64 {
	return math.Sqrt(v.X*v.X + v.Y*v.Y)
}
```

Under the hood, interface values can be thought of as a tuple of a value and a concrete type: `(value, type)`. An interface value holds a value of a specific underlying concrete type. Calling a method on an interface value executes the method of the same name on its underlying type.

If the concrete value inside the interface itself is nil, the method will be called with a nil receiver. A nil interface value holds neither value nor concrete type. Calling a method on a nil interface is a run-time error because there is no type inside the interface tuple to indicate which *concrete* method to call.

```go
type I interface {
	M()
}

type T struct {
	S string
}

func (t *T) M() {
	if t == nil {
		fmt.Println("<nil>")
		return
	}
	fmt.Println(t.S)
}

func main() {
	var i I
	describe(i) // (<nil>, <nil>)
	// i.M()    // runtime error

	var t *T
	i = t
	describe(i) // (<nil>, *main.T)
	i.M()       // <nil>

	i = &T{"hello"}
	describe(i) // (&{hello}, *main.T)
	i.M()       // hello
}

func describe(i I) {
	fmt.Printf("(%v, %T)\n", i, i)
}
```

The interface type that specifies zero methods is known as the *empty interface*: `interface{}`. An empty interface may hold values of any type. Empty interfaces are used by code that handles values of unknown type. 

```go
func main() {
	var i interface{}
	describe(i) // (<nil>, <nil>)
	i = 42
	describe(i) // (42, int)
	i = "hello"
	describe(i) // (hello, string)
}

func describe(i interface{}) {
	fmt.Printf("(%v, %T)\n", i, i)
}
```

A *type assertion* provides access to an interface value's underlying concrete value.

The statement `t := i.(T)` asserts that the interface value `i` holds the concrete type `T` and assigns the underlying `T` value to the variable `t`. If `i` does not hold a `T`, the statement will trigger a panic.

To *test* whether an interface value holds a specific type, a type assertion can return two values: the underlying value and a boolean value that reports whether the assertion succeeded, which resembles `t, ok := i.(T)`. When `ok` is false, `t` is the zero value of the type T, and no panic occurs.

```go
func main() {
	var i interface{} = "hello"
	s := i.(string)
	fmt.Println(s)     // hello
	s, ok := i.(string)
	fmt.Println(s, ok) // hello true
	f, ok := i.(float64)
	fmt.Println(f, ok) // 0 false
	f = i.(float64)    // panic: interface conversion
	fmt.Println(f)
}
```

A *type switch* is a construct that permits several type assertions in series. A type switch is like a regular switch statement, but the cases in a type switch specify types (not values), and those values are compared against the type of the value held by the given interface value.

```go
func do(i interface{}) {
	switch v := i.(type) {
	case int:
		fmt.Printf("Twice %v is %v\n", v, v*2)
	case string:
		fmt.Printf("%q is %v bytes long\n", v, len(v))
	default:
		fmt.Printf("I don't know about type %T!\n", v)
	}
}

func main() {
	do(21)      // Twice 21 is 42
	do("hello") // "hello" is 5 bytes long
	do(true)    // I don't know about type bool!
}
```

### Common Interfaces

One of the most ubiquitous interfaces is [`Stringer`](https://golang.org/pkg/fmt/#Stringer) defined by the [`fmt`](https://golang.org/pkg/fmt/) package.

```
type Stringer interface {
    String() string
}
```

A `Stringer` is a type that can describe itself as a string. The `fmt` package (and many others) look for this interface to print values.

```go
type Person struct {
	Name string
	Age  int
}

func (p Person) String() string {
	return fmt.Sprintf("%v (%v years)", p.Name, p.Age)
}

func main() {
	a := Person{"Arthur Dent", 42}
	fmt.Println(a) // Arthur Dent (42 years)
}
```

Errors: Go programs express error state with `error` values. The `error` type is a built-in interface similar to `fmt.Stringer`. The `fmt` package also looks for the `error` interface when printing error messages.

```
type error interface {
    Error() string
}
```

Functions often return an `error` value, and calling code should handle errors by testing whether the error equals `nil`. A nil `error` denotes success; a non-nil `error` denotes failure.

```go
package main

import (
	"fmt"
	"math"
)

type ErrNegativeSqrt struct {
	X float64
}

func (e ErrNegativeSqrt) Error() string {
	return fmt.Sprintf("cannot Sqrt negative number: %v", e.X)
}

func Sqrt(x float64) (float64, error) {
	if x < 0 {
		return 0, ErrNegativeSqrt(x)
	}
	return math.Sqrt(x), nil
}

func main() {
	x := -2.0
	root, err := Sqrt(x)
	if err != nil {
		fmt.Println(err)
	} else {
		fmt.Printf("sqrt(%v) = %v", x, root)
	}
}
```

Readers: The `io` package specifies the `io.Reader` interface, which represents the read end of a stream of data. The Go standard library contains [many implementations](https://golang.org/search?q=Read#Global) of these interfaces, including files, network connections, compressors, ciphers, and others. The `io.Reader` interface has a `Read` method:

```
func (T) Read(b []byte) (n int, err error)
```

`Read` populates the given byte slice with data and returns the number of bytes populated and an error value. It returns an `io.EOF` error when the stream ends. The example code creates a [`strings.Reader`](https://golang.org/pkg/strings/#Reader) and consumes its output 8 bytes at a time.

A common pattern is an [io.Reader](https://golang.org/pkg/io/#Reader) that wraps another `io.Reader`, modifying the stream in some way. For example, the [gzip.NewReader](https://golang.org/pkg/compress/gzip/#NewReader) function takes an `io.Reader` (a stream of compressed data) and returns a `*gzip.Reader` that also implements `io.Reader` (a stream of the decompressed data).

```go
import (
	"fmt"
	"io"
	"strings"
)

func main() {
	r := strings.NewReader("Hello, Reader!")
	b := make([]byte, 8)
	for {
		n, err := r.Read(b)
		fmt.Printf("n = %v err = %v b = %v\n", n, err, b)
		fmt.Printf("b[:n] = %q\n", b[:n])
		if err == io.EOF {
			break
		}
	}
	/*
	  Output:
		n = 8 err = <nil> b = [72 101 108 108 111 44 32 82]
		b[:n] = "Hello, R"
		n = 6 err = <nil> b = [101 97 100 101 114 33 32 82]
		b[:n] = "eader!"
		n = 0 err = EOF b = [101 97 100 101 114 33 32 82]
		b[:n] = ""
	*/
}
```

[Package image](https://golang.org/pkg/image/#Image) defines the `Image` interface:

```
package image

type Image interface {
    ColorModel() color.Model
    Bounds() Rectangle
    At(x, y int) color.Color
}
```

**Note**: the `Rectangle` return value of the `Bounds` method is actually an [`image.Rectangle`](https://golang.org/pkg/image/#Rectangle), as the declaration is inside package `image`. The `color.Color` and `color.Model` types are also interfaces. These interfaces and types are specified by the [image/color package](https://golang.org/pkg/image/color/). (See [the documentation](https://golang.org/pkg/image/#Image) for all the details.)

## Concurrency

### Goroutines and Channels

Goroutines: A *goroutine* is a lightweight thread managed by the Go runtime. Statement `go f(x, y, z)` starts a new goroutine running `f(x, y, z)`. The evaluation of `f`, `x`, `y`, and `z` happens in the current goroutine and the execution of `f` happens in the new goroutine.

Goroutines run in the same address space, so access to shared memory must be synchronized. The [`sync`](https://golang.org/pkg/sync/) package provides useful primitives, although you won't need them much in Go as there are other primitives. For example, channels.

Channels are a typed conduit through which you can send and receive values with the channel operator `<-`. The data flows in the direction of the arrow.

```
ch <- v    // Send v to channel ch.
v := <-ch  // Receive from ch, and
           // assign value to v.
```

Like maps and slices, channels must be created before use: `ch := make(chan int)`. By default, sends and receives block until the other side is ready. This allows goroutines to synchronize without explicit locks or condition variables.

The following code sums the numbers in a slice, distributing the work between two goroutines. Once both goroutines have completed their computation, it calculates the final result.

```go
func sum(s []int, c chan int) {
	sum := 0
	for _, v := range s {
		sum += v
	}
	c <- sum // send sum to c
}

func main() {
	s := []int{7, 2, 8, -9, 4, 0}
	c := make(chan int)
	go sum(s[:len(s)/2], c)
	go sum(s[len(s)/2:], c)
	x, y := <-c, <-c // receive from c

	fmt.Println(x, y, x+y) // -5 17 12 or 17 -5 12
}
```

Channels can be *buffered*. Provide the buffer length as the second argument to `make` to initialize a buffered channel: `ch := make(chan int, 100)`. Sends to a buffered channel block only when the buffer is full. Receives block when the buffer is empty.

A sender can `close` a channel to indicate that no more values will be sent. Receivers can test whether a channel has been closed by assigning a second parameter to the receive expression: `v, ok := <-ch`, `ok` is `false` if there are no more values to receive and the channel is closed. The loop `for i := range ch` receives values from the channel repeatedly until it is closed.

**Note:** Only the sender should close a channel, never the receiver. Sending on a closed channel will cause a panic.

**Another note:** Channels aren't like files; you don't usually need to close them. Closing is only necessary when the receiver must be told there are no more values coming, such as to terminate a `range` loop.

```go
func fibonacci(n int, c chan int) {
	x, y := 0, 1
	for i := 0; i < n; i++ {
		c <- x
		x, y = y, x+y
	}
	close(c)
}

func main() {
	c := make(chan int, 10)
	go fibonacci(cap(c), c)
	for i := range c {
		fmt.Println(i) // 0 1 1 2 3 5 8 13 21 34
	}
}
```

The `select` statement lets a goroutine wait on multiple communication operations. A `select` blocks until one of its cases can run, then it executes that case. It chooses one at random if multiple are ready.

The `default` case in a `select` is run if no other case is ready. Use a `default` case to try a send or receive without blocking:

```go
import (
	"fmt"
	"time"
)

func fibonacci(c, quit chan int) {
	x, y := 0, 1
	for {
		select {
		case c <- x:
			x, y = y, x+y
		case <-quit:
			fmt.Println("quit")
			return
		default:
			fmt.Print("waiting...")
			time.Sleep(1000)
		}
	}
}

func main() {
	c := make(chan int)
	quit := make(chan int)
	go func() {
		for i := 0; i < 5; i++ {
			fmt.Println(<-c)
		}
		quit <- 0
	}()
	fibonacci(c, quit)
	/*
		waiting... waiting... 0
		waiting... 1
		waiting... 1
		waiting... 2
		waiting... 3
		quit
	*/
}
```

### Package sync: Mutexes, WaitGroups

We've seen how channels are great for communication among goroutines. But what if we don't need communication? What if we just want to make sure only one goroutine can access a variable at a time to avoid conflicts?

This concept is called *mutual exclusion*, and the conventional name for the data structure that provides it is *mutex*. Go's standard library provides mutual exclusion with [`sync.Mutex`](https://golang.org/pkg/sync/#Mutex) and its two methods: `Lock` and `Unlock`.

As in the following example, we can define a block of code to be executed in mutual exclusion by surrounding it with a call to `Lock` and `Unlock` as shown on the `Inc` method. We can also use `defer` to ensure the mutex will be unlocked as in the `Value` method.

```go
package main

import (
	"fmt"
	"sync"
	"time"
)

// SafeCounter is safe to use concurrently.
type SafeCounter struct {
	v   map[string]int
	mux sync.Mutex
}

// Inc increments the counter for the given key.
// Without mutex this will lead to 'fatal error: concurrent map writes'
func (c *SafeCounter) Inc(key string) {
	c.mux.Lock()
	c.v[key]++
	c.mux.Unlock()
}

// Value returns the current value of the counter for the given key.
func (c *SafeCounter) Value(key string) int {
	c.mux.Lock()
	defer c.mux.Unlock()
	return c.v[key]
}

func main() {
	c := SafeCounter{v: make(map[string]int)}
	for i := 0; i < 1000; i++ {
		go c.Inc("somekey")
	}
	time.Sleep(time.Second)
	fmt.Println(c.Value("somekey")) // 1000
}
```

Note that all the goroutines will halt when the `main()` function returns. So for example, the following program will be likely to print nothing.

```go
func say(s string) {
	fmt.Println(s)
}

func main() {
	for _, s := range []string{"hello", "world"} {
		go say(s)
	}
}
```

One way to wait for all goroutines to finish is to use `sync.WaitGroup`. In this example, we launched several goroutines and incremented the WaitGroup counter for each. Each goroutine notifies the WaitGroup that it's done on return. `wg.Wait()` will block until the WaitGroup counter goes back to 0, i.e., when all the workers have notified they’re done. Note that a WaitGroup must be passed to functions by pointer.

In theory, this can also be done using channels. Each goroutine sends a `done` signal to a channel on return, and the goroutine caller blocks to consume all the signals before it returns.

```go
func say(s string, wg *sync.WaitGroup) {
	defer wg.Done()
	fmt.Println(s)
}

func main() {
	var wg sync.WaitGroup
	for _, s := range []string{"hello", "world"} {
		wg.Add(1)
		go say(s, &wg)
	}
	wg.Wait()
}
```

