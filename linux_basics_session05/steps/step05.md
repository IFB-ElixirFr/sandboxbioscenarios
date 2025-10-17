<script> 
  import Quiz from "$components/Quiz.svelte"; 
  import Execute from "$components/Execute.svelte"; 
</script> 

Using the `seqkit stats` command in the previous step shows the overall statistics for the entire genome. 
Is it possible to obtain statistics for each chromosome, given that the sacCer file contains all their sequences one after the other?

The `seqkit fx2tab` command converts a FASTA or FASTQ file (either compress of uncompressed) into a tabulated format (*i.e* multi-column format). By default, the first column contains the sequence identifier (*i.e.* the FASTA header), while the second holds the sequence itself.

A key advantage of using a tabulated format is the ability to include additional columns with extra information. The `seqkit fx2tab` command offers various options to append statistics such as GC content, nucleotide composition, or average base quality (for FASTQ files).

Check the documentation for `seqkit fx2tab` using the following instruction:

```bash
seqkit fx2tab -h
```

You'll find several useful arguments that can be combined to obtain a comprehensive overview of nucleotide composition in chromosome sequences. For example, the following options can be used to build a call to `seqkit fx2tab`.

- `-n`: displays only the sequence name, omitting the full sequence (which can be very long).
- `-B/--base-content`: calculates the percentage of a specified nucleotide or set of nucleotides. 
- `-l/--length`: computes the length of each sequence. Unlike `seqkit stats`, which provides average statistics, this option outputs the length for each individual sequence.
- `-H/--header-line`: adds an initial header line with column names for better readability.

We can then call `seqkit fx2tab` using these options and providing the `sacCer3.fa.gz` as last argument:

```bash
seqkit fx2tab -H -n -l -B A,C,T,G,GC sacCer3.fa.gz
```

<Quiz id="step5_1" choices={[
         { valid: true, value: "To compute the percentage of G or C nucleotide ?"},
         { valid: false, value: "To compute the percentage of GC dinucleotide ?"},
]}>
        <span slot="prompt">
        What is the objective of `GC` in the previous command ?
        </span>
</Quiz>

In eukaryotic sequences, GC content (percentage of G or C) is commonly analyzed due to its functional significance.
