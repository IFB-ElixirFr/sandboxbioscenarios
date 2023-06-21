<script>
import Quiz from "components/Quiz.svelte";
</script>
# Manipulating data
In the previous chapters, you learnt how to move around in the Unix filesystem and access files. 
This chapter will show you how to explore the data in those files. 
The commands we’ll use are fairly simple, but are solid building blocks of more sophisticated traitement pipelines.

First, go to the `data` directory with the `cd` command:

``` bash
cd data
```

Check you are in the expected directory with `pwd`:

```bash
pwd
```

The result should be `/root/data`. This directory should contain 5 files you could find with the command `ls`.

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
