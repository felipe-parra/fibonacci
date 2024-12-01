# Fibonacci Series

This a common way to solve a fibonacci series using differents programming languages, like Java, JavaScript & Python.


<div>
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" height="20" alt="java logo"  />
    <span style={{fontSize:"2rem"}}>Java</span>
</div>

```
public class Fibonacci {
    public static int fibonacci(int n) {
        if (n <= 1) return n;
        int a = 0, b = 1;
        for (int i = 2; i <= n; i++) {
            int temp = b;
            b = a + b;
            a = temp;
        }
        return b;
    }

    public static void main(String[] args) {
        int index = 10;
        System.out.println("Fibonacci number at index " + index + " is " + fibonacci(index));
    }
}
```

<div>
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="15" alt="javascript logo"  />
    <span>JavaScript</span>
</div>

```
function fibonacci(n) {
    if (n <= 1) return n;
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        [a, b] = [b, a + b];
    }
    return b;
}

// Example usage:
const index = 10;
console.log(`Fibonacci number at index ${index} is ${fibonacci(index)}`);
```

<div>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" height="15" alt="python logo"  />
    <span>Python</span>
</div>

```
def fibonacci(n):
    if n <= 1:
        return n
    a, b = 0, 1
    for _ in range(2, n + 1):
        a, b = b, a + b
    return b

# Example usage:
index = 10
print(f"Fibonacci number at index {index} is {fibonacci(index)}")
```
