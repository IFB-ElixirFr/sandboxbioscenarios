<script>
import Quiz from "components/Quiz.svelte";
</script>

## *head*

You might sometimes want to check just the beginning of a file.
That is what the `head` command does:

```bash
head SAOUHSC.bed
```

By default, this command will show you the first 10 lines of a file. 

You can modify the number of lines to display using the _-n_ option:

```
head -n 15 SAOUHSC.bed
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
		Print the first line of the SAOUHSC.bed file. What is the first value of the third column? Choose the right answer: 
	</span>
</Quiz>

Much used in bioinformatics, the `bed` format is a text file format used to store genomic regions as coordinates and associated annotations.
It contains one annotation by line.

Look at the `SAOUHSC.bed`:

```
head SAOUHSC.bed
``` 

This `*.bed` contains 6 columns: 
 1. the identifier of the genomic region related to the annoation
 2. the start position (in nucleotides) of the annotation
 3. the end position (in nucleotides) of the annotation
 4. the name of the annotation
 5. if existing, a score (by default a point or a 0 value)
 6. the strand of the annotation
