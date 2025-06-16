<script>
import Quiz from "$components/Quiz.svelte";
</script>

## *head*

You might sometimes want to check just the beginning of a file.
That is what the `head` command does:

```bash
head SAOUHSC.fasta
```

By default, this command will show you the first 10 lines of a file. 

You can modify the number of lines to display using the _-n_ option:

```bash
head -n 15 SAOUHSC.fasta
``` 

will show you the first 15 lines.

Much used in bioinformatics, the `fasta` format is a text file format used to store sequences regions.
It contains one comment line which begins by the `>` letter for each region. The next lines contain the sequence until the end of file or the next comment line indicating a new region. 

Look at the beginning of the `SAOUHSC.fasta` file:

```bash
head SAOUHSC.fasta
``` 

Display only the first line of the 2 fasta files:

```bash
head -n1 *.fasta
``` 

<Quiz id="q1" choices={[
  { valid: false, value: "the NC_007795.1 identifier is associated to a Clostridioides difficile genome"},
	{ valid: true, value: "the NC_009089.1 identifier is associated to a Clostridioides difficile genome"},
	{ valid: false, value: "the NC_009089.1 identifier is associated to a Staphylococcus aureus genome"},
	{ valid: true, value: "the NC_007795.1 identifier is associated to a Staphylococcus aureus genome"},
]}>
	<span slot="prompt">
		Which statements are corrects?
	</span>
</Quiz>

## *tail*

The `tail` command can be used to check the end of a file:

```bash
tail SAOUHSC.bed
```

as with `head`, use _-n_ to set the number of line to display. 

<Quiz id="qstep04session03" choices={[
	{ valid: false, value: "cds-YP_498677.1"},
	{ valid: false, value: "cds-YP_498678.1"},
	{ valid: false, value: "cds-YP_498679.1"},
	{ valid: true, value: "cds-YP_498680.1"},
]}>
	<span slot="prompt">
		Print the last line of the SAOUHSC.bed file. What is the name of the last CDS ? Choose the right answer:
	</span>
</Quiz>

