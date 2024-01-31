
"""
Fibonacci

Fibonacci Formula: Fn = Fn - 1 + Fn + -2

"""


def fibonacci_sequence(n):
    """
    Given a n value return fibonacci sequence until value index
    First two values it's 0 and 1
    Example of fibonacci sequence:
    0,1,1,2,3,5,8,13,21
    """
    sequence = [0, 1]
    while len(sequence) <= n:
        sequence.append(sequence[-1] + sequence[-2])
    return sequence[:n]


print(fibonacci_sequence(0))
print(fibonacci_sequence(1))
print(fibonacci_sequence(2))
print(fibonacci_sequence(3))
print(fibonacci_sequence(5))


def fibonacci_value_at_index(index):
    """
    Return value from fibonacci sequence from given index 
    """
    if index <= 1:
        return index
    a, b = 0, 1

    for _ in range(2, index+1):
        a, b = b, a + b
    return b


print(fibonacci_value_at_index(0))
print(fibonacci_value_at_index(1))
print(fibonacci_value_at_index(2))
print(fibonacci_value_at_index(3))
print(fibonacci_value_at_index(5))


def is_fibonacci_number(number):
    """
    Evaluate if a given number belongs to fibonacci sequence
    """
    if number < 0:
        return False
    a, b = 0, 1
    while b < number:
        a, b = b, a+b
    return b == number


print(is_fibonacci_number(0))
print(is_fibonacci_number(1))
print(is_fibonacci_number(5))
print(is_fibonacci_number(10))
print(is_fibonacci_number(23))
