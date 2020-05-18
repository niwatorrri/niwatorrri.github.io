---
layout: post
title: "Learning Go: Effective Go"
author: "Tori"
header-style: text
comments: true
tags: 
- Computer Science
---

- TOC
{:toc}
This post is largely based on [Effective Go](https://golang.org/doc/effective_go.html).

Go is a new language. Although it borrows ideas from existing languages, it has unusual properties that make effective Go programs different in character from programs written in its relatives. To write Go well, it's important to understand its properties and idioms. It's also important to know the established conventions for programming in Go, such as naming, formatting, program construction, and so on, so that programs you write will be easy for other Go programmers to understand.

## Formatting and Naming Conventions

In Go, we let the machine take care of most formatting issues. The `gofmt` program (also available as `go fmt`, which operates at the package level rather than source file level) reads a Go program and emits the source in a standard style of indentation and vertical alignment, retaining and if necessary reformatting comments. All Go code in the standard packages has been formatted with `gofmt`.

Some formatting details remain. Very briefly:

- Indentation: We use tabs for indentation and `gofmt` emits them by default. Use spaces only if you must.
- Line length: Go has no line length limit. Don't worry about overflowing a punched card. If a line feels too long, wrap it and indent with an extra tab.
- Parentheses: Go needs fewer parentheses than C and Java: control structures (`if`, `for`, `switch`) do not have parentheses in their syntax. Also, the operator precedence hierarchy is shorter and clearer, so `x<<8 + y<<16 ` means what the spacing implies, unlike in the other languages.

Go provides C-style `/* */` block comments and C++-style `//` line comments. Line comments are the norm; block comments appear mostly as package comments.

The program `godoc` processes Go source files to extract documentation about the contents of the package. Every package should have a *package comment*, a block comment preceding the package clause. For multi-file packages, the package comment only needs to be present in one file, and any one will do. The package comment should introduce the package and provide information relevant to the package as a whole. It will appear first on the `godoc` page and should set up the detailed documentation that follows.

```go
/*
Package regexp implements a simple library for regular expressions.

The syntax of the regular expressions accepted is:

    regexp:
        concatenation { '|' concatenation }
    concatenation:
        { closure }
    closure:
        term [ '*' | '+' | '?' ]
    term:
        '^'
        '$'
        '.'
        character
        '[' [ '^' ] character-ranges ']'
        '(' regexp ')'
*/
package regexp
```

Inside a package, any comment immediately preceding a top-level declaration serves as a *doc comment* for that declaration. Every exported (capitalized) name in a program should have a doc comment. Doc comments work best as complete sentences, which allow a wide variety of automated presentations. The first sentence should be a one-sentence summary that starts with the name being declared.

```go
// Compile parses a regular expression and returns, if successful,
// a Regexp that can be used to match against text.
func Compile(str string) (*Regexp, error) {
```

By convention, packages are given lower case, single-word names; there should be no need for underscores or mixedCaps. Another convention is that the package name is the base name of its source directory; the package in `src/encoding/base64` is imported as `"encoding/base64"` but has name `base64`, not `encoding_base64` and not `encodingBase64`. Long names don't automatically make things more readable. A helpful doc comment can often be more valuable than an extra long name.

By convention, one-method interfaces are named by the method name plus an -er suffix or similar modification to construct an agent noun: `Reader`, `Writer`, `Formatter`, `CloseNotifier` etc. Finally, the convention in Go is to use `MixedCaps` or `mixedCaps` rather than underscores to write multiword names.

## Flow Control Statements

The Go `for` loop is similar to—but not the same as—C's. It unifies `for` and `while` and there is no `do-while`. There are three forms, only one of which has semicolons.

```go
// Like a C for
for init; condition; post { }

// Like a C while
for condition { }

// Like a C for(;;)
for { }
```

If you're looping over an array, slice, string, or map, or reading from a channel, a `range` clause can manage the loop. For strings, the `range` does more work for you, breaking out individual Unicode code points by parsing the UTF-8. Erroneous encodings consume one byte and produce the replacement rune U+FFFD.

Go's `switch` is more general than C's. The expressions need not be constants or even integers, the cases are evaluated top to bottom until a match is found, and if the `switch` has no expression it switches on `true`. It's therefore possible—and idiomatic—to write an `if`-`else`-`if`-`else` chain as a `switch`.

```go
func unhex(c byte) byte {
    switch {
    case '0' <= c && c <= '9':
        return c - '0'
    case 'a' <= c && c <= 'f':
        return c - 'a' + 10
    case 'A' <= c && c <= 'F':
        return c - 'A' + 10
    }
    return 0
}
```

`break` statements can be used to terminate a `switch` early. Sometimes, though, it's necessary to break out of a surrounding loop, not the switch, and in Go that can be accomplished by putting a label on the loop and "breaking" to that label.

```go
Loop:
	for n := 0; n < len(src); n += size {
		switch {
		case src[n] < sizeOne:
			if validateOnly {
				break
			}
			size = 1
			update(src[n])

		case src[n] < sizeTwo:
			if n+1 >= len(src) {
				err = errShortInput
				break Loop
			}
			if validateOnly {
				break
			}
			size = 2
			update(src[n] + src[n+1]<<shift)
		}
	}
```

A switch can also be used to discover the dynamic type of an interface variable. Such a *type switch* uses the syntax of a type assertion with the keyword `type` inside the parentheses.

```go
var t interface{}
t = functionOfSomeType()
switch t := t.(type) {
default:
	fmt.Printf("unexpected type %T\n", t)     // %T prints whatever type t has
case bool:
	fmt.Printf("boolean %t\n", t)             // t has type bool
case int:
	fmt.Printf("integer %d\n", t)             // t has type int
case *bool:
	fmt.Printf("pointer to boolean %t\n", *t) // t has type *bool
case *int:
	fmt.Printf("pointer to integer %d\n", *t) // t has type *int
}
```

## Data and Structures

### Allocation

Go has two allocation primitives, the built-in functions `new` and `make`. They do different things and apply to different types. Let's talk about `new` first. It's a built-in function that allocates memory, but it does not *initialize* the memory, it only *zeros* it. That is, `new(T)` returns a pointer (a value of type `*T`) that points to a newly allocated zero value of type `T`.

The built-in function `make(T, args)` serves a different purpose. It creates slices, maps, and channels only, and it returns an *initialized* (not *zeroed*) value of type `T` (not `*T`). `w(T)`. It creates slices, maps, and channels only, and it returns an *initialized* (not *zeroed*) value of type `T` (not `*T`). 

For instance, `make([]int, 10, 100)` allocates an array of 100 ints and then creates a slice structure with length 10 and a capacity of 100 pointing at the first 10 elements of the array. In contrast, `new([]int)` returns a pointer to a newly allocated, zeroed slice structure, that is, a pointer to a `nil` slice value.

### Arrays, Slices and Maps

There are major differences between the ways arrays work in Go and C. In Go,

- Arrays are values. Assigning one array to another copies all the elements.
- In particular, if you pass an array to a function, it will receive a *copy* of the array, not a pointer to it.
- The size of an array is part of its type. The types `[10]int` and `[20]int` are distinct.

The value property can be useful but also expensive; if you want C-like behavior and efficiency, you can pass a pointer to the array. But even this style isn't idiomatic Go. Use slices instead.

Slices hold references to an underlying array. If a function takes a slice argument, changes it makes to the elements of the slice will be visible to the caller, analogous to passing a pointer to the underlying array.

However, if changes are made to the slice *itself* (e.g., re-allocated to a new slice with larger capacity), the new slice must be returned from the function, since the slice itself (the run-time data structure holding the pointer, length, and capacity) is passed by value. An example would be the `Append` function.

```go
func Append(slice, data []byte) []byte {
	l := len(slice)
	if l + len(data) > cap(slice) {  // reallocate
		// Allocate double what's needed, for future growth.
		newSlice := make([]byte, (l+len(data))*2)
		// The copy function is predeclared and works for any slice type.
		copy(newSlice, slice)
		slice = newSlice
	}
	slice = slice[0:l+len(data)]
	copy(slice[l:], data)
	return slice
}
```

Maps are a convenient and powerful built-in data structure that associate values of one type (the *key*) with values of another type. The key can be of any type for which the equality operator is defined, such as integers, floats, complex numbers, strings, pointers, interfaces (as long as the dynamic type supports equality), structs and arrays. Slices cannot be used as map keys.

Like slices, maps hold references to an underlying data structure. If you pass a map to a function that changes the contents of the map, the changes will be visible in the caller.

An attempt to fetch a map value with a key that is not present in the map will return the zero value for the type of the entries in the map. Sometimes you need to distinguish a missing entry from a zero value. You can discriminate with a form of multiple assignment. For obvious reasons this is called the “comma ok” idiom.

```go
func offset(tz string) int {
	if seconds, ok := timeZone[tz]; ok {
		return seconds
	}
	log.Println("unknown time zone:", tz)
	return 0
}
```

### Printing

Formatted printing in Go uses a style similar to C's `printf` family but is richer and more general. The functions live in the `fmt` package and have capitalized names: `fmt.Printf`, `fmt.Fprintf`, `fmt.Sprintf` and so on.

Here things start to diverge from C. First, the numeric formats such as `%d` do not take flags for signedness or size; instead, the printing routines use the type of the argument to decide these properties.

If you just want the default conversion, such as decimal for integers, you can use the catchall format `%v` (for “value”); the result is exactly what `Print` and `Println` would produce. Moreover, that format can print *any* value, even arrays, slices, structs, and maps. When printing a struct, the modified format `%+v` annotates the fields of the structure with their names, and for any value the alternate format `%#v` prints the value in full Go syntax.

```go
type T struct {
	a int
	b float64
	c string
}
t := &T{ 7, -2.35, "abc\tdef" }
fmt.Printf("%v\n", t)         // &{7 -2.35 abc   def}
fmt.Printf("%+v\n", t)        // &{a:7 b:-2.35 c:abc     def}
fmt.Printf("%#v\n", t)        // &main.T{a:7, b:-2.35, c:"abc\tdef"}
fmt.Printf("%#v\n", timeZone) // map[string]int{"CST":-21600, "EST":-18000, "MST":-25200, "PST":-28800, "UTC":0}
```

Another handy format is `%T`, which prints the *type* of a value. If you want to control the default format for a custom type, all that's required is to define a method with the signature `String() string` on the type.

## Methods and Interfaces

The rule about pointers vs. values for receivers is that value methods can be invoked on pointers and values, but pointer methods can only be invoked on pointers. This rule arises because pointer methods can modify the receiver; invoking them on a value would cause the method to receive a copy of the value, so any modifications would be discarded. The language therefore disallows this mistake. 

[Type switches](https://golang.org/doc/effective_go.html#type_switch) are a form of conversion: they take an interface and, for each case in the switch, do something particularly for the type of that case. What if there's only one type we care about? A type assertion takes an interface value and extracts from it a value of the specified explicit type.

But if it turns out that the value does not contain a string, the program will crash with a run-time error. To guard against that, use the "comma, ok" idiom to test, safely, whether the value is of the given type. If the type assertion fails, the value will still exist but it will have the zero value.

```go
str, ok := value.(string)
if ok {
	fmt.Printf("string value is: %q\n", str)
} else {
	fmt.Printf("value is not a string\n")
}
```

Go does not provide the typical, type-driven notion of subclassing, but it does have the ability to “borrow” pieces of an implementation by *embedding* types within a struct or interface. Interface embedding is very simple. We've mentioned the `io.Reader` and `io.Writer` interfaces before; here are their definitions.

```go
type Reader interface {
	Read(p []byte) (n int, err error)
}

type Writer interface {
	Write(p []byte) (n int, err error)
}
```

The `io` package also exports several other interfaces that specify objects that can implement several such methods. For instance, there is `io.ReadWriter`, an interface containing both `Read` and `Write`. We could specify `io.ReadWriter` by listing the two methods explicitly, but it's easier and more evocative to embed the two interfaces to form the new one, like this:

```go
// ReadWriter is the interface that combines the Reader and Writer interfaces.
type ReadWriter interface {
	Reader
	Writer
}
```

This says just what it looks like: A `ReadWriter` can do what a `Reader` does *and* what a `Writer` does; it is a union of the embedded interfaces (which must be disjoint sets of methods). Only interfaces can be embedded within interfaces.

The same basic idea applies to structs, but with more far-reaching implications. The `bufio` package has two struct types, `bufio.Reader` and `bufio.Writer`, each of which of course implements the analogous interfaces from package `io`. And `bufio` also implements a buffered reader/writer, which it does by combining a reader and a writer into one struct using embedding: it lists the types within the struct but does *not* give them field names.

```go
// ReadWriter stores pointers to a Reader and a Writer.
// It implements io.ReadWriter.
type ReadWriter struct {
	*Reader  // *bufio.Reader
	*Writer  // *bufio.Writer
}
```

When we embed a type, the methods of that type become methods of the outer type, but when they are invoked the receiver of the method is the inner type, not the outer one. In our example, when the `Read` method of a `bufio.ReadWriter` is invoked, it has exactly the same effect as a forwarding method; the receiver is the `reader` field of the `ReadWriter`, not the `ReadWriter` itself.

Embedding can also be a simple convenience. This example shows an embedded field alongside a regular, named field. The `Job` type now has the `Print`, `Printf`, `Println` and other methods of `*log.Logger`. If we needed to access the `*log.Logger` of a `Job` variable `job`, we would write `job.Logger`, which would be useful if we wanted to refine the methods of `Logger`.

```go
type Job struct {
	Command string
	*log.Logger
}
```

Embedding types introduces the problem of name conflicts but the rules to resolve them are simple. First, a field or method `X` hides any other item `X` in a more deeply nested part of the type. Second, if the same name appears at the same nesting level, it is usually an error. However, if the duplicate name is never mentioned in the program outside the type definition, it is OK. 

## Concurrency: Channels

Concurrent programming in many environments is made difficult by the subtleties required to implement correct access to shared variables. Go encourages a different approach in which shared values are passed around on channels and, in fact, never actively shared by separate threads of execution. Only one goroutine has access to the value at any given time. Data races cannot occur, by design. 

> Do not communicate by sharing memory; instead, share memory by communicating.

This approach can be taken too far. Reference counts may be best done by putting a mutex around an integer variable, for instance. But as a high-level approach, using channels to control access makes it easier to write clear, correct programs.

A goroutine has a simple model: it is a function executing concurrently with other goroutines in the same address space. It is lightweight, costing little more than the allocation of stack space. And the stacks start small, so they are cheap, and grow by allocating (and freeing) heap storage as required.

Goroutines are multiplexed onto multiple OS threads so if one should block, such as while waiting for I/O, others continue to run. Their design hides many of the complexities of thread creation and management.

**There are lots of nice idioms using channels.** Here's one to get us started. A channel can allow the launching goroutine to wait for the subroutine to complete.

```go
c := make(chan int)  // Allocate a channel
go func() {
	list.Sort()
	c <- 1  // Send a signal; value does not matter.
}()
doSomethingForAWhile()
<-c   // Wait for sort to finish; discard sent value.
```

A buffered channel can be used like a semaphore, for instance to limit throughput. In this example, incoming requests are passed to `handle`, which sends a value into the channel, processes the request, and then receives a value from the channel to ready the “semaphore” for the next consumer. The capacity of the channel buffer limits the number of simultaneous calls to `process`.

```go
var sem = make(chan int, MaxOutstanding)

func handle(r *Request) {
	sem <- 1    // Wait for active queue to drain.
	process(r)  // May take a long time.
	<-sem       // Done; enable next request to run.
}

func Serve(queue chan *Request) {
	for {
		req := <-queue
		go handle(req)  // Don't wait for handle to finish.
	}
}
```

This design has a problem, though: `Serve` creates a new goroutine for every incoming request, and as a result, the program can consume unlimited resources if the requests come in too fast. We can address that deficiency by changing `Serve` to gate the creation of the goroutines. Here's an obvious solution, but beware it has a bug we'll fix subsequently:

```go
func Serve(queue chan *Request) {
    for req := range queue {
        sem <- 1
        go func() {
            process(req) // Buggy; see explanation below.
            <-sem
        }()
    }
}
```

The bug is that in a Go `for` loop, the loop variable is reused for each iteration, so the `req` variable is shared across all goroutines. Here's one way to fix that, passing the value of `req` as an argument to the closure in the goroutine. Another solution is just to create a new variable with the same name, as in `req := req` before `sem <- 1`.

```go
func Serve(queue chan *Request) {
    for req := range queue {
        sem <- 1
        go func(req *Request) {
            process(req)
            <-sem
        }(req)
    }
}
```

One of the most important properties of Go is that a channel is a first-class value that can be allocated and passed around like any other. A common use of this property is to implement safe, parallel demultiplexing.

Here's a schematic definition of type `Request`. The client provides a function and its arguments, as well as a channel inside the request object on which to receive the answer.

```go
type Request struct {
    args        []int
    f           func([]int) int
    resultChan  chan int
}

func sum(a []int) (s int) {
    for _, v := range a {
        s += v
    }
    return
}

request := &Request{[]int{3, 4, 5}, sum, make(chan int)}
// Send request
clientRequests <- request
// Wait for response.
fmt.Printf("answer: %d\n", <-request.resultChan)
```

**Channels for parallelization:** If the calculation can be broken into separate pieces that can execute independently, it can be parallelized, with a channel to signal when each piece completes.

Let's say we have an expensive operation to perform on a vector of items, and that the value of the operation on each item is independent. We launch the pieces independently in a loop, one per CPU. They can complete in any order but it doesn't matter; we just count the completion signals by draining the channel after launching all the goroutines.

```go
type Vector []float64

// Apply the operation to v[i], v[i+1] ... up to v[n-1].
func (v Vector) DoSome(i, n int, u Vector, c chan int) {
    for ; i < n; i++ {
        v[i] += u.Op(v[i])
    }
    c <- 1    // signal that this piece is done
}

const numCPU = runtime.NumCPU() // number of CPU cores

func (v Vector) DoAll(u Vector) {
    c := make(chan int, numCPU)  // Buffering optional but sensible.
    for i := 0; i < numCPU; i++ {
        go v.DoSome(i*len(v)/numCPU, (i+1)*len(v)/numCPU, u, c)
    }
    for i := 0; i < numCPU; i++ {
        <-c    // wait for one task to complete
    }
    // All done.
}
```

## Error Handling

By convention, errors have type `error`, a simple built-in interface.

```go
type error interface {
    Error() string
}
```

A library writer is free to implement this interface with a richer model under the covers, making it possible not only to see the error but also to provide some context. When feasible, error strings should identify their origin, such as by having a prefix naming the operation or package that generated the error.

```go
// PathError records an error and the operation and
// file path that caused it.
type PathError struct {
    Op string    // "open", "unlink", etc.
    Path string  // The associated file.
    Err error    // Returned by the system call.
}

func (e *PathError) Error() string {
    return e.Op + " " + e.Path + ": " + e.Err.Error()
}
```

The usual way to report an error to a caller is to return an `error` as an extra return value. What if the error is unrecoverable? Sometimes the program simply cannot continue. For this purpose, there is a built-in function `panic` that in effect creates a run-time error that will stop the program. The function takes a single argument of arbitrary type—often a string—to be printed as the program dies.

Real library functions should avoid `panic`. If the problem can be masked or worked around, it's always better to let things continue to run rather than taking down the whole program. One possible counterexample is during initialization: if the library truly cannot set itself up, it might be reasonable to panic.

When `panic` is called, it immediately stops execution of the current function and begins unwinding the stack of the goroutine, running any deferred functions along the way. If that unwinding reaches the top of the goroutine's stack, the program dies.

However, it is possible to use the built-in function `recover` to regain control of the goroutine and resume normal execution. A call to `recover` stops the unwinding and returns the argument passed to `panic`. Because the only code that runs while unwinding is inside deferred functions, `recover` is only useful inside deferred functions.

```go
// Error is the type of a parse error; it satisfies the error interface.
type Error string
func (e Error) Error() string {
    return string(e)
}

// error is a method of *Regexp that reports parsing errors by
// panicking with an Error.
func (regexp *Regexp) error(err string) {
    panic(Error(err))
}

// Compile returns a parsed representation of the regular expression.
func Compile(str string) (regexp *Regexp, err error) {
    regexp = new(Regexp)
    // doParse will panic if there is a parse error.
    defer func() {
        if e := recover(); e != nil {
            regexp = nil    // Clear return value.
            err = e.(Error) // Will re-panic if not a parse error.
        }
    }()
    return regexp.doParse(str), nil
}
```

If `doParse` panics, the recovery block will set the return value to `nil`. It will then check, in the assignment to `err`, that the problem was a parse error by asserting that it has the local type `Error`. If it does not, the type assertion will fail, causing a run-time error that continues the stack unwinding as though nothing had interrupted it. This check means that if something unexpected happens, such as an index out of bounds, the code will fail even though we are using `panic` and `recover` to handle parse errors.