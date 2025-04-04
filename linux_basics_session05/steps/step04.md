<script> 
  import Quiz from "$components/Quiz.svelte"; 
  import Execute from "$components/Execute.svelte"; 
</script> 

## Computing sequence length statistic using seqkit

The `seqkit` commands accept FASTA or FASTQ files as input, including their compressed versions (`.gz`). 

In bioinformatics, compressed formats are commonly used due to the amount of data. For instance, in this tutorial, we will analyze the complete genome of *Saccharomyces cerevisiae*.

In the `sacCer3.fa` file, sequences from the different chromosomes are included.

The `seqkit seq` command allows extracting the headers of the different sequences in a FASTA file.

```bash
seqkit seq -n /shared/bank/saccharomyces_cerevisiae/SacCer3/fasta/sacCer3.fa.gz
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

We may now compute the chromosome length statistics using `seqkit stats` (*e.g* average length, minimal/maximal length).
However, if you run `seqkit stats` without specifying an input, an error occurs. 

```bash
seqkit stats
```

To avoid this, you must either provide a FASTA file or provide text stream through standard input (STDIN) using a pipe:

```bash
seqkit stats /shared/bank/saccharomyces_cerevisiae/SacCer3/fasta/sacCer3.fa.gz 
cat /shared/bank/saccharomyces_cerevisiae/SacCer3/fasta/sacCer3.fa.gz | seqkit stats 
```

<Quiz id="step4_1" choices={[
         { valid: false, value: "Yes, they are exaclty the same since the same file is given as input."},
         { valid: true, value: "No, because the file name is not included when using redirection, but the computed values remain the same."},
]}>
        <span slot="prompt">
        Are both outputs identical?
        </span>
</Quiz>




