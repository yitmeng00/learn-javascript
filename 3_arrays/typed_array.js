/*
JavaScript typed arrays are array-like objects that provide a mechanism for reading and writing raw binary data in memory buffers.

Typed arrays are not intended to replace arrays for any kind of functionality.
Instead, they provide developers with a familiar interface for manipulating binary data.
This is useful when interacting with platform features, such as audio and video manipulation, access to raw data using WebSockets, and so forth.
Each entry in a JavaScript typed array is a raw binary value in one of a number of supported formats, from 8-bit integers to 64-bit floating-point numbers.

Typed array objects share many of the same methods as arrays with similar semantics.
However, typed arrays are not to be confused with normal arrays, as calling Array.isArray() on a typed array returns false.
Moreover, not all methods available for normal arrays are supported by typed arrays (e.g. push and pop).

To achieve maximum flexibility and efficiency, JavaScript typed arrays split the implementation into buffers and views.
A buffer is an object representing a chunk of data; it has no format to speak of, and offers no mechanism for accessing its contents.
In order to access the memory contained in a buffer, you need to use a view.
A view provides a context — that is, a data type, starting offset, and number of elements.
*/

/*
Buffers

There are two types of buffers: ArrayBuffer and SharedArrayBuffer. Both are low-level representations of a memory span.
They have "array" in their names, but they don't have much to do with arrays — you cannot read or write to them directly.
Instead, buffers are generic objects that just contain raw data. In order to access the memory represented by a buffer, you need to use a view.

Buffers support the following actions:

Allocate: As soon as a new buffer is created, a new memory span is allocated and initialized to 0.

Copy: Using the slice() method, you can efficiently copy a portion of the memory without creating views to manually copy each byte.

Transfer: Using the transfer() and transferToFixedLength() methods, you can transfer ownership of the memory span to a new buffer object.
This is useful when transferring data between different execution contexts without copying. After the transfer, the original buffer is no longer usable.
A SharedArrayBuffer cannot be transferred (as the buffer is already shared by all execution contexts).

Resize: Using the resize() method, you can resize the memory span (either claim more memory space,
as long as it doesn't pass the pre-set maxByteLength limit, or release some memory space).
SharedArrayBuffer can only be grown but not shrunk.

The difference between ArrayBuffer and SharedArrayBuffer is that the former is always owned by a single execution context at a time.
If you pass an ArrayBuffer to a different execution context, it is transferred and the original ArrayBuffer becomes unusable.
This ensures that only one execution context can access the memory at a time.
A SharedArrayBuffer is not transferred when passed to a different execution context, so it can be accessed by multiple execution contexts at the same time.
This may introduce race conditions when multiple threads access the same memory span, so operations such as Atomics methods become useful.
*/

/*
Views

There are currently two main kinds of views: typed array views and DataView.
Typed arrays provide utility methods that allow you to conveniently transform binary data.
DataView is more low-level and allows granular control of how data is accessed. The ways to read and write data using the two views are very different.

Both kinds of views cause ArrayBuffer.isView() to return true. They both have the following properties:

buffer
The underlying buffer that the view references.

byteOffset
The offset, in bytes, of the view from the start of its buffer.

byteLength
The length, in bytes, of the view.

Both constructors accept the above three as separate arguments, although typed array constructors accept length as the number of elements rather than the number of bytes.
*/

// Typed array views
Int8Array;
Uint8Array;
Uint8ClampedArray;
Int16Array;
Uint16Array;
Int32Array;
Uint32Array;
Float32Array;
Float64Array;
BigInt64Array;
BigUint64Array;

const uint8 = new Uint8Array([1, 2, 3]);
console.log(uint8[0]); // 1

// For illustrative purposes only. Not for production code.
uint8[-1] = 0;
uint8[2.5] = 0;
uint8[NaN] = 0;
console.log(Object.keys(uint8)); // ["0", "1", "2"]
console.log(uint8[NaN]); // undefined

// Non-numeric access still works
uint8[true] = 0;
console.log(uint8[true]); // 0

Object.freeze(uint8); // TypeError: Cannot freeze array buffer views with elements

// DataView
// The following example uses a DataView to get the binary representation of any number:
function toBinary(
    x,
    { type = "Float64", littleEndian = false, separator = " ", radix = 16 } = {}
) {
    const bytesNeeded = globalThis[`${type}Array`].BYTES_PER_ELEMENT;
    const dv = new DataView(new ArrayBuffer(bytesNeeded));
    dv[`set${type}`](0, x, littleEndian);
    const bytes = Array.from({ length: bytesNeeded }, (_, i) =>
        dv
            .getUint8(i)
            .toString(radix)
            .padStart(8 / Math.log2(radix), "0")
    );
    return bytes.join(separator);
}

console.log(toBinary(1.1)); // 3f f1 99 99 99 99 99 9a
console.log(toBinary(1.1, { littleEndian: true })); // 9a 99 99 99 99 99 f1 3f
console.log(toBinary(20, { type: "Int8", radix: 2 })); // 00010100

// Using views with buffers
const buffer = new ArrayBuffer(16);

if (buffer.byteLength === 16) {
    console.log("Yes, it's 16 bytes.");
} else {
    console.log("Oh no, it's the wrong size!");
}
