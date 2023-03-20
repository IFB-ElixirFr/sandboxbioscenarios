<script>
import Quiz from "components/Quiz.svelte";
</script>
# Output of a Unix command

By default, as you have seen so far, the result of a Unix command is printed on screen.

As an example, we will extract the genomic location of the *gene-SAOUHSC_00079* entry from the `SAOUHSC.bed` file with the `grep` command :
First, check you have access to the `SAOUHSC.bed` file using the `ls` command and next, extract the location with the following instructions:

```bash
ls
ls data
cd data
grep SAOUHSC_00079 SAOUHSC.bed
```

The result of the `grep` command is printed on the terminal.

📕 The **st**andar**d** **out**put of a command is named **stdout**.

The following diagram illustrates the output stream of a command:

![output printed on the screen](./assets/stream_out.png)

By default, **stdout** is set to the screen.

You can change this behavior and print **stdout** to a file.
To do so, you must use the `1>` that can be shorten as `>`:

```bash
grep gene-SAOUHSC_00079 SAOUHSC.bed > gene.bed
```

Look, you have created a new file named `gene.bed`

```bash
ls
```

You can see its content using the `cat` command:

```bash
cat gene.bed
```

The content of this new file is just the same as the result of the `grep` command.

The `>` symbol is one of the **redirection** operators.

The next figure illustrates the **stdout** redirection to a file:

![output printed into a file](./assets/stream_outfile.png)

⚠️ if the file already exists, it’s content will be replaced by the output of your command.

If you run the same `grep` instruction as before but searching for a different gene, the output file will be overwritten:

```bash
grep gene-SAOUHSC_00078 SAOUHSC.bed > gene.bed
cat gene.bed
```

If you want to store the two gene locations in a single file, you may use the “>>” operator which appends the output of your command to the end of an existing file.

```bash
grep gene-SAOUHSC_00079 SAOUHSC.bed > gene.bed
grep gene-SAOUHSC_00078 SAOUHSC.bed >> gene.bed
cat gene.bed
```
<!--
>> Which command appends its result at the end of the toto file ? <<
( ) grep foo file1 > toto
(*) grep foo file1 >> toto
( ) grep foo toto > file1
-->



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
