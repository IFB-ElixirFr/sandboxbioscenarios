

<script>
	import Quiz from "components/Quiz.svelte";
	import Execute from "components/Execute.svelte";
</script>

In the previous chapters, you learnt how to move around in the Unix filesystem and access files. 
This chapter will show you how to explore the data contained in these files. 
The commands we’ll be using are fairly simple, but are solid building blocks of more sophisticated treatment pipelines.

Check that you are in the expected directory with `pwd`:

```bash
pwd
```

The result should be `/shared/projects/linux_basics_session03/`. This directory should contain 5 files when calling `ls`.

## Displaying file contents

### *cat*

A first command to display the contents of a file is `cat`:

```bash
cat NC_009089.fasta
```

This command will print the whole contents of the *NC_009089.fasta* file to the screen.


Print the contents of the *SAOUHSC.fasta* file. 

<Quiz id="qbelebele" choices={[
	{ valid: true, value: "CAG"},
	{ valid: false, value: "TTT"},
	{ valid: false, value: "ATC"},
	{ valid: false, value: "GAG"}
]}>
	<span slot="prompt">
		What are the last three nucleotides of the SAOUHSC.fasta file ?
	</span>
</Quiz>

### Note about the tabulation and newline characters

You may look at the contents of the *SAOUHSC.bed* file. 

```bash
cat SAOUHSC.bed
```

You'll notice that it contains several rows and columns. 
This `.bed` file is a classic **tabulated file**. This means that each
column is separated by a `\t` character. This character looks like 
a large space, although it's different. We can display 
any string using the `echo` command. 

Print the two following intructions (one with spaces and one with tabulations). You will
see that they are different.


<Execute command="echo -e 'A string with spaces separators'" />

<Execute command="echo -e 'A\tstring\twith\ttabulation\tseparators'" />

Another important character is the `\n` character. 
It is present in almost all files and is displayed
as a line break (**n**ewline).

<Execute command="echo -e 'A\nstring\nsplitted\non\nseveral\nlines'" />
