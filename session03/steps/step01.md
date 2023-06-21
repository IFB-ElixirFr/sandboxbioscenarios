<script>
import Quiz from "components/Quiz.svelte";
</script>
# Manipulating data
In the previous chapters, you learnt how to move around in the Unix filesystem and access files. 
This chapter will show you how to explore the data in those files. 
The commands we’ll use are fairly simple, but are solid building blocks of more sophisticated treatment pipelines.

First, go to the `data` directory with the `cd` command:

``` bash
cd data
```

Check you are in the expected directory with `pwd`:

```bash
pwd
```

The result should be `/root/data`. This directory should contain 5 files when calling `ls`.

## Displaying file contents

### *cat*

A first command to display file contents is `cat`:

```bash
cat NC_009089.fasta
```

This command will print the whole content of the _NC_009089.fasta_ file to the screen.


Print the content of the _SAOUHSC.fasta_ file. 

<!--
>> What are the last three nucleotides of the SAOUHSC.fasta file ? <<
(*) CAG
( ) ELE
( ) ATC
( ) BEL
-->

<Quiz id="qbelebele" choices={[
	{ valid: true, value: "ATT"},
	{ valid: false, value: "TTT"},
	{ valid: false, value: "ATC"},
	{ valid: false, value: "GGG"}
]}>
	<span slot="prompt">
		What are the last three nucleotides of the SAOUHSC.fasta file ?
	</span>
</Quiz>

### Note about the tabulation and newline characters

You may look at the content of the SAOUHSC.bed file. 

```bash
cat SAOUHSC.bed
```

You will notice that it contains several lines and columns. 
This `.bed` file is a classical tabulated file. It means that each
column is separated by a `\t` character. This character looks like 
a large space character although it is different. We can display 
any character string using the `echo` command. 

```bash
echo -e "A string with spaces separators"
```

```bash
echo -e "A\tstring\twith\ttabulation\tseparators"
```

Another important character is the `\n` character. 
It is present in almost all files and is displayed
as a **n**ewline.

```bash
echo -e "A\nstring\nsplitted\non\nseveral\nlines"
```

