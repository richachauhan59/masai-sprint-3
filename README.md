# masai-sprint-3

I developed an Quiz application using Open Trivia API.
It takes three input from user:

1: Number of Questions
2: Category of Questions
3: Type of Questions(Multiple choice/ boolean)


It searches via url that adds those user inputs to the search API and fetch the response accordingly.
Used GET method in javascript to get the data from API then parsed it then append elements with required data.
The result Shows the Questions and options.

In options there are two types:
1.Multiple Choice
2.Boolean

For multiple choice there are four options:
If user choose correct answer then the container div will convert into green color
else if the answer is wrong then the conter div will convert into red color.

Similarly for boolean type Questions there are two options TRUE/FALSE:
If user choose correct answer then container div will convert into green color
else into red color