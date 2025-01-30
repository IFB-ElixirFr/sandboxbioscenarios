<script> 
  import Quiz from "components/Quiz.svelte"; 
  import Execute from "components/Execute.svelte"; 
</script> 

## Computing Sequence Statistics using seqkit

The `seqkit stats` command generates statistics on sequence files. It supports various formats, including FASTA and FASTQ or their compressed version (.gz). 
In bioinformatics, compressed formats are often used because sequences can be very large. In our case, we will work with a complete genome, that of Saccharomyces cerevisiae.

If you run `seqkit stats` without specifying an input, an error occurs. To avoid this, you must either provide a FASTA file or pass the data through standard input (STDIN) using a pipe:

```bash
seqkit stats /shared/bank/saccharomyces_cerevisiae/SacCer3/fasta/sacCer3.fa.gz 
cat /shared/bank/saccharomyces_cerevisiae/SacCer3/fasta/sacCer3.fa.gz | seqkit stats 
```

<Quiz id="step4_1" choices={[
         { valid: false, value: "Yes, they are exaclty the same."},
         { valid: true, value: "No, because the file name is not included when using redirection, but the computed values remain the same."},
]}>
        <span slot="prompt">
        Are both outputs identical?
        </span>
</Quiz>

The seqkit stats command provides overall statistics for all sequences in a given file. In the `sacCer3.fa` file, sequences from different chromosomes are included.

The seqkit seq command allows extracting the headers of the different sequences in a FASTA file.

```bash
seqkit seq -n /shared/bank/saccharomyces_cerevisiae/SacCer3/fasta/sacCer3.fa.gz
```

<Quiz id="step4_2" choices={[
         { valid: false, value: "3"},
         { valid: true, value: "17"},
         { valid: false, value: "12"},
         { valid: false, value: "34"},
         { valid: false, value: "23"},
]}>
        <span slot="prompt">
        How many chromosomes does the Saccharomyces cerevisiae genome contain?
        </span>
</Quiz>

Note that the `grep` command can also be used to find headers in a FASTA file by searching for lines that contain a '>' symbol. 
As the file is compressed, we first need to uncompress it using `gunzip` and send its output to `grep`.

```bash
gunzip -c /shared/bank/saccharomyces_cerevisiae/SacCer3/fasta/sacCer3.fa.gz | grep ">" 
```




