# LeetCode

This is a repository to store all of the LC solutions I do. Most solutions will have their Big-O notation and explinations in a comment on the problem. As of current all the solutions will be implemented in JavaScript but in the future I might reapproach with Python or Java.

An important aspect of these excersizes is to be able to understand the space and time complexity of functions and processes. Overall complexity can determined by the analysis of a function. Asymptotic analysis specifically refers to
the overall order of growth of a function (underlying processes determined by n), which is how Big-O notation is determined.

## Asymptote:

noun Mathematics.
A straight line approached by a given curve as one of the variables in the equation of the curve approaches infinity.

## Asymptotic:

adjective Mathematics.

1. of or relating to an asymptote.
2. (of a function) approaching a given value as an expression containing a variable tends to infinity.
3. (of two functions) so defined that their ratio approaches unity as the independent variable approaches a limit or infinity.
4. (of a formula) becoming increasingly exact as a variable approaches a limit, usually infinity.
5. coming into consideration as a variable approaches a limit, usually infinity:

- asymptotic property; asymptotic behavior.

## A model of computation

" Today, computers come in all shapes and sizes, from small wearable devices, to laptop and desktop machines, to massive servers and supercomputers running many CPUs in parallel. Even with one class of devices, there are so many differences in CPU technology that it would be impossible to list them all. Some CPUs have a single core, while many CPUs today come with multiple cores, allowing software to take advantage of asynchronous execution models. Many computers include additional processing units like GPUs (graphics processing units) where some of the work can be offloaded, freeing up the main CPU. And this doesn't even touch on the different memory models, cache pipelines, bus speeds, and other variations and techniques used to provide all the computing power that you may need.

With all this variation, it is very difficult to isolate the efficiency of the algorithm itself.

Rather than depend on the computer's implementation details, it is common to adopt a simplified model of the computer for the purpose of analysis. What is really being measured is the amount of work that is required to execute the algorithm. The fact that a faster computer will do the work faster does not change the fact that the same amount of work is being done.

The computational model that you'll adopt here has the following properties:

It has a single processor and runs the algorithm in a sequential manner. That is, the instructions for the algorithm are executed in the given order, one at a time.
It takes exactly one time unit to execute a standard instruction. A standard instruction is an operation such as addition, subtraction, multiplication, division, comparisons, assignments, and conditional control. No complex multistep instructions (such as sorting) can be done in a single time unit.
It takes the same amount of space to store each value (such as an integer).
It has an infinitely large memory. This assumption frees you from worrying about the space requirements.

Note: A time unit is simply a generic amount of time. Because of variations in the speed of processors, some can execute an instruction in a few nanoseconds, while others may take a few milliseconds to execute the same instruction. Here, focus on how many of the time units are used, rather than the absolute time." - Thinkful Cirriculum 2021

## Big-O

The behavior of a function is often insignificantly more complex than the Big-O notation that is ultimately derived, but I still think it is important to understand the entirety of the analysis.

For example, consider the function below:

```javascript
function sumIntegers(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum = sum + i;
  }
  return sum;
}
```

A strict view of the overall complexity of this equation can be charted as follows:

![chart](/dsa_chart.png)

And the following function can be derived:

`1 + 1 + n + 1 + n + n + 1 = 3n + 4`

But as you consider the steps that aren't determined by `n`, you can see that as `n` grows the other steps become increasingly insignicicant:

| n    | 3n   | 4   | 3n+4 | Contribution of 4 to the value |
| ---- | ---- | --- | ---- | ------------------------------ |
| 1    | 3    | 4   | 7    | 57.00%                         |
| 10   | 30   | 4   | 34   | 11.76%                         |
| 100  | 300  | 4   | 304  | 1.31%                          |
| 1000 | 3000 | 4   | 3004 | 0.013%                         |


So in the end, the "Rate of growth" commonly known as the "Order of growth", is entirely determined by the unknown variables of a function. In this way the variable factors of an equation determine the asymptote ergo the ultimate complexity of any particular function. 