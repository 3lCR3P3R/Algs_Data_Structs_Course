def all_fib(n):
    for i in range(n):
        print(f"{i}: {fib(i)}")

def fib(n):
    if n <= 0:
        return 0
    elif n == 1:
        return 1
    return fib(n - 1) + fib(n - 2)

opcion = int(input("Ingresa un numero entero: "))
all_fib(opcion)