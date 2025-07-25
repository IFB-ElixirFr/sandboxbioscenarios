<script>
import Quiz from "$components/Quiz.svelte";
</script>

## Browse a file interactively
<!---
⚠️ Today, in this course, the less command is not yet supported. We will change this as soon as possible, but in the meantime, read this page and go on to the next one by clicking on the next button at the bottom of the page.
--->
Very often the files you want to read are too large for your screen.
For instance, you have previously displayed the content of the file _SAOUHSC.fasta_ with the `cat` command.

In contrast to `cat`, the `less` command opens a file and and let you browse its content interactively (line by line or page by page): 

```bash
less SAOUHSC.fasta
```

Once inside the `less` program, you can use the following keys to navigate through the file:

- <kbd>⬇️</kbd> or <kbd>Enter</kbd> : go down one line
- <kbd>⬆️</kbd> : go up one line
- <kbd>space</kbd> : go down one page
- <kbd>b</kbd> : go up one page
- <kbd>g</kbd> : go to the beginning of file
- <kbd>Shift</kbd>+<kbd>g</kbd> : go to the end of file

You can also search through the file you opened with `less` by typing <kbd>/</kbd> followed by the characters you want to search and then pressing <kbd>Enter</kbd>. 
The screen will jump to the first occurrence of the searched item which will be highlighted.
Pressing <kbd>n</kbd> will bring you to the **n**ext occurence while pressing <kbd>p</kbd> will bring you to the **p**revious occurence.
To search backwards, you need to use <kbd>?</kbd> instead of <kbd>/</kbd> and then proceed similarly.

Use <kbd>q</kbd> to quit the `less` command.

<Quiz id="q1" choices={[
	{ valid: false, value: "0"},
	{ valid: false, value: "1"},
  { valid: false, value: "2"},
	{ valid: true, value: "3"},
]}>
	<span slot="prompt">
		How many GGT motifs can you find in the file NC_009089.fasta?
	</span>
</Quiz>
