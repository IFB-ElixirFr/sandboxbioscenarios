<script>
import Quiz from "components/Quiz.svelte";
import Execute from "components/Execute.svelte";
</script>
By default, as you have seen so far, the result of a Unix command is printed on screen.

As an example, we will extract the genomic location of the *gene-SAOUHSC_00079* entry from the `SAOUHSC.bed` file with the `grep` command :
First, check you have access to the `SAOUHSC.bed` file using the `ls` command and next, extract the location with the following instructions:

<Execute command="ls" />

<Execute command="ls Data" />

<Execute command="cd Data" />

<Execute command="grep SAOUHSC_00079 SAOUHSC.bed" />

The result of the `grep` command is printed on the terminal.

📕 The **st**andar**d** **out**put of a command is named **stdout**.

The following diagram illustrates the output stream of a command:

<img src="/data/ifb-4/stream_out.png" style="max-width:100%" alt="stream_out">

By default, **stdout** is set to the screen.

You can change this behavior and print **stdout** to a file.
To do so, you must use the `1>` that can be shortened as `>`:

<Execute command="grep gene-SAOUHSC_00079 SAOUHSC.bed > gene.bed" />

Look, you have created a new file named `gene.bed`

<Execute command="ls" />

You can look at its content using the `cat` command:

<Execute command="cat gene.bed" />

The content of this new file is just the same as the result of the `grep` command.

The `>` symbol is one of the **redirection** operators.

The next figure illustrates the **stdout** redirection to a file:

<img src="/data/ifb-4/stream_outfile.png" style="max-width:100%" alt="stream_outfile">

⚠️ if the file already exists, it’s content will be replaced by the output of your command.

If you run the same `grep` instruction as before but searching for a different gene, the output file will be overwritten:

<Execute command="grep gene-SAOUHSC_00078 SAOUHSC.bed > gene.bed" />

<Execute command="cat gene.bed" />

If you want to store the two gene locations in a single file, you may use the `>>` operator which appends the output of your command to the end of an existing file.

<Execute command="grep gene-SAOUHSC_00079 SAOUHSC.bed > gene.bed" />

<Execute command="grep gene-SAOUHSC_00078 SAOUHSC.bed >> gene.bed" />

<Execute command="cat gene.bed" />

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
