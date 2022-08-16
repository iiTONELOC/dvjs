import sys
import json
import time


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


def cal_time_in_sec(_start_time, _end_time):
    return _end_time - _start_time


def evaluate(func, current_fib_number):
    start_time = time.perf_counter()
    result = str(int(func(current_fib_number)))
    end_time = time.perf_counter()

    time_in_seconds = cal_time_in_sec(start_time, end_time)

    return {"result": result, "time_in_seconds": time_in_seconds.__format__('.36f')}


def main(args=None):  # NOSONAR

    results = {}
    max_fib_number = 1400
    num_of_sample_tests = 2
    sys.setrecursionlimit(1500)
    max_fib_num_for_basic_recursion = 40

    functions = [
        fib_iterative,
        fib_recursive,
        fib_binets_formula,
        fib_recursive_memoized
    ]

    number_in_sequence = args if args else max_fib_number

    for fun in functions:
        function_name = str(fun.__name__)

        if function_name not in results:
            results[function_name] = []

        for _ in range(0, num_of_sample_tests):
            data = None
            if function_name == 'fib_recursive':
                if number_in_sequence <= max_fib_num_for_basic_recursion:
                    data = evaluate(fun, number_in_sequence)
            else:
                data = evaluate(fun, number_in_sequence)

            if data:
                results[function_name].append(data)

    return results


if __name__ == "__main__":
    _args = sys.argv[1:]

    try:
        print(json.dumps(main(int(_args[0])), indent=2))
    except Exception as e:
        print("Error Occurred: {}".format(e))
        print(json.dumps(main(), indent=2))
