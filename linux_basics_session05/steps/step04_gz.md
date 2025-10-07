<script> 
  import Quiz from "$components/Quiz.svelte"; 
  import Execute from "$components/Execute.svelte"; 
</script> 

## Computing sequence length statistic using seqkit

The `seqkit` commands accept FASTA or FASTQ files as input, including their compressed versions (`.gz`). 

A sequence file in FASTA format has been prepared for this session in a directory. 

To start the seqkit tool dicovery, leave your HOME directory in which you are placed at the start of this session and go to the `/shared/projects/tutorial/Data/` directory (use the `cd` command followed by the path to the directory and check that you are in the expected directory with the `pwd` command). Check that it contains a `sacCer3.fa.gz` file (`ls` command).

There is an error here because this file is not compressed. Test this by looking at the beginning of the file with the `head` command:
```bash
head sacCer3.fa.gz
```
The file is indeed human-readable (which would not be the case if it was compressed): it begins with the character `>` followed by a one-line description of the sequence (the header line) that follows in the subsequent lines (this is indeed a file in FASTA format). 

This "error" only affects humans, for whom, by convention, the file name extension indicates its format. 
Bash commands work regardless of the file name extension.

We correct the "error" by changing the file name (`mv`), compressing the file (`gzip`), and checking the begining of the compressed version (`head`) which is no longer readable to us: 
```bash
mv sacCer3.fa.gz sacCer3.fa
gzip sacCer3.fa
head sacCer3.fa.gz
```

In bioinformatics, compressed formats are commonly used due to the amount of data. 
For instance, in this tutorial, the `sacCer3` file contains the complete genome of *Saccharomyces cerevisiae* with the sequences of all its chromosomes.

The `seqkit seq` command allows extracting the headers of the different sequences in a FASTA file (compressed or not).

```bash
seqkit seq -n sacCer3.fa.gz
```

<Quiz id="step4_2" choices={[
         { valid: false, value: "3"},
         { valid: false, value: "12"},
         { valid: true, value: "17"},
         { valid: false, value: "23"},
         { valid: false, value: "34"},
]}>
        <span slot="prompt">
        How many chromosomes does the *Saccharomyces cerevisiae* genome contain?
        </span>
</Quiz>

We may now compute the chromosome length statistics using `seqkit stats` (*e.g* average length, minimal/maximal length, ...).
However, if you run `seqkit stats` without specifying an input, an error occurs. 

```bash
seqkit stats
```

To avoid this, you must either provide a file or provide text stream through standard input (**stdin**) using a pipe:

```bash
seqkit stats sacCer3.fa.gz 
cat sacCer3.fa.gz | seqkit stats 
```

<Quiz id="step4_1" choices={[
         { valid: false, value: "Yes, they are exaclty the same since the same file is given as input."},
         { valid: true, value: "No, because the file name is not included when using redirection, but the computed values remain the same."},
]}>
        <span slot="prompt">
        Are both outputs identical?
        </span>
</Quiz>



