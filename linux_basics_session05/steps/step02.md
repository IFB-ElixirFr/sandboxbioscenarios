<script>
import Quiz from "components/Quiz.svelte";
import Execute from "components/Execute.svelte";
</script>

# The seqkit tool

Among the many bioinformatics tools available, we invite you to explore the `seqkit` tool in this tutorial.  It provides a software suite designed for sequence analysis and can be used to manipulate sequence files, especially those in fasta format.

You can check that the `seqkit` tool is available by using the `which` bash command. This command will return the installation path of the specified tool.

```bash
which seqkit
```

The output of the previous command confirms that seqkit is available for use.


The first step is to check the documentation. The method for accessing documentation varies depending on the software. For some tools, a simple call to the command without any options will display the help section. For others, you may need to use the `-h, --help` or `-help` option. Finally, for most tools, an online help resource will be available to guide you in getting started with the software. For example, the help for seqkit is available at: https://bioinf.shenwei.me/seqkit.

<Quiz id="q1" choices={[
         { valid: true, value: "seqkit -h"},
         { valid: true, value: "seqkit --help"},
         { valid: true, value: "seqkit"},
]}>
        <span slot="prompt">
	Try it in the terminal: How can one access the help section for seqkit?
        </span>
</Quiz>


