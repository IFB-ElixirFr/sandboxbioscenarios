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

Notion à évoquer ? différence dans l'aide et l'usage d'un outil selon le domaine d'origine des développeurs, informaticiens ou bio-informaticiens 
