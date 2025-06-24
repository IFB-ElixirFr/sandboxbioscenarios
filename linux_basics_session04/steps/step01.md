<script>
import Quiz from "$components/Quiz.svelte";
import Execute from "$components/Execute.svelte";
</script>

## The standard output stream

Now, at the beginning of the chapters you are placed in your personal directory, your HOME. Typically, calculations are performed in a directory other than your HOME directory. For this session, go to the `/shared/projects/tutorial/Data/` directory and check that you are in the expected directory with `pwd`:
```bash
cd /shared/projects/tutorial/Data
pwd
```
The result should be `/shared/projects/tutorial/Data`. This directory should contain 5 files when calling `ls`.

By default, as you've seen so far, the result of a Unix command is printed on the screen. This is the case, for instance, of the `ls` command.

Here are some vocabulary definitions:

📕 the result of a command is also called **output** 

📕 the **st**andar**d** **out**put of a command is named **stdout**.

The following diagram illustrates the output stream of a command:

<img src="/data/linux_basics_session04/stream_out.png" style="max-width:100%" alt="stream_out">

By default, **stdout** is set to the screen.

The `grep` command also output its results to stdout. As an example, we will extract genomic locations related to *gene-SAOUHSC_00079* entry from the *SAOUHSC.bed* file with the `grep` command:

```bash
grep SAOUHSC_00079 SAOUHSC.bed
```

The result of the `grep` command is displayed on the terminal.

## Changing the standard output stream

You can modify this behavior and print ('redirect') **stdout** to a file.
To do so, you need to use the `1>` that can be abbreviated to `>`:

```bash
grep gene-SAOUHSC_00079 SAOUHSC.bed > gene.bed
```

Look, you've created a new file named `gene.bed`

```bash
ls
```

You can view its contents using the `cat` command:

```bash
cat gene.bed
```

The content of this new file is identical to the result of the previous `grep` instruction.

The `>` symbol is one of the **redirection** operators.

The following figure illustrates the **stdout** redirection to a file:

<img src="/data/linux_basics_session04/stream_outfile.png" style="max-width:100%" alt="stream_outfile">

⚠️ if the `ofile` file already exists, it’s contents will be replaced by the output of your instruction.

If you execute the same `grep` instruction as before but search for a different gene, the output file will be overwritten:

```bash
grep gene-SAOUHSC_00078 SAOUHSC.bed > gene.bed
cat gene.bed
```

If you want to store results from both gene in a single file, you may use the `>>` operator, which appends the output of your command to the end of an existing file.

```bash
grep gene-SAOUHSC_00079 SAOUHSC.bed > gene.bed
cat gene.bed
```

```bash
grep gene-SAOUHSC_00078 SAOUHSC.bed >> gene.bed
cat gene.bed
```

<Quiz id="q1" choices={[
         { valid: false, value: "grep foo file01 > file02"},
         { valid: true, value: "grep foo file01 >> file02"},
         { valid: false, value: "grep foo file02 >> file01"},
	 { valid: false, value: "grep file01 file02 > foo"},
]}>
        <span slot="prompt">
	Which command appends its result at the end of the file02 file ?
        </span>
</Quiz>
