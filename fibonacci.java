import java.util.ArrayList;
import java.util.List;
import java.util.stream.Stream;
import java.util.stream.Collectors;

class Fibonacci {
  public static class FibonacciBeforeJava8 {
    public List<Integer> fibonacciSequence(int limit) {
      List<Integer> sequence = new ArrayList<>();
      int a = 0, b = 1;

      while (sequence.size() < limit) {
        sequence.add(a);
        int temp = a;
        a = b;
        b = temp + b;
      }

      return sequence;
    }

    public int fibonacciValueAtIndex(int index) {
      if (index <= 1) {
        return index;
      }

      int a = 0, b = 1;

      for (int i = 2; i <= index; i++) {
        int temp = a;
        a = b;
        b = temp + b;
      }

      return b;
    }

    public boolean isFibonacciNumber(int number) {
      if (number < 2) {
        return false;
      }
      int a = 0, b = 1;

      while (b < number) {
        int temp = a;
        a = b;
        b = temp + b;
      }

      return b == number;

    }

    public int fibonacciValueAtIndexWithRecursion(int index) {
      if (index <= 1) {
        return index;
      }

      return fibonacciValueAtIndexWithRecursion(index - 1) + fibonacciValueAtIndexWithRecursion(index - 2);
    }
  }

  public class FibonacciAfterJava8 {
    public List<Integer> fibonacciSequence(int limit) {
      return Stream.iterate(new int[] { 0, 1 }, f -> new int[] { f[1], f[0] + f[1] })
          .limit(limit)
          .map(f -> f[0])
          .collect(Collectors.toList());
    }

    public int fibonacciValutAtIndex(int index) {
      return Stream.iterate(new int[] { 0, 1 }, f -> new int[] { f[1], f[0] + f[1] })
          .limit(index + 1)
          .skip(index)
          .findFirst()
          .get()[0];
    }

    public boolean isFibonacciNumber(int number) {
      return Stream.iterate(new int[] { 0, 1 }, f -> new int[] { f[1], f[0] + f[1] })
          .map(f -> f[0])
          .anyMatch(f -> f == number);
    }
  }

  public static void main(String[] args) {
  }

}