<script> 
  import Quiz from "$components/Quiz.svelte"; 
  import Execute from "$components/Execute.svelte"; 
</script> 

When viewing the help section, it's crucial to focus on the **Usage** section. This section offers a concise overview of how to use the command, highlighting both required and optional arguments. As a convention, items enclosed in brackets `[...]` are optional. For instance, here, `seqkit` can be called without any arguments (as previously shown).

Here, the `[command]` argument  should be replaced with one of the tools proposed subsequently in the **Available Commands** section. One can directly see that `seqkit` offers a large panel of functions including sequence manipulation, format conversion, sequence analysis, and file management. 
This type of bioinformatics tool comprising several associated commands is called a **toolbox**.

The **Flags** section provides a range of additional arguments that are available for all commands. To access the specific arguments for each subcommand, you will need then to call them individually.

For example, the `seqkit stats` command calculates statistics for a sequence. To access the help for this tool, you need to include the `-h` argument:

```bash
seqkit stats -h
```

<Quiz id="step3_1" choices={[
         { valid: false, value: "-t"},
         { valid: true, value: "-T"},
         { valid: false, value: "-O"},
	 { valid: false, value: "-o"},
]}>
        <span slot="prompt">
	Which argument in the `seqkit stats` command enables the generation of a tabulated output?
        </span>
</Quiz>


