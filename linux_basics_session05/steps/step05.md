<script> 
  import Quiz from "components/Quiz.svelte"; 
  import Execute from "components/Execute.svelte"; 
</script> 

## Performing statistics by chromosome.

The `seqkit split` command allows splitting a file in various ways.
Using the `-i (--by-id)` argument generates one file per sequence contained in the input FASTA file. 
The `--out-dir` argument specifies the output directory. To create the files in the current directory, we will use '.' as the destination.

```bash
seqkit split --out-dir . --by-id  /shared/bank/saccharomyces_cerevisiae/SacCer3/fasta/sacCer3.fa.gz 
```

As you can see, the `seqkit split` command has generated several compressed FASTA files in the current directory.

```bash
ls *.gz 
```

Now that the chromosome sequences are in individual files, we can generate statistics on these sequences using the `seqkit stats` command.
Note that the `seqkit stats` command includes a -T argument. Using this argument produces tabulated output, which makes it easy to select specific columns using the `cut` command.

```bash
seqkit stats -T *.gz
```

<Quiz id="question1" choices={[
	{ valid: false, value: "seqkit stats *.gz | cut -f 3 | head -n1"},
	{ valid: false, value: "seqkit stats -T *.gz | cut -f 3 | tail -n +2"},
	{ valid: false, value: "seqkit stats -T *.gz | cut -f 4"},
  { valid: false, value: "seqkit stats *.gz | cut -f 4 | tail -n1"},
 	{ valid: true, value: "seqkit stats -T *.gz | cut -f 4 | tail -n +2"},
	{ valid: false, value: "seqkit stats -T *.gz | cut -f 4 | head -n1"},
]}>
	<span slot="prompt">
		How to retrieve only the number of sequences in the genome?
	</span>
 </Quiz>
