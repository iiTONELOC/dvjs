import os
import sys
import json
import time

import utils.files as utils

max_fib_number = 1474
sys.setrecursionlimit(1500)
max_fib_num_for_basic_recursion = 40


def fib_recursive(n):
    """
    Returns the nth Fibonacci number, via recursion.
    """
    if n < 2:
        return n
    else:
        return fib_recursive(n-1) + fib_recursive(n-2)


def fib_recursive_memoized(n, memo={}):
    """
    Returns the nth Fibonacci number, via memoized recursion.
    """

    if n < 2:
        return n
    elif n in memo:
        return memo[n]
    else:
        memo[n] = fib_recursive_memoized(
            n-1, memo) + fib_recursive_memoized(n-2, memo)
        return memo[n]


def fib_iterative(n):
    """
    Returns the nth Fibonacci number, using an iterative approach.
    """
    if n < 2:
        return n
    else:
        a = 0
        b = 1
        for _ in range(2, n+1):
            c = a + b
            a = b
            b = c
        return c


def fib_binets_formula(n):
    """
    Returns the nth Fibonacci number, Using Binet's Formula.
    """
    sqrt_five = 2.23606797749979
    # 1 + sqrt(5) / 2
    first_term = 1.618033988749895
    # 1 - sqrt(5) / 2
    second_term = -0.6180339887498949

    return (1/sqrt_five)*((first_term)**n - (second_term)**n)


def calculate(func, current_fib_number):
    start_time = time.perf_counter()
    result = func(current_fib_number)
    end_time = time.perf_counter()

    time_in_seconds = end_time - start_time

    return {"result": result, "timeInSeconds": time_in_seconds}


def evaluate(func, current_fib_number):
    function_name = str(func.__name__)

    if function_name == 'fib_recursive':
        if current_fib_number <= max_fib_num_for_basic_recursion:
            return calculate(func, current_fib_number)
    else:
        return calculate(func, current_fib_number)


def main(args=None):  # NOSONAR
    results = {}
    functions = [
        fib_iterative,
        fib_recursive,
        fib_binets_formula,
        fib_recursive_memoized
    ]
    number_in_sequence = args if args else max_fib_number
    file_name = os.path.join(
        os.getcwd(), 'data', 'fibonacci', 'python', f"fib-py-{number_in_sequence}.json")

    if not utils.check_if_file_exists(file_name):
        for fun in functions:
            function_name = str(fun.__name__)

            if function_name not in results:
                results[function_name] = []

            for i in range(0, number_in_sequence):
                results[function_name] = results[function_name]\
                    if results[function_name] else []

                data = evaluate(fun, i)

                if data:
                    results[function_name].append(data)

        # Write to file
        return utils.write_to_file(file_name, json.dumps(results))


if __name__ == "__main__":
    _args = sys.argv[1:]

    try:
        main(int(_args[0]))
    except IndexError as e:
        main()
