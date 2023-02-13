<script>
import Quiz from "components/Quiz.svelte";
</script>

### *head*

You might sometimes want to check just the beginning of a file.
That is what the `head` command does:

```bash
head belebele.bed
```

By default, this command will show you the first 10 lines of a file. 

You can modulate the number of lines shown with the option _-n_:

```
head -n 15 belebele.bed
``` 

will show you the first 15 lines.

<Quiz id="q1" choices={[
  { valid: false, value: "1878"},
	{ valid: true, value: "2821361"},
	{ valid: false, value: "3289"},
  { valid: false, value: "6968"},
	{ valid: false, value: "10456"},
]}>
	<span slot="prompt">
		Print the first line of the belebele.bed file. What is the fisrt value of the third column ? Choose the right answer: 
	</span>
</Quiz>
